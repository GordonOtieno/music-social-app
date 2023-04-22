<template>
    <div id="register" >
        <div class="w-full p-6 justify-center items-center">
            <div class="w-full max-w-lg">
                <div class="bg-black p-8 rounded mb-6">
                <h1 class="mb-6 text-gray-100 text-lg font-thin"> Let's get rocking!</h1>
                <div class="mb-4">
                        <label for="f_name" class="block uppercase tracking-wide text-xs font-bold mb-2 text-gray-100">
                            First Name
                        </label>
                        <input type="text" class="
                        appearance-none
                        block
                        w-full
                        bg-white
                        text-gray-700
                        border
                        border-gray-400
                        rounded
                        py-3
                        px-4
                        leading-tight
                        focus:outline-none
                        focus:bg-white
                        focus:border-gray-500
                        ">
                        <span class="text-red-500">
                            This is an error message
                        </span>
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
                        Register
                    </button>
                </div>
                <p class="text-center text-md text-gray-900">
                    Already have an Account?
                    <router-link to="/login" class="text-blue-500 no-underline hover:underline">Login</router-link>
                </p>
            </div>
      </div>

    </div>
</template>

<script setup>
   
</script>

<style lang="scss" scoped>

</style>