<script>
  import config from '../../config/site.json'
  const message = `
    Nothing interesting here,
    you should turn around and stop looking at my markup.
    I hacked this together in a couple of hours.
  `
  console.log(`%c ${message}`, 'background: aquamarine; color: darkgreen;')
</script>

<svelte:head>
  <title>{config.meta.title}</title>
  <meta name="description" content={config.meta.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=Work+Sans:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<slot />

<style global>
  :root {
    --page-bg: #112;
    --font-color: #fff;
    --link-color: #cca5f5;
    --font-family: 'Work Sans', sans-serif;
    --font-special: 'Cormorant Garamond', serif;
    --base-font-size: 1.4rem;
    --red: #F31D1D;
    --focus: 0 0 0 2px a6eaff;
    --bp-xl: "max-width: 960px";
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  a:hover {
    color: #a6eaff;
  }

  a:focus {
    box-shadow: var(--focus);
  }

  body {
    background-color: var(--page-bg);
    font-size: var(--base-font-size);
    font-family: var(--font-family);
    color: var(--font-color);
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1 {
    font-size: calc(var(--base-font-size) * 3.21);
  }

  h2 {
    font-size: calc(var(--base-font-size) * 2.83);
  }

  h3 {
    font-size: calc(var(--base-font-size) * 2.18);
  }

  h4 {
    font-size: calc(var(--base-font-size) * 1.92);
  }

  h1.highlight,
  h2.highlight,
  h3.highlight,
  h4.highlight {
    color: var(--red);
  }

  h1.mute,
  h2.mute,
  h3.mute,
  h4.mute {
    color: #3e3d5c;
  }

  .font-special {
    font-family: var(--font-special);
    font-weight: 300;
    font-style: italic;
  }

  .text-gradient {
    background: linear-gradient(to left, var(--red), #f21f1d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 986px) {
    body {
      margin: 0 2em;
    }
  }
</style>
