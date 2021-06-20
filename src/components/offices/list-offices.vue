<template>
  <v-app>
    <div>
      <v-row>
        <v-col sm="10" offset-md="2" md="8" offset-sm="1">
          <h2> Oficinas</h2>
        </v-col>
      </v-row>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm4  class="mb-3" v-for="(office, index) in historyList" :key="index">
            <v-card max-width="400px">
              <v-img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_898700298_2000131820009280352_424477.jpg"></v-img>
              <v-card-title>{{office.title}}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="office.rating" color="amber" dense readonly size="14"></v-rating>
                  <div class="grey--text ml-4">
                    {{office.rating}}
                  </div>
                  <v-spacer/>
                  <div class="green--text">
                    {{"$ "+office.price}}
                  </div>
                </v-row>
              </v-card-text>
              <v-expand-transition>
                <div v-show="office.status">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{office.description}}
                  </v-card-text>
                </div>
              </v-expand-transition>
              <v-card-actions>
                <v-btn
                    color="blue"
                    text
                    @click="reserve"
                >
                  Reservar
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="office.status = !office.status"
                >
                  <v-icon>{{ office.status ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-pagination class="pagination mb-2" v-model="page" :length="pages" @input="updatePage"></v-pagination>
    </div>
  </v-app>
</template>

<script>
export default {
name: "list-offices",
  data () {
    return {
      page: 1,
      pageSize: 6,
      show: false,
      offices: [
        {
          id:1,
          status: false,
          title: "office 01",
          price: 250,
          rating: 4.5,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:2,
          status: false,
          title: "office 02",
          price: 300,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:3,
          status: false,
          title: "office 03",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:4,
          status: false,
          title: "office 04",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:5,
          status: false,
          title: "office 05",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:6,
          status: false,
          title: "office 06",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:7,
          status: false,
          title: "office 07",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:8,
          status: false,
          title: "office 08",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:9,
          status: false,
          title: "office 09",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:10,
          status: false,
          title: "office 10",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:11,
          status: false,
          title: "office 11",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:12,
          status: false,
          title: "office 12",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
        {
          id:13,
          status: false,
          title: "office 13",
          price: 305,
          rating: 5.0,
          description: "fasfiuagfuafgauifagsfuiasfgauifagfuiafgauifagsfbuiasfga"
        },
      ],
      listCount: 0,
      historyList: [],
      displayOffices:[]
    }
  },
  created() {
    let _this = this;
    _this.initPage();
    _this.updatePage(_this.page);
  },
  methods: {
    initPage: function() {
      let _this = this;
      _this.listCount = _this.offices.length;
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.offices;
      } else {
        _this.historyList = _this.offices.slice(0, _this.pageSize);
      }
    },
    updatePage: function(pageIndex) {
      let _this = this;
      let _start = (pageIndex - 1) * _this.pageSize;
      let _end = pageIndex * _this.pageSize;
      _this.historyList = _this.offices.slice(_start, _end);
      _this.page = pageIndex;
    },
    reserve() {
      this.$router.push({name: 'add-reservation'});
      this.$gtag.event("Rerserve-button-click", {
        'event_category': "Reserve to Offices",
        'event_label': "Reserve button in Offices cards clicked",
        'value': 1
      });
    }
  },
  computed: {
    pages() {
      let _this = this;
      if (_this.pageSize == null || _this.listCount == null) return 0;
      return Math.ceil(_this.listCount / _this.pageSize);
    }
  }
}
</script>

<style scoped>

</style>
