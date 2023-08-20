<template>
    <div class="header-bottom sticky-header">
        <div class="container">
            <div class="flex items-center self-stretch">
                <mega-menu class="bg-gray-200 flex self-stretch items-center relative text-gray-500"></mega-menu>
            </div><!-- End .header-left -->

            <div class="header-center">
                <nav class="main-nav">
                    <ul class="menu sf-arrows">
                        <li class="megamenu-container active">
                            <a href="index.html" class="sf-with-ul">Trang chủ</a>
                        </li>
                        <li>
                            <a href="#" class="sf-with-ul">Về chúng tôi</a>
                            <ul>
                                <li>
                                    <a href="about.html" class="sf-with-ul">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="contact.html" class="sf-with-ul">Hệ thống đại lý</a>
                                </li>
                                <li><a href="login.html">Hỗ trợ khách hàng</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="sf-with-ul">Hỏi đáp</a>
                        </li>
                        <li>
                            <a href="#" class="sf-with-ul">Liên hệ</a>
                        </li>

                    </ul><!-- End .menu -->
                </nav><!-- End .main-nav -->
            </div><!-- End .header-center -->

            <div class="header-right">
                <i class="la la-lightbulb-o"></i>
                <p>Giảm giá<span class="highlight">&nbsp;lên tới 30%</span></p>
            </div>
        </div><!-- End .container -->
    </div><!-- End .header-bottom -->
</template>

<script setup>
import MegaMenu from '../Nav/MegaMenu.vue';
</script>