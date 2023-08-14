
<script>
    import '/src/components/global.css';
    import {onMount} from 'svelte';
    import { goto } from '$app/navigation';

    let image1, image2, image3;

    const link = (route) => {
       goto(route);
    };

    onMount(() => {
        image1 = '/assets/placeholder-cover.png';
        image2 = '/assets/placeholder-cover1.png';
        image3 = '/assets/placeholder-cover2.png';
    });
</script>

<!-- <p id="subtitulo">La mejor forma de entrenar</p> -->


<!-- <p id="subtitulo">Entrenamiento Deportivo</p> -->
<!-- <img src={image1} alt="entrenamiento deportivo" on:click={() => link('./menu/entrenamiento-deportivo')} > -->
<!-- <p id="subtitulo">Entrenamiento Tecnico</p> -->
<!-- <img src={image2} alt="entrenamiento tecnico" on:click={() => link('./menu/entrenamiento-tecnico')} > -->
<!-- <p id="subtitulo">Galeria</p> -->
<!-- <img src={image3} alt="galeria" on:click={() => link('./menu/galeria')}> -->

<div class="buttons">
  <button type="button" class="btn" on:click={() => link('./menu/entrenamiento-tecnico')}>Entrenamiento Técnico</button>
  <button type="button" class="btn" on:click={() => link('./menu/entrenamiento-deportivo')}>Entrenamiento Deportivo</button>
  <button type="button" class="btn" on:click={() => link('./menu/galeria')}>Galería</button>
</div>

<div class="background"></div>

<p on:click={() => link('./')}><i class="arrow left"></i></p>
<p id="footer">Copyrigth</p>
<p id="about">About</p>

<style>

  .buttons {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 75%;
      transform: translate(-50%, -70%);
      display: flex;
      flex-direction: column;
      align-items: center;
  }
 
  .btn{
  
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  color: #C1272D;
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
  width: 100%;

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

