<script>
    let { movie } = $props();
</script>

<div class="card h-100">
    <img class="card-img-top" src={movie.poster} alt={movie.title} />
    <div class="card-body">
        <h5 class="card-title">
            <a href={`/movies/${movie._id}`}>{movie.title}</a>
        </h5>
        <p class="card-text">Jahr: {movie.year}</p>
        <p class="card-text">Dauer: {movie.length}</p>
    </div>
</div>


