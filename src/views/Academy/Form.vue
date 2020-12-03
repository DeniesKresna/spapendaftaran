<template>
  <v-form @submit.prevent="storeAcademyCustomer">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-combobox
            v-model="jaSelected"
            :items="jaList"
            label="Akademi"
          ></v-combobox>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Alamat Email" v-model="customer.email" @blur="checkCustomerExist" />
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Nama Lengkap" v-model="customer.name" />
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Nomor WhatsApp" v-model="customer.phone" />
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Dari mana tahu Jobhun Academy" v-model="customer.reference" />
        </v-col>
        <v-col cols="12" md="12">
          <v-textarea
          label="Apa profesimu"
          v-model="customer.profession"
        ></v-textarea>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field label="Di mana domisilimu" v-model="customer.domicile" />
        </v-col>        
      </v-row>
      <v-row
        align="center"
        justify="space-around"
      >
        <v-btn
          tile
          color="primary"
          type="submit"
          v-if="user == null"
        >
          <v-icon left>
            mdi-check-circle
          </v-icon>
          Lanjutkan Pembayaran
        </v-btn>
        <v-btn
          tile
          color="indigo darken-1"
          dark
          type="submit"
          v-else
        >
          <v-icon left>
            mdi-plus
          </v-icon>
          Tambah Peserta
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
  export default{
    data(){
      return{
        customer: {
          name: '',
          email: '',
          phone: '',
          reference: '',
          profession: '',
          domicile: ''
        },
        jaSelected: '',
        jaList: []
      }
    },
    mounted(){
    	this.setup();
    },
    methods:{
      setup: async function(){
        this.$store.commit("setPage","academy");

      	let name = "";

	      let res = await this.$store.dispatch('academy/list',"?active=1");
	      let jaList = res.data.map(obj => {
	        return obj.name
	      });

        if(this.$route.query.name !== undefined && this.$route.query.name != ""){
          name = this.$route.query.name;
          if(!jaList.includes(name)){
            this.$swal("Maaf","Tidak ada academy dengan nama " + name,"warning").then(()=>{
                this.jaSelected = "";
            });
          }else{
            this.jaSelected = name;
          }
        }	      
	      this.jaList = jaList;
      },
      storeAcademyCustomer: async function(){
        console.log("cliked");
        let payload = this.customer;
        payload['ja_name'] = this.jaSelected;
        let res = await this.$store.dispatch('academy/customerStore',payload);
        this.reset();
        if(res.payment)
          window.location.href = res.data.redirect_url;
      },
      checkCustomerExist: async function(){
        let payload = this.customer.email.trim();
        if(payload != ""){
          let res = await this.$store.dispatch('customer/byEmail', payload);
          if(res.data != null)
            this.customer = res.data;
        }
      },
      reset: function(){
        this.customer = {
          name: '',
          email: '',
          phone: '',
          reference: '',
          profession: '',
          domicile: ''
        }
      }
    },
    computed:{
      user: function(){
        return this.$store.getters.user;
      }
    }
  }
</script>