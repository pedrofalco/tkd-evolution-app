<script>
    import "/src/style.css";
    import { page } from '$app/stores';

</script>


<!-- +layout.svelte -->
<div class="text-white h-svh w-full md:w-1/2 flex flex-col font-montserrat uppercase font-semibold mx-auto">
    <nav class="flex justify-between items-center p-4">
        {#if $page.url.pathname !== '/'}
            <a href="./">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                </svg>
            </a>
        {:else}
        <!-- placeholder -->
            <div></div>
        {/if}
        

        <a class="underline underline-offset-2 font-light normal-case text-sm" href={"/menu/about"}>
            About
        </a>
    </nav>
    <main class="flex-grow flex flex-col items-center justify-center">
        <slot/>

        {#if $page.url.pathname !== '/'}
            <img class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 -z-10 opacity-50" src="assets/TE_Logo.png" alt="logo bg">
        {/if}

    </main>

    <p class="text-xs font-extralight normal-case mx-auto p-2">Copyright © 2023 Taekwondo Evolution</p>
</div>
