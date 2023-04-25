<template>
    <div id="editProfileContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Edit Profile</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModal 
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="First Name"
                    placeholder="Gordon"
                    v-model:input="firstname"
                    inputType="text"
                    error="This is a text error"
                    />
                </div>
                    
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Last Name"
                    placeholder="Otieno"
                    v-model:input="lastname"
                    inputType="text"
                    error="This is a text error"
                    />
            </div> 
        </div>       
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Location"
                    placeholder="Nairobi"
                    v-model:input="location"
                    inputType="text"
                    error="This is a text error"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton 
                    label="Profile Image"
                    btnText="Update Profile Image"
                    @showModal="showModal = true"
                />
             </div>
        </div>      

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <TextAreaView
                    label="Description"
                    placeholder="Please enter some information here"
                    v-model="description"
                    error="This is a test error"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormBtn
                    btnText="Update Profile"
               />
            </div>
        </div>
        <CropperModal />

    </div>
</template>

<script setup>
import { ref } from 'vue';

import TextInput from '@/components/global/TextInput.vue';
import DisplayCropperButton from '../../components/global/DisplayCropperButton.vue'
import TextAreaView from '../../components/global/TextAreaView.vue'
import SubmitFormBtn from '../../components/global/SubmitFormBtn.vue'
import CropperModal from '../../components/global/CropperModal.vue'

let firstname = ref(null)
let showModal = ref(false)
let lastname = ref(null)
let location = ref(null)
let description = ref(null)
</script>

<style lang="sass" scoped>

</style>