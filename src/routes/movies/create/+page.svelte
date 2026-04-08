<script>
    let { form } = $props();
</script>

<a href="/movies">Back</a>

<h1 class="mt-3 mb-4">Add a Movie</h1>

<form method="POST" action="?/create">
    <div class="mb-3">
        <label class="form-label">Name</label>
        <input
            name="title"
            class="form-control"
            type="text"
            required
        />
    </div>

    <div class="mb-3">
        <label class="form-label">Year</label>
        <input
            name="year"
            class="form-control"
            type="number"
            required
        />
    </div>

    <div class="mb-3">
        <label class="form-label">Length</label>
        <input
            name="length"
            class="form-control"
            type="text"
            placeholder="114 Minuten"
            required
        />
    </div>

    <button type="submit" class="btn btn-primary">Add Movie</button>
</form>

{#if form?.success}
    <p class="mt-3">Movie created.</p>
{/if}