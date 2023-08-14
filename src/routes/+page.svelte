
<script>
    import '/src/components/global.css';
    import { goto } from '$app/navigation';

    const link = (route) => {
       goto(route);
    };
</script>

<!-- <p>Tae Kwon Do Evolution</p> -->
<!-- <p>Evolution</p> -->

<p id="footer">Copyrigth</p>
<p id="about">About</p>

<div class="background"></div>

<div class="buttons">
    <button type="button" class="btn" on:click={() => link('./menu')}>Entrenar</button>
    <!-- <button type="button" class="btn" on:click={() => link('./menu/galeria')}>Galeria</button>
    <button type="button" class="btn" on:click={() => link('./menu/about')}>Quienes somos</button> -->
</div>

<style>

    .background {
        position: absolute;
        width: 100%;
        height: 50%;
        transform: translate(0, -70%);
        /* background-color: #dc4c64; */
        background-image: url('/assets/TE_Logo.png');
        opacity: 90%;
        background-size: 90%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .buttons {
        position: absolute;
        top: 70%;
        left: 50%;
        width: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    .btn{
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #fff;
    color: #dc4c64;
    /* background-color: #dc4c64; */
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