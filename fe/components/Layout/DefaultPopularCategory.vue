<template>
    <div class="container mx-auto">
        <h2 class="text-4xl font-medium text-[#333] text-center mb-4">Khám phá danh mục nổi bật</h2><!-- End .title text-center -->

        <div class="pt-2">
            <div class="flex flex-row">
                <div v-for="(item, index) in listCat" :key="index" class="w-1/2 sm:w-4/12 lg:w-2/12 flex items-stretch justify-center px-3">
                    <a :href="item.link" class="flex flex-col justify-end items-center text-center mb-6">
                        <figure class="inline-flex items-center relative flex-1 m-0">
                            <span class="relative">
                                <img :src="item.thumbnail" alt="Category image" class="block max-w-full h-auto align-middle border-none mx-auto transition duration-[0.35] ease-linear">
                            </span>
                        </figure>

                        <h3 class="text-[#333] font-normal text-2xl mb-0 mt-2">{{ item.name }}</h3><!-- End .cat-block-title -->
                    </a>
                </div>                
            </div><!-- End .row -->
        </div><!-- End .cat-blocks-container -->
    </div><!-- End .container -->
</template>

<script setup>
    import img1 from '~/assets/images/demos/demo-4/cats/1.png';
    import img2 from '~/assets/images/demos/demo-4/cats/2.png';
    import img3 from '~/assets/images/demos/demo-4/cats/3.png';
    import img4 from '~/assets/images/demos/demo-4/cats/4.png';
    import img5 from '~/assets/images/demos/demo-4/cats/5.png';
    import img6 from '~/assets/images/demos/demo-4/cats/6.png';

    const listCat = ref([
        {
            name: 'Computer & Laptop',
            link: '#',
            thumbnail: img1,
        },
        {
            name: 'Digital Cameras',
            link: '#',
            thumbnail: img2,
        },
        {
            name: 'Smart Phones',
            link: '#',
            thumbnail: img3,
        },
        {
            name: 'Televisions',
            link: '#',
            thumbnail: img4,
        },
        {
            name: 'Audio',
            link: '#',
            thumbnail: img5,
        },
        {
            name: 'Smart Watches',
            link: '#',
            thumbnail: img6,
        },
    ]);
</script>