<template>
    <div class="">
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <div class="text-gray-900 text-xl">Post</div>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton v-if="userStore.id == route.params.id"
                    class="ml-2"
                    btnText="Create Post"
                    color="green"
                    url="/account/create-post"
                />
                
                </div>
            </div>

        </div>
        <div  class="flex flex-wrap pb-4">
            <div v-for="post in postStore.posts" :key="post"  class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
                
            <div class="rounded-lg border">
                <a href="">
                    <img class="rounded-t-lg" :src="postStore.postImage(post.image)"/>
                </a>
                <div class="p-2 md:p-4">
                    <div class="text-lg">
                        <router-link :to="'/account/post/'+ post.id" class="
                        underline
                        text-blue-500
                        hover:text-blue-500"
                        >
                            {{post.title}}
                        </router-link>
                    </div>
                    <p class="py-2">Location: {{post.location}}</p>
                    <p class="text-gray-dark text-md">
                        {{post.description}}
                    </p>
                    <div class="mt-2 flex items-center justify-end"  v-if="userStore.id == route.params.id">
                        <router-link :to="'/account/edit-post/'+ post.id" class="
                        bg-blue-500
                        hover:bg-blue-700
                        text-white
                        text-sm
                        font-bold
                        py-1
                        px-2
                        mr-3
                        rounded-full
                        "
                        >
                            Edit Post
                        </router-link>

                        <button to="" class="
                        bg-red-500
                        hover:text-red-700
                        text-white
                        text-sm
                        font-bold
                        py-1
                        px-2
                        rounded-full
                        "
                        @click="deletePost(post)"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
    

            </div>
        </div>

    </div>
</template>

<script setup>
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
import { usePostStore } from "@/store/post-store";
import { useUserStore } from "@/store/user-store";
import { useRoute } from 'vue-router';
import Swal from '@/sweetalert2';
import axios from 'axios';
import { onMounted } from 'vue';

const postStore = usePostStore();
const userStore = useUserStore();
const route = useRoute();

onMounted(async()=>{
   await postStore.fetchPostsByUserId(route.params.id)
})

const deletePost = async (post) => {
        Swal.fire({
            title: 'Are you sure you want to delete '+ post.title +'?',
            text: 'You won\'t be able to revert the process.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete It!',
            confirmButtonColor:'#d33',
            cancelButtonColor:'#3085d6',
        }).then(async (result)=>{
            if(result.isConfirmed){
                try {
                    await axios.delete('/posts/' + post.id)

                    postStore.fetchPostsByUserId(userStore.id)
                    Swal.fire(
                    'Deleted!',
                    'Your video has been deleted successfully!',
                    'success'
                    )

                }catch(err){
                console.log(err)
                } 
            }
        })
   
}

</script>

<style lang="sass" scoped>

</style>