<template>
  <div class="offices">
    <v-row>
      <v-col sm="3" offset-lg="0" align-self="start">
        <Search></Search>
      </v-col>
      <v-col sm="9"  offset-lg="0">
        <ListOffices></ListOffices>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from "../components/offices/search";
import ListOffices from "../components/offices/list-offices";
export default {
name: "Offices",
  data(){
    return{
    }
  },
  components: {
    Search,
    ListOffices
  }
}
</script>

<style scoped>

</style>