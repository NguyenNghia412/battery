<template>
    <div class="border-none bg-[#fff] mb-8 w-full overflow-hidden relative">
        <figure class="">
            <a href="product.html">
                <img :src="`${baseUrl}${props.thumbnail}`" alt="Product image" class="">
            </a>
        </figure>

        <div class="">
            <div>
                <a class="text-[#999] hover:text-[#666]" href="#">{{ props.catName }}</a>
            </div><!-- End .product-cat -->
            <h3 class="text-[16px] mb-0"><a class="text-[#333] hover:text-blue-500" href="product.html">{{ props.productName
            }}</a>
            </h3><!-- End .product-title -->
            <div class="text-blue-500">
                {{ formatCurrency(props.price) }}
            </div><!-- End .product-price -->
        </div><!-- End .product-body -->
    </div><!-- End .product -->
</template>
<script setup>
const props = defineProps({
    thumbnail: '',
    catName: '',
    productName: '',
    price: '',
    rating: '',
    reviewCount: 0
})

const config = useRuntimeConfig();
const baseUrl = config.public.baseURL;

const formatCurrency = (value) => {
    if (!value) {
        return '';
    }
    const result = value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return result;
}
</script>