const { createApp } = Vue;

createApp({
  data() {
    return {
      listaDischi: [],
      apiUrl: 'server.php'
    };
  },
  created() {
    axios
      .get(this.apiUrl)
      .then((resp) => {
        // console.log(resp);
        this.listaDischi = resp.data;
      })
  },
  methods: {
  },
}).mount("#app");