<script lang="ts" setup>
import AppLayout from '@/components/AppLayout.vue'
import IconSvg from '@/components/icon/IconSvg.vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import DisplayCard from '@/components/intro/DisplayCard.vue'

import CardImg from '@/assets/images/blog/blog-01.jpg'
const Cards = [
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' },
  { img: CardImg, title: '车辆展示' }
]
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
                v-for="(card, index) in Cards"
                :key="index"
              >
                <display-card :img="card.img" :title="card.title" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 text-center">
            <div class="rwt-load-more text-center mt--60">
              <a class="btn-default" href="#">
                查看更多... <icon-svg name="loader" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
</template>
