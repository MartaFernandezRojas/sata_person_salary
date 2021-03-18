//create service
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    ajaxGet(word_search) {
      var getRequest = axios.get(
        "https://api.github.com/search/repositories?q=topic:"+ word_search
      );
      return getRequest;
    }
  }
};
