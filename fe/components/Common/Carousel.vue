<template>
    <div id="default-carousel" class="relative w-full bg-gray-100" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative container mx-auto overflow-hidden h-[200px] rounded-lg xs:h-[300px] md:h-[400px]">
            <!-- Item 1 -->
            <div v-for="(item, index) in data" :key="index"
                class="hidden duration-700 ease-in-out h-[200px] xs:h-[300px] md:h-[400px]" data-carousel-item>
                <div class="w-full h-full bg-cover"
                    :style="`background-image: url('${item.image}'); background-position: 50%;`">
                    <div class="container mx-auto absolute top-[10%] z-10">
                        <div class="flex flex-row justify-end">
                            <div class="sm:w-4/12 md:w-6/12 lg:w-5/12">
                                <h3 class="mb-2 text-sm md:text-4xl font-light text-[#ef837b]">
                                    {{ item.subTitle }}
                                </h3>
                                <!-- End .h3 intro-subtitle -->
                                <h1 v-for="(ti, idx) in item.title" :key="idx" class="text-slate-700 text-4xl md:text-7xl mb-1 font-bold">
                                    {{ ti.value }}
                                </h1>

                                <div class="text-[#777] font-bold sm:mt-2 sm:mb-2 md:mt-4 md:mb-5 space-x-2">
                                    <sup class="top-[-0.8] font-light text-base md:text-3xl relative">
                                        {{ item.priceSup }}
                                    </sup>
                                    <span class="text-third text-4xl md:text-7xl">
                                        {{ item.priceSpan }}
                                    </span>
                                </div><!-- End .intro-price -->

                                <a href="category.html" class="btn btn-primary btn-round">
                                    <span>Mua sắm</span>
                                    <i class="icon-long-arrow-right"></i>
                                </a>
                            </div><!-- End .col-lg-11 offset-lg-1 -->
                        </div><!-- End .row -->
                    </div><!-- End .intro-content -->
                </div>
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import bg1 from '~/assets/images/demos/demo-4/slider/slide-2.png'
import bg2 from '~/assets/images/demos/demo-4/slider/slide-1.png'

onMounted(() => {
    initFlowbite()
})
const data = ref([
    {
        image: bg1,
        subTitle: 'Deals and Promotions',
        classSubTitle: '',
        title: [
            {
                value: 'Beats by',
                class: ''
            },
            {
                value: 'Dre Studio 3',
                class: ''
            },
        ],
        priceSup: '$349,95',
        classPriceSup: 'intro-old-price',
        priceSpan: '$279.99'
    },
    {
        // image: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
        image: bg2,
        subTitle: 'New Arrival',
        classSubTitle: 'text-primary',
        title: [
            {
                value: 'Apple iPad Pro',
                class: ''
            },
            {
                value: '12.9 Inch, 64GB',
                class: ''
            },
        ],
        priceSup: 'Today: ',
        classPriceSup: '',
        priceSpan: '$999.99'
    },
])

</script>