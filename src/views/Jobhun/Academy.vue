<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <h3 class="font-weight-bold">Pilih Jobhun Academy keinginanmu</h3>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels inset>
          <v-expansion-panel
            v-for="academy in academies"
            :key="academy.id"
          >
            <v-expansion-panel-header><span><h4>{{academy.name}}</h4></span></v-expansion-panel-header>
            <v-expansion-panel-content>
              <img height="150" :src="academy.url"/>
              <div class="body-1 font-weight-bold">IDR {{academy.price}} ,-</div>
              <p>{{academy.description}}</p>
              <v-btn color="indigo" to="/academy/form" dark>Daftar</v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default{
  data(){
    return {
      academies: []
    }
  },
  mounted(){
    this.setup();
  },
  methods: {
    setup: async function(){
      let res = await this.$store.dispatch('academy/pageData');
      this.academies = res.data;  
    }
  }
}
</script>