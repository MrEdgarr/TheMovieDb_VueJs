import { createStore } from "vuex";
import handleChanger from "./header/handleChanger";
import upcoming from "./apis/upcoming/upcoming";
import popular from "./apis/popular/popular";
import toprated from "./apis/toprated/toprated";
import genre from "./apis/genre/genre";

export default createStore({
  modules: {
    handleChanger,
    upcoming,
    popular,
    toprated,
    genre,
  },
});
