<script>
  import fetcData from "../fetchFunction";
  import { albumsToShow ,users} from "../store";
  import NavBarBigScreen from "./navBarBigScreen.svelte";
  import NavBarSmallScreen from "./navBarSmallScreen.svelte";
  import { onMount } from "svelte";
  
  let albums;
  onMount( async  ()=>{
    await fetcData("https://jsonplaceholder.typicode.com/albums", assignAlbum)
    fetcData ("https://jsonplaceholder.typicode.com/users",test)
  })
  function test(response) {
    users.set(response)
  }

  function assignAlbum(data) {
    albums = data.slice(0, 4);
  }

  let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div class="content rounded shadow p-2">
    
    {#if albums}
  {#if innerWidth && innerWidth > 992}

        <NavBarBigScreen albums={albums}/> 
    {/if}

    {#if innerWidth && innerWidth < 992}
      <NavBarSmallScreen albums={albums}/>
    {/if}
  {/if}
</div>

<style>
  .content{
    background-color: white;
  }
</style>
