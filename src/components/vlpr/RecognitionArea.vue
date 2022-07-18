<script lang="ts" setup>
import SplitDataImg from '@/assets/images/split/split-01.jpg'
</script>

<template>
  <div class="rn-splite-style">
    <div class="split-wrapper">
      <div class="row no-gutters radius-10 align-items-center">
        <div class="col-lg-12 col-xl-6 col-12">
          <div class="thumbnail image-left-content">
            <img :src="SplitDataImg" alt="Split Image" />
          </div>
        </div>
        <div class="col-lg-12 col-xl-6 col-12">
          <div class="split-inner">
            <h4 class="title">识别信息</h4>
            <p class="description">
              识别中国大陆各类机动车车牌信息，支持蓝牌、黄牌（单双行）、绿牌、大型新能源（黄绿）、领使馆车牌、警牌、武警牌（单双行）、军牌（单双行）、港澳出入境车牌、农用车牌、民航车牌，并能同时识别图像中的多张车牌
            </p>
            <ul class="split-list">
              <!-- <li v-for="listItem in splitData.list">{{ listItem }}</li> -->
            </ul>
            <div class="view-more-button mt--35">
              <!-- <Button :title="splitData.btn.text" :url="splitData.btn.link" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
