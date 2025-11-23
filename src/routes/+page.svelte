<script>
	import MovieContainer from '$lib/components/MovieContainer.svelte';
	import { Confetti } from 'svelte-confetti';
	import { onMount } from 'svelte';

	let data = $state('');
	let isRight = $state(false);

	onMount(async () => {
		const response = await fetch('/api/movies');
		data = await response.json();
	});

	const reFetchData = async () => {
		const response = await fetch('/api/movies');
		data = await response.json();
	};

	const rightGuess = (score) => {
        const winner = Math.max(data.movies[0].rate, data.movies[1].rate);
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

{#if data}
	<section class="flex justify-center gap-10">
		{#each data.movies as movie}
			<MovieContainer {reFetchData} {rightGuess} data={movie} />
		{/each}
	</section>
{/if}
