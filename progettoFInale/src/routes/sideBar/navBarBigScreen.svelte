<script>
  import { albumsToShow, showUsers } from "../store";
  export let albums;
  import logo from "$lib/imgs/logo.png";
  function setAlbum(album) {
    albumsToShow.set(album);
    showUsers.set(false)
  }
  function toggleUsers() {
    showUsers.set(true);
    albumsToShow.set()
  }
</script>

<div>
  <div class="logo-container">
    <img src={logo} alt="" class="logo" />
    <h4>LOGO</h4>
  </div>
  <h5 class="text-center mt-2">GALLERIA</h5>
  <ul class="nav flex-column nav-pills">
    {#each albums as album, i}
      <li class="nav-item">
        <button
          on:click={() => setAlbum(album)}
          class="btn nav-item btn-primary mt-1 text-start btn-primary nav-link"
        >
          <i class="fa fa-file" style="font-size:24px;color:black" />
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="" aria-current="page" href="#">Album {i + 1}</a>
        </button>
      </li>
    {/each}
    <li class="nav-item">
      <button
        on:click={() => toggleUsers()}
        class="btn nav-item btn-primary mt-1 text-start btn-primary nav-link"
      >
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="" aria-current="page" href="#">POSTS</a>
      </button>
    </li>
  </ul>
</div>

<style>
  button {
    display: flex;
    align-items: center;
  }
  a {
    padding: 0;
    text-decoration: none;
    color: black;
    overflow: hidden;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .logo-container {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
