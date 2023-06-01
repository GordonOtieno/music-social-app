<template>
    <div id="DeleteProfileContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Delete Song</div>
        <div class="bg-red-500 w-full h-1 mb-4"></div> 

        <div class="bg-white rounded px-8 pt-6 pb-8">
            <div v-for="(video,index) in videoStore.videos" :key="video" class="flex flex-wrap justify-between">
                <div class="w-1/4 mr-auto mt-2 text-lg p-1 text-gray-900">
                    {{++index}}  {{ video.title }}
                    <iframe class="w-full h-20" :src="video.url" frameborder="0"></iframe>
                </div>
                <div class="p-auto"><button class="float-right
                               bg-transparent
                               hover:bg-red-500
                               text-gray-900
                               font-semibold
                               hover:text-white
                               py-2
                               px-4
                               border
                               border-red-500
                               hover:border-transparent
                               rounded
                       " @click="deleteVideo(video)">Delete</button></div>
            </div>
        </div>
               
           
    </div>
</template>

<script setup>
import { useVideoStore } from '@/store/video-store';
import { useUserStore } from '@/store/user-store';
import Swal from '@/sweetalert2';
import axios from 'axios';

const videoStore = useVideoStore();
const userStore = useUserStore();

const deleteVideo = async (video) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Video?',
            text: 'You won\'t be able to revert the process.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete It!',
            confirmButtonColor:'#d33',
            cancelButtonColor:'#3085d6',
        }).then(async (result)=>{
            if(result.isConfirmed){
                try {
                    await axios.delete('/youtube/' + video.id)

                    videoStore.fetchVideosByUserId(userStore.id)
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