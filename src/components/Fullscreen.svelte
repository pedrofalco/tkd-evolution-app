<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
    import '/src/components/global.css';
    import { goto } from '$app/navigation';
	import ArrowFull from './ArrowFull.svelte';
    import UIFull from './UiFull.svelte';


    //MANAGE JS DATA
    export let figura;

    //MANAGE THREE.JS DATA
    let container;
    let renderer;
    let mixer;
    let action;
    let controls;
    let body;
    
    onMount(async () => {
        
        let ratio = 9 / 16;
        let width = Math.floor(window.innerHeight * ratio);
        let height = Math.floor(window.innerHeight);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( width, height );
        renderer.domElement.id = 'three-canvas';

        let canvas = renderer.domElement;
        canvas.style.height = '100%';
        canvas.style.width = '100%';
        canvas.position = 'absolute';
        canvas.display = 'block';
        
        container.appendChild(canvas);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xffffff );
        let clock = new THREE.Clock();

        const loader = new GLTFLoader();
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        const dLoader = new DRACOLoader();
        dLoader.setDecoderPath( 'https://www.gstatic.com/draco/versioned/decoders/1.5.6/' );
        dLoader.setDecoderConfig( { type: 'js' } );
        loader.setDRACOLoader( dLoader );
        let model = await loader.loadAsync( '../../../../assets/test_competidor_04_compress.glb')
        const gltf = await model;

        const camera = new THREE.PerspectiveCamera( 65, ratio, 0.1, 1000 );
        controls = new OrbitControls( camera, renderer.domElement );
        camera.position.set( 0, 1, 3 );
        camera.position.y = 1;
        controls.update();
        controls.saveState();
        
        const point_light = new THREE.PointLight( 0xBED8ED, 0.35);
        point_light.position.set( 0, 5, 0 );
        
        const directional_light = new THREE.DirectionalLight( 0xffffff, 1 );
        directional_light.position.set( 2, 2, 0 );
        
        scene.add(point_light, directional_light);

        mixer = new THREE.AnimationMixer( gltf.scene );
        action = mixer.clipAction( gltf.animations[figura] );
        action.play();

        body = gltf.scene;
        body.position.y = -1;    
    
        scene.add( gltf.scene );
        renderer.render( scene, camera );
        
        const animate = () => {
            let delta = clock.getDelta();
            requestAnimationFrame( animate );
            
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

</script>
<Loading/>
<ArrowFull/>
<UIFull controls={controls} action={action} />

<div id="container" bind:this={container} />

<style>
    :global(body) {
        margin: 0px;
    }
</style>

