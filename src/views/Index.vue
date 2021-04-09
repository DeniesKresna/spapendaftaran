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
				cols="10"
				my-4="11"
			>
			<div class="mx-n16">
				
				<h1 class="changeFont font-weight-black pt-16 mt-16">
				Persiapkan Dirimu untuk Karier<br>
				Terbaik di Masa Depan
				</h1>
				<h4 class="subheading">
				Pelajari <i>skill</i> baru, cari mentor yang<br>
				bisa membimbingmu, dan cari pekerjaan<br>
				impianmu di Jobhun.
				</h4>
				</div>
			</v-col>
			</v-row>
	</v-img>

<v-spacer></v-spacer>
		
	<v-row class="mt-1 mb-10" justify="center" align="center">
		<v-col cols="4">
			<div>
				<h1>Ikuti penawaran terbaru
				<br>dari Jobhun!</h1>
			</div>
			
		</v-col>
		<v-col cols="4" class="mt-5 mb-10">
			<v-card height="300px" width="450px" 
			class="mx-lg-12 elevation-10 d-flex justify-end mt-lg-16 mx-lg-16" >
				<v-carousel hide-delimiters height="300px" width="450px">
					<v-carousel-item
						v-for="(item,i) in items"
						:key="i"
						:src="item.src"
						></v-carousel-item>
					</v-carousel>
			</v-card>
		</v-col>
	</v-row>

	
	
	<v-spacer></v-spacer>

	

	<v-img src="@/assets/images/web/ja.jpg"
		></v-img>

	<div>
		<v-row class="mt-10 text-center">
			<v-col cols="15">
				<span class="changeFont font-weight-black">Belajar <i>skill</i> baru untuk karier impian!</span>
			</v-col>
		</v-row>
	</div>


	<v-row 
		class="mt-5 mx-15"
		
		>
		<v-col class="my-4" 
		cols="3" 
		v-for="n in 6"
        :key="n"
        sm="4"
		align="center"
		>

		<v-card 
			class=""
			width="400px"
			
			>
			<v-layout>
				<v-flex xs5>
					<v-img src="@/assets/images/web/bby.jpg"
					height="230px"
					></v-img>
				</v-flex>

				<v-flex xs7>
				<v-card-title primary-title>
						<div class="mx-n1 mt-1 text-left"
						
						>
							<div class="headline font-weight-bold">{{ cardHeadlineJa }}</div>
							<div class="font-weight-bold mt-n1"> {{ mentorName }}</div>
							<div class="font-weight-thin mt-n1">Jabatan</div><br>
							<div class="font-weight-thin mt-n6">Jadwal Kelas</div><br>
							<div class="font-weight-thin mt-n10">Rp600.000,-</div>
						</div>
					</v-card-title>

					<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat 
					color="#4DBA87" 
					dark
					small
					class="mt-n1 mr-1 font-weight-bold"
					>Pilih kelas</v-btn>
					
				</v-card-actions>
				</v-flex>
			</v-layout>
		</v-card>
</v-col>
</v-row>

<div class="text-right mr-15">
	<v-btn flat 
		color="#4DBA87" 
		dark
		small
		class="mt-n1 mr-1 font-weight-bold"
		rounded
		>
		Cari kelas
	</v-btn>
</div>


<v-spacer></v-spacer>
	<div>
		<v-img src="@/assets/images/web/jac.jpg"
		class="mt-16"
		>

		</v-img>
	</div>

	<div>
		<v-row class="mt-10 text-center">
			<v-col cols="15">
				<h2 class="font-weight-black changeFont">Temukan mentor yang sesuai dengan bidang
				<br>kariermu di sini!</h2>
			</v-col>
		</v-row>
	</div>

	<v-row 
	class="mt-5 mx-md-16"
	>
		<v-col class="my-5" 
		cols="3" 
		v-for="n in 6"
        :key="n"
        sm="4"
		align="center"
		>
		<v-layout>
			<v-flex sm8 offset-sm3>
			<v-card class=""
			height="340px"
			>
				<v-img
				src="@/assets/images/web/bby.jpg"
				height="180px"
				></v-img>

				<v-card-title primary-title>
					<div class="text-left">
						<div class="headline font-weight-bold mb-0 mt-n2">{{cardHeadlineJac}}</div>
						<div class="font-weight-bold mt-n2">Posisi</div>
						<div class="font-weight-thin mt-n1">Rp600.000,-</div>
					</div>

					<div class="mx-n2 mt-n2">
						<v-rating
						v-model="rating"
						color="yellow darken-3"
						background-color="grey darken-1"
						empty-icon="$ratingFull"
						half-increments
						hover
						size="18"
						readonly
						></v-rating>
					</div>
				</v-card-title>
				

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn flat 
					color="#4DBA87" 
					dark
					small
					class="mt-n5 mr-1 font-weight-bold"
					>Pilih mentor</v-btn>
					
				</v-card-actions>
				
			</v-card>
		</v-flex>
	</v-layout>
	</v-col>
</v-row>

