<script>
    import { goto } from '$app/navigation';
    const link = (route) => {
       goto(route);
    };
</script>

<p on:click={() => link('/menu/about')}>About</p>

<style>
@media (max-width: 768px) {
    p {
        font-size: 10px;
        font-weight: normal;
        position: fixed;
        top: 0;
        right: 15%;
        text-decoration: underline;
    }
}

@media (min-width: 768px) {
    p {
        font-size: 15px;
        font-weight: normal;
        position: fixed;
        top: 10px;
        right: 35%;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>

