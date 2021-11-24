<script lang="ts">
  import { portal } from "svelte-portal/src/Portal.svelte"

  import works from '../../config/works.json'

  type WorkType = {
    title: string,
    description: string,
    image: string,
    link: string
  }

  type CurrentImage = {
    image: string,
    x: number,
    y: number
  }

  $: currentHoverImage = {
    image: '',
    x: 0,
    y: 0,
  } as CurrentImage | null

  function setCurrentHoverImage(work?: WorkType, event?):void {
    if (window.innerWidth < 780) {
      return
    }

    const x = event?.pageX
    const y = event?.pageY
    const imageMaxWidth = 320

    if (!work) {
      currentHoverImage = null

      return
    }

    currentHoverImage = {
      image: work?.image,
      x: (x + imageMaxWidth) > window.innerWidth ? x - imageMaxWidth : x,
      y: y - 230
    }
  }
</script>
<div class="container">
  <nav>
    <a href="/" class="logo">
      <img class="image" src="/logo.png" alt="redbeak" />
      <span>redbeak.net</span>
    </a>
  </nav>
  <div class="hero">
    <div>
      <h4 class="highlight">redbeak</h4>
      <p class="hero-text">
        I'm Tamás Kertész, a Frontend Developer based in Finland. I specialize in the
        <span class="font-special text-gradient">development</span>, <span class="font-special text-gradient">design</span>
        and <span class="font-special text-gradient">deployment</span> of web apps.
        By day I work at <span class="font-special"><a href="https://happy-or-not.com" target="_blank" rel="nofollow">HappyOrNot</a></span>,
        and by night I bully pixels at <span class="font-special"><a href="https://auka.co" target="_blank" rel="nofollow">Auka.co</a></span>.
      </p>
    </div>
  </div>
  <div>
    <ul class="works">
      <h3 class="mute">Works</h3>
      <div class="toast" use:portal={"body"} hidden>
        {#if currentHoverImage}
          <img
            class="work-overlay"
            src={currentHoverImage?.image}
            alt=""
            style={`left: ${currentHoverImage?.x}px; top:${currentHoverImage?.y}px` }
          />
          {/if}
      </div>
      {#each works as work}
        <li
          class="work-entry"
          on:mousemove={event => setCurrentHoverImage(work, event)}
          on:mouseleave={() => setCurrentHoverImage(null)}
          on:focus={event => setCurrentHoverImage(work, event)}
        >
          <h2>
            {work.title}
          </h2>
          <p>{work.description}</p>
          <a class="work-link" href={work.link}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </li>
      {/each}
      </ul>
  </div>
  <div class="tools">
    <h3 class="mute">Tools</h3>
    <p>Some of the tools I use on a daily basis</p>
    <div class="tools">
      <span>Next.js, Typescript, Gatsby, React, Svelte, Supabase, MongoDB, Vercel, Netlify, Insomnia, VScode</span>
    </div>
  </div>
</div>

<style >
  .container {
    max-width: 980px;
    margin: 0 auto;
    position: relative;
  }

  .container::before {
    content: '';
    position: absolute;
    top: -300px;
    right: 0;
    background-color: #810c4c;
    width: 320px;
    height: 320px;
    border-radius: 48px;
    filter: blur(280px);
  }

  .image {
    max-width: 100%;
    height: auto;
  }

  nav {
    margin: 2em 0;
  }

  .logo {
    display: inline-block;
    width: 72px;
  }

  .logo span {
    font-size: 0;
  }

  .hero {
    height: 50vh;
    display: flex;
    align-items: center;
    margin-bottom: 10em;
  }

  .hero p {
    line-height: 1.6;
    font-size: clamp(2rem, -0.875rem + 8.333vw, 3.2rem);
  }

  .hero span.font-special {
    line-height: 1.1;
    font-size: clamp(3.1rem, -0.875rem + 8.333vw, 4rem);;
  }

  .works {
    margin: 6em 0;
    list-style: none;
    padding: 0;
    counter-reset: work;
  }

  .works h3,
  .tools h3 {
    margin-bottom: 1em;
  }

  .work-entry {
    margin: 0;
    padding: 1.2em 0;
    border-bottom: 1px solid var(--link-color);
    position: relative;
  }

  .work-entry:hover {
    color: var(--link-color);
    cursor: default;
  }

  .work-entry:active {
    box-shadow: var(--focus);
  }

  .work-entry::after {
    counter-increment: work;
    content: "0" counter(work) ".";
    position: absolute;
    top: 50%;
    left: -2em;
    transform: translateY(-50%);
    font-size: 3.2rem;
    color: var(--link-color);
    opacity: 0.12;
  }

  .work-entry p {
    font-size: 1.6rem;
    color: var(--link-color);
    opacity: 0.5;
    line-height: 1.5;
    max-width: 80%;
  }

  .work-entry h2 {
    font-weight: normal;
  }

  .work-overlay {
    position: absolute;
    max-width: 320px;
    z-index: 1000;
  }

  .work-link {
    display: inline-block;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    right: 2em;
    transform: translateY(-50%);
    padding: 0.8em;
    border: 1px solid;
    border-radius: 64px;
    overflow: hidden;
  }

  .work-link svg:last-child {
    left: -20%;
  }

  .work-link:hover svg:first-child {
   left: 200%;
  }

  .work-link:hover svg:last-child {
    left: 50%;
  }

  .work-link svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.25s ease-in-out;
  }

  .tools {
    margin-bottom: 4em;
  }

  .tools span {
    font-size: 1.6rem;
    margin-right: 0.5em;
    line-height: 1.8;
  }

  .tools p {
    margin-bottom: 2em;
    font-size: 1.7rem;
    color: var(--link-color);
  }

  @media screen and (max-width: 748px) {
    .hero {
      display: block;
      height: 100%;
      margin-bottom: 1em;
    }

    .hero p {

    }
  }
</style>

