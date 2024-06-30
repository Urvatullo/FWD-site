import dayjs from 'dayjs';

interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

async function fetchComic(): Promise<Comic> {
  const response = await fetch('https://xkcd.com/info.0.json');
  const data = await response.json();
  return data;
}

function displayComic(comic: Comic) {
  const titleElement = document.getElementById('comic-title');
  const imgElement = document.getElementById('comic-img') as HTMLImageElement;
  const altElement = document.getElementById('comic-alt');
  const dateElement = document.getElementById('comic-date');

  if (titleElement) titleElement.textContent = comic.title;
  if (imgElement) {
    imgElement.src = comic.img;
    imgElement.alt = comic.alt;
  }
  if (altElement) altElement.textContent = comic.alt;
  if (dateElement) dateElement.textContent = dayjs(`${comic.year}-${comic.month}-${comic.day}`).format('MMMM D, YYYY');
}

document.addEventListener('DOMContentLoaded', async () => {
  const comic = await fetchComic();
  displayComic(comic);
});
