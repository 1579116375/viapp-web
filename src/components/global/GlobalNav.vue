<script lang="ts" setup>
import MenuItem, { MenuItemData } from '@/components/global/MenuItem.vue'

const keyFunction: MenuItemData[] = [
  { routerLink: '/display', routerName: '车辆展示' },
  { routerLink: '/vlpr', routerName: '车牌识别' },
  { routerLink: '/', routerName: '车型识别' },
  { routerLink: '/', routerName: '车辆检测' },
  { routerLink: '/', routerName: '车辆属性识别' },
  { routerLink: '/', routerName: '车损识别' },
  { routerLink: '/', routerName: '驾驶行为分析' }
]

const elemData1: MenuItemData[] = [
  { routerLink: '/', routerName: '通用物体和场景识别别', spanClass: 'rn-badge-card', spanContent: '热门' },
  { routerLink: '/', routerName: '植物识别' },
  { routerLink: '/', routerName: '动物识别' },
  { routerLink: '/', routerName: '地标识别', spanClass: 'rn-badge-card', spanContent: '新品' },
  { routerLink: '/', routerName: '货币识别' },
  { routerLink: '/', routerName: '翻拍识别', spanClass: 'rn-badge-card', spanContent: '新品' },
  { routerLink: '/', routerName: '果蔬识别' }
]

const elemData2: MenuItemData[] = [
  { routerLink: '/', routerName: '车型识别', spanClass: 'rn-badge-card', spanContent: '开发中' },
  { routerLink: '/', routerName: '车牌识别', spanClass: 'rn-badge-card', spanContent: '热门' },
  { routerLink: '/', routerName: '车辆属性识别' },
  { routerLink: '/', routerName: '车辆损伤识别' },
  { routerLink: '/', routerName: '驾驶员行为分析', spanClass: 'rn-badge-card', spanContent: '热门' }
]
const elemData3: MenuItemData[] = [
  { routerLink: '/', routerName: '色情识别', spanClass: 'rn-badge-card', spanContent: '邀测' },
  { routerLink: '/', routerName: '违禁识别', spanClass: 'rn-badge-card', spanContent: '热门' },
  { routerLink: '/', routerName: '广告检测', spanClass: 'rn-badge-card', spanContent: '热门' },
  { routerLink: '/', routerName: '公众人物识别' },
  { routerLink: '/', routerName: '恶心图像识别' }
]
const elemData4: MenuItemData[] = [
  { routerLink: '/', routerName: '黑白图像上色', spanClass: 'rn-badge-card', spanContent: '邀测' },
  { routerLink: '/', routerName: '图像风格转换' },
  { routerLink: '/', routerName: '人物动漫化', spanClass: 'rn-badge-card', spanContent: '新品' },
  { routerLink: '/', routerName: '天空分割', spanClass: 'rn-badge-card', spanContent: '热门' }
]

</script>

<template>
  <ul class="mainmenu">
    <li class="has-droupdown has-menu-child-item">
      <a href="#"> 开放能力 </a>
      <menu-item item-type="submenu" :data="keyFunction" />
    </li>

    <li class="with-megamenu has-menu-child-item">
      <a href="#"> 主要功能 </a>
      <div class="rn-megamenu">
        <div class="wrapper">
          <div class="row row--0">
            <div class="col-lg-3 single-mega-item">
              <menu-item item-type="mega-menu-item" :data="elemData1" />
            </div>
            <div class="col-lg-3 single-mega-item">
              <menu-item item-type="mega-menu-item" :data="elemData2" />
            </div>
            <div class="col-lg-3 single-mega-item">
              <menu-item item-type="mega-menu-item" :data="elemData3" />
            </div>
            <div class="col-lg-3 single-mega-item">
              <menu-item item-type="mega-menu-item" :data="elemData4" />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li><router-link to="/">关于我们</router-link></li>

    <li><router-link to="/">咨询</router-link></li>
  </ul>
</template>
