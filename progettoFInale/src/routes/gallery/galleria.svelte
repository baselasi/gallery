<script>
  import { albumsToShow, showUsers } from "../store";
  import fetchData from "../fetchFunction";
  import { onMount } from "svelte";
  import filterPhoto from "../filterPhoto";
  import Users from "../posts/users.svelte";

  let photoAlbum;
  let photos;
  let choosenAlbum;
  let posts;

  fetchData("https://jsonplaceholder.typicode.com/photos", filter);

  albumsToShow.subscribe((value) => {
    
    choosenAlbum = value;
    photoAlbum  = undefined
    if (photos && choosenAlbum) {
      photoAlbum = filterPhoto(photos, choosenAlbum.id);
    }
  });

  function filter(response) {
    photos = response.slice(0, 200);
  }

  showUsers.subscribe((value) => {
    posts = value;
  });
</script>
<div class="content container col-12 mt-5 mt-md-0">
  {#if photoAlbum}
    <div class="col-12 mb-2 pt-2">
      <i class="fa fa-file" style="font-size:24px" /> ALBUM {photoAlbum[0]
        .albumId}
    </div>
    <hr />
    <div class="col-12 row">
      {#each photoAlbum as photo, i}
        <div class="col-6 col-md-3 row">
          <button
            type="button"
            class="btn btn-primary col-md-11 mb-2 text-start"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            
            ><img src={photo.thumbnailUrl} alt="" />Photo {i + 1}</button
          >
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div class="modal-body">
                  <img class="img" src={photo.url} alt="img" />
                </div>
                <p class="text-center">{photo.title}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
  {#if posts}
    <Users />
  {/if}
</div>

<style>
  /* The Modal (background) */
  .img {
    width: 100%;
  }
  img {
    width: 30%;
    height: 100%;
    border-radius: 10px;
  }
  .content {
    background-color: white;

    border-radius: 10px;
    min-height: 500px;
  }
  .row {
    margin-right: 0;
    margin-left: 0;
  }
 
</style>
