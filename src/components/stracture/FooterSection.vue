<template>
    <div class="w-full bg-black text-gray-100">
        <div class="container 
        mx-auto
        max-w-4xl 
        h-full 
        flex 
        flex-wrap 
        justify-between 
        items-start 
        text-sm 
        p-6 
        pt-8 
        pb-4
        ">
        <div class="mb-4">
            <div class="mb-4">
                Quick Link
            </div>
            <router-link to="/" class="block mb-2">Home</router-link>
        </div>
        <div class="mb-4">
            <div class="mb-4">
                About Us
            </div>
            <p class="mb4 leading-normal">
                P.O Box 123 -00100, <br>Nairobi - Kenya<br>
                Moi Avenue, Harambe Plazzah
            </p>
            <p class="text-sm">0707077499</p>
        </div>
    </div>
    <div class="container 
        mx-auto
        max-w-4xl 
        h-full 
        flex 
        flex-wrap 
        justify-between 
        items-centre 
        text-sm 
        py-6
        ">
      &copy;2023 MSN Company, All Rights reserved.
      <div class="pt-4 md:p-0 text-centre mb:text-right text-xs">
        <div class="no-underline hover:underline">Privacy Policy</div>
        <div class="no-underline hover:underline ml-4">Terms & Condition</div>
        <div class="no-underline hover:underline ml-4">Contact Us</div>
      </div>
        </div>
    </div>
</template>

<script setup>

    
</script>

<style lang="sass" scoped>

</style>