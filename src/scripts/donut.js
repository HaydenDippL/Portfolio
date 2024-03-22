import { render } from "react-dom"

function coord_equal(a, b) {
    const tolerance = 1e-2
    return Math.abs(a.x - b.x) < tolerance && Math.abs(a.y - b.y) < tolerance && Math.abs(a.z - b.z) < tolerance
}

function sub(a, b) {
    return {x: a.x - b.x, y: a.y - b.y, z: a.z - b.z}
}

function add(a, b) {
    return {x: a.x + b.x, y: a.y + b.y, z: a.z + b.z}
}

function dot(a, b) {
    return {x: a.x * b.x, y: a.y * b.y, z: a.z * b.z}
}

function normalize(p) {
    const magnitude = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z)
    return {x: p.x / magnitude, y: p.y / magnitude, z: p.z / magnitude};
}

function rotate(p, matrix) {
    return {
        x: p.x * matrix[0].x + p.y * matrix[1].x + p.z * matrix[2].x,
        y: p.x * matrix[0].y + p.y * matrix[1].y + p.z * matrix[2].y,
        z: p.x * matrix[0].z + p.y * matrix[1].z + p.z * matrix[2].z,
    }
}

// MODIFY
const FPS = 20
const R = 4.0
const r = 2.2
const WINDOW_WIDTH_CHAR = 61
const WINDOW_HEIGHT_CHAR = 31
const light = {x: 0.0, y: 5.0, z: -15.0}
const view = {x: 0.0, y: 0.0, z: -10.0}

// DO NOT MODIFY
const RAYS_PER_UNIT_X = 4
const RAYS_PER_UNIT_Y = 2
const WINDOW_HEIGHT = 2.5 * (R + r)
const WINDOW_WIDTH = 2.5 * (R + r)

const _4R2 = 4 * R * R
const R2_minus_r2 = R * R - r * r
// (x^2 + y^2 + z^2 + R^2 + r^2)^2 -4R^2 * (x^2 + y^2) <= 0
function point_inside_donut(p) {
    const x2_plus_y2 = p.x * p.x + p.y * p.y
    const inside_sq = (x2_plus_y2 + p.z * p.z + R2_minus_r2)
    return inside_sq * inside_sq - _4R2 * x2_plus_y2 <= 0.0
}

const jump = 0.1
const jump_jump = 0.01
const R_plus_r = R + r
const _R_minus_r = -R_plus_r
const _r = -r
function vector_intersects_donut(loc, dir) {
    // r(t) = loc + dir * t
    // x = loc.x + dir.x * t
    // y = loc.y + dir.y * t
    // z = loc.z + dir.z * t
    let t1 = Infinity, t2 = Infinity

    function min2(t) {
        if (t < t1) {
            t2 = t1
            t1 = t
        } else if (t < t2) {
            t2 = t
        }
    }

    let temp, x, y, z
    if (dir.x != 0) {
        temp = (R_plus_r - loc.x) / dir.x
        y = loc.y + dir.y * temp, z = loc.z + dir.z * temp
        if (y <= R_plus_r && y >= _R_minus_r && z <= r && z >= _r)
            min2(temp)
        temp = (_R_minus_r - loc.x) / dir.x
        y = loc.y + dir.y * temp, z = loc.z + dir.z * temp
        if (y <= R_plus_r && y >= _R_minus_r && z <= r && z >= _r)
            min2(temp)
    } if (dir.y != 0) {
        temp = (R_plus_r - loc.y) / dir.y
        x = loc.x + dir.x * temp, z = loc.z + dir.z * temp
        if (x <= R_plus_r && x >= _R_minus_r && z <= r && z >= _r)
            min2(temp)
        temp = (_R_minus_r - loc.y) / dir.y
        x = loc.x + dir.x * temp, z = loc.z + dir.z * temp
        if (x <= R_plus_r && x >= _R_minus_r && z <= r && z >= _r)
            min2(temp)
    } if (dir.z != 0) {
        temp = (r - loc.z) / dir.z
        x = loc.x + dir.x * temp, y = loc.y + dir.y * temp
        if (x <= R_plus_r && x >= _R_minus_r && y <= R_plus_r && y >= _R_minus_r)
            min2(temp)
        temp = (_r - loc.z) / dir.z
        x = loc.x + dir.x * temp, y = loc.y + dir.y * temp
        if (x <= R_plus_r && x >= _R_minus_r && y <= R_plus_r && y >= _R_minus_r)
            min2(temp)
    }

    let t = t1

    while (t < t2 && !point_inside_donut({x: loc.x + dir.x * t, y: loc.y + dir.y * t, z: loc.z + dir.z * t})) {
        t += jump
    } if (t >= t2) {
        return {x: Infinity, y: Infinity, z: Infinity}
    } while (point_inside_donut({x: loc.x + dir.x * t, y: loc.y + dir.y * t, z: loc.z + dir.z * t})) {
        t -= jump_jump
    }

    return {x: loc.x + dir.x * t, y: loc.y + dir.y * t, z: loc.z + dir.z * t}
}