<div class="text-right mr-15">
	<v-btn flat 
		color="#4DBA87" 
		dark
		small
		class="mt-n1 mr-3 font-weight-bold"
		rounded
		>
		Cari mentor
	</v-btn>

	<v-btn flat 
		color="#4DBA87" 
		dark
		small
		class="mt-n1 mr-2 font-weight-bold"
		rounded
		>
		Testimoni
	</v-btn>
</div>

	<v-spacer></v-spacer>
	<div>
		<v-img src="@/assets/images/web/jch.jpg"
		class="mt-16"
		>
		</v-img>
	</div>

	<div>
		<v-row class="mt-10 text-center">
			<v-col cols="15">
				<h2 class="font-weight-black changeFont">Cari pekerjaan impianmu!</h2>
			</v-col>
		</v-row>
	</div>

	<v-row 
		class="mt-5 mx-16 "
		>
		<v-col class="my-5" 
		cols="3" 
		v-for="n in 6"
        :key="n"
        sm="4"
		align="center"
		>
		<v-card 
			class="rounded-0"
			max-width="400px"
			height="180px"
			>
			<v-layout>
				<v-flex xs5>
					<v-img src="@/assets/images/web/bby.jpg"
					height="180px"
					></v-img>
				</v-flex>

				<v-flex xs7>
				<v-card-title primary-title>
						<div class="mx-n1 mt-1 text-left">
							<div class="headline font-weight-bold">{{ cardHeadlineJch }}</div>
							<div class="font-weight-bold mt-n1">Nama Perusahaan</div>
							<div class="font-weight-thin mt-n1">Lokasi</div><br>
							<div class="font-weight-thin mt-n10">Jenis Pekerjaan</div>
						</div>
				</v-card-title>

				</v-flex>
			</v-layout>
		</v-card>
</v-col>
</v-row>

<div class="text-right mr-15">
	<v-btn flat 
		color="#4DBA87" 
		dark
		medium
		class="mt-n1 mr-1 font-weight-bold"
		rounded
		>
		Cari lowongan <br>kerja
	</v-btn>
</div>

<v-card 
	color="grey lighten-5 mt-16"
	height="1000px"
	width="1920px"
	flat
	>
	
	<div>
		<v-row class="text-center">
			<v-col cols="15" class="mt-10">
				<h2 class="font-weight-black changeFont">Bekerjasama dengan</h2>
			</v-col>
		</v-row>
	</div>

	<v-row 
		class="mt-5 mx-16 "
		>
		<v-col 
		class="my-5" 
		cols="3" 
		v-for="partnershipLogo in partnershipLogos"
        :key="partnershipLogo"
        sm="4"
		>
		<v-img 
		:src="partnershipLogo.src"
		/>

		<span>{{partnershipLogo.src}}</span>
		
		</v-col>
	</v-row>


		<div>
			<v-row class="text-center">
				<v-col cols="15" class="mt-10">
					<h2 class="font-weight-black changeFont">Mitra penjualan</h2>
				</v-col>
			</v-row>
		</div>


	

	
		<div>
			<v-row class="text-center">
				<v-col cols="15" class="mt-10">
					<h2 class="font-weight-black changeFont">Mitra pembayaran</h2>
				</v-col>
			</v-row>
		</div>


	

	
		<div>
			<v-row class="text-center">
				<v-col cols="15" class="mt-10">
					<h2 class="font-weight-black changeFont">Pernah diliput di</h2>
				</v-col>
			</v-row>
		</div>



</v-card>

	

	<!-- <v-btn
		color="primary"
		depressed
		text
		elevation="10"
		small
		to="/Popup/MasukLogin"> UNTUK POP UP
	</v-btn>

	<v-row class="mt-12 text-center">
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

			    <v-divider class="mx-4"></v-divider> -->
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
			    <!-- <v-card-actions>
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
	</v-row> -->
	<!-- <v-row class="mt-6" justify="center" align="center">
		<v-col cols="6">
			<v-img src="@/assets/images/web/mentor1.jpg" contain/>
		</v-col>
		<v-col cols="6">
			<div>
				<h1>Bingung bekerja atau memilih pekerjaan impian kamu?</h1>
				<h3>Tanyakan pada expertnya!</h3>
			</div>
		</v-col>
	</v-row> -->
	<!-- <v-row class="mt-12">
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
	</v-row> -->
</div>
</template>
<script>
export default{
	data(){
		return {
			academies: [],
			experts: [],
			items: [
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				},
				{
					src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
				},
			],
			cardHeadlineJa: 'Judul Kelas',
			mentorName : 'Nama Mentor',
			cardHeadlineJac: 'Nama Mentor',
			cardHeadlineJch: 'Posisi',
			rating: 4.3,
			partnershipLogos: [
				{
					src: '../assets/bekerjasama/telkomsel.png',
				},
				{
					src: '@/assets/bekerjasama/ilmupedia.png',
				},
				{
					src: '@/assets/bekerjasama/dilo.png',
				},
				{
					src: '@/assets/bekerjasama/cicil.png',
				},
			],
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
	.subtitle-mentor{
		font-size: 3em;
		font-weight: 400;
	}

	.marginJa{
		align-content:space-around;
	}

</style>
