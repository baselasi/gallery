<script>
    import { postId } from "../store";
    import findComents from "../findComments"
  import { onMount } from "svelte";
  import fetchData from "../fetchFunction";
  onMount(()=>{
    fetchData("https://jsonplaceholder.typicode.com/comments",test)
  })
   let id
   let comments
   postId.subscribe((value)=>{
    id =value
    console.log(id)
    //console.log(value)
    //comments = findPosts(id)
    //console.log(comments)

   })
   function test(response) {
        console.log(response)
        comments = findComents(response,id)
        console.log(comments)
   }
</script>
<div class="comments bg-light shadow rounded p-2 mt-1">
    {#if comments}
        {#each comments as comment}
        <div class="mt-2">
            <h5 class="shadow email rounded inline bg-info">{comment.email}</h5>
            <p class="inline   comment">{comment.body}</p>
        </div>
          
        {/each}
    {/if}
</div>
<style>
    .email{
        display: inline;
    }
</style>