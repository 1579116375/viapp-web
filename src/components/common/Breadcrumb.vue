<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="breadcrumb-area breadcarumb-style-1 ptb--120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-center">
            <h1
              class="title theme-gradient h2"
              v-html="title"
              data-aos="fade-up"
            ></h1>
            <!-- <ul class="page-list" data-aos="fade-up" data-aos-delay="50">
              <li class="rn-breadcrumb-item">
                <router-link :to="rootUrl">{{ parentUrl }}</router-link>
              </li>
              <li class="rn-breadcrumb-item active">{{ currentUrl }}</li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
