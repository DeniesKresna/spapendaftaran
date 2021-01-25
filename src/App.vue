<template>
  <v-app id="inspire">
     <!-- src="https://picsum.photos/1920/1080?random"-->
    <v-toolbar
      fixed
      :height="$route.path == '/'? 60:130"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <div v-if="user.id == null">
        <img src="@/assets/logo.png" height="100"></img>
      </div>
      <div v-else>
        <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
        <span>{{title}}</span>
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              to="/"
            >
              Beranda
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              Layanan
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/jobhun/academy">
              <v-list-item-content>
                <v-list-item-title>Jobhun Academy</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Jobhun Ask Expert</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Jobhun Career Hub</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn @click="toogleLogin" text>
          <span v-if="user.id == null">Masuk</span>
          <span v-else>Logout</span>
        </v-btn><!--
        <v-btn @click="toogleLogin" icon>
          <v-icon v-if="user.id == null">mdi-login</v-icon>
          <v-icon v-else>mdi-logout</v-icon>
        </v-btn>-->
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="user.image_url">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{user.name}}</v-list-item-title>
            <v-list-item-subtitle class="purple--text" v-if="user.id != null">Setting</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
     <NodeList :nodes="menus"/>
    </v-navigation-drawer>
    <v-main class="lighten-3 mb-10">
      <div v-if="$route.path == '/'">
        <router-view />
      </div>
      <div v-else>
        <v-container fluid>
          <v-row>
            <v-overlay :value="overlay"></v-overlay>
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
            </v-col>
          </v-row>
        </v-container>
      </div>
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
                <span>2021</span> — <strong>PT Jobhun Membangun Indonesia</strong>
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
                <v-text-field append-icon="mdi-account" label="Email" v-model="userForm.email" @keyup.enter="login"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                @keyup.enter="login"
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
            Login
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="closeLogin"
          >
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import NodeList from '@/components/NodeList'
  export default {
    components:{
      NodeList
    },
    data: () => ({
      drawer: false,
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
      toogleLogin: function(){
        if(this.user.id == null)
          this.$store.commit('setLoginDialog',true);
        else{
          if(confirm("Lanjutkan Keluar?"))
            this.$store.commit('logout');
        }
      },
      closeLogin: function(){
        this.$store.commit('setLoginDialog',false);
      },
      login: async function(){
        let res = await this.$store.dispatch("login",this.userForm);
        this.userForm.email = "";
        this.userForm.password = "";
      },
      toJobhun: function(){
        window.location.href = "https://jobhun.id";
      },
      openDrawer: function(){
        this.drawer = !this.drawer;
      }
    },
    computed: {
      overlay() {
        return this.$store.getters.overlay
      },
      page(){
        return this.$store.getters.page
      },
      user(){
        return this.$store.getters.user
      },
      loginDialog(){
        return this.$store.getters.loginDialog;
      },
      menus(){
        return this.$store.getters.menus;
      },
      title(){
        return this.$store.getters.title;
      }
    }
  }
</script>
<style> *{ text-transform: none !important; } </style>