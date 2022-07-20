<script lang="ts" setup>
import AppLayout from '@/components/AppLayout.vue'
import SectionTitle from '@/components/intro/SectionTitle.vue'
import LoginForm from '@/components/login/LoginForm.vue'
import FaceLogin from '@/components/login/FaceLogin.vue'

import LoginImg from '@/assets/images/about/contact-image.jpg'
</script>

<template>
  <app-layout>
    <div class="container rn-section-gapBottom">
      <div class="row row--30 mt--40 d-flex align-items-center">
        <div class="col-lg-6 order-2 oder-lg-1 mt_md--30 mt_sm--30">
          <section-title
            text-align="center"
            title="登陆"
            description="输入手机号和密码，如果没有注册会自动注册并登陆，已注册用户可以直接登陆"
            data-aos="fade-up"
          />
          <login-form />
          <!-- <face-login /> -->
        </div>
        <div class="col-lg-6 order-1 oder-lg-2">
          <div class="thumbnail">
            <img class="radius w-100" :src="LoginImg" alt="Corporate" />
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<style scoped></style>
