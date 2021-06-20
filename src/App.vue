<template>
  <v-app>

    <div>
      <v-content>
        <router-view/>
      </v-content>

    </div>

    <v-app-bar app dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>OffiRent</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn depressed >
          <router-link class="white--text" to="/">Home</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link class="white--text" to="/workplaces">Busqueda</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link class="white--text" to="/reservations">Reservas</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link class="white--text" to="/myworkplaces/">Mis Oficinas</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link class="white--text" to="/login">Luis</router-link>
        </v-btn>
        <v-btn depressed>
          <router-link class="white--text" to="/profile">Perfil</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>>


<!--    <v-main>-->
<!--      <v-container>-->
<!--        <router-view></router-view>-->
<!--&lt;!&ndash;        <Head></Head>&ndash;&gt;-->
<!--      </v-container>-->
<!--    </v-main>-->
    <Footer></Footer>
  </v-app>
</template>





<script>
// import Head from "./components/head";
//const Head=require("./components/head");
import Footer from "./components/structure/footer";

export default {
  name: 'App',

  components: {
    // Head,
    Footer
  },

  data: () => ({

  }),
};
</script>

<style>
.v-application a {
  color: #FFFF;
}
a:hover {
  color: #00F
}
</style>
