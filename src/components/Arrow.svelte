<script>
    import { goto } from '$app/navigation';
    const link = (route) => {
       goto(route);
    };
</script>

<button on:click={() => link('./')} class="arrow left"></button>

<style>
/* MOBILE */
@media (max-width: 768px) {
    button {
        background-color: transparent;
        position: fixed;
        top: 5%;
        left: 15%;
        border: solid white;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
}
}
/* DESKTOP */
@media (min-width: 768px) {
    button {
        background-color: transparent;
        position: fixed;
        top: 5%;
        left: 35%;
        border: solid white;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        cursor: pointer;
    }
}
</style>