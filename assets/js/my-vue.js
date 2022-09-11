const HelloVue = {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}

Vue.createApp(HelloVue).mount('#hello-vue')

const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
};

Vue.createApp(Counter).mount("#counter");