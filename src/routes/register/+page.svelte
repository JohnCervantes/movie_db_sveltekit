<script>
	import { enhance } from '$app/forms';

	const { form } = $props();
</script>

<section class="flex flex-col items-center h-screen justify-center bg-gray-50">
	<div>
		{#if form}
			{#if form.error}
				<p style="color: red;">Error: {form.error}</p>
			{:else if form.success}
				<p style="color: green;">{form.message}</p>
			{/if}
		{/if}
	</div>
	<form
		class="flex flex-col bg-white shadow-lg shadow-gray-400 rounded-lg w-[300px] h-[350px] gap-4 p-4 m-4"
		method="POST"
		action="/auth?/register"
		use:enhance
	>
		<label>
			Email
			<input
				placeholder="abc@yahoo.com"
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				name="email"
				type="email"
			/>
		</label>
		<label>
			Password
			<input
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
				name="password"
				type="password"
			/>
		</label>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="submit">register</button
		>
	</form>
</section>
