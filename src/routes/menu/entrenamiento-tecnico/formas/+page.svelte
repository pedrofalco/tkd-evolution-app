<script>
    let formas = [
        {
            nombre: 'CHON JI',
            path: '00-chon-ji'
        },
        {
            nombre: 'DAN GUN',
            path: '01-dan-gun'
        },
        {
            nombre: 'DO SAN',
            path: '02-do-san'
        },
        {
            nombre: 'WON HYO',
            path: '03-won-hyo'
        },
        {
            nombre: 'YUL GOK',
            path: '04-yul-gok'
        },
        {
            nombre: 'JOONG GUN',
            path: '05-joong-gun'
        },
        {
            nombre: 'TOI GYE',
            path: '06-tooi-gye'
        },
        {
            nombre: 'HWA RANG',
            path: '07-hwa-rang'
        },
        {
            nombre: 'CHOONG MOO',
            path: '08-choong-moo'
        },
        {
            nombre: 'KWANG GAE',
            path: '09-kwang-gae'
        },
        {
            nombre: 'PO EUM',
            path: '10-po-eum'
        },
        {
            nombre: 'GE BAEK',
            path: '11-ge-baek'
        }
    ]
</script>

<div class="flex flex-col gap-3">
    {#each formas as { nombre, path }}
        <a class="btn" href={`/menu/entrenamiento-tecnico/formas/${path}`}>{nombre}</a>
    {/each}
</div>

