<script>
	const { data, reFetchData, rightGuess } = $props();
	const year = data.release_date.split('-')[0];

</script>

<div on:click={() => {reFetchData(); rightGuess(data.rate)}}
	style="background-image: url('{data.img_url}')"
	class="flex text-center justify-center items-center text-2xl text-red-500 shadow-2xl shadow-gray-500 cursor-pointer w-full h-[550px] bg-cover bg-center p-0 hover:opacity-95"
>
   <div class="bg-gray-900 p-2"><p>{data.title} ({year})</p> 
    <p>{data.rate} / 10</p>
</div>
</div>
