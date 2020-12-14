<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
    <!--
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>-->
        <img :src="'https://jobhun.id/wp-content/uploads/2018/11/cropped-logo-jobhun-3.png'" width="32"/>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link.label" :to="link.url"
          v-if="setInvis(link)"
        >
          {{ link.label }}
        </v-tab>
      </v-tabs>

      <!--
      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>-->
    </v-app-bar>

    <v-main class="grey lighten-3 mb-10">
      <v-container>
        <v-row>
          <v-overlay :value="overlay"></v-overlay>
          <!--
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            </v-sheet>
          </v-col>
          -->
          <v-col
            cols="12"
            sm="12"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view />
            </v-sheet>
          </v-col><!--
          <v-col
            cols="12"
            sm="2"
          ></v-col>-->
        </v-row>
      </v-container>
    </v-main>
    <div>
          <v-footer
              absolute
              class="font-weight-small"
            >
              <v-col
                class="text-center"
                cols="12"
              >
                <span @click="toogleLogin">2020</span> — <strong>J Indonesia</strong>
              </v-col>
            </v-footer>
    </div>
    <v-dialog
      v-model="loginDialog"
      max-width="290"
      persistent
    >
      <v-card>
        <v-card-title class="headline">Login</v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field append-icon="mdi-account" label="Email" v-model="userForm.email" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                @click:append="show1 = !show1"
                v-model="userForm.password"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="login"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      userForm: {
        email: "",
        password: ""
      },
      show1: false
    }),
    mounted(){
      this.setup();
    },
    methods:{
      setup: async function(){
        this.$store.dispatch("me");
      },
      setInvis: function(li){
        if(!li.auth) return true;
        else {
          if(this.user != null){
            return true;
          }
        }
        return false;
      },
      toogleLogin: function(){
        if(this.user == null)
          this.$store.commit('setLoginDialog',true);
        else{
          if(confirm("Lanjutkan Keluar?"))
            this.$store.commit('logout');
        }
      },
      login: async function(){
        let res = await this.$store.dispatch("login",this.userForm);
        this.userForm.email = "";
        this.userForm.password = "";
      }
    },
    computed: {
      overlay() {
        return this.$store.getters.overlay
      },
      page(){
        return this.$store.getters.page
      },
      links(){
        return this.$store.getters.links
      },
      user(){
        return this.$store.getters.user
      },
      loginDialog(){
        return this.$store.getters.loginDialog;
      }
    }
  }
</script>