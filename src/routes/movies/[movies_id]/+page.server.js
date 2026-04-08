import db from "$lib/db.js";

export async function load({ params }) {
    return {
        movie: await db.getMovie(params.movies_id)
    };
}