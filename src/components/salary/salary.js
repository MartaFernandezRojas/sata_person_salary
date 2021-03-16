import data from './people.json';

export default {
  data() {
    return {
      search_input: "",
      word_search: "java",
      resultsFilter: [],
      loading: false,
    };
  },
  mounted() {
    console.log(data)
    //calculate filter by age
    this.resultsFilter=this.ageLimit(35);

  },
  methods: {

    //method for filter data with by age
    ageLimit(maxValue){
      const peopleLimitAge = data.filter(person => person.age >= maxValue);
      console.log(peopleLimitAge)
      return peopleLimitAge;
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
