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
  },
  methods: {
      trackSurco(){
        this.$gtag.event("district-optional-click", {
          'event_category': "Search for places",
          'event_label': "district Surco",
          'value': 1
          })
      },
      trackSanMiguel(){
        this.$gtag.event("district-optional-click", {
          'event_category': "Search for places",
          'event_label': "district San Miguel",
          'value': 1
        })
      },
      trackMagdalena(){
        this.$gtag.event("district-optional-click", {
          'event_category': "Search for places",
          'event_label': "district Magdalena",
          'value': 1
        })
      },
      trackSanIsidro(){
        this.$gtag.event("district-optional-click", {
          'event_category': "Search for places",
          'event_label': "district San Isidro",
          'value': 1
        })
      },
      trackOptionalSearchDistrict(item){
        switch (item){
          case "Surco":
            this.trackSurco();
            break;

          case "San Miguel":
            this.trackSanMiguel();
            break;

          case "Magdalena":
            this.trackMagdalena();
            break;

          case "San Isidro":
            this.trackSanIsidro();
            break;

          default:
            break;
        }
      },
      trackFilterDistrict(){
        this.$gtag.event("district-optional-click", {
          'event_category': "Search for places",
          'event_label': "district San Isidro",
          'value': 1
        })
      },
      trackFilterPrices(){
        this.$gtag.event("district-optional-click", {
          'event_category': "Search for places",
          'event_label': "district San Isidro",
          'value': 1
        })
      }

  }
}
</script>

<style scoped>

</style>
