<script lang="ts" setup>
import AppLayout from '@/components/AppLayout.vue'
import IconSvg from '@/components/icon/IconSvg.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import DisplayCard from '@/components/intro/DisplayCard.vue'

// import CardImg from '@/assets/images/blog/blog-01.jpg'
import axios from 'axios'
import { ref } from 'vue'

const cars = ref(null)
const pageSize = ref(27)

function getCarList(pageSize: number): void {
  axios
    .get('http://127.0.0.1:8022/v1/car/list', {
      params: {
        pageNo: 0,
        pageSize
      }
    })
    .then((resp) => {
      cars.value = resp.data
    })
}

getCarList(pageSize.value)

function loadMore() {
  pageSize.value += 27
  getCarList(pageSize.value)
}
</script>

<template>
  <app-layout>
    <breadcrumb title="车辆展示" />

    <div class="rn-blog-area rn-section-gap">
      <div class="container">
        <div class="row mt_dec--30">
          <div class="col-lg-12">
            <div class="row row--15">
              <div
                class="col-lg-4 col-md-6 col-12 mt--30"
                data-aos="slide-up"
                data-aos-duration="800"
                :data-aos-delay="100 + index"
                v-for="(card, index) in cars"
                :key="index"
              >
                <display-card
                  :img="card['car_img']"
                  :title="card['car_name']"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="rwt-load-more text-center mt--60">
              <a id="load-more" class="btn-default" @click="loadMore">
                查看更多... <icon-svg name="loader" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<style scoped>
#load-more:hover {
  cursor: pointer;
}
</style>
