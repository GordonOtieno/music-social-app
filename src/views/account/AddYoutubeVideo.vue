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

                    <TextInput 
                    label="Video URL"
                    placeholder="8vOojviWwRk"
                    v-model:input="url"
                    inputType="text"
                    :error="errors.url ? errors.url[0] : ''"
                    />
                    
            <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormBtn
                    btnText="Add Video"
                    @submit="addYoutubeVideoLink"
               />
            </div>
            
        </div>
              
   
        
    </div>
</template>

<script setup>
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormBtn from '@/components/global/SubmitFormBtn.vue';
import { ref } from 'vue';
import axios from 'axios';
import Swal from '@/sweetalert2';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/store/user-store';

const userStore = useUserStore();
const router = useRouter();

let title = ref(null);
let url = ref(null);
let errors = ref([])

const addYoutubeVideoLink = async () => {
    errors.value = [];
  
    try{
        axios.post('youtube',{
            user_id: userStore.id,
            title: title.value,
            url: url.value
        });
       await  Swal.fire(
        'New Video Added',
        'You added '+ title.value + ' video Successfully',
        'success'
       )
       router.push('/account/profile/'+userStore.id)

    }catch(err){
      errors.value = err.response.data.errors;
      console.log("err addYoutubeVideos", err)
    }


}

</script>

<style lang="sass" scoped>

</style>