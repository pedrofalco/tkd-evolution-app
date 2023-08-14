<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

    // TEXT
    let title = ['CHON-JI', 'DAN-GUN', 'DO-SAN', 'WON-HYO', 'YUL-GOK', 'JOONG-GUN', 'TOI-GYE', 'HWA-RANG', 'CHOONG-MOO'];
    let description = [
        'Posición de caminar, posición "L", moción normal',
        'Moción contínua, puños altos.',
        'Posición jinete, moción rápida,patada frontal, balance, traslación de peso.',
        'Posición "L" larga, posición a una pierna, patada lateral.',
        'Posición "X", moción natural, moción conectada, salto en longitud.',
        'Posición "L" corta, posición de pies juntos, moción lente, cambios de posición en el lugar.',
        'Pisotón o stamping, salto en altura.',
        'Posición "L" vertical, desliz largo, patada circular.',
        'Patada lateral en tijera, giro patada hacia atrás.'
    ]

    //MANAGE JS DATA
    export let figura;

    //MANAGE THREE.JS DATA
    let container;
    let renderer;
    let mixer;
    let controls;
    
    onMount(async () => {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight );
        
        let canvas = renderer.domElement;
        canvas.style.height = '80%';
        canvas.style.width = '80%';
        canvas.style.margin = '10px';
        canvas.style.borderRadius = "15px";

        container.appendChild(canvas);

        const loader = new GLTFLoader();
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const dLoader = new DRACOLoader();
        dLoader.setDecoderPath( 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/' );
        dLoader.setDecoderConfig( { type: 'js' } );
        loader.setDRACOLoader( dLoader );

        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0x0F0F0F );

        let clock = new THREE.Clock();

        const camera = new THREE.PerspectiveCamera( 65,  600  * 9/16  / 600, 0.1, 1000 );
        controls = new OrbitControls( camera, renderer.domElement );
        camera.position.set( 0, 0, 5 );
        camera.position.y = 0;
        controls.update();
        controls.saveState();

        // const light = new THREE.AmbientLight( 0xffffff ); // soft white light
        const point_light = new THREE.PointLight( 0xBED8ED, 0.5);
        point_light.position.set( 0, 5, 0 );

        const directional_light = new THREE.DirectionalLight( 0xffffff, 1 );
        directional_light.position.set( 2, 2, 0 );
        
        scene.add(point_light, directional_light);

        // const sphereSize = 0.5;
        // const pointLightHelper = new THREE.PointLightHelper( directional_light, sphereSize );
        // scene.add( pointLightHelper );

        loader.load( '../../../assets/test_competidor_02_tex.glb', (gltf) => {
            mixer = new THREE.AnimationMixer( gltf.scene );
            let action = mixer.clipAction( gltf.animations[figura] );
            action.play();

            // console.log(gltf.animations)
            
            let body = gltf.scene;
            body.position.x = -0.1;
            body.position.y = -1;

            scene.add( gltf.scene );
            renderer.render( scene, camera );
        }, undefined, function ( error ) {
            console.error( error );
        });

        const animate = () => {
            requestAnimationFrame( animate );
            let delta = clock.getDelta();
            if ( mixer ) mixer.update( delta );
            renderer.render( scene, camera );
        };

        const resize = () => {
          renderer.setSize(window.innerWidth, window.innerHeight)
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        };

        animate();
        window.addEventListener('resize', resize);
    });

    const onKeyDown = (e) => {
        switch(e.keyCode) {
            case 82:
                controls.reset();            
            break;
        }
    }
</script>
<p>{title[figura]}</p>
<p class="description">{description[figura]}</p>
<svelte:window on:keydown|preventDefault={onKeyDown} />
<div id="container" bind:this={container} />


<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    :global(body) { 
        background-color: #4884D7;
        display: flex;
        flex-direction: column;
    }

    p {
        color: #1A1A1A;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: auto;
        margin-right: auto;
    }

    p.description {
        font-size: 12px;
    }

    div#container { 
        /* background-color: pink; */
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }        
</style>