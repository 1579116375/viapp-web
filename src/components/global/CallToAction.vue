<script lang="ts" setup>
import IconSvg from '@/components/icon/IconSvg.vue'

export interface ContentData {
  title: string
  subtitle: string
  btnText: string
}

defineProps<ContentData>()
</script>

<template>
  <div
    class="rn-callto-action rn-call-to-action style-8 content-wrapper"
    style="{ 'background-image': '' }"
  >
    <div class="container">
      <div class="row row--0 align-items-center">
        <div class="col-lg-12">
          <div class="inner">
            <div class="content text-center">
              <h2
                class="title"
                v-html="title"
                data-aos="fade-up"
                data-aos-delay="60"
              />
              <h6
                class="subtitle"
                v-html="subtitle"
                data-aos="fade-up"
                data-aos-delay="60"
              />
              <div
                class="call-to-btn text-center mt--30"
                data-aos="fade-up"
                data-aos-delay="60"
              >
                <a class="btn-default btn-icon" href="#">
                  {{ btnText }}
                  <icon-svg name="arrow-right" class="size-20" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
