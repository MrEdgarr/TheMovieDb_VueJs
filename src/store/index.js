import { createStore } from "vuex";
import handleChanger from "./header/handleChanger";
import upcommit from "./apis/upcommit/upcommit";

export default createStore({
  modules: {
    handleChanger,
    upcommit,
  },
});
