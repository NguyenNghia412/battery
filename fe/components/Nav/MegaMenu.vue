<template>
    <li class="static" data-te-nav-item-ref data-te-dropdown-ref>
        <a class="flex items-center whitespace-nowrap py-2 px-6 transition duration-150 ease-in-out text-gray-800 font-medium hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
            href="#" data-te-ripple-init data-te-ripple-color="light" type="button" id="dropdownMenuButtonX"
            data-te-dropdown-toggle-ref aria-expanded="false" data-te-nav-link-ref>
            <Bars3Icon class="w-8 h-8" />
            <span class="ml-2">
                Danh mục sản phẩm
            </span>
            <ChevronDownIcon class="ml-3 w-5 h-5" />
        </a>
        <div class="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButtonX" data-te-dropdown-menu-ref>
            <div class="px-6 py-5 lg:px-8">
                <!-- <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"> -->
                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <a href="#!" aria-current="true"
                            class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white">Pin nuôi nguồn</a>
                        <a href="#!" aria-current="true"
                            class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white">Pin máy trợ thính</a>
                        <a href="#!" aria-current="true"
                            class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white">Pin sạc và máy sạc pin</a>
                        <a href="#!" aria-current="true"
                            class="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white">Pin công nghiệp</a>
                        <a href="#!" aria-current="true"
                            class="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white">Pin sạc dự phòng</a>
                    </div>
                  </div>
            </div>
        </div>
    </li>
</template>
<script setup>
// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";
import { Bars3Icon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'

onMounted(() => {
    initTE({ Collapse, Dropdown, Ripple });

})
</script>