<template>
    <div class="container max-w-4xl mx-auto flex py-5">
       <div class="w-1/3">
        <img :src="profileStore.image" alt="profile pic" 
        class="w-full rounded-lg h-auto shadow-lg" />
       </div>
       <div class="w-full pl-4">
        <div class="flex">
            <div class="w-1/2">
                <h1 class="text-2xl md:text-4xl text-left text-gray-900">
                    {{ profileStore.firstName }} {{ profileStore.lastName }}
                </h1>
                <span class="text-md text-gray-700">
                    <i><b>{{ profileStore.location }}</b></i>
                </span>
            </div>

            <div  v-if="userStore.id == route.params.id" class="w-1/2">
                <RouterLinkButton
                    btnText="Edit Profile"
                    color="green"
                    url="/account/edit-profile"
                />
            </div>
        </div>
        <ProfileInfoSection />
        <AboutSection />
        <SongsSection />
        <YouTubeSection />
        <PostsSection />
       </div>
    </div>
</template>

<script setup>
import ProfileInfoSection from '../../components/partials/profile/ProfileInfoSection.vue'
import AboutSection from '../../components/partials/profile/AboutSection.vue'
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
import SongsSection from '@/components/partials/profile/SongsSection.vue';
import YouTubeSection from '@/components/partials/profile/YouTubeSection.vue';
import PostsSection from '../../components/partials/profile/PostsSection.vue';

import { useUserStore } from '../../store/user-store'
import { useProfileStore } from '../../store/profile-store'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const userStore = useUserStore()
const profileStore = useProfileStore();
const route = useRoute();

onMounted(async()=>{
    await profileStore.fetchProfileById(route.params.id)
})

</script>

<style lang="sass" scoped>

</style>