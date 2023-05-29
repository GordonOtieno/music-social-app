<template>
    <div id="DeleteSongContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Delete Song</div>
        <div class="bg-red-500 w-full h-1 mb-4"></div> 

        <div v-for="(song,index) in songStore.songs" :key="song" class="bg-white rounded px-8">
            <div class="flex flex-wrap justify-between">
                <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
                    {{ ++index }}. {{ song.title }}
                </div>
                <button class="float-right
                               bg-transparent
                               hover:bg-red-500
                               text-gray-900
                               font-semibold
                               hover:text-white
                               py-1
                               px-4
                               my-1
                               border
                               border-red-500
                               hover:border-transparent
                               rounded
                       " @click="deleteSong(song)">Delete</button>
            </div>
        </div>
               
           
    </div>
</template>

<script setup>
import Swal from '../../sweetalert2';
import { useSongStore } from '@/store/song-store';
import { useUserStore } from '@/store/user-store';
import axios from 'axios';

const songStore = useSongStore();
const userStore = useUserStore();

const deleteSong = async (song) => {
        Swal.fire({
            title: 'Are you sure you want to delete this Song?',
            text: 'You won\'t be able to revert the process.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes Delete It!',
            confirmButtonColor:'#d33',
            cancelButtonColor:'#3085d6',
        }).then(async (result)=>{
            if(result.isConfirmed){
                try {
                    await axios.delete('/songs/' + song.id +'/'+userStore.id)

                    songStore.fetchSongByUserId(userStore.id)
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted successfully!',
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