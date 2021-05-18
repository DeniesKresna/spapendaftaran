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
				
				<h1 class="changeFont font-weight-black pt-16 mt-16 mx-n16">
				Persiapkan Dirimu untuk Karier<br>
				Terbaik di Masa Depan
				</h1>
				<h4 class="subheading mx-n16">
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
				<span class="changeFont font-weight-black">
					Belajar <i>skill</i> baru untuk karier impian!</span>
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
			rounded="0"
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
					<v-btn 
					color="#48B391" 
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
	<v-btn 
		color="#48B391" 
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
				<span class="font-weight-black changeFont">Temukan mentor yang sesuai dengan bidang
				<br>kariermu di sini!</span>
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
				</v-card-title>
				<div class="mr-16 mt-n5">
						<v-rating
						v-model="rating"
						color="yellow darken-3"
						background-color="grey darken-1"
						empty-icon="$ratingFull"
						class="mr-16 ml-n7"
						dense
						half-increments
						hover
						size="18"
						readonly
						></v-rating>
					</div>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn 
					color="#48B391" 
					dark
					small
					class="mt-1  font-weight-bold"
					>Pilih mentor</v-btn>
					
				</v-card-actions>
				
			</v-card>
		</v-flex>
	</v-layout>
	</v-col>
</v-row>

<div class="text-right mr-15">
	<v-btn 
		color="#48B391" 
		dark
		small
		class="mt-n1 mr-3 font-weight-bold"
		rounded
		>
		Cari mentor
	</v-btn>

	<v-btn
		color="#48B391" 
		dark
		small
		class="mt-n1 mr-2 font-weight-bold"
		rounded
		>
		Testimoni
	</v-btn>
</div>

	
	<div>
		<v-img src="@/assets/images/web/jch.jpg"
		class="mt-16"
		>
		</v-img>
	</div>

	<div>
		<v-row class="mt-10 text-center">
			<v-col >
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
			max-width="500px"
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
							<div class="headline font-weight-bold mt-n1">{{ cardHeadlineJch }}</div>
							<div class="font-weight-bold mt-2">{{companyNameJch}}</div>
							<div class="font-weight-thin mt-n1">{{locationComp}}</div><br>
							<div class="font-weight-thin mt-n3">{{workType}}</div>
						</div>
				</v-card-title>

				</v-flex>
			</v-layout>
		</v-card>
</v-col>
</v-row>

<div class="text-right mr-15">
	<v-btn 
		color="#48B391" 
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
	flat
	>
	<v-card-text>
	<div>
		<v-row class="text-center">
			<v-col class="mt-10">
				<span class="font-weight-black changeFont color-text-black">Bekerjasama dengan</span>
			</v-col>
		</v-row>
			<v-row
			class="mt-5 mx-16"
			>
				<v-col 
				class="my-5" 
				cols="3" 
				v-for="(partnershipLogo, i) in partnershipLogos"
				:key="i"
				sm="2"
				>
				<v-img 
				:src="`${partnershipLogo}`"
				width="100px"
				class="img-original hover-img"
				/>
			</v-col>
		</v-row>
		
		<!-- <v-row class="text-center">
			<v-col class="mt-10">
				<span class="font-weight-black changeFont">Mitra penjualan</span>
			</v-col>
		</v-row>
		<v-row
			class="mt-5 mx-16"
			>
				<v-col 
				class="my-5" 
				cols="3" 
				v-for="(salesPartnerLogo, i) in salesPartnerLogos"
				:key="i"
				sm="2"
				>
				<v-img 
				:src="`${salesPartnerLogo}`"
				width="80px"
				class="img-original hover-img"
				/>
			</v-col>
		</v-row> -->

		<v-row class="text-center">
			<v-col class="mt-10">
				<span class="font-weight-black changeFont color-text-black">Mitra pembayaran</span>
			</v-col>
		</v-row>
		<v-row
			class="mt-5 mx-16"
			>
				<v-col 
				class="my-5" 
				cols="3" 
				v-for="(paymentPartnerLogo, i) in paymentPartnerLogos"
				:key="i"
				sm="2"
				>
				<v-img 
				:src="`${paymentPartnerLogo}`"
				width="100px"
				class="img-original hover-img"
				/>
			</v-col>
		</v-row>

		<v-row class="text-center">
			<v-col class="mt-10">
				<span class="font-weight-black changeFont color-text-black">Pernah diliput di</span>
			</v-col>
		</v-row>
		<v-row
			class="mt-5 mx-16 mb-16"
			>
				<v-col 
				class="my-5" 
				cols="3" 
				v-for="(featuredOnLogo, i) in featuredOnLogos"
				:key="i"
				sm="2"
				>
				<v-img 
				:src="`${featuredOnLogo}`"
				width="100px"
				class="img-original hover-img"
				/>
			</v-col>
		</v-row>

	</div>
	</v-card-text>

