<template>
    <div id="editProfileContainer" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Add Song</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div> 


                <TextInput 
                    label="Title"
                    placeholder="Cool New Music"
                    v-model:input="link"
                    inputType="text"
                    error="This is a text error"
                    />

                    <TextInput 
                    label="Link"
                    placeholder="RhwRztNLAo8"
                    v-model:input="link"
                    inputType="text"
                    error="This is a text error"
                    />
                    
            <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormBtn
                    btnText="Add Video"
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