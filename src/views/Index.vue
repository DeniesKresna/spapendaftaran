<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">

<template>

<div>
	<v-img
			src="@/assets/images/web/foto slider beranda-3.png" aspect-ratio="3" height="665"
		position="center center"> 
			<v-row
			align="center"
			justify="center"
			>
			<v-col cols="12" md="1" class="d-none d-md-block">
			</v-col>
			<v-col
				class="black--text"
				cols="15"
				my-4="11"
			>
				<h1 class="changeFont">
				Persiapkan Dirimu untuk Karier<br>
				Terbaik di Masa Depan
				</h1>
				<h4 class="subheading">
				untuk Karier Terbaik di Masa Depan
				</h4>
			</v-col>
			</v-row>
	</v-img>
	<v-row class="mt-12 text-center">
		<v-col cols="12">
			<h3 class="font-weight-bold">Belajar kemampuan baru untuk karier impian di Jobhun Academy!</h3>
		</v-col>
		<v-col cols="6" md="4" lg="3" v-for="academy in academies" :key="academy.id">
			<v-card
			    class="mx-2"
			    max-width="374"
			  >
			    <v-img
			      height="150"
			      :src="academy.url"
			    ></v-img>

			    <v-card-title>{{academy.name}}</v-card-title>

			    <v-card-text>
			      <v-row
			        align="center"
			        class="mx-0"
			      >
			        <v-rating
			          :value="5"
			          color="yellow"
			          dense
			          half-increments
			          readonly
			          size="14"
			        ></v-rating>

			        <div class="grey--text ml-4">5</div>
			      </v-row>

			      <div class="my-4 subtitle-1">
			        IDR • {{academy.price}}
			      </div>
			      
			      <div>{{ (academy.description != null && academy.description.length > 70)? academy.description.substring(0,70) + "...." : academy.description }}</div>
			    </v-card-text>

			    <v-divider class="mx-4"></v-divider>
<!--
			    <v-card-title>Tonight's availability</v-card-title>

			    <v-card-text>
			      <v-chip-group
			        v-model="selection"
			        active-class="deep-purple accent-4 white--text"
			        column
			      >
			        <v-chip>5:30PM</v-chip>

			        <v-chip>7:30PM</v-chip>

			        <v-chip>8:00PM</v-chip>

			        <v-chip>9:00PM</v-chip>
			      </v-chip-group>
			    </v-card-text>
-->
			    <v-card-actions>
			      <v-btn
			        color="deep-purple lighten-2"
			        text
			        @click="toAcademyForm"
			      >
			        Daftar
			      </v-btn>
			    </v-card-actions>
			  </v-card>
		</v-col>
		<v-col cols="12">
			<v-btn color="blue-grey" class="ma-2 white--text" to="/jobhun/academy">
		      Lihat Kelas lain 
		      <v-icon right dark >
		        mdi-chevron-right
		      </v-icon>
		    </v-btn>
		</v-col>
	</v-row>
	<v-row class="mt-6" justify="center" align="center">
		<v-col cols="6">
			<v-img src="@/assets/images/web/mentor1.jpg" contain/>
		</v-col>
		<v-col cols="6">
			<div>
				<h1>Bingung bekerja atau memilih pekerjaan impian kamu?</h1>
				<h3>Tanyakan pada expertnya!</h3>
			</div>
		</v-col>
	</v-row>
	<v-row class="mt-12">
		<v-col cols="12">
			<h3 class="font-weight-bold text-center">Daftar Expert</h3>
		</v-col>
		<v-col cols="6" md="4" lg="3" v-for="expert in experts" :key="expert.id">
			<v-card
			    class="mx-2"
			    max-width="374"
			  >
			    <v-img
			      height="300"
			      :src="expert.url"
			    ></v-img>

			    <v-card-title><span class="deep-purple--text text--darken-2 mr-1">{{expert.name}}</span></v-card-title>
				<v-card-subtitle>{{expert.job}}</v-card-subtitle>

			    <v-card-text>
			      <v-row
			        align="center"
			        class="mx-0"
			      >
			        <v-rating
			          :value="5"
			          color="yellow"
			          dense
			          half-increments
			          readonly
			          size="14"
			        ></v-rating>

			        <div class="grey--text ml-4">5</div>
			      </v-row>

			      <div class="my-4 subtitle-1">
			        IDR • {{expert.price}} / jam
			      </div>
			      
			      <div>{{ (expert.description != null && expert.description.length > 70)? expert.description.substring(0,70) + "...." : expert.description }}</div>
			    </v-card-text>

			    <v-divider class="mx-4"></v-divider>
			    <v-card-actions>
			      <v-btn
			        color="deep-purple lighten-2"
			        text
			        @click="toAcademyForm"
			      >
			        Daftar
			      </v-btn>
			    </v-card-actions>
			  </v-card>
		</v-col>
		<v-col cols="12" class="text-center">
			<v-btn color="blue-grey" class="ma-2 white--text" to="/jobhun/academy">
		      Lihat Expert lain 
		      <v-icon right dark >
		        mdi-chevron-right
		      </v-icon>
		    </v-btn>
		</v-col>
	</v-row>
</div>
</template>
<script>
export default{
	data(){
		return {
			academies: [],
			experts: []
		}
	},
	mounted(){
		this.loadData();
	},
	methods:{
		loadData: async function(){
			let res = await this.$store.dispatch('academy/pageData','?limit=6');
			this.academies = res.data;
			let res2 = await this.$store.dispatch('expert/pageData','?limit=6');
			this.experts = res2.data;
		},
		toAcademyForm: function(){
			this.$router.push("/academy/form");
		}
	}
}
</script>

<style>

.changeFont{
	body-font-family: 'Montserrat', sans-serif;
}
</style>
