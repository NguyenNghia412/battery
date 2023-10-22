<template>
    <div class="container mx-auto for-you">
        <div class="heading heading-flex mb-3 mt-3">
            <div class="heading-left">
                <h2 class="title">{{ category?.name }}</h2><!-- End .title -->
            </div><!-- End .heading-left -->

        </div><!-- End .heading -->

        <div class="products">
            <div class="row justify-content-center">
                <div v-for="(p, index) in product" :key="index" class="col-6 col-md-4 col-lg-3">
                    <product-item :thumbnail="p.attributes.thumbnail?.data.attributes.formats.thumbnail?.url"
                        :cat-name="p.attributes?.product_category?.data.attributes.name" :product-name="p.attributes.name"
                        :price="p.attributes.price" :review-count="p.reviewCount" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductItem from '~/components/Common/ProductItem.vue';

const { findOne } = useStrapi();
const route = useRoute();
const slug = route.params?.slug;

console.log(route);
// clearNuxtData('product');
const { data, error, refresh } = await useAsyncData('product', () => findOne('product-categories', slug, { 'populate[products][populate][0]': 'thumbnail' }), {
    watch: [() => slug]
});

const product = ref(data.value?.data?.attributes?.products?.data || []);
const category = ref(data.value?.data?.attributes || {});
</script>