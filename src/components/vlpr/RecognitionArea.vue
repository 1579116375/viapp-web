<script lang="ts" setup>
import SplitDataImg from '@/assets/images/split/split-01.jpg'
import Button from '@/components/common/Button.vue'
import RetInfo, { RetProps } from '@/components/common/RetInfo.vue'

const list: RetProps[] = [
  { title: '车牌', msg: '京A·888888' },
  { title: '车牌', msg: '京A·888888' },
  { title: '车牌', msg: '京A·888888' }
]
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
            <p class="description">
              点击左侧区域上传含车牌的汽车图片，点击“开始识别”按钮开始识别
            </p>
            <div class="rbt-single-widget widget_recent_entries mt--40">
              <h3 class="title">识别结果</h3>
              <div class="inner">
                <ret-info :list="list" />
              </div>
            </div>
            <div class="view-more-button mt--35">
              <Button title="开始识别" is-link="false" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
