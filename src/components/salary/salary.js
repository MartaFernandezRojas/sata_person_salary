import data from "./people.json";

export default {
  data() {
    return {
      resultsFilter: [],
      loading: false,
      average: 0,
    };
  },
  mounted() {
    this.average = 0;
    //split and create firstname and lastname
    this.divideName(data);
    //calculate filter by age
    this.resultsFilter = this.ageLimit(35);
  },
  methods: {
    //divide name in firstname and lastname for visualization
    divideName(data) {
      data.filter((person) => (person.firstname = person.name.split(" ")[0]));
      data.filter((person) => (person.lastname = person.name.split(" ")[1]));
      data.filter((person) => (person.salary = "calculating..."));
    },
    //method for filter data with by age
    ageLimit(maxValue) {
      const peopleLimitAge = data.filter((person) => person.age >= maxValue);
      console.log(peopleLimitAge);
      return peopleLimitAge;
    },

    //function delay with promise that asign salary
    delay(ms, i) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
        this.resultsFilter[i].salary = Math.round(ms);
        console.log(ms, this.resultsFilter[i]);
        if (i + 1 == this.resultsFilter.length) {
          //call for calculate average when finish
          this.showAverage();
        }
      });
    },
    // function that call delay with random number
    async printSalary() {
      this.average = 0;
      for (let i = 0; i < this.resultsFilter.length; i++) {
        await this.delay(Math.random() * 1000, i); // wait
      }
    },
    //function for calculate average
    showAverage() {
      this.average = Object.values(this.resultsFilter).reduce(
        (avg, { salary }, _, { length }) => avg + salary / length,
        0
      );
      console.log(this.average);
    },
  },
};