const R2 = R * R
const _1_over_2_PI = 1.0 * Math.PI / 2.0
const _3_over_2_PI = 3.0 * Math.PI / 2.0
const _2PI = 2.0 * Math.PI
// https://web.cs.ucdavis.edu/~amenta/s12/findnorm.pdf
function get_normal(p) {
    const phi = Math.atan2(p.y, p.x)
    let div = p.z / r
    if (div > 1.0) div = 1.0
    else if (div < -1.0) div = -1.0
    let theta = Math.asin(div)
    const upper = p.z > 0
    const right = p.x * p.x + p.y * p.y > R2
    if (p.z == 0.0 && right) theta = 0.0
    else if (p.z == r) theta = _1_over_2_PI
    else if (p.z == 0.0 && !right) theta = Math.PI
    else if (p.z == _r) theta = _3_over_2_PI
    else if (upper && right) theta = theta
    else if (upper && !right) theta = Math.PI - theta
    else if (!upper && !right) theta = Math.PI - theta
    else theta = _2PI + theta

    const tx = -Math.sin(phi)
    const ty = Math.cos(phi)
    const tz = 0.0
    const sx = Math.cos(phi) * -Math.sin(theta)
    const sy = Math.sin(phi) * -Math.sin(theta)
    const sz = Math.cos(theta)
    const nx = ty * sz - tz * sy
    const ny = tz * sx - tx * sz
    const nz = tx * sy - ty * sx

    return normalize({x: nx, y: ny, z: nz})
}

// cos(theta) = a.dot(b) / (magnitude(a) * magnitude(b))
// requires two normalized vectors
function angle_between_vectors(a, b) {
    return Math.acos(-a.x * b.x - a.y * b.y - a.z * b.z)
}

const light_chars = ".,-~:;=!*#$@"
const scale = 90.0 / (light_chars.length - 0.1)
function light_to_char(angle_degrees) {
    if (angle_degrees >= 90.0) return '.'
    const index = Math.floor((90.0 - angle_degrees) / scale)
    return light_chars[index]
}

const x_min = -7 // Math.floor(-WINDOW_WIDTH_CHAR / (2.0 * RAYS_PER_UNIT_X))
const x_max = -x_min
const y_min = -7 // Math.floor(-WINDOW_HEIGHT_CHAR / (2.0 * RAYS_PER_UNIT_Y))
const y_max = -y_min
const x_inc = 1.0 / RAYS_PER_UNIT_X
const y_inc = 1.0 / RAYS_PER_UNIT_Y
const to_degrees = 180.0 / Math.PI
const total_chars = WINDOW_HEIGHT_CHAR * (WINDOW_WIDTH_CHAR + 1)
function render_ascii_donut(A, B, C) {
    const cosA = Math.cos(A)
    const sinA = Math.sin(A)
    const cosB = Math.cos(B)
    const sinB = Math.sin(B)
    const cosC = Math.cos(C)
    const sinC = Math.sin(C)

    const rotation_matrix = [
        {x: cosB * cosC, y: sinA * sinB * cosC - cosA * sinC, z: cosA * sinB * cosC + sinA * sinC},
        {x: cosB * sinC, y: sinA * sinB * sinC + cosA * cosC, z: cosA * sinB * sinC - sinA * cosC},
        {x: -sinB, y: sinA * cosB, z: cosA * cosB}
    ]

    const light_rotated = rotate(light, rotation_matrix)
    const view_rotated = rotate(view, rotation_matrix)
    const view_dir_rotated = normalize({x: -view_rotated.x, y: -view_rotated.y, z: -view_rotated.z})

    let buffer = new Array(total_chars)
    let i = 0;
    for (let y = y_max; y >= y_min; y -= y_inc) {
        for (let x = x_min; x <= x_max; x += x_inc) {
            const view_loc_rotated = rotate({x: x, y: y, z: view.z}, rotation_matrix)
            
            const view_intersect_point = vector_intersects_donut(view_loc_rotated, view_dir_rotated)
            const vector_is_intersecting_donut = view_intersect_point.z != Infinity
            if (!vector_is_intersecting_donut) {
                buffer[i++] = ' '
                continue
            }

            const light_dir_to_donut = normalize(sub(view_intersect_point, light_rotated))
            const light_intersect_point = vector_intersects_donut(light_rotated, light_dir_to_donut)
            if (!coord_equal(light_intersect_point, view_intersect_point)) {
                buffer[i++] = '.'
                continue
            }

            const normal = get_normal(view_intersect_point)
            const angle_degrees = angle_between_vectors(normal, light_dir_to_donut) * to_degrees
            buffer[i++] = light_to_char(angle_degrees)
        } buffer[i++] = '\n'
    } return buffer.join('')
}

async function animate_donut() {
    const ms_in_frame = 1000.0 / FPS
    const inc_yaw = 6.0 * Math.PI / 180.0
    const inc_pitch = 2.5 * Math.PI / 180.0
    const inc_roll = 0.0 * Math.PI / 180.0
    
    let yaw = 0.0
    let pitch = 0.0
    let roll = 0.0

    while (true) {
        const start_frame_ms = Date.now()
        const donut = render_ascii_donut(yaw, pitch, roll)
        const end_render_ms = Date.now()

        const render_time_ms = end_render_ms - start_frame_ms
        const sleep_time_ms = ms_in_frame - render_time_ms

        if (sleep_time_ms > 0) await new Promise(resolve => setTimeout(resolve, sleep_time_ms))

        console.clear()
        console.log(donut)

        yaw += inc_yaw;
        pitch += inc_pitch;
        roll += inc_roll;
        if (yaw > _2PI) yaw -= _2PI;
        if (pitch > _2PI) pitch -= _2PI;
        if (roll > _2PI) roll -= _2PI;
    }
}

// animate_donut()

export default render_ascii_donut