<template>
    <div class="container for-you">
        <div class="heading heading-flex mb-3">
            <div class="heading-left">
                <h2 class="title">Sản phẩm mới</h2><!-- End .title -->
            </div><!-- End .heading-left -->

            <div class="heading-right">
                <a href="#" class="title-link">Xem tất cả sản phẩm <i class="icon-long-arrow-right"></i></a>
            </div><!-- End .heading-right -->
        </div><!-- End .heading -->

        <div class="products">
            <div class="row justify-content-center">
                <div v-for="(p, index) in product" :key="index" class="col-6 col-md-4 col-lg-3">
                    <product-item :thumbnail="p.thumbnail" :cat-name="p.catName" :product-name="p.productName"
                        :price="p.price" :review-count="p.reviewCount" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductItem from '~/components/Common/ProductItem.vue';

import img1 from '~/assets/images/demos/demo-4/products/product-10.jpg';
import img2 from '~/assets/images/demos/demo-4/products/product-11.jpg';
import img3 from '~/assets/images/demos/demo-4/products/product-12.jpg';
import img4 from '~/assets/images/demos/demo-4/products/product-13.jpg';
import img5 from '~/assets/images/demos/demo-4/products/product-14.jpg';
import img6 from '~/assets/images/demos/demo-4/products/product-15.jpg';
import img7 from '~/assets/images/demos/demo-4/products/product-16.jpg';
import img8 from '~/assets/images/demos/demo-4/products/product-17.jpg';
import img9 from '~/assets/images/demos/demo-4/products/product-17.jpg';

const product = [
    {
        thumbnail: img1,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img2,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img3,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img4,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img5,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img6,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img7,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img8,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img9,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
    {
        thumbnail: img1,
        catName: 'Headphones',
        productName: 'Beats by Dr. Dre Wireless Headphones',
        price: '$279.99',
        rating: '',
        reviewCount: 4
    },
]
</script>