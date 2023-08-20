<template>
    <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-ride="carousel">
        <!--Carousel indicators-->
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators>
            <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="0" data-te-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-te-target="#carouselExampleCaptions" data-te-slide-to="1"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"></button>
        </div>

        <!--Carousel items-->
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <!--First item-->
            <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none xs:h-[300px] md:h-[400px] lg:h-[500px]"
                data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden; ">
                <div class="w-full h-full bg-cover"
                    style="background-image: url('https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg')">

                    <div class="container absolute top-[10%] z-10">
                        <div class="row justify-content-end">
                            <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                                <h3 class="intro-subtitle text-third">Deals and Promotions</h3>
                                <!-- End .h3 intro-subtitle -->
                                <h1 class="intro-title">Beats by</h1>
                                <h1 class="intro-title">Dre Studio 3</h1><!-- End .intro-title -->

                                <div class="intro-price">
                                    <sup class="intro-old-price">$349,95</sup>
                                    <span class="text-third">
                                        $279<sup>.99</sup>
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
            <!--Second item-->
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none xs:h-[300px] md:h-[400px] lg:h-[500px]"
                data-te-carousel-item style="backface-visibility: hidden">
                <div class="w-full h-full bg-cover"
                    style="background-image: url('https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg');">
                    <div class="container absolute top-[10%] z-10">
                        <div class="row justify-content-end">
                            <div class="col-auto col-sm-7 col-md-6 col-lg-5">
                                <h3 class="intro-subtitle text-primary">New Arrival</h3><!-- End .h3 intro-subtitle -->
                                <h1 class="intro-title">Apple iPad Pro <br>12.9 Inch, 64GB </h1><!-- End .intro-title -->

                                <div class="intro-price">
                                    <sup>Today:</sup>
                                    <span class="text-primary">
                                        $999<sup>.99</sup>
                                    </span>
                                </div><!-- End .intro-price -->

                                <a href="category.html" class="btn btn-primary btn-round">
                                    <span>Shop More</span>
                                    <i class="icon-long-arrow-right"></i>
                                </a>
                            </div><!-- End .col-md-6 offset-md-6 -->
                        </div><!-- End .row -->
                    </div><!-- End .intro-content -->
                </div>
            </div>
        </div>

        <!--Carousel controls - prev item-->
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <!--Carousel controls - next item-->
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>
</template>
<script setup>
// Initialization for ES Users
import {
    Carousel,
    initTE,
} from "tw-elements";
import { ref } from 'vue'

const data = ref([
    {
        image: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg',
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
        image: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
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

onMounted(() => {
    initTE({ Carousel });
})
</script>