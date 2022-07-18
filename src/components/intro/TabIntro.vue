<script lang="ts" setup>
import SectionTitle from '@/components/intro/SectionTitle.vue'
import AdvancedTab, { TabData } from '@/components/intro/AdvancedTab.vue'
import Tabs02 from '@/assets/images/tab/tabs-02.jpg'
import Tabs03 from '@/assets/images/tab/tabs-03.jpg'
import Tabs04 from '@/assets/images/tab/tabs-04.jpg'

const tabData: TabData[] = [
  {
    id: 1,
    menu: '拍照识车',
    title: '拍照识车',
    description: '根据拍摄照片，快速识别图片中车辆的品牌型号',
    // '根据拍摄照片，快速识别图片中车辆的品牌型号，提供针对性的信息或服务，可用于相册管理、图片分类打标签、电子汽车说明书、一键拍照租车等场景',
    image: Tabs02
  },
  {
    id: 2,
    menu: '违章停车监测',
    title: '违章停车监测',
    description: '监控分析城市道路、园区/厂区等公共场所的车辆停放情况，判断核心区域是否有违章停车',
    // '监控分析城市道路、园区/厂区等公共场所的车辆停放情况，判断核心区域是否有违章停车，并进一步识别违章车辆的车牌号码、品牌型号，实现自动化的违章审计',
    image: Tabs03
  },
  {
    id: 3,
    menu: '智能卡口',
    title: '智能卡口',
    description: '实现无卡、无人的智能化卡口管理，提升通行效率',
    // '监控高速路闸口、停车场出入口的进出车辆，基于车牌、车型、车辆属性等信息对车辆身份进行识别校验，实现无卡、无人的智能化卡口管理，提升通行效率',
    image: Tabs04
  }
]
</script>

<template>
  <div class="rwt-advance-tab-area rn-section-gap">
    <div class="container">
      <div class="row mb--40">
        <div class="col-lg-12">
          <section-title
            text-align="center"
            subtitle="全方位提供服务"
            title="应用场景"
            description="我国积极推进智能网联汽车测试示范区建设工作，初步形成了“5+2”的建设格局。各地区结合智能网联汽车发展状况，依托地区优势、特色资源，积极探索和建设示范区。"
            data-aos="fade-up"
          />
        </div>
      </div>
      <advanced-tab :tab-data="tabData" />
    </div>
  </div>
</template>
