<template>
  <div class="row row--15 service-wrapper">
    <div
      class="service gallery-style text-center"
      data-aos="fade-up"
      data-aos-delay="70"
    >
      <div class="inner">
        <div class="image">
          <!-- <img
            src="../../assets/images/service/gallery-image-01.png"
            alt="Service Images"
          /> -->
          <video
            width="380"
            height="236"
            ref="videoDom"
            id="video"
            preload
            autoplay
            loop
            muted
          ></video>
          <canvas width="380" height="236" ref="canvasDOM"></canvas>
        </div>
        <div class="content">
          <p class="description">{{ loding }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="rn-team team-style-two">
    <div data-aos="fade-up" data-aos-delay="60">
      <div class="inner">
        <figure class="thumbnail"></figure>
        <figcaption class="content"></figcaption>
      </div>
    </div>
  </div>

  <div class="button-group">
    <button class="btn-default col-6" @click="initTracker">人脸识别</button>
    <button class="btn-default col-6" @click="onStopTracking">停止识别</button>
  </div>
</template>

<script>
import '@/assets/js/tracking-min.js'
import '@/assets/js/face-min.js'
import axios from 'axios'

export default {
  name: 'testTracking',
  data() {
    return {
      // 记录拍照到了几次
      count: 0,
      isdetected: '请您保持脸部在画面中央',
      loding: ''
    }
  },
  methods: {
    initTracker() {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(this.getMediaStreamSuccess)
        .catch(this.getMediaStreamError)

      this.context = this.canvas.getContext('2d')

      this.tracker = new tracking.ObjectTracker('face')
      this.tracker.setInitialScale(4)
      this.tracker.setStepSize(2)
      this.tracker.setEdgesDensity(0.1)
      this.tracker.on('track', (event) => {
        this.onTracked(event)
      })

      this.trackerTask = tracking.track(this.video, this.tracker)
    },
    onTracked(event) {
      // 判断终止条件, stop是异步的，不返回的话，还会一直截图
      if (this.count >= 21) {
        this.onStopTracking()
        return
      }

      // 画框框
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      event.data.forEach((rect) => {
        this.context.lineWidth = 1
        this.context.strokeStyle = '#a64ceb'
        // '#a64ceb';
        this.context.strokeRect(rect.x, rect.y, rect.width, rect.height)
        this.context.font = '11px Helvetica'
        this.context.fillStyle = '#fff'
        // 截图

        if (event.data.length > 0 && this.count <= 20) {
          if (this.count < 0) {
            this.count = 0
          }
          this.count += 1
          if (this.count > 20) {
            this.isdetected = '已检测到人脸，正在识别'
            this.getPhoto()
          }
        } else {
          this.count -= 1
          if (this.count < 0) {
            this.isdetected = '请您保持脸部在画面中央'
          }
        }
      })
      // 视频中心展示文字
      this.context.fillText(this.isdetected, 100, 30)
    },
    // 停止监听
    onStopTracking() {
      this.trackerTask.stop()
      this.video.pause()
      // 关闭摄像头
      this.video.srcObject = null
      window.stream.getTracks().forEach((track) => track.stop())
    },
    // 获取人脸照片
    getPhoto() {
      this.isdetected = ''
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      const video = document.getElementById('video')
      this.context.drawImage(video, 0, 0, this.canvas.width, this.canvas.height)
      const dataUrl = this.canvas.toDataURL('image/jpeg', 1)
      this.imgbase64 = dataUrl.replace(/^data:image\/\w+;base64,/, '')
      console.log(this.imgbase64)
      // 开始人脸识别
      this.postFace()
    },
    // 人脸验证
    postFace() {
      this.loding = '正在识别中,请稍后................'
      axios.post('http://127.0.0.1:')
      // this.$axios
      //   .post('http://192.168.50.35:3000/checkFace', {
      //     access_token: this.access_token,
      //     img: this.imgbase64
      //   })
      //   .then((res) => {
      //     console.log(res)
      //     this.loding = ''
      //     if (res.data.error_code !== 0) {
      //       if (res.data.error_code == 223120) {
      //         alert('活体监测失败')
      //       }
      //     } else {
      //       if (res.data.result.user_list[0].score > 80) {
      //         alert('人脸识别成功')
      //       } else {
      //         alert('人脸识别失败,查不到')
      //       }
      //     }
      //   })
    },
    // 视频流启动
    getMediaStreamSuccess(stream) {
      window.stream = stream
      this.video.srcObject = stream
    },
    // 视频媒体流失败
    getMediaStreamError(error) {
      alert('视频媒体流获取错误' + error)
    }
  },
  mounted() {
    this.video = this.$refs.videoDom
    this.canvas = this.$refs.canvasDOM
  },
  unmounted() {
    this.onStopTracking()
  }
}
</script>

<style scoped>
</style>
