import {
    createApp,
    ref,
    computed,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
  
  createApp({
    setup() {
      const isTrue = ref(false);
      
      return {
        isTrue,
      };
    },
  }).mount("#app");
  