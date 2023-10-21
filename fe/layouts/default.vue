<template>
    <div class="page-wrapper">
      <header class="header header-intro-clearance header-4">
        <default-top-header></default-top-header>
        <default-middle-header></default-middle-header>
        <default-bottom-header></default-bottom-header>
      </header><!-- End .header -->
  
      <main class="main">
        <slot></slot>
      </main><!-- End .main -->
  
      <default-footer></default-footer>
      <button id="scroll-top" title="Back to Top"><i class="icon-arrow-up"></i></button>
      <mobile-menu></mobile-menu>
    </div><!-- End .page-wrapper -->
  </template>
  
  <script setup>
  import DefaultTopHeader from "~/components/Layout/DefaultTopHeader.vue";
  import DefaultMiddleHeader from "~/components/Layout/DefaultMiddleHeader.vue";
  import DefaultBottomHeader from "~/components/Layout/DefaultBottomHeader.vue";
  import DefaultFooter from "~/components/Layout/DefaultFooter.vue";
  import MobileMenu from "~/components/Layout/MobileMenu.vue";
  
  import "~/assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css";
  import "~/assets/css/bootstrap.min.css";
  import "~/assets/css/plugins/owl-carousel/owl.carousel.css";
  import "~/assets/css/plugins/magnific-popup/magnific-popup.css";
  import "~/assets/css/plugins/jquery.countdown.css";
  import "~/assets/css/style.css";
  import "~/assets/css/skins/skin-demo-4.css";
  import "~/assets/css/demos/demo-4.css";
  </script>
  