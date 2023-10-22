<template>
    <div class="border-b-0 mb-0">
        <div class="container mx-auto relative flex items-center px-3">
            <div class="flex items-center">
                <button class="text-gray-800 hover:cursor-pointer border-0 bg-transparent relative flex items-center justify-center mx-4 p-1 md:hidden">
                    <span class="absolute w-[1px] h-[1px] p-0 overflow-auto whitespace-nowrap blur-0">Toggle mobile menu</span>
                    <Bars3Icon class="w-12 h-12 text-gray-800" />
                </button>

                <nuxt-link href="/">
                    <img src="../../assets/images/demos/demo-4/logo.png" alt="Molla Logo" width="105" height="25">
                </nuxt-link>
            </div><!-- End .header-left -->

            <div class="mx-auto flex flex-1 justify-center">
                <search-input class="w-9/12 hidden md:inline-block"></search-input>
            </div>

        </div><!-- End .container -->
    </div><!-- End .header-middle -->
</template>
<script setup>
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import SearchInput from './../Input/SearchInput.vue'
</script>