<script>
    import { showUsers ,users,currentUser, posts} from "../store";
    import UserPosts from "./userPosts.svelte";
    import fetchData from "../fetchFunction";
  import { onMount } from "svelte";
    let usersArr 
    let usersPosts
    users.subscribe((value)=>{
        usersArr=value
    })
    function setUser(obj){
        currentUser.set(obj)
    }
    onMount(()=>{
        fetchData("https://jsonplaceholder.typicode.com/posts",test)
    })
    function test(response) {
        posts.set(response)
    }
</script>
<div>
    {#if usersArr}
        {#each usersArr as user}
            <button class="btn-primary btn m-1" on:click={()=>setUser(user)}>{user.name}</button>
        {/each}
    {/if}
    <UserPosts/>
</div>
<style>

</style>