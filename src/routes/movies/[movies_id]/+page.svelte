<script>
    let { data } = $props();
</script>

<a href="/movies">Back</a>

{#if data.movie}
    <h1 class="mt-3">{data.movie.title}</h1>

    <div class="row mt-4">
        <div class="col-md-4">
            <img
                class="img-fluid rounded"
                src={data.movie.poster}
                alt={data.movie.title}
            />
        </div>

        <div class="col-md-8">
            <p><strong>Jahr:</strong> {data.movie.year}</p>
            <p><strong>Dauer:</strong> {data.movie.length}</p>

            {#if data.movie.actors && data.movie.actors.length > 0}
                <p><strong>Schauspieler:</strong></p>
                <ul>
                    {#each data.movie.actors as actor}
                        <li>{actor}</li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
{:else}
    <p>Film nicht gefunden.</p>
{/if}
