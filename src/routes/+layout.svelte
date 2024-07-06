<script>
  export let data;
</script>

<style>
  header {
    padding: 15px;
    background-color: #2C3E50;
    color: white;
    text-align: center;
  }
  nav a {
    margin: 0 15px;
    color: #ECF0F1;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
    color: #E74C3C;
  }
  footer {
    padding: 10px;
    background-color: #2C3E50;
    color: white;
    text-align: center;
  }
  main {
    padding: 20px;
  }
</style>

<header>
  <h1>Urvatullo Atoev</h1>
  <nav>
    <a href="/">About Me</a>
    <a href="/photos">Photos</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>© 2024 Urvatullo Atoev</p>
</footer>
