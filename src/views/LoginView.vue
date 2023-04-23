<template>
    <div id="login" >
        <div class="w-full flex justify-center py-10" >
            <div class="w-full max-w-lg">
                <div class="bg-black p-8 rounded mb-6">
                <h1 class="mb-6 text-gray-100 text-xl text-center"> Login</h1>
                <h1 class="mb-6 text-gray-100 text-lg font-thin text-center"> Let's get rocking!</h1>
                <div class="mb-4">
                    <TextInput 
                    label="Email"
                    :labelColor = false
                    placeholder="john.doe@gmail.com"
                    v-model:input="email"
                    inputType="email"
                    error="This is a text error"
                    />
                    <TextInput 
                    label="Password"
                    :labelColor = false
                    placeholder="pass123@!"
                    v-model:input="password"
                    inputType="password"
                    error="This is a text error"
                    />
                </div>
                <button type="submit" class="
                    block
                    w-full
                    text-white
                    rounded-sm
                    bg-green-500
                    py-3
                    text-sm
                    tracking-wide
                    bg-red
                    ">
                        Login
                    </button>
                </div>
                <p class="text-center text-md text-gray-900">
                    Don't have an Account yet?
                    <router-link to="/register" class="text-blue-500 no-underline hover:underline">Login</router-link>
                </p>
            </div>
      </div>

    </div>
</template>

<script setup>
import {ref} from 'vue';
import TextInput from '../components/global/TextInput.vue'
let email=ref('')
let password=ref('')
   
</script>

<style lang="scss" scoped>

</style>