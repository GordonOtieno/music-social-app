<template>
    <div id="register" >
        <div class="w-full flex justify-center py-10" >
            <div class="w-full max-w-lg">
                <div class="bg-black p-8 rounded mb-6">
                    <h1 class="mb-6 text-gray-100 text-xl text-center"> Register</h1>
                <h1 class="mb-6 text-gray-100 text-lg font-thin text-center"> Let's get rocking!</h1>
                <div class="mb-4">
                    <TextInput 
                    label="First Name"
                    :labelColor = false
                    placeholder="Gordon"
                    v-model:input="firstName"
                    inputType="text"
                    :error="errors.first_name ? errors.first_name[0] : ''"
                    />
                    <TextInput 
                    label="Last Name"
                    :labelColor = false
                    placeholder="Otieno"
                    v-model:input="lastName"
                    inputType="text"
                    :error="errors.last_name ? errors.last_name[0] : ''"
                    />
                    <TextInput 
                    label="Email"
                    :labelColor = false
                    placeholder="john.doe@gmail.com"
                    v-model:input="email"
                    inputType="email"
                    :error="errors.email ? errors.email[0] : ''"
                    />
                    <TextInput 
                    label="Password"
                    :labelColor = false
                    placeholder="pass123@!"
                    v-model:input="password"
                    inputType="password"
                    :error="errors.password ? errors.password[0] : ''"
                    />
                    <TextInput 
                    label="Confirm Password"
                    :labelColor = false
                    placeholder="pass123@!"
                    v-model:input="passwordConfirm"
                    inputType="password"
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
                    "
                    @click="register"
                    >
                        Register
                    </button>
                </div>
                <p class="text-center text-md text-gray-900">
                    Already have an account?
                    <router-link to="/login" class="text-blue-500 no-underline hover:underline">Login</router-link>
                </p>
            </div>
      </div>

    </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import TextInput from '../components/global/TextInput.vue'
import { useUserStore } from '../store/user-store'

const userStore = useUserStore();

let errors = ref([]);
let firstName = ref(null)
let lastName = ref(null)
let email = ref(null)
let password = ref(null)
let passwordConfirm = ref(null)

const register= async() => {   
    errors.value = [];
    try{

        let res = await axios.post('auth/register', {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            password:password.value,
            password_confirmation: passwordConfirm.value
    })

    console.log(res)
    userStore.setUserDetails(res)

    }catch(err){
        errors.value = err.response.data.errors
    }
    
    }


   
</script>

<style lang="scss" scoped>

</style>