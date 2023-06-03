<template>
    <div v-if="post" id="PostsContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Post {{ post.id }}</div>
        <div class="bg-green-500 w-full h-1"></div>
        <div class="mx-auto">
            <div class="my-4">
                <div class="flex items-center py-2">
                    <img :src="userStore.userImage(post.user.image)" class="rounded-full" alt="" width="50">
                    <div class="ml-2 font-bold text-2xl">{{ post.user.first_name }} {{ post.user.last_name }}</div>
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

        </div>
</template>

<script setup>
import { usePostStore } from "@/store/post-store";
import { useUserStore } from "@/store/user-store";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'

const postStore = usePostStore();
const userStore = useUserStore();

let post= ref(null);
const route = useRoute();

onMounted(async ()=>{
   await getPostById();
})

const getPostById = async () => {
   try{

    let res = await axios.get('posts/' + route.params.id)
    post.value = res.data;

   }catch(err){
    console.log(err);
   }
}

</script>

<style lang="sass" scoped>

</style>