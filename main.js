Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data: {
    disc: [],
    searchArtist: "",
    selectGenre: "",
  },
  mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((response) => {
        this.disc = response.data.response;
        console.log(this.disc);
        this.disc.sort((a, b) => (a.year < b.year) ? 1 : -1)
        });
    },
  methods: {
  }
});
