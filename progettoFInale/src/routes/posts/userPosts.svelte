<script>
   import { showUsers ,users,currentUser ,posts} from "../store";
  import findPosts from "../findPosts"
  import SingalePost from "./singalePost.svelte";
    let comments =false
    let user 
    let allPost
    let userPost
    currentUser.subscribe((value)=>{
        user = value
    })
    posts.subscribe((value)=>{
        allPost = value
    })
    $:if (allPost && user){
        userPost = findPosts(allPost,user.id)
        console.log(userPost)
    }
    
    </script>
<div>
    {#if userPost}
        {#each userPost as post}

           <SingalePost post={post}/>
        {/each}
    {/if}
</div>
<style>
   
</style>
