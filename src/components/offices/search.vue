<template>
  <v-card>
    <v-spacer></v-spacer>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar distrito"
        single-line
        hide-details
    ></v-text-field>
    <v-list tile="prueba">
      <v-list-item  v-for="item in items" :key="item.title" :to="item.link" link>
        {{item.title}}
      </v-list-item>
    </v-list>
  </v-card>

</template>

<script>
export default {
name: "search",
  data() {
    return{
      search: '',
      items: [

        {
          title: "San Miguel"
        },
        {
          title: "Surco"
        },
        {
          title: "Magdalena"
        },
        {
          title: "San Isidro"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
