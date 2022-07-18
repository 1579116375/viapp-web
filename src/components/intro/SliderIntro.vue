<script lang="ts" setup>
import IconSvg from '@/components/icon/IconSvg.vue'

import SliderImg from '@/assets/images/home/slider-img-1.jpg'
</script>

<template>
  <div class="slider-area slider-style-1 bg-transparent variation-2 height-750">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
          <div class="inner text-left">
            <h1
              class="title theme-gradient display-two"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              车辆分析 <br />
            </h1>
            <p class="description" data-aos="fade-up" data-aos-delay="150">
              准确识别图像中的车辆相关信息，包括车型识别、车辆检测、车流统计、车辆属性识别、
              车辆外观损伤识别等能力，支持服务器端私有化部署，并提供边缘侧软硬一体方案
            </p>
            <div class="button-group" data-aos="fade-up" data-aos-delay="200">
              <router-link class="btn-default btn-medium round btn-icon" to="#">
                立即使用
                <icon-svg name="arrow-right" size="20" icon-class="icon" />
              </router-link>
              <router-link
                class="btn-default btn-medium btn-border round btn-icon"
                to=""
              >
                技术文档
                <icon-svg name="arrow-right" size="20" icon-class="icon" />
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 order-1 order-lg-2">
          <div class="thumbnail" data-aos="fade-up" data-aos-delay="250">
            <img :src="SliderImg" alt="Banner Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
