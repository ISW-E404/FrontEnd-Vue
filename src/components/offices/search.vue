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

    <v-card>
      <v-spacer></v-spacer>
      <v-text-field
          v-model="searchPrice"
          append-icon="mdi-magnify"
          label="Buscar por precio"
          single-line
          hide-details
      ></v-text-field>
      <v-list tile="prueba">
        <v-list-item  v-for="item in itemsPrice" :key="item.title" :to="item.link" link>
          {{item.title}}
        </v-list-item>
      </v-list>
    </v-card>
  </v-card>



</template>

<script>
export default {
name: "search",
  data() {
    return{
      search: '',
      searchPrice:'',
      items: [

        {
          title: "Surco"
        },
        {
          title: "San Miguel"
        },
        {
          title: "Magdalena"
        },
        {
          title: "San Isidro"
        },
      ],
      itemsPrice: [

        {
          title: "S/ 0.00 - S/ 100.00"
        },
        {
          title: "S/ 100.00 - S/ 250.00"
        },
        {
          title: "S/ 250.00 - S/ 500.00"
        },
        {
          title: "S/ 500.00 - S/ 1000.00"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
