<script>
  export let albums;
  import { albumsToShow, showUsers } from "../store";
  import logo from "$lib/imgs/logo.png";

  function setAlbum(album) {
    albumsToShow.set(album);
    showUsers.set(false);
  }
  function toggleUsers() {
    showUsers.set(true);
    albumsToShow.set();
  }
</script>

<div>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <!-- svelte-ignore a11y-missing-content -->
      <div class="logo-container">
        <img src={logo} alt="" class="logo" />
        <h4>LOGO</h4>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            Choose your Album
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            {#each albums as album, i}
              <li class="nav-item">
                <button
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                  on:click={() => setAlbum(album)}
                  class="btn nav-item btn-primary mt-1 text-start btn-primary nav-link"
                >
                  <i class="fa fa-file" style="font-size:24px" />
                  <!-- svelte-ignore a11y-invalid-attribute -->
                  <a class=" active col-8" aria-current="page" href="#"
                    >Album{i + 1}</a
                  >
                </button>
              </li>
            {/each}
            <li class="nav-item">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                on:click={toggleUsers}
                class="btn nav-item btn-primary mt-1 text-start btn-primary nav-link"
              >
                <i class="fa fa-file" style="font-size:24px" />
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class=" active col-8" aria-current="page" href="#">POSTS</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>

<style>
  a {
    display: inline-block;
  }
  i {
    display: inline-block;
  }
  a {
    padding: 0;
    text-decoration: none;
    color: black;
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
