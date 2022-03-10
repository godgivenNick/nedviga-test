import Vue from 'vue'

const ls = {
  get: key => {
    return JSON.parse(localStorage.getItem(key))
  },
  set: (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
  },
  clear: () => {
    localStorage.clear()
  }
}

Vue.prototype.$ls = ls

export default ls
