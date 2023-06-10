<template>
    <div id="PostsContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Posts</div>
        <div class="bg-green-500 w-full h-1"></div>
        <div v-for="post in posts" :key="post" class="mx-auto">
            <div class="my-4">
                <div class="flex items-center py-2">
                    <router-link :to="'/account/profile/'+post.user.id">
                        <img :src="userStore.userImage(post.user.image)" class="rounded-full" alt="" width="50">
                    </router-link>
                    <router-link :to="'/account/profile/'+post.user.id">
                    <div class="ml-2 font-bold text-2xl">{{ post.user.first_name }} {{ post.user.last_name }}</div>
                   </router-link>
                </div>
                <img class="w-full" :src="postStore.postImage(post.image)" alt="">
                <div class="p-4">
                    <p class="text-3xl font-bold hover:text-gray-700 pb-4">{{post.title}}</p>
                    <p class="py-2 text-lg">Event Location: {{post.location}}</p>
                    <p class="pb-6">
                        {{post.description}}
                    </p>
                </div>
            </div>
        </div>     
        <div class="flex items-center justify-center p-2">
                <v-pagination
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getPosts"
                />
            </div> 

        </div>
</template>

<script setup>
import { usePostStore } from "@/store/post-store";
import { useUserStore } from "@/store/user-store";
import axios from "axios";
import { onMounted, ref } from "vue";

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const postStore = usePostStore();
const userStore = useUserStore();

let page= ref(1);
let posts= ref(null);
let pageCount= ref(null);


onMounted(async ()=>{
   await getPosts();
})

const getPosts = async () => {
   try{

    let res = await axios.get('posts?page='+page.value)
    pageCount.value=res.data.page_count;
    posts.value = res.data.paginate.data;

   }catch(err){
    console.log(err);
   }
}

</script>

<style lang="sass" scoped>

</style>