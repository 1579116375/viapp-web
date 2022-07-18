<script lang="ts" setup>
import AppLayout from '@/components/AppLayout.vue'
import SectionTitle from '@/components/intro/SectionTitle.vue'
import RecognitionArea from '@/components/vlpr/RecognitionArea.vue'
</script>

<template>
  <app-layout>
    <div class="rwt-split-area rn-section-gap">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-12 mb--40">
            <section-title
              text-align="center"
              subtitle="开放功能"
              title="车牌识别"
              description="识别中国大陆各类机动车车牌信息，支持蓝牌、黄牌（单双行）、绿牌、大型新能源（黄绿）、<br/>领使馆车牌、警牌、武警牌（单双行）、军牌（单双行）、港澳出入境车牌、农用车牌、民航车牌，并能同时识别图像中的多张车牌"
              data-aos="fade-up"
              data-aos-delay="60"
            />
          </div>
        </div>
        <recognition-area />
      </div>
    </div>
  </app-layout>
</template>
