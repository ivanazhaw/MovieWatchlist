<script>
    import MovieCard from "$lib/components/MovieCard.svelte";

    let { data } = $props();
</script>

<h1 class="mb-4">Movies</h1>
<p>Daten und Bilder generiert mit ChatGPT und pollo.ai</p>

<a href="/movies/create" class="btn btn-primary mb-4">Add New Movie</a>

<div class="row g-4">
    {#each data.movies as movie}
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <MovieCard {movie} />
        </div>
    {/each}
</div>
