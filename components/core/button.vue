<template lang="pug">
component.button-component(
  :is="tag"
  :to="to"
  :href="href"
  :class="[`theme-${theme}`]"
  @click="$emit('click')")
  slot
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    to: String,
    href: String,
    theme: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    tag () {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'nuxt-link'
      } else {
        return 'button'
      }
    }
  }
}
</script>
