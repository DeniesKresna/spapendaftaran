<template>
    <v-container>

      <v-snackbar
          top
          v-model="snackbar"
          timeout="10000"
          color="cyan darken-2"
        >
         {{message}}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="white"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Tutup
            </v-btn>
          </template>
        </v-snackbar>

      <v-row>
        <v-col>
          <div class="title">Pendaftaran Akun Jobhun</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field label="Nama lengkap" v-model="user.name" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Alamat email" v-model="user.email"/>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field type="password" label="Password (minimal 8 karakter yaa..)" v-model="user.password" />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field type="password" label="Ulangi Password" v-model="user.password_confirm" />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field label="Nomor terhubung WhatsApp" v-model="user.phone" />
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="space-around"
      >
        <v-btn
          tile
          color="primary"
          @click.native="storeUser"
        >
          <v-icon left>
            mdi-check-circle
          </v-icon>
          Lanjutkan pendaftaran
        </v-btn>
      </v-row>
    </v-container>
</template>
<script>
  export default{
    data(){
      return{
        message: null,
        snackbar: false,
        user: {
          name: '',
          email: '',
          phone: '',
          password: '',
          password_confirm: ''
        }
      }
    },
    mounted(){
    	this.setup();
    },
    methods:{
      setup: async function(){
        if(this.$route.query.message !== undefined && this.$route.query.message != ""){
          this.message = this.$route.query.message;
          this.snackbar = true;
        }
        this.$store.commit("setPage","pendaftaran");
      },
      storeUser: async function(){
        if(this.user.password != this.user.password_confirm || this.user.password.length < 8){
          this.$swal('Hei',"cek kembali password kamu",'warning');
          return
        }
        let payload = Object.assign({}, this.user);
        let res = await this.$store.dispatch('auth/register',payload);
        this.reset();
      },
      reset: function(){
        this.user = {
          name: '',
          email: '',
          phone: '',
          password: '',
          password_confirm: ''
        }
      }
    }
  }
</script>