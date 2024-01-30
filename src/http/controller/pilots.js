import { listAllPilots } from '../../handlers/pilots/list-all.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export function listAll(req, res) {
    const pilots = listAllPilots()

    if (pilots.type === 'error') {
        return res.status(400).json(pilots.data)
    }

    return res.json(pilots.data)
}
