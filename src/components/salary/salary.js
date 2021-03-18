import data from "./people.json";

export default {
  data() {
    return {
      resultsFilter: [],
      loading: false,
      average: 0,
      promises: [],
    };
  },
  mounted() {
    this.loading=true;
    this.average = 0;
    //split and create firstname and lastname
    this.divideName(data);
    //calculate filter by age
    this.resultsFilter = this.ageLimit(35);
    this.calculateSalary();
  },
  methods: {
    //call for create all promises in paralel
    calculateSalary() {
      this.loading=true;
      for (let i in this.resultsFilter) {
        this.resultsFilter[i].salary = "calculating...";
        this.promises.push(this.api(this.resultsFilter[i]));
      }
      //check if promises have finished
      Promise.all(this.promises).then((values) => {
        this.loading=false;
        this.showAverage();
      });
    },

    //divide name in firstname and lastname for visualization
    divideName(data) {
      data.filter((person) => (person.firstname = person.name.split(" ")[0]));
      data.filter((person) => (person.lastname = person.name.split(" ")[1]));
      data.filter((person) => (person.salary = "calculating..."));
    },
    //method for filter data with by age
    ageLimit(maxValue) {
      const peopleLimitAge = data.filter((person) => person.age >= maxValue);
      return peopleLimitAge;
    },
    //function with promise to asign salary
    asignSalary(person, delay) {
      return new Promise((resolve) => {
        setTimeout(() => {
          for (let i in this.resultsFilter) {
            if (this.resultsFilter[i].name == person.name) {
              resolve((this.resultsFilter[i].salary = Math.round(delay)));
            }
          }
        }, delay);
      });
    },

    //asyn function api, with delay/salary calculation
    async api(person) {
      let delay = Math.random() * (1000 - 500 + 1) + 500;
      await this.asignSalary(person, delay);
    },

    //function for calculate average
    showAverage() {
      this.average = Object.values(this.resultsFilter).reduce(
        (avg, { salary }, _, { length }) => avg + salary / length,
        0
      );
    },
  },
};
