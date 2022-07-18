<script lang="ts" setup>
import GlobalNav from '@/components/global/GlobalNav.vue'
import LogoElem from '@/components/logo/LogoElem.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { appFunctions } from '../../utils/AppFunctions'

import LightIcon from '@/assets/images/icons/sun-01.svg'
import DarkIcon from '@/assets/images/icons/vector.svg'

export interface HeaderProps {
  showTopHeader?: boolean
  showThemeSwitcherButton?: boolean
  headerTransparency?: boolean
}

const data = withDefaults(defineProps<HeaderProps>(), {
  showTopHeader: () => true,
  showThemeSwitcherButton: () => true,
  headerTransparency: () => false
})

function toggleStickyHeader(): void {
  const scrolled = document.documentElement.scrollTop
  if (scrolled > 100) {
    appFunctions.addClass('.header-default', 'sticky')
  } else if (scrolled <= 100) {
    appFunctions.removeClass('.header-default', 'sticky')
  }
}

window.addEventListener('scroll', toggleStickyHeader)

onMounted(() => {
  toggleStickyHeader()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleStickyHeader)
})
</script>

<template>
  <div :class="{ 'header-transparent-with-topbar': headerTransparency }">
    <!-- Start Header Area -->
    <header
      class="rn-header header-default header-not-transparent header-sticky"
    >
      <div class="container position-relative">
        <div class="row align-items-center row--0">
          <div class="col-lg-9 col-md-6 col-4 position-static">
            <div class="header-left d-flex">
              <logo-elem />
              <nav class="mainmenu-nav d-none d-lg-block">
                <global-nav />
              </nav>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-8">
            <div class="header-right">
              <div class="header-btn">
                <a class="btn-default btn-small round" href="#"> 登陆 </a>
              </div>

              <div
                v-if="data.showThemeSwitcherButton"
                id="my_switcher"
                class="my_switcher"
              >
                <ul>
                  <li>
                    <a
                      href="javascript: void(0);"
                      @click.prevent="
                        appFunctions.toggleClass('body', 'active-light-mode')
                      "
                    >
                      <img
                        class="light-icon"
                        :src="LightIcon"
                        alt="Sun images"
                      />
                      <img
                        class="dark-icon"
                        :src="DarkIcon"
                        alt="Moon Images"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Area -->

    <!-- Start Theme Style -->
    <div>
      <div class="rn-gradient-circle" />
      <div class="rn-gradient-circle theme-pink" />
    </div>
    <!-- End Theme Style -->
  </div>
</template>
