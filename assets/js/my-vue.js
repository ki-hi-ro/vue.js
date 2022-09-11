const HelloVue = {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}

Vue.createApp(HelloVue).mount('#hello-vue')