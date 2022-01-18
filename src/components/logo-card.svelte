<script lang="ts">
  export let imgSrc: string;
  export let name: string;
</script>

<div class="card">
  <img src={imgSrc} alt={name} />
  <h4>{name}</h4>
</div>

<style>
  .card {
    background-color: var(--card-bg);
    border-top: 1px solid #1a1a2d;
    border-left: 1px solid #1a1a2d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    position: relative;
    transition: background-color 0.5s ease;
  }

  .card:hover {
    background-color: var(--card-bg-hover);
  }

  .card:hover img {
    filter: blur(20px);
  }

  .card:hover h4 {
    opacity: 1;
  }

  .card:first-child {
    border-left: none;
  }

  .card:nth-child(-n+3) {
    border-top: none;
  }

  .card:nth-child(3n+1) {
    border-left: none;
  }

  img {
    width: 120px;
    transition: all 0.25s ease;
  }

  .card h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s 0.05s ease;
  }
</style>
