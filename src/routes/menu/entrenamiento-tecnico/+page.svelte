<script>
    import '/src/components/global.css';
    import { goto } from '$app/navigation';

    const link = (route) => {
       goto(route);
    };
</script>

<p on:click={() => link('./')}><i class="arrow left"></i></p>
<div class="buttons">
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/formas')}>Formas</button>
    <button type="button" class="btn" on:click={() => link('./entrenamiento-tecnico/tecnicas-basicas')}>Técnicas Básicas</button>
</div>
<div class="background"></div>
<p id="footer">Copyrigth</p>
<p id="about">About</p>

<style>

    p {
        font-size: 40px;
        /* font-weight: 500; */
        letter-spacing: 0;
        margin-top: 35px;
    }
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