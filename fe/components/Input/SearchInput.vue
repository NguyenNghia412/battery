<template>
    <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

    <div class="relative">
        <label for="Search" class="sr-only"> Tìm kiếm </label>

        <input type="text" id="Search" placeholder="Tìm kiếm sản phẩm..."
            class="w-full px-4 rounded-full border-gray-200 border-solid border text-2xl md:text-[16px] py-2.5 pe-10 shadow-sm" />

        <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" class="text-gray-600 hover:text-gray-700">
                <span class="sr-only">Tìm kiếm </span>

                <MagnifyingGlassIcon class="w-8 h-8 mr-8 hidden md:inline-block"></MagnifyingGlassIcon>
            </button>
        </span>
    </div>
</template>

<script setup>
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>