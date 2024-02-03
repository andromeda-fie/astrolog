/**
 * @param {import('@supabase/postgrest-js').PostgrestClient} db
 * @returns {Promise<import('../../types/result.d.ts').Result>}
 */
export async function listAllPilots(db) {
    const pilots = await db.from('teste.pilots').select()

    console.log(pilots.data)

    return { type: 'ok', data: [] }
}
