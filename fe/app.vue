<template>
  <div class="page-wrapper">
    <header class="header header-intro-clearance header-4">
      <default-top-header></default-top-header>
      <default-middle-header></default-middle-header>
      <default-bottom-header></default-bottom-header>
    </header><!-- End .header -->

    <main class="main">
      <default-slider></default-slider>
      <default-popular-category></default-popular-category>

      <div class="mb-4"></div><!-- End .mb-4 -->

      <default-shop-now></default-shop-now>

      <div class="mb-3"></div><!-- End .mb-5 -->

      <default-new-arrivals></default-new-arrivals>

      <div class="mb-6"></div><!-- End .mb-6 -->

      <!-- <default-trending-products></default-trending-products> -->

      <div class="container">
        <hr class="mb-0">
      </div><!-- End .container -->

      <default-service></default-service>
    </main><!-- End .main -->

    <default-footer></default-footer>
    <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>
    <mobile-menu></mobile-menu>
  </div><!-- End .page-wrapper -->
</template>

<script setup>
import DefaultTopHeader from "./components/Layout/DefaultTopHeader.vue";
import DefaultMiddleHeader from "./components/Layout/DefaultMiddleHeader.vue";
import DefaultBottomHeader from "./components/Layout/DefaultBottomHeader.vue";
import DefaultSlider from "./components/Layout/DefaultSlider.vue";
import DefaultPopularCategory from "./components/Layout/DefaultPopularCategory.vue";
import DefaultShopNow from "./components/Layout/DefaultShopNow.vue";
import DefaultNewArrivals from "./components/Layout/DefaultNewArrivals.vue";
import DefaultTrendingProducts from "./components/Layout/DefaultTrendingProducts.vue";
import DefaultService from "./components/Layout/DefaultService.vue";
import DefaultFooter from "./components/Layout/DefaultFooter.vue";
import MobileMenu from "./components/Layout/MobileMenu.vue";

import "./assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/plugins/owl-carousel/owl.carousel.css";
import "./assets/css/plugins/magnific-popup/magnific-popup.css";
import "./assets/css/plugins/jquery.countdown.css";
import "./assets/css/style.css";
import "./assets/css/skins/skin-demo-4.css";
import "./assets/css/demos/demo-4.css";
</script>
