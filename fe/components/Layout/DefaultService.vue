<template>
  <div class="bg-transparent">
    <div class="container mx-auto py-20">
      <div class="grid grid-cols-4 gap-x-2">
        <div v-for="(item, idx) in services" :key="idx" class="flex flex-row justify-center items-center space-x-3">
          <div class="flex flex-row items-center">
            <component :is="item.icon" class="h-16 w-16 font-semibold" />
          </div>
          <div class="">
            <h3 class="font-semibold mb-0 text-3xl">{{ item.title }}</h3><!-- End .icon-box-title -->
            <p>{{ item.caption }}</p>
          </div><!-- End .icon-box-content -->
        </div><!-- End .icon-box -->
      </div>
    </div><!-- End .container -->
  </div><!-- End .icon-boxes-container -->
</template>

<script setup>
import { RocketLaunchIcon, BackwardIcon, InformationCircleIcon, LifebuoyIcon } from '@heroicons/vue/24/outline';

const services = [
  {
    icon: RocketLaunchIcon,
    title: 'Miễn phí ship',
    caption: 'Với đơn trên 3.000.000',
  },
  {
    icon: BackwardIcon,
    title: 'Đổi trả thoải mái',
    caption: 'Trong vòng 30 ngày',
  },
  {
    icon: InformationCircleIcon,
    title: 'Giảm giá 1 sản phẩm',
    caption: 'Khi đăng ký tài khoản',
  },
  {
    icon: LifebuoyIcon,
    title: 'Hỗ trợ tận tâm',
    caption: '24/7',
  },
]
</script>