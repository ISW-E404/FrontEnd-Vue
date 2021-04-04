<template>
  <v-card>
    <v-card-title>Profile</v-card-title>
      <v-spacer></v-spacer>

        <v-btn small color="primary" @click="navigateToEditProfile">Edit Profile</v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{on, attrs}">
            <v-btn small color="error"  dark class="mb" v-bind="attrs" v-on="on">Deactivate Account</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{on, attrs}">
                  <v-btn small color="blue darken-1"  dark class="mb" v-bind="attrs" v-on="on">Ok</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle1 }}</span>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="save">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-card>
</template>

<script>

export default {
  name: "profile",
  data(){
    return{
      dialog: false,
      defaultItem: {
      },
      displayTutorials: [],
      tutorials: [],
    }
  },
  computed: {
    formTitle() {
      return 'Are you sure to deactivate your account?'
    },
    formTitle1(){
      return 'Your account has been deactivated'
    }
  },
  methods:{
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    editItem(item) {
      this.editedIndex = this.displayTutorials.indexOf(item);
      console.log(item);
      this.editedItem = this.tutorials[this.editedIndex];
      this.dialog = true;
    },
    navigateToEditProfile(){
      this.$router.push({name: 'edit-account'});
    },

}

}
</script>

<style scoped>
.welcome{
  margin-top: 1em;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
  font-family: 'Khula', sans-serif !important;
  font-weight: 300;
  font-size: 1.3em;
}
</style>