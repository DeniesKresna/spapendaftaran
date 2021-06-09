<template>
  <v-app id="inspire">
    
    <v-toolbar
      fixed
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <div v-if="user.id == null">
        <router-link to="/">
          <img
          src="@/assets/cropped-logo-jobhun-3.png" 
          height="30"
          class="mx-15"
          >
        </router-link>
      </div>
      <div v-else>
        <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon>
        <span>{{title}}</span>
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items class="mx-15">
        <v-menu offset-y >
          <template v-slot:activator="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              to="/jobhun/academy"
              color="black"
            >
                Pelatihan
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              to="/jobhun/askcareer"
              color="black"
            >
              Cari mentor
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              to="/jobhun/careerhub"
              color="black"
            >
              Cari loker
            </v-btn>
          </template>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              to="/"
              color="black"
            >
              Pasang loker
            </v-btn>
          </template>
        </v-menu>
        <v-btn @click="toogleLogin" text>
          <span v-if="user.id == null">Masuk</span>
          <span v-else>Logout</span>
        </v-btn>
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
    <v-main class="lighten-3 mb-0">
      <div>
        <router-view />
        <footter>
              
            </footter>
      </div>
    </v-main>
    <div>     
  </div>


  <v-dialog
    v-model="loginDialog"
    max-width="400"
    persistent
    >
    <div>
      <v-card class="hide-scroll"  
      
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
        <v-row justify="center" class="pb-2">
          <v-img  src="@/assets/cropped-logo-jobhun-3.png" contain max-width="100px" alt=""></v-img>
        </v-row>
          

      <v-tabs background-color="white"
      centered
      color="none"
      hide-slider
      class="bg-bar"
      v-model="tabs"
      >
        <v-tab>
          <v-row
            cols="12"
            md="3"
            class="mt-n5"
            >
              <v-col
              >
                <div class="text-center pt-5 pb-2">
                  <v-btn 
                  class="rounded-l-xl rounded-r-0 font-weight-bold" 
                  outlined 
                  small>
                    Masuk</v-btn>
                </div>
              </v-col>
          </v-row>
        </v-tab>
        <v-tab>
          <v-row
            cols="12"
            md="3"
            class="mt-n5"
            >
              <v-col
              >
              <div class="text-center pt-5 pb-2">
                  <v-btn 
                  class="rounded-r-xl rounded-r-0 font-weight-bold" 
                  outlined 
                  small>
                    Daftar</v-btn>
              </div>
            </v-col>
          </v-row>
          </v-tab>
        </v-tabs>
        
        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card-text class="mx-3">
              <v-row class="px-3">
                <v-col
                      md="10" class="mb-n4"
                      >
                  <span 
                  style="font-size:1.2em"
                  class="mb-5 font-weight-bold" >Silakan masuk akun milikmu!</span>
                </v-col>
              </v-row>
            
                      <v-row
                        class="px-3"
                      >
                      <v-col
                      md="9" class="pb-0 mb-n5"
                      >
                        <v-text-field
                          color="#48B391"
                          v-model="userForm.email"
                          label="Alamat email"
                          class=""
                          required
                        ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row
                        class="px-3"
                      >
                      <v-col md="9" class="pb-0 mb-n5">
                        <v-text-field
                          color="#48B391"
                          v-model="userForm.password"
                          label="Kata sandi"
                          type="password"
                          class=""
                          required
                        ></v-text-field>
                        </v-col>
                      </v-row>  
                  
                  <v-row class="mt-5">
                    <v-col class="text-right">
                      <a 
                      class=" font-weight-bold forgot-password pa-10"
                      >Lupa kata sandi</a>
                    </v-col>
                  </v-row>
                  
                <div>
                  <v-row >
                    <v-col class="text-center">
                      <div>
                        <v-btn
                          rounded
                          color="#48B391"
                          dark
                          class="mt-5 font-weight-bold mb-4"
                        >
                          Masuk
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </div>

            </v-card-text>
              </v-tab-item>
          <v-tab-item>
            <v-card-text class="mx-3 mt-n7">
              <v-row>
              <v-row class="px-3 mb-n5">
                <v-col md="9" class="pb-0">
                <v-text-field color="#48B391"
                label="Nama lengkap" v-model="userForm.fullName"></v-text-field>
              </v-col>
              </v-row>

              <v-row class="px-3">
                <v-col md="9" class="pb-0 mb-n5">
                <v-text-field color="#48B391"
                label="Alamat email" v-model="userForm.email" @keyup.enter="login"></v-text-field>
                </v-col>
              </v-row>

              <v-row class="px-3" >
                <v-col md="9" class="pb-0 mb-n5">
                <v-text-field color="#48B391"
                label="No handphone" v-model="userForm.phone" ></v-text-field>
              </v-col>
              </v-row>

              <v-row class="px-3">
                    <v-col md="9" class="pb-0 mb-n5">
                      <v-text-field color="#48B391"
                      :type="show1 ? 'text' : 'password'"
                      label="Kata sandi"
                      @keyup.enter="login"
                      @click:append="show1 = !show1"
                      v-model="userForm.password"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="px-3">
                    <v-col md="9" class="pb-0 mb-n5">
                      <v-text-field color="#48B391"
                      :type="show1 ? 'text' : 'password'"
                      label="Konfirmasi kata sandi"
                      @keyup.enter="login"
                      @click:append="show1 = !show1"
                      v-model="userForm.passwordConfirmation"
                      />
                    </v-col>
                  </v-row>
            </v-row>
          </v-card-text>

          <v-checkbox v-model="checkbox" class="mr-10 pa-5 mt-n4">
          <template v-slot:label class="">
            <span style="font-size:0.9em" class="pl-2 font-weight-bold text-color-black">
                Saya setuju dengan
                  <a
                    target="_blank"
                    href="https://vuetifyjs.com"
                    @click.stop
                    class="link-color"
                  >
                    Ketentuan Pengguna
                  </a>
                  dan
                  <a
                    target="_blank"
                    href="https://vuetifyjs.com"
                    @click.stop
                    class="link-color"
                  >
                    Kebijakan Privasi
                  </a>
            </span>
          </template>
        </v-checkbox> 
        <div>
            <v-row >
              <v-col >
                <div class="text-center">
                    <v-btn 
                  @click="signUp"
                    rounded
                    color="#48B391"
                    dark
                    class="font-weight-bold mb-4 mt-n6"
                    >
                      Daftar
                    </v-btn>
              </div>
              </v-col>
            </v-row>    
          </div>
          </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
  </v-dialog>

  </v-app>
</template>

<script>
  import NodeList from '@/components/NodeList'
  import Footter from '@/components/Footer'
  export default {
    components:{
      NodeList,
      Footter
    },
    data: () => ({
      checkbox: false,
      drawer: false,
      userForm: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        phone: "",
      },
      show1: false,
      tabs: null
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
      signUp: function(){
        if(this.userForm.password != this.userForm.passwordConfirmation){
          alert("Konfirmasi Password kamu tidak cocok!");
          this.userForm.passwordConfirmation = "";
          this.userForm.password = "";
        }
        if(this.userForm.password.length < 8){
          alert("Password minimal 8 karakter");
          this.userForm.passwordConfirmation = "";
          this.userForm.password = "";
        }
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

  .link-color{
          color: #48B391 !important;
          text-decoration: none;
      }

  .forgot-password{
    color: black !important;
    text-decoration: none;
  }
  
  .hide-scroll{
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .text-color-black{
    color: black !important;
  }

</style>