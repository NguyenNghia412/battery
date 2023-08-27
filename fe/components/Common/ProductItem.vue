<template>
    <div class="product product-2">
        <figure class="product-media">
            <a href="product.html">
                <img :src="`${baseUrl}${props.thumbnail}`" alt="Product image"
                    class="product-image">
            </a>

            <div class="product-action-vertical">
                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"></a>
            </div><!-- End .product-action -->

            <div class="product-action">
                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>Thêm vào giỏ hàng</span></a>
                <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>Xem sản phẩm</span></a>
            </div><!-- End .product-action -->
        </figure><!-- End .product-media -->

        <div class="product-body">
            <div class="product-cat">
                <a href="#">{{ props.catName }}</a>
            </div><!-- End .product-cat -->
            <h3 class="product-title"><a href="product.html">{{ props.productName }}</a>
            </h3><!-- End .product-title -->
            <div class="product-price">
                {{ props.price }}
            </div><!-- End .product-price -->
            <div class="ratings-container">
                <div class="ratings">
                    <div class="ratings-val" style="width: 60%;"></div><!-- End .ratings-val -->
                </div><!-- End .ratings -->
                <span class="ratings-text">( {{ props.reviewCount }} Nhận xét )</span>
            </div><!-- End .rating-container -->
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
</script>