</v-card>
	
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
			companyNameJch: 'Nama Perusahaan',
			locationComp: 'Lokasi',
			workType: 'Tipe Pekerjaan',
			rating: 4.3,
			partnershipLogos: [
				require('@/assets/bekerjasama/telkomsel.png'),
				require('@/assets/bekerjasama/ilmupedia.png'),
				require('@/assets/bekerjasama/dilo.png'),
				require('@/assets/bekerjasama/cicil.png'),
				require('@/assets/bekerjasama/ipbi.png'),
				require('@/assets/bekerjasama/panggilin.png'),
				require('@/assets/bekerjasama/lias.png'),
				require('@/assets/bekerjasama/cakap.png'),
				require('@/assets/bekerjasama/sertiva.png'),
				require('@/assets/bekerjasama/midtrans.png'),
				require('@/assets/bekerjasama/qlue.png'),
				require('@/assets/bekerjasama/dpkka.png'),
				require('@/assets/bekerjasama/mpwr.png'),
				require('@/assets/bekerjasama/alterra.png'),
				require('@/assets/bekerjasama/ikigai.png'),
				require('@/assets/bekerjasama/blibli.png'),
				require('@/assets/bekerjasama/maubelajarapa.png'),
				require('@/assets/bekerjasama/edufund.png'),
				require('@/assets/bekerjasama/shipper.png'),
				require('@/assets/bekerjasama/sekolahmu.png'),
			],
			// salesPartnerLogos: [
			// 	require('@/assets/mitra-penjualan/maubelajarapa.png'),
			// 	require('@/assets/mitra-penjualan/loket.png'),
			// 	require('@/assets/mitra-penjualan/shopee.png'),
			// 	require('@/assets/mitra-penjualan/gotix.svg'),
			// 	require('@/assets/mitra-penjualan/blibli.png'),
			// 	require('@/assets/mitra-penjualan/cicil.png'),
			// 	require('@/assets/mitra-penjualan/libreria.png'),
			// 	require('@/assets/mitra-penjualan/maubelajarapa.png'),
			// 	require('@/assets/mitra-penjualan/rvang.png'),
			// ],
			paymentPartnerLogos: [
				require('@/assets/mitra-penjualan/update/midtrans.png'),
				require('@/assets/mitra-penjualan/update/alfamart.png'),
				require('@/assets/mitra-penjualan/update/alfamidi.png'),
				require('@/assets/mitra-penjualan/update/dandan.png'),
				require('@/assets/mitra-penjualan/update/lawson.png'),
			],
			featuredOnLogos: [
				require('@/assets/media/dailysocial.png'),
				require('@/assets/media/tvri-jatim.png'),
				require('@/assets/media/surya.png'),
				require('@/assets/media/tribun.png'),
				require('@/assets/media/idn.png'),
				require('@/assets/media/suarasurabaya.png'),
				require('@/assets/media/basha.png'),
				require('@/assets/media/sonora.png'),
				require('@/assets/media/provoke.png'),
				require('@/assets/media/sbotv.png'),
				require('@/assets/media/scg.png'),
				require('@/assets/media/pasfm.jpg'),
				require('@/assets/media/prima.png'),
				require('@/assets/media/yot.png'),
				require('@/assets/media/ebs.png'),
				require('@/assets/media/harianbernas.png'),
				require('@/assets/media/hipwee.png'),
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

	.headlineFooter{
		font-size: large;
	}

	.sublineFooter{
		font-size: small;
		
	}

	.changeFont{
		font-size: 1.8em;
		
	}

	.img-original{
		filter: grayscale(100%)!important;
		transition: .5s ease-in-out;
	}

	.hover-img:hover{
		filter: grayscale(0%)!important;
		transition: .5s ease-in-out;
	}

	.color-text-black{
		color: black;
	}
</style>
