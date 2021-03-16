//create api methods
export default {
  data() {
    return {};
  },

  methods: {
    getSearchApi(word_search) {
      return this.ajaxGet(word_search);
    }
  }
};
