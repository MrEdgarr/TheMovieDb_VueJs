import { createStore, createLogger } from "vuex";
import handleChanger from "./header/handleChanger";

export default createStore({
  modules: {
    handleChanger,
  },
});
