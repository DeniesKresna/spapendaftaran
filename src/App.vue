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
        <img src="@/assets/cropped-logo-jobhun-3.png" 
        height="30"
        class="mx-15"
        >
      </div>
      <div v-else>
        <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
        <span>{{title}}</span>
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items class="mx-15">
        <v-menu offset-y >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              to="/jobhun/academy"
            >
              Academy
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              to="/"
            >
              Ask Career
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
              to="/"
            >
              Career Hub
            </v-btn>
          </template>
        </v-menu><!--
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
        </v-menu>-->
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
    max-width="400"
    persistent
    >
    <div>
      <v-card class=""  
      max-height="750"
      >  
      
      <div class="text-right">
        <v-btn
              color="red darken-1"
              text
              @click="closeLogin"
              class="align-right font-weight-bold"
            >
              x
        </v-btn>
      </div>

        <v-row justify="center" class="pb-1">
          <v-img  src="@/assets/cropped-logo-jobhun-3.png" contain max-width="120px" alt=""></v-img>
        </v-row>
          
        
        <div class="text-center pt-5 pb-2">
            <v-btn 
            class="text--black rounded-l-xl rounded-r-0" 
            outlined 
            color="black" 
            small>
              Masuk</v-btn>
        </div>
        
        <v-tabs>
          <v-tab-item>
            <v-card-text class="mx-3">

              <v-row>
              <v-row class="px-3 mb-0">
                <v-col md="9" class="pb-0">
                <v-text-field label="Nama Lengkap" v-model="userForm.namaLengkap"></v-text-field>
              </v-col>
              </v-row>

              <v-row class="px-3">
                <v-col md="9" class="pb-0">
                <v-text-field label="Alamat Email" v-model="userForm.email" @keyup.enter="login"></v-text-field>
                </v-col>
              </v-row>

              <v-row class="px-3" >
                <v-col md="9" class="pb-0">
                <v-text-field label="No Handphone" v-model="userForm.noHp" ></v-text-field>
              </v-col>
              </v-row>

              <v-row class="px-3">
                    <v-col md="9" class="pb-0">
                      <v-text-field 
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      label="Kata sandi"
                      @keyup.enter="login"
                      @click:append="show1 = !show1"
                      v-model="userForm.password"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="px-3">
                    <v-col md="9" class="pb-0">
                      <v-text-field 
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      label="Konfirmasi kata sandi"
                      @keyup.enter="login"
                      @click:append="show1 = !show1"
                      v-model="userForm.password"
                      />
                    </v-col>
                  </v-row>
            </v-row>
          </v-card-text>
          <v-checkbox v-model="checkbox" class="">
          <template v-slot:label>
            <div style="font-size:0.9em" class="pl-2">
                Saya setuju dengan
                  <a
                    target="_blank"
                    href="https://vuetifyjs.com"
                    @click.stop
                    v-on="on"
                  >
                    Ketentuan Pengguna
                  </a>
                  dan
                  <a
                    target="_blank"
                    href="https://vuetifyjs.com"
                    @click.stop
                    v-on="on"
                  >
                    Kebijakan Privasi
                  </a>
            </div>
          </template>
        </v-checkbox> 
        </v-tab-item>
        </v-tabs>
          
        
        
        <div>
            <v-row >
              <v-col >
                <div class="text-center">
                    <v-btn 
                    rounded
                    color="#48B391"
                    dark
                    class="font-weight-bold mb-4"
                    >
                      Daftar
                    </v-btn>
              </div>
              </v-col>
            </v-row>    
          </div>
          
          
        
        </v-card>
      
        <v-tab-item>
            <v-btn 
            class="rounded-r-xl rounded-l-0 text--black" 
            outlined 
            color="black" 
            small
            
            >
              Daftar</v-btn>
        </v-tab-item>
      
    </div>
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
      checkbox: false,
      drawer: false,
      userForm: {
        namaLengkap: "",
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
      toRegister: function(){
        this.$store.commit('setLoginDialog',false);
        this.$router.push("/user/register");
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
<style> *{ text-transform: none !important; } 



</style>