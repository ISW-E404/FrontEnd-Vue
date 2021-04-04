<template>
  <v-card>
    <v-spacer></v-spacer>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
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
      items: [

        {
          title: "distrito1"
        },
        {
          title: "distrito1"
        },
        {
          title: "distrito1"
        },
        {
          title: "distrito1"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>