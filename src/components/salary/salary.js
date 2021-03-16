import data from './people.json';

export default {
  data() {
    return {
      search_input: "",
      word_search: "java",
      resultsSearch: [],
      loading: false,
    };
  },
  mounted() {
    console.log(data)
  },
  methods: {

    
    ageMargin(){

    },

    // search
    searchValue() {
      var self = this;
      this.loading = true;
      // api request
      this.getSearchApi(this.search_input)
        .then((res) => {
          self.resultsSearch = res.data.items.splice(0, 10);
          //off spinner
          self.loading = false;
        })
        .catch((err) => {
          //off spinner
          self.loading = false;
        });
    },
  },
};
