<script>
  import githubImg from '$lib/photos/GitHub.svg.png';
  import telegramImg from '$lib/photos/Telegram.webp';
  import facebookImg from '$lib/photos/fb_icon_325x325.png';
  import instagramImg from '$lib/photos/Instagram_logo_2022.svg.webp';
</script>

<style>
  .photos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .photos img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
  }
</style>

<div class="photos">
  <img src={githubImg} alt="GitHub">
  <img src={telegramImg} alt="Telegram">
  <img src={facebookImg} alt="Facebook">
  <img src={instagramImg} alt="Instagram">
</div>
