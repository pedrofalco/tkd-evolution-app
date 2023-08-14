<script>
    import '/src/components/global.css';
    import { goto } from '$app/navigation';

    const link = (route) => {
       goto(route);
    };
</script>

<p>Formas</p>

<div class="buttons">
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/00-chon-ji')}>CHON JI</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/01-dan-gun')}>DAN GUN</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/02-do-san')}>DO SAN</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/03-won-hyo')}>WON HYO</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/04-yul-gok')}>YUL GOK</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/05-joong-gun')}>JOONG GUN</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/06-toi-gye')}>TOI GYE</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/07-hwa-rang')}>HWA RANG</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas/08-choong-moo')}>CHOONG MOO</button>
</div>


<style>
    p {
        font-size: 40px;
        font-weight: 600;
        letter-spacing: 0;
        margin-top: 35px;
    }
    .buttons {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -40%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    .btn{
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    color: #285192;
    /* background-color: #dc4c64; */
    /* background-color: #e3ebf7; */
    background-color: #e3ebf7;
    padding: 10px 40px;
    border: solid #e3ebf7 1px;
    /* box-shadow: 0px 2px 12px -2px black; */
    border-radius: 50px;
    /* display: flex; */
    /* flex-direction: row; */
    /* align-items: center; */
    cursor: pointer;
    margin: 10px;
    transition : 0ms;

    /* text-transform: lowercase; */
    }
    
    .btn:hover{
    
    transition : 0ms;
    padding: 10px 39px;
    transform : translateY(-0px);
    background-color: #fff;
    color: #0066cc;
    border: none;
    }
</style>