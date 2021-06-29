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
      <v-list-item  v-for="item in districts" :key="item.name" :to="item.link" link @click="filterDistrict(item)">
        {{item.name}}
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
        <v-list-item  v-for="item in prices" :key="item.title" :to="item.link" link @click="trackFilterPrices">
          S/.{{item.minPrice}}.00 - S/.{{item.maxPrice}}.00
        </v-list-item>
      </v-list>
    </v-card>
  </v-card>



</template>

<script>
//import DistrictService from "../../services/district-service";
//import ListOffices from "../offices/list-offices";

export default {
name: "search",
  components:{
  },
  props:{
    districts:[],
    displayDistricts: [],
    prices: []
  },
  data() {
    return{
      search: '',
      searchPrice:'',
      itemsPrice: [
      ]
    }
  },
  methods: {
      trackSurco(){
        this.$gtag.event("Surco-option-click", {
          'event_category': "Alternative search for districs",
          'event_label': "Surco button in districts filter clicked",
          'value': 1
          });
      },
      trackSanMiguel(){
        this.$gtag.event("San Miguel-option-click", {
          'event_category': "Alternative search for districs",
          'event_label': "Magdalena button in districts filter clicked",
          'value': 1
        });
      },
      trackMagdalena(){
        this.$gtag.event("Magdalena-option-click", {
          'event_category': "Alternative search for districs",
          'event_label': "San Miguel button in districts filter clicked",
          'value': 1
        });
      },
      trackSanIsidro(){
        this.$gtag.event("San Isidro-option-click", {
          'event_category': "Alternative search for districs",
          'event_label': "San Isidro button in districts filter clicked",
          'value': 1
        });
      },
      trackOptionalDistrict(item){
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
        this.$gtag.event("district-filter-select", {
          'event_category': "General filters for offices",
          'event_label': "District filter button clicked",
          'value': 1
        });
      },
      trackFilterPrices(){
        this.$gtag.event("price-filter-select", {
          'event_category': "General filters for offices",
          'event_label': "Price filter button clicked",
          'value': 1
        });
      },

      trackFilterDistrictAndOptionalDistrict(item){
        this.trackOptionalDistrict(item.name);
        this.trackFilterDistrict(item.name);
      },

      filterDistrict(item) {
        this.trackFilterDistrictAndOptionalDistrict(item);
        this.$emit('anyButtonDistrictPressed', item)
      }

  }
}
</script>

<style scoped>

</style>
