import { createStore } from "vuex";
import handleChanger from "./header/handleChanger";
import upcommit from "./apis/upcommit/upcommit";
import popular from "./apis/popular/popular";
import toprated from "./apis/toprated/toprated";
import genre from "./apis/genre/genre";

export default createStore({
  modules: {
    handleChanger,
    upcommit,
    popular,
    toprated,
    genre,
  },
});
