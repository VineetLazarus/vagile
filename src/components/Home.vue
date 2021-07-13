<template>
  <div class="h-screen">
    <div
      :class="'flex py-2 bg-'+theme.base.color+'-'+theme.base.shade+' overflow-hidden'"
    >
    <MenuIcon class="h-8 w-8 text-gray-100" />
      <div class="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
import { MenuIcon } from "@heroicons/vue/outline";
import themer from '../modules/theme'

export default {
  name: "Home",
  components: {
    MenuIcon,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      message: null,
      theme: themer('green')
    };
  },
  created() {},
};
</script>

