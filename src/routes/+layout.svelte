<script>
	let { children } = $props();
	import "./styles.css";
</script>

<nav class="navbar navbar-dark bg-dark">
	<div class="container-fluid">
		<div class="d-flex align-items-center gap-3">
			<a class="navbar-brand mb-0" href="/">ScreenStack</a>
			<a class="text-white text-decoration-none" href="/movies">Movies</a>
		</div>
	</div>
</nav>

<div class="container mt-4">
	{@render children()}
</div>
