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
              subtitle="开发功能"
              title="车牌识别"
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
