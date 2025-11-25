<script>
    import { enhance } from '$app/forms';
</script>

<form method="POST" action="/logout?">
    <button 
        type="submit" 
        class="bg-red-200 rounded-lg p-2 cursor-pointer" 
        use:enhance
    >
        Log Out
    </button>
</form>