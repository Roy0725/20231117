export default {
    data() {
      return {
        darkMode: false
      };
    },
    methods: {
      toggleMode() {
        this.darkMode = !this.darkMode;
      },
      setLightMode() {
        this.darkMode = false;
      }
    }
  };