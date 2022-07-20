<script lang="ts" setup>
import FaceLogin from '@/components/login/FaceLogin.vue'
</script>

<template>
  <div class="rn-default-tab">
    <form class="contact-form-1" action="">
      <div class="form-group">
        <input type="text" name="phone" placeholder="电话号码" required />
      </div>

      <div class="form-group">
        <input type="password" name="password" placeholder="密码" required />
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn-default btn-large">登陆</button>

        <button
          type="button"
          class="btn-default btn-large"
          data-bs-toggle="modal"
          data-bs-target="#faceLogin"
        >
          Face
        </button>
      </div>
    </form>
  </div>

  <div
    class="modal row justify-content-center row--15"
    id="faceLogin"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog col-md-6 col-12">
      <div class="rn-pricing active style-5">
        <div class="modal-content pricing-table-inner">
          <div class="pricing-header">
            <h4 class="title">人脸识别</h4>
            <div class="pricing">
              <face-login />
            </div>
          </div>
          <div class="pricing-footer">
            <a
              class="btn-default btn-border btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              取消
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
