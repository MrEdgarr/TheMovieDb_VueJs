<template>
  <div style="height: 8rem">
    <header>
      <div class="nav__left">
        <div class="nav__logo">
          <a href="">
            <img src="../../assets/images/logo-white.png" alt="" />
          </a>
        </div>
        <div class="nav__menu">
          <ul :class="barsClickShow ? 'nav__menu--show' : ''">
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">movie</a>
            </li>
            <li>
              <a href="">blog</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav__right">
        <Search @click="searchHandleClickShow(!searchClickShow)" />

        <div class="nav__user" @click="useHandleClickShow(!useClickShow)">
          <span class="nav__user--userIcons">
            <font-awesome-icon icon="fa-solid fa-user" />
          </span>
          <ul :class="useClickShow ? 'showUser' : ''">
            <li>
              <img
                src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <span>Mr. Edgar</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-user" />
              <a href=""> See your profile </a>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-bell" />
              <a href="">Notification</a>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-gear" />
              <a href="">Settings</a>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-circle-question" />
              <a href="">Help & Support</a>
            </li>
            <li>
              <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
        <div
          class="menuTogger"
          @click="barsHandleClickShow(!barsClickShow)"
        ></div>
      </div>
    </header>
    <search-mobile></search-mobile>
  </div>
</template>

<script>
import Search from "../SearchNav/Search.vue";
import SearchMobile from "../SearchNav/SearchMobile.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Search, SearchMobile },
  computed: {
    ...mapGetters(["barsClickShow", "useClickShow", "searchClickShow"]),
  },
  methods: {
    ...mapActions([
      "barsHandleClickShow",
      "searchHandleClickShow",
      "useHandleClickShow",
    ]),
  },
};
</script>

<style lang="scss">
@import "MainNav.scss";
</style>