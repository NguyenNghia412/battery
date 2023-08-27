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
                    <product-item :thumbnail="p.attributes.thumbnail?.data.attributes.formats.small.url"
                        :cat-name="p.attributes?.product_category?.data.attributes.name" :product-name="p.attributes.name"
                        :price="p.attributes.price" :review-count="p.reviewCount" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductItem from '~/components/Common/ProductItem.vue';

const { find } = useStrapi();

// clearNuxtData('product');
const { data, error } = await useAsyncData('product', () => find('products', { 'populate': '*' }));

const product = ref(data.value?.data || []);
</script>