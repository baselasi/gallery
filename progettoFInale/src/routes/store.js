import { writable } from 'svelte/store';

export const albumsToShow = writable({});
export const photoArr = writable()
export const showUsers  = writable(false)
export const users = writable()
export const currentUser = writable()
export const posts = writable()
export const postId = writable()
/*<p>GALLERIA</p>

      <div class="albums-container">
        {#each albums as album, i}
          <button
            on:click={() => setAlbum(album)}
            class="btn col-12 mt-1 text-start"
            ><i class="fa fa-file" style="font-size:24px" />Album{i + 1}</button
          >
        {/each}
      </div>*/