<script lang="ts" setup>
import SectionTitle from '@/components/intro/SectionTitle.vue'
import CustomerBrand, { BrandData } from '@/components/intro/CustomerBrand.vue'

import Brand01 from '@/assets/images/brand/brand-01.png'
import Brand02 from '@/assets/images/brand/brand-02.png'
import Brand03 from '@/assets/images/brand/brand-03.png'
import Brand04 from '@/assets/images/brand/brand-04.png'
import Brand05 from '@/assets/images/brand/brand-05.png'
import Brand06 from '@/assets/images/brand/brand-06.png'
import Brand07 from '@/assets/images/brand/brand-07.png'
import Brand08 from '@/assets/images/brand/brand-08.png'

const brandList: BrandData[] = [
  { image: Brand01 },
  { image: Brand02 },
  { image: Brand03 },
  { image: Brand04 },
  { image: Brand05 },
  { image: Brand06 },
  { image: Brand07 },
  { image: Brand08 },
  { image: Brand01 },
  { image: Brand02 },
  { image: Brand03 },
  { image: Brand04 },
  { image: Brand05 },
  { image: Brand06 },
  { image: Brand07 },
  { image: Brand08 },
  { image: Brand07 },
  { image: Brand08 }
]
</script>

<template>
  <div class="rwt-brand-area rn-section-gapBottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <section-title
            text-align="center"
            subtitle="我们的客户"
            title="AI大脑帮助客户与伙伴成功"
            data-aos="fade-up"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mt--10">
          <customer-brand :brand-list="brandList" :brand-style="2" />
        </div>
      </div>
    </div>
  </div>
</template>
