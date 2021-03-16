import data from "./people.json";

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
    //split and create firstname and lastname
    this.divideName(data);
    //calculate filter by age
    this.resultsFilter = this.ageLimit(35);
  },
  methods: {
    //divide name in firstname and lastname for visualization
    divideName(data) {
     data.filter(
        (person) => (person.firstname = person.name.split(" ")[0])
      );
       data.filter(
        (person) => (person.lastname = person.name.split(" ")[1])
      );
    },
    //method for filter data with by age
    ageLimit(maxValue) {
      const peopleLimitAge = data.filter((person) => person.age >= maxValue);
      console.log(peopleLimitAge);
      return peopleLimitAge;
    },
    showSalary() {
      console.log("salary");
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
