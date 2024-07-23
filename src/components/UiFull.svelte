<script>
    import { goto } from '$app/navigation';
    export let controls, action;

    const link = (route) => {
        goto(route);
    };

</script>

<div class="buttons">
    <button class="btn" on:click={()=> controls.reset()} >Reset Camara</button>
    <button class="btn" on:click={()=> action.reset()}>Reset Figura</button>
</div>

<style>

@media (max-width: 768px) {
    .buttons {
        position: absolute;
        height: 5%;
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
        top: auto;
        bottom: 3%;  
    }
    
    .btn{  
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        font-weight: 500;
        color: #fff;
        color: #C1272D;
        background-color: #e3ebf7;
        padding: 5px;
        border: solid #e3ebf7 1px;
        border-radius: 50px;
        cursor: pointer;
        margin: 2px;
        transition : 0ms;
        width: 100%;
    }
}
@media (min-width: 768px) {
    .buttons {
        position: absolute;
        height: 5%;
        width: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
        top: auto;
        bottom: 3%;  
    }
    
    .btn{  
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        color: #C1272D;
        background-color: #e3ebf7;
        padding: 5px;
        border: solid #e3ebf7 1px;
        border-radius: 50px;
        cursor: pointer;
        margin: 2px;
        transition : 0ms;
        width: 100%;
    }
}

</style>