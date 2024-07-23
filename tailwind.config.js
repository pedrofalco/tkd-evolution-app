/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
            tkd: '#0D1624', // Add your custom color here
        },
        animation: {
        'spin-slow': 'spin 5s linear infinite',
        },
        fontFamily: {
            'montserrat':
                "montserrat, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        },
      }
    },
    plugins: []
  };