<script>
	import favicon from '$lib/assets/favicon.svg';
	import LogoutButton from '$lib/components/LogoutButton.svelte';

	let { children, data } = $props();

	const user = $derived(data.user);
	import '../app.css';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav class="flex w-100vh bg-green-600 mb-4 p-2 pl-12 pr-12 justify-between items-center">
		{#if user}
			<p>Welcome back, **{user.email}**!</p>
			<LogoutButton/>
		{:else}
			<a class="bg-red-100 rounded-lg p-2" href="/login">Login</a>
			<a class="bg-red-400 rounded-lg p-2" href="/register">Register</a>
		{/if}
	</nav>
</header>
{@render children()}
