import Vue from 'vue'

Vue.directive('outside', {
  // When the bound element is inserted into the DOM...
  bind: (el, binding) => {
    if (typeof binding.value !== 'function') {
      return
    }

    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }

    el.__vueOutside__ = handler
    document.addEventListener('click', handler)
  },
  unbind: (el) => {
    document.removeEventListener('click', el.__vueOutside__)
    el.__vueOutside__ = null
  }
})
