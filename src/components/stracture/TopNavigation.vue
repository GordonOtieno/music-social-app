<template>
    <nav class="w-full px-4 bg-black relative z-20 text-white-200">
        <div class="container mx-auto max-w-4xl h-16 flex justify-between text-xs md:text-sm">
            <div class="h-full flex items-center">
                <router-link to="" class="flex justify-centre text-centre">
                    <div class="text-white text-2xl"> <router-link to="/"><b>MSN</b></router-link></div>
                </router-link>
            </div>
            <div class="h-full flex item-centre">
                <FullScreenModalVue />

            </div>
        </div>
    </nav>
</template>

<script setup>
import FullScreenModalVue from "./FullScreenModal.vue";
    
</script>

<style lang="sass" scoped>

</style>