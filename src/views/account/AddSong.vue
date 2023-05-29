<template>
    <div id="editProfileContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Add Song</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div> 


                <TextInput 
                    label="Title"
                    placeholder="Cool New Music"
                    v-model:input="title"
                    inputType="text"
                    :error="errors.title ? errors.title[0] : ''"
                    />
                    <label class="block
                             tracking-wide
                             text-gray-700
                             text-xs
                             font-bold
                             mb-2
                            ">
                            Select Image
              </label>
              
                <input class="block
                     form-control
                     w-full
                     px-3
                     py-2
                     text-base
                     font-normal
                     text-gray-700
                     bg-white
                     bg-clip-padding
                     border
                     border-solid
                     border-gray-400
                     rounded
                     transition
                     ease-in-out
                     m-0
                     focus:text-gray-700
                     focus:bg-white
                     focus:border-blue-600
                     focus:outline-none
                     "
                     id="image"
                     ref="file"
                     type="file"
                     @change="handleFileUpload"
                     >
            <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormBtn
                    btnText="Add Song"
                    @submit="addSong"

               />
            </div>
        </div>
              
   
        
    </div>
</template>

<script setup>
import { ref} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormBtn from '@/components/global/SubmitFormBtn.vue';
import Swal from '../../sweetalert2.js'
import { useUserStore } from '../../store/user-store'
import { useSongStore } from '../../store/song-store'



const userStore = useUserStore();
const songStore = useSongStore();

const router = useRouter()

let title = ref(null);
let song = ref(null);
let file = ref(null);
let errors = ref([])

const handleFileUpload = () =>{
    song.value = file.value.files[0]
}

const addSong = async() =>{
    if (!song.value){
        Swal.fire(
        'opps, Something went wrong!',
        'You Forgot to upload mp3 file',
        'warning'
        )
      return null

    }
    try{
        let form = new FormData()
        form.append('user_id', userStore.id)
        form.append('title', title.value || '')
        form.append('file', song.value)

        axios.post('songs',form)
        await songStore.fetchSongByUserId(userStore.id)
        router.push('/account/profile')

    }catch(err){
      errors.value = err.response.data.errors;
    }

}

</script>

<style lang="sass" scoped>

</style>