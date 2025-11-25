<script>
	import MovieContainer from '$lib/components/MovieContainer.svelte';
	import { Confetti } from 'svelte-confetti';

	let { data } = $props();

	let movies = $state(data.movies);
	let isRight = $state(false);

	const reFetchData = async () => {
		const response = await fetch('/api/movies');
		const result = await response.json();
		movies = result.movies;
		
	};

	const rightGuess = (score) => {
        const winner = Math.max(movies[0].rate, movies[1].rate);
        isRight = winner === score 
    };
</script>

{#if isRight}
	<div
		style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[500, 2000]}
			amount="200"
			fallDistance="100vh"
            infinite
		/>
	</div>
{/if}

{#if movies}
	<section class="flex justify-center gap-10">
		{#each movies as movie}
			<MovieContainer {reFetchData} {rightGuess} data={movie} />
		{/each}
	</section>
{/if}
