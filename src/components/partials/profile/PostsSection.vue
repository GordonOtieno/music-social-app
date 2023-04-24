<template>
    <div class="">
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <div class="text-gray-900 text-xl">Post</div>
                <div class="bg-green-500 w-full h-1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton
                    class="ml-2"
                    btnText="Create Post"
                    color="green"
                    url="/account/create-post"
                />
                
                </div>
            </div>

        </div>
        <div class="flex flex-wrap pb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2">
                
            <div class="rounded-lg border">
                <a href="">
                    <img class="rounded-t-lg" src="https://via.placeholder.com/500/300" alt="placeholder"/>
                </a>
                <div class="p-2 md:p-4">
                    <div class="text-lg">
                        <router-link to="" class="
                        underline
                        text-blue-500
                        hover:text-blue-500"
                        >
                            Test Title
                        </router-link>
                    </div>
                    <p class="py-2">Location: Test Location</p>
                    <p class="text-gray-dark text-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Facilis saepe ad magni! Doloribus nam cupiditate iste ut iusto earum,
                         quo voluptatum cum molestiae, consequuntur praesentium! 
                         Totam odio at delectus modi.
                    </p>
                    <div class="mt-2 flex items-center justify-end">
                        <router-link to="" class="
                        bg-blue-500
                        hover:bg-blue-700
                        text-white
                        text-sm
                        font-bold
                        py-1
                        px-2
                        rounded-full
                        "
                        >
                            Test Title
                        </router-link>

                        <button to="" class="
                        bg-red-500
                        hover:text-red-700
                        text-white
                        text-sm
                        font-bold
                        py-1
                        px-2
                        rounded-full
                        "
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
</script>

<style lang="sass" scoped>

</style>