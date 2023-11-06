<script>
    import { postId } from "../store";
    import Comments from "./comments.svelte";
    export let post 
    let comments =false
    function toggleComments(id) {
        comments = !comments
        
        postId.set(post.id)
    }

</script>
<div class="post">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        {#if comments}
        <button class="btn-primary btn" on:click={()=>toggleComments()}>HIDE COMMENTS</button>
        {:else}
        <button class="btn btn-primary" on:click={toggleComments}>SEE COMENTS</button>
        {/if}
        {#if comments}
            <Comments/>
        {/if}
</div>
<style>
     .post{
        background-color: #cdcdcd;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 1rem;
    }
</style>