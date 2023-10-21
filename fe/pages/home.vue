<template>
    <div class="w-full">

        <default-slider></default-slider>
        <default-popular-category></default-popular-category>

        <!-- <div class="mb-4"></div> -->

        <!-- <default-shop-now></default-shop-now> -->

        <div class="mb-3"></div><!-- End .mb-5 -->

        <default-new-arrivals></default-new-arrivals>

        <div class="mb-6"></div><!-- End .mb-6 -->

        <!-- <default-trending-products></default-trending-products> -->

        <div class="container mx-auto">
            <hr class="mb-0">
        </div><!-- End .container -->

        <default-service></default-service>
    </div>
</template>
  
<script setup>
import DefaultSlider from "~/components/Layout/DefaultSlider.vue";
import DefaultPopularCategory from "~/components/Layout/DefaultPopularCategory.vue";
import DefaultNewArrivals from "~/components/Layout/DefaultNewArrivals.vue";
import DefaultService from "~/components/Layout/DefaultService.vue";

definePageMeta({
    path: '/'
});
</script>
  
  