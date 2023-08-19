<template>
  <!-- <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Molla - Bootstrap eCommerce Template</title>
    <meta name="keywords" content="HTML5 Template">
    <meta name="description" content="Molla - Bootstrap eCommerce Template">
    <meta name="author" content="p-themes">
    
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/icons/favicon-16x16.png">
    <link rel="manifest" href="assets/images/icons/site.html">
    <link rel="mask-icon" href="assets/images/icons/safari-pinned-tab.svg" color="#666666">
    <link rel="shortcut icon" href="assets/images/icons/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="Molla">
    <meta name="application-name" content="Molla">
    <meta name="msapplication-TileColor" content="#cc9966">
    <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
  </head> -->

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

        <default-trending-products></default-trending-products>

        <div class="container">
          <hr class="mb-0">
        </div><!-- End .container -->

        <default-service></default-service>
      </main><!-- End .main -->

      <default-footer></default-footer>
    </div><!-- End .page-wrapper -->
    <!-- <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>
    <mobile-menu></mobile-menu> -->
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
import "tw-elements/dist/css/tw-elements.min.css";
// import "./assets/js/jquery.min.js";
// import "./assets/js/bootstrap.bundle.min.js";
// import "./assets/js/jquery.hoverIntent.min.js";
// import "./assets/js/jquery.waypoints.min.js";
// import "./assets/js/superfish.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/bootstrap-input-spinner.js";
// import "./assets/js/jquery.plugin.min.js";
// import "./assets/js/jquery.magnific-popup.min.js";
// import "./assets/js/jquery.countdown.min.js";
// import "./assets/js/main.js";
// import "./assets/js/demos/demo-4.js";

import "./assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/plugins/owl-carousel/owl.carousel.css";
import "./assets/css/plugins/magnific-popup/magnific-popup.css";
import "./assets/css/plugins/jquery.countdown.css";
import "./assets/css/style.css";
import "./assets/css/skins/skin-demo-4.css";
import "./assets/css/demos/demo-4.css";
</script>
