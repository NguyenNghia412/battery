<template>
    <li>
        <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown"
            class="flex items-center whitespace-nowrap py-2 px-6 transition duration-150 ease-in-out text-gray-800 font-medium hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2">
            <Bars3Icon class="w-8 h-8" />
            <span class="ml-2">
                Danh mục sản phẩm
            </span>
            <ChevronDownIcon class="ml-3 w-5 h-5" />
        </button>
        <div id="mega-menu-dropdown"
            class="absolute z-50 block hidden w-auto bg-white border px-6 border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                    <li v-for="(item, index) in cat" :key="index">
                        <a :href="'#'"
                            class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                            {{ item.attributes.name }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </li>
</template>
<script setup>
import { Bars3Icon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const { find } = useStrapi()

// const { data, error, execute, refresh } = await useMyFetch('api/product-categories', {
//     method: 'get'
// });
// await clearNuxtData('cat')
// const { data, error, execute, refresh } = await useAsyncData('cat', useGetCat)
// const { data, error, execute, refresh } = await useAsyncData('cat', () => $fetch('http://localhost:1337/api/product-categories', {method: 'get'}))
// const { data, error, execute, refresh } = await useFetch('https://dog.ceo/api/breeds/image/random', {method: 'get', server: true})
// await clearNuxtData('cat');
const { data, pending, refresh, error } = await useAsyncData(
  'cat',
  () => find('product-categories')
) 

const cat = ref(data.value?.data || []);
console.log()
onMounted(() => {
    initFlowbite()
})
</script>