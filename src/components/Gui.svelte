<script>
        import { onMount } from 'svelte';

        import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min'
        import './gui.css'

        // export let controls;
        export let action;

        
        onMount(async () => {
            
            const gui = new GUI({
                // injectStyles: false
                // position: 'bottom'
            });
            
            gui.title(' ');
            gui.open( false )

            let timeline = 0;
            let myParams = {};
            setTimeout(() => {
                myParams = {
                    'Reset Camara': () => {
                        console.log('Reset Camara!')
                        // console.log()
                        controls.reset();
                    },
                    'Reset Animacion': () => {
                        console.log('Reset Animacion!')
                        console.log(action)
                        
                        action.reset();
                    },
                    'Fullscreen': () => {
                        console.log('Fullscreen!')
                    },
                    'Timeline': action.time
                }
            
            
                gui.add( myParams, 'Reset Camara');
                gui.add( myParams, 'Reset Animacion');
                gui.add( myParams, 'Fullscreen');
                gui.add( myParams, 'Timeline', 0, action._clip.duration, 1);
            }, 2000);

            

        });

</script>

