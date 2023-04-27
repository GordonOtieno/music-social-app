<template>
    <div id="editProfileContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Add Song</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div> 


                <TextInput 
                    label="Title"
                    placeholder="Cool New Music"
                    v-model:input="title"
                    inputType="text"
                    error="This is a text error"
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
                     ref="fileInput"
                     type="file"
                     @change="getUploadedImage"
                     >
            <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormBtn
                    btnText="Add Song"
               />
            </div>
        </div>
              
   
        
    </div>
</template>

<script setup>
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormBtn from '@/components/global/SubmitFormBtn.vue';


</script>

<style lang="sass" scoped>

</style>