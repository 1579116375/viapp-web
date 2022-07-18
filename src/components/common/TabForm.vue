<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabContent = [
  {
    id: 1,
    menu: '登录',
    content: '<h1>Login Form</h1>'
  },
  {
    id: 2,
    menu: '注册',
    content: '<h1>Register Form</h1>'
  },
  {
    id: 3,
    menu: '人脸识别登陆',
    content: '<h1>人脸识别登陆</h1>'
  }
]
</script>

<template>
  <div class="rn-default-tab">
    <ul class="nav nav-tabs tab-button" role="tablist">
      <li
        class="nav-item tabs__tab"
        role="presentation"
        v-for="(tabMenu, index) in tabContent"
        :key="index"
      >
        <button
          class="nav-link text-capitalize"
          :class="{ active: index === 0 }"
          :id="`${tabMenu.menu}-tab`"
          data-bs-toggle="tab"
          :data-bs-target="`#${tabMenu.menu}`"
          type="button"
          role="tab"
          :aria-controls="tabMenu.menu"
          :aria-selected="index === activeTab ? 'true' : 'false'"
          @click="activeTab = index"
        >
          {{ tabMenu.menu }}
        </button>
      </li>
    </ul>
    <div class="rn-tab-content tab-content">
      <div
        class="tab-pane fade"
        :class="{ 'show active': index === 0 }"
        :id="content.menu"
        role="tabpanel"
        :aria-labelledby="`${content.menu}-tab`"
        v-for="(content, index) in tabContent"
        :key="index"
      >
        <!-- <div v-html="content.content" /> -->
        <form class="contact-form-1" action="">
          <div class="form-group">
            <input type="text" name="phone" placeholder="电话号码" required />
          </div>

          <div class="form-group">
            <input
              type="password"
              name="password"
              placeholder="密码"
              required
            />
          </div>

          <div class="form-group">
            <button class="btn-default btn-large">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
