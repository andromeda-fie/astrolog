import { db } from '../../config/database.js'
import { createPilot } from '../../handlers/pilots/create.js'
import { findPilotById } from '../../handlers/pilots/find-by-id.js'
import { listAllPilots } from '../../handlers/pilots/list-all.js'
import { removePilot } from '../../handlers/pilots/remove.js'
import { updatePilot } from '../../handlers/pilots/update.js'
import { HttpStatus } from '../constants/http-status.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function listAll(req, res) {
    const pilots = await listAllPilots(db)
	
    if (pilots.type === 'error') {
        return res.status(HttpStatus.BAD_REQUEST).json(pilots.data)
    }

    return res.status(HttpStatus.OK).json(pilots.data)
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function findById(req, res) {
    const pilot = findPilotById(req.params.id)

    if (pilot.type === 'error') {
        return res.status(HttpStatus.BAD_REQUEST).json(pilot.data)
    }

    return res.status(HttpStatus.OK).json(pilot.data)
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function create(req, res) {
    // TODO: add body validation
    const pilot = createPilot(req.body)

    if (pilot.type === 'error') {
        return res.status(HttpStatus.BAD_REQUEST).json(pilot.data)
    }

    return res.status(HttpStatus.CREATED).json(pilot.data)
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function update(req, res) {
    // TODO: add body validation
    const pilot = updatePilot(req.params.id, req.body)

    if (pilot.type === 'error') {
        return res.status(HttpStatus.BAD_REQUEST).json(pilot.data)
    }

    return res.status(HttpStatus.OK).json(pilot.data)
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function remove(req, res) {
    const pilot = removePilot(req.params.id)

    if (pilot.type === 'error') {
        return res.status(HttpStatus.BAD_REQUEST).json(pilot.data)
    }

    return res.status(HttpStatus.NO_CONTENT).send()
}
