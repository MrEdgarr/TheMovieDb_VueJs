import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "./assets/scss/main.scss";


import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faSearch,
  faBars,
  faUser,
  faBell,
  faGear,
  faCircleQuestion,
  faArrowRightFromBracket,
  faCartShopping,
  faPlay,
  faClock,
  faXmark,
  faLink,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faYoutube,
  faSquareInstagram,
  faSquareTwitter,
  faSquareGitlab,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faSearch,
  faBars,
  faUser,
  faBell,
  faGear,
  faCircleQuestion,
  faArrowRightFromBracket,
  faCartShopping,
  faPlay,
  faSquareFacebook,
  faYoutube,
  faSquareInstagram,
  faSquareTwitter,
  faSquareGitlab,
  faSquareGithub,
  faClock,
  faXmark,
  faLink,
  faCaretDown
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.mount("#app");
