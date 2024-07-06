<script>
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';

  let comic = {
    month: '',
    num: 0,
    link: '',
    year: '',
    news: '',
    safe_title: '',
    transcript: '',
    alt: '',
    img: '',
    title: '',
    day: ''
  };

  async function fetchComic() {
    const response = await fetch('https://xkcd.com/info.0.json');
    comic = await response.json();
  }

  onMount(() => {
    fetchComic();
  });
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .comic img {
    max-width: 100%;
    height: auto;
  }
</style>

<div class="container">
  <div class="comic">
    <h1>{comic.title}</h1>
    <img src={comic.img} alt={comic.alt}>
    <p>{comic.alt}</p>
    <p>{dayjs(`${comic.year}-${comic.month}-${comic.day}`).format('MMMM D, YYYY')}</p>
  </div>
</div>
