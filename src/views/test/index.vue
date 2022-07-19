<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import AppLayout from '../../components/AppLayout.vue'
import IconSvg from '../../components/icon/IconSvg.vue'

const curInstance = getCurrentInstance()

function callCamera() {
  // H5调用电脑摄像头API
  navigator.mediaDevices
    .getUserMedia({
      video: true
    })
    .then((success) => {
      const video: HTMLVideoElement = curInstance?.refs
        .video as HTMLVideoElement
      // 摄像头开启成功
      video.srcObject = success
      // 实时拍照效果
      video.play()
    })
    .catch((_error) => {
      console.error('摄像头开启失败，请检查摄像头是否可用！')
    })
}

function closeCamera() {
  const video: HTMLVideoElement = curInstance?.refs.video as HTMLVideoElement
  if (!video.srcObject) {
    return
  }
  video.srcObject.getTracks().forEach((track: any) => {
    track.stop()
  })
  video.srcObject = null
}

function capture() {
  // const canvas: HTMLCanvasElement = curInstance?.refs
  //   .canvas as HTMLCanvasElement
  // const video: HTMLVideoElement = curInstance?.refs.video as HTMLVideoElement
  // const ctx = canvas.getContext('2d')
  // if (ctx != null) {
  //   // 把当前视频帧内容渲染到canvas上
  //   ctx.drawImage(video, 0, 0, 640, 480)
  // }
  // // 转base64格式、图片格式转换、图片质量压缩
  // const imgBase64 = canvas.toDataURL('image/jpeg', 0.7) // 由字节转换为KB 判断大小
  // const str = imgBase64.replace('data:image/jpeg;base64,', '')
  // const strLength = str.length
  // const fileLength = parseInt(strLength - (strLength / 8) * 2) // 图片尺寸  用于判断
  // let size = (fileLength / 1024).toFixed(2)
  // console.log(size) // 上传拍照信息  调用接口上传图片 .........
  // // 保存到本地
  // this.dialogCamera = false
  // let ADOM = document.createElement('a')
  // ADOM.href = this.headImgSrc
  // ADOM.download = new Date().getTime() + '.jpeg'
  // ADOM.click()
}
</script>

<template>
  <app-layout>
    <div class="container">
      <icon-svg @click="callCamera" name="camera" size="34" />
      <icon-svg @click="closeCamera" name="camera-off" size="34" />
      <icon-svg @click="capture" name="aperture" size="34" />
      <!--canvas截取流-->
      <canvas ref="canvas" width="640" height="480"></canvas>
      <!--图片展示-->
      <video ref="video" width="640" height="480" autoplay></video>
    </div>
  </app-layout>
</template>

<style scoped></style>
