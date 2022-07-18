<script lang="ts" setup>
import MenuItem, { MenuItemData } from '@/components/global/MenuItem.vue'

const keyFunction: MenuItemData[] = [
  { routerLink: '/', routerName: '车牌识别' },
  { routerLink: '/', routerName: '车型识别' },
  { routerLink: '/', routerName: '车辆检测' },
  { routerLink: '/', routerName: '车流统计' },
  { routerLink: '/', routerName: '车辆属性识别' },
  { routerLink: '/', routerName: '车辆外观损伤识别' }
]

const elemData1: MenuItemData[] = [
  { routerLink: '/', routerName: '车牌识别' },
  { routerLink: '/', routerName: '车型识别' },
  { routerLink: '/', routerName: '车辆检测' },
  { routerLink: '/', routerName: '车流统计' },
  { routerLink: '/', routerName: '车辆属性识别' },
  { routerLink: '/', routerName: '车辆外观损伤识别' },
  { routerLink: '/', routerName: '车辆分割' }
]

const elemData2: MenuItemData[] = [
  { routerLink: '/', routerName: '车牌识别', spanClass: 'rn-badge-card', spanContent: 'Hot' },
  { routerLink: '/', routerName: '车牌识别', spanClass: 'rn-badge-card', spanContent: 'Coming' },
  { routerLink: '/', routerName: '车牌识别', spanClass: 'rn-badge-card', spanContent: 'Hot' },
  { routerLink: '/', routerName: '车牌识别' },
  { routerLink: '/', routerName: '车牌识别' }
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
              <menu-item item-type="mega-menu-item" :data="elemData1" />
            </div>
            <div class="col-lg-3 single-mega-item">
              <menu-item item-type="mega-menu-item" :data="elemData2" />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li><router-link to="/">关于我们</router-link></li>

    <li><router-link to="/">咨询</router-link></li>
  </ul>
</template>
