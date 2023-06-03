<template>
    <div id="EditPostContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Edit Post</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModal 
        v-if="showModal"
            :minAspectRatioProp="{width: 16, height: 9}"
            :maxAspectRatioProp="{width: 16, height: 9}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Title"
                    placeholder="Awesome Concert"
                    v-model:input="title"
                    inputType="text"
                    :error="errors.title ? errors.title[0] : ''"
                    />
                </div>
                    
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Location"
                    placeholder="Nairobi"
                    v-model:input="location"
                    inputType="text"
                    :error="errors.location ? errors.location[0] : ''"
                />
            </div> 
        </div>       
        
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton 
                    label="Post Image"
                    btnText="Update Post Image"
                    @showModal="showModal = true"
                />
             </div>
        </div>
        
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <CroppedImage 
                    label="Cropped Image"
                    :image="image"
                />
             </div>
        </div>    

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <TextAreaView
                    label="Description"
                    placeholder="Please enter some information here"
                    v-model:description="description"
                    e :error="errors.description ? errors.description[0] : ''"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormBtn
                    btnText="Update Post"
                    @submit="updatePost"
               />
            </div>
        </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute,useRouter } from 'vue-router';
import TextInput from '@/components/global/TextInput.vue';
import DisplayCropperButton from '../../components/global/DisplayCropperButton.vue'
import TextAreaView from '../../components/global/TextAreaView.vue'
import SubmitFormBtn from '../../components/global/SubmitFormBtn.vue'
import CropperModal from '../../components/global/CropperModal.vue'
import CroppedImage from '../../components/global/CroppedImage.vue'
import Swal from '@/sweetalert2';

import { usePostStore } from '@/store/post-store';
import { useUserStore } from '@/store/user-store';


const route = useRoute();
const router = useRouter();
const postStore = usePostStore();
const userStore = useUserStore();

let title = ref(null)
let showModal = ref(false)
let location = ref(null)
let description = ref(null)
let errors = ref([]);
let imageData = null
let image = ref(null)

onMounted(async () => {
    await getPostById();
 })


const setCroppedImageData = (data) => {
    imageData= data
    image.value = data.imageUrl
}

const getPostById = async () => {
    try{
        let res = await axios.get('posts/'+ route.params.id);
        title.value = res.data.title;
        location.value = res.data.location;
        image.value = postStore.postImage(res.data.image)
        description.value = res.data.description;
    }catch(err){
       errors.value = err.response.data.errors;
    }
    
}

const updatePost = async () =>{
    errors.value=[];

    let data = new FormData();

    data.append('title', title.value || '')
    data.append('location', location.value || '')
    data.append('description', description.value || '')
    
    if(imageData){
    data.append('id', userStore.id || '')
    data.append('image', imageData.file || '')
    data.append('height', imageData.height || '')
    data.append('width', imageData.width || '')
    data.append('left', imageData.left || '')
    data.append('top', imageData.top || '')
    }


    try{
        await axios.post('posts/'+ route.params.id + '?_method=PUT', data)
        await postStore.fetchPostsByUserId(userStore.id)

        Swal.fire(
                'Post Updated!',
                'You\'ve Successfully Updated '+ title.value +'.',
                'success'
                )

        router.push('/account/profile')

    }catch(err){
        errors.value = err.response.data.errors;
    }
}

</script>

<style lang="sass" scoped>

</style>