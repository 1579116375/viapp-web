<script lang="ts" setup>
import Button from '@/components/common/Button.vue'
import RetInfo, { RetProps } from '@/components/common/RetInfo.vue'
import { ref, getCurrentInstance } from 'vue'

import UploadFlagImg from '@/assets/images/split/split-01.jpg'
import UploadFailed from '@/assets/images/error/upload-failed.png'
import axios from 'axios'

const RecogImg = ref(UploadFlagImg)

const list: RetProps[] = [
  { title: '车牌', msg: '京A·888888' },
  { title: '车牌', msg: '京A·888888' },
  { title: '车牌', msg: '京A·888888' }
]

const curInstance: any = getCurrentInstance()

function uploadImgTrigger() {
  curInstance.refs.updRef.dispatchEvent(new MouseEvent('click'))
}

function uploadImg(event: any) {
  const file = event.target.files[0]
  const formData = new FormData()
  console.log(file)
  formData.append('file', file)

  let imgUrl = ''

  axios
    .post('http://127.0.0.1:6326/v1/img', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((resp) => {
      imgUrl = resp.data.img_url
      console.log('axios -- ' + imgUrl)
      // console.log(resp.data.img_url)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      if (imgUrl !== '') {
        console.log('if -- ' + imgUrl)
        RecogImg.value = imgUrl
      } else {
        RecogImg.value = UploadFailed
      }
    })
}
</script>

<template>
  <div class="rn-splite-style">
    <div class="split-wrapper">
      <div class="row no-gutters radius-10 align-items-center">
        <div class="col-lg-12 col-xl-6 col-12">
          <input
            id="file-upload"
            ref="updRef"
            @change="uploadImg"
            type="file"
            accept="image/*"
            name="picture"
          />
          <div
            id="recog-img-con"
            class="thumbnail image-left-content"
            @click="uploadImgTrigger"
          >
            <img :src="RecogImg" alt="Split Image" />
          </div>
        </div>
        <div class="col-lg-12 col-xl-6 col-12">
          <div class="split-inner">
            <p class="description">
              点击图片显示区域上传含车牌的汽车图片或车牌图片，点击“开始识别”按钮开始识别
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

<style scoped>
#recog-img-con:hover {
  cursor: pointer;
}

#file-upload {
  display: none;
}
</style>
