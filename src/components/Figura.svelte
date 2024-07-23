<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
    import screenfull from 'screenfull';

    // TEXT
    let title = ['CHON-JI', 'DAN-GUN', 'DO-SAN', 'WON-HYO', 'YUL-GOK', 'JOONG-GUN', 'TOI-GYE', 'HWA-RANG', 'CHOONG-MOO', 'KWANG-GAE', 'PO-EUN', 'GE-BAEK'];
    
    let description = [
        '19 movimientos. Posición "L" 9, 11, 13, 15',
        '21 movimientos. Puños altos 2, 4, 6, 7, 8, 10, 12, 19, 21. Moción "continua" 13, 14',
        '24 movimientos. Patada "frontal" 14, 18. Moción "rápida" 15, 16, 19, 20. Posición "sentado" 23, 24',
        'Posición de inicio pies juntos "A". Posición "L repartida" 3, 6, 15, 18. Posición "preparatoria" 7, 25. Patada "lateral" 8, 26',
        'Moción "natural" 1, 4, 15, 18. Moción "conectada" 16, 17, 19, 20. Salto en "longitud" 36. Posición "X" 36.',
        'Posición de inicio pies juntos "B". Posición "L corta" 3, 6. Posición "caminar baja" 27, 29. Moción "lenta" 27, 29, 30. Posición "pies juntos" 30.',
        'Pisotón 13, 14, 15, 16, 17, 18. Salto "en altura" 29.',
        'Empujé 1. Desliz "largo" 6. Posición "L vertical" 7. Patada "circular" (moción rápida) 18, 19.',
        'Patada "de costado saltando en tijera" 9. Patada "con giro hacia atrás" (moción rápida) 15. Bloqueo de chequeo 27.',
        'Posición de inicio con manos hacia el cielo. Patadas "de costado consecutivas" 13, 14, 17, 18. Deslíz corto 25, 29.',
        'Posición "a un pie con pierna extendida" 2, 20.',
        'Patada "hacia afuera" 2. Patada "lateral con salto" 22'
    ];
    
    // MANAGE JS DATA
    export let figura;
    
    // MANAGE THREE.JS DATA
    let canvas, container;
    let renderer;
    let mixer;
    let action;
    let controls;
    let model;
    let loaded = false;
    let loading = true; // Initial loading state
    let fullscreen = false;
    onMount(() => {

        const aspectRatioHeight = 4;
        const aspectRatioWidth = 3;
        
        const windowWidth = container.clientWidth;
        const windowHeight = container.clientHeight;
        const ratio = aspectRatioWidth / aspectRatioHeight;

        const minDimension = Math.min(windowWidth, windowHeight);
        const canvasWidth = (minDimension * aspectRatioHeight / aspectRatioWidth > windowHeight) ? windowHeight * ratio : minDimension;
        const canvasHeight = canvasWidth / ratio;

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(canvasWidth, canvasHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        renderer.outputColorSpace = THREE.SRGBColorSpace;        
 
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        const clock = new THREE.Clock();
        
        const manager = new THREE.LoadingManager();
        
        manager.onLoad = function () {
            loading = false;
        };

        const loader = new GLTFLoader(manager);
        const dLoader = new DRACOLoader();
        dLoader.setDecoderPath('/draco/');
        dLoader.setDecoderConfig({ type: 'js' });
        loader.setDRACOLoader(dLoader);
        loader.load('/assets/test_competidor_04_compress.glb', gltf => {
            model = gltf.scene;
            scene.add(model);
            
            model.traverse((child) => {
                if (child.isMesh) {
                    child.material.side = THREE.DoubleSide;
                }
            });
            
            mixer = new THREE.AnimationMixer(model);
            const animations = gltf.animations;
            action = mixer.clipAction(animations[figura]);
            action.play();
            
            loaded = true;
        });
        
        const camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
        camera.position.set(0, 1, 3);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1, 0);
        controls.update();

        const directionalLight1 = new THREE.DirectionalLight(0xBED8ED, 0.35);
        directionalLight1.position.set(0, 5, 0);
        
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight2.position.set(2, 2, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
        
        scene.add(directionalLight1, directionalLight2,ambientLight);
        
        renderer.render(scene, camera);
        
        const animate = () => {
            const delta = clock.getDelta();
            requestAnimationFrame(animate);

            if (loaded) {   
                if (controls) {
                    // if (model) {

                    // }
                    // console.log(model.position)
                    // controls.target.set(model.position.x, 0, 0);
                    // controls.update();
                }
                mixer.update(delta);
                renderer.render(scene, camera);
            }
        };

        animate();
        
        onresize = () => {
            const aspectRatioHeight = 4;
            const aspectRatioWidth = 3;
            
            const windowWidth = container.clientWidth;
            const windowHeight = container.clientHeight;
            const ratio = aspectRatioWidth / aspectRatioHeight;

            const minDimension = Math.min(windowWidth, windowHeight);
            const canvasWidth = (minDimension * aspectRatioHeight / aspectRatioWidth > windowHeight) ? windowHeight * ratio : minDimension;
            const canvasHeight = canvasWidth / ratio;

            renderer.setSize(canvasWidth, canvasHeight);
            camera.aspect = canvasWidth / canvasHeight;
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            camera.updateProjectionMatrix();
        };

        canvas.ondblclick = () => {
            toggleFullscreen()
        }        
    });
    const toggleFullscreen = () => {
        fullscreen = !fullscreen;
        if (screenfull.isEnabled) {
    		screenfull.request(canvas);
        }
    }

</script>

<!-- Centered Container -->
<div bind:this={container} class="flex flex-col items-center justify-center gap-10 md:w-full h-full mx-4">
    <p class="text-3xl font-semibold text-center">{title[figura]}</p>
    <div class="relative">
        <!-- <button on:click={toggleFullscreen} class="absolute right-0 bottom-0 text-black">
            {#if fullscreen}
            <img src="/fullscreen-exit.svg" alt="fullscreen">
            {:else}
            <img src="/fullscreen.svg" alt="fullscreen">
            {/if}
        </button> -->
        <canvas bind:this={canvas} class="w-full rounded-sm"></canvas>
    </div>
    <p class="text-center text-sm">{description[figura]}</p>

    <div class="flex items-center justify-between w-full gap-2 mb-4">
        <button class="flex-1 bg-slate-200 text-red-700 px-2 py-1 font-medium rounded-full" on:click={()=> controls.reset()} >Reset Camara</button>
        <button class="flex-1 bg-slate-200 text-red-700 px-2 py-1 font-medium rounded-full" on:click={()=> action.reset()}>Reset Figura</button>
    </div>
    
</div>

{#if loading}
    <div class="bg-tkd fixed inset-0 flex flex-col items-center justify-center gap-6 z-50">
        <img class="animate-spin-slow w-28" src="/assets/TE_Logo.png" alt="">
        <p class="text-sm font-normal">Cargando...</p>
    </div>
{/if}