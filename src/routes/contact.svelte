<script>
  import githubImg from '$lib/photos/GitHub.svg.png';
  import telegramImg from '$lib/photos/Telegram.webp';
  import facebookImg from '$lib/photos/fb_icon_325x325.png';
  import instagramImg from '$lib/photos/Instagram_logo_2022.svg.webp';
</script>

<style>
  .contact {
    text-align: center;
  }
  .social-media a {
    margin: 0 15px;
    display: inline-block;
  }
  .social-media img {
    width: 50px;
    border-radius: 50%;
  }
</style>

<div class="contact">
  <h2>Contact Me</h2>
  <p>Feel free to reach out to me via email at <a href="mailto:u.atoev@innopolis.university">u.atoev@innopolis.university</a> or connect with me on social media.</p>
  <div class="social-media">
    <a href="https://github.com/Urvatullo" target="_blank">
      <img src={githubImg} alt="GitHub">
    </a>
    <a href="https://t.me/urvatullo_atoev" target="_blank">
      <img src={telegramImg} alt="Telegram">
    </a>
    <a href="https://www.facebook.com/urvatullo.atoev.16?mibextid=kFxxJD" target="_blank">
      <img src={facebookImg} alt="Facebook">
    </a>
    <a href="https://www.instagram.com/urvatullo_atoev/" target="_blank">
      <img src={instagramImg} alt="Instagram">
    </a>
  </div>
</div>
