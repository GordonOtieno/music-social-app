<template>
    <TopNavigation />
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
                    @click="login">
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
import axios from 'axios'
import TextInput from '../components/global/TextInput.vue'
import { useUserStore } from '../store/user-store'
import { useProfileStore } from '../store/profile-store'
import { useSongStore } from '../store/song-store'
import { usePostStore } from '../store/post-store'
import { useVideoStore } from '../store/video-store'
import TopNavigation from '@/components/stracture/TopNavigation.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore()
const profileStore = useProfileStore()
const songStore = useSongStore()
const postStore = usePostStore()
const videoStore = useVideoStore()

let errors = ref([])
let email = ref('')
let password = ref('')

const login = async() => {
    errors.value=[];

    try {

        let res = await axios.post('auth/login', {
            email: email.value,
            password: password.value
        })
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
        userStore.setUserDetails(res)

        await profileStore.fetchProfileById(userStore.id)
        await songStore.fetchSongByUserId(userStore.id)
        await postStore.fetchPostsByUserId(userStore.id)
        await videoStore.fetchVideosByUserId(userStore.id)

        router.push('/account/profile/' + userStore.id)

    } catch(err){
        errors.value = err.response.data.errors

    }
}
   
</script>

<style lang="scss" scoped>

</style>