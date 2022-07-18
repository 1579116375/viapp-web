<script lang="ts" setup>
import AppLayout from '@/components/AppLayout.vue'
import TabForm from '@/components/common/TabForm.vue'
</script>

<template>
  <app-layout>
    <div class="container rn-section-gapBottom">
      <div class="row row--30 mt--40">
        <div class="col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30">
          <tab-form />
        </div>
        <div class="col-lg-6 order-1 oder-lg-2">
          <div class="thumbnail">
            <img
              class="radius w-100"
              src="../../assets/images/about/contact-image.jpg"
              alt="Corporate"
            />
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<style scoped></style>
