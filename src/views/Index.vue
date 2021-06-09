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
		
	<v-row class="mt-1 mb-16" justify="center" align="center">
		<v-col cols="4">
			<div>
				<h1>Ikuti penawaran terbaru
				<br>dari Jobhun!</h1>
			</div>
			
		</v-col>
		<!-- <v-col cols="4" class="mt-5 mb-10"> -->
			<v-card 
			max-width="700px" 
			class="mx-lg-12 elevation-5 d-flex justify-end mt-lg-16 mx-lg-16" >
				<v-carousel 
				cycle
				show-arrows-on-hover
				hide-delimiter-background
				hide-delimiters
				height="400px"
				>
					<v-carousel-item
						v-for="(item,i) in items"
						:key="i"
						:src="item.src"
						></v-carousel-item>
					</v-carousel>
			</v-card>
		<!-- </v-col> -->
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
		cols="6" 
		v-for="n in 6"
        :key="n"
		align="center"
		>
	<v-hover
	v-slot="{ hover }"
	>
		<v-card 
			class=""
			max-width="600px"
			max-height="400px"
			rounded="0"
			:elevation="hover ? 5 : 2"
			:class="{ 'on-hover': hover }"
			>
			<v-layout>
				<v-flex xs5>
					<v-img src="@/assets/images/web/bby.jpg"
					height="265px"
					></v-img>
				</v-flex>

				<v-flex xs7>
					<v-card-title primary-title 
					class="mx-n1 text-sm-left">
						<!-- {{ cardHeadlineJa }} -->
						Jobhun Academy: Food Photographer & Stylist
						</v-card-title>
						<v-card-text>
							<div class="mx-n1 mt-1 text-left"
							>
								<!-- <div class="headline font-weight-bold"></div> -->
								<h3 class="font-weight-bold mt-n3"> {{ mentorName }}</h3>
								<v-card-subtitle class="font-weight-bold mt-n5 mx-n4">Jabatan</v-card-subtitle><br>
								<h3 class="font-weight-thin mt-n8">Jadwal Kelas</h3><br>
								<h2 class="font-weight-bold mt-2">Rp600.000,-</h2>
							</div>
						</v-card-text>

						<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn 
						color="#48B391" 
						dark
						small
						class="mt-n1 mr-1 font-weight-bold"
						to="/academy/mentoracademy"
						>Pilih kelas</v-btn>
					</v-card-actions>
				</v-flex>
			</v-layout>
		</v-card>
		</v-hover>
</v-col>
</v-row>


<div class="text-right mr-15">
	<v-btn 
		color="#48B391" 
		dark
		small
		class="mt-n1 mr-1 font-weight-bold"
		rounded
		to="/jobhun/academy"
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
	class="mt-5 mx-16"
	>
		<v-col class="" 
		cols="4" 
		v-for="n in 6"
        :key="n"
		align="center"
		>
		<v-layout>
			<v-flex md12>
	<v-hover
	v-slot="{ hover }"
	>
			<v-card class=""
			height="350px"
			:elevation="hover ? 5 : 2"
			:class="{ 'on-hover': hover }"
			>
				<v-img
				src="@/assets/images/web/bby.jpg"
				max-height="190px"
				></v-img>

				<v-card-title primary-title
				class="mt-n3">
					{{cardHeadlineJac}}
					<!-- <div class="headline font-weight-bold mb-0 mt-n2"></div> -->
				</v-card-title>
				<v-card-text>
					<div class="text-left">
						<v-card-subtitle class="font-weight-bold mt-n8 mx-n4">Posisi</v-card-subtitle>
						<h2 class="font-weight-bold mt-n1 color-text-black">Rp600.000,-</h2>
					</div>
				</v-card-text>
				
				<div class="ml-11 mt-n4 text-left">
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
						<v-spacer></v-spacer>
					</div>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn 
					color="#48B391" 
					dark
					small
					class="  font-weight-bold"
					to="/jobhun/mentoraskcareer"
					>Pilih mentor</v-btn>
					
				</v-card-actions>
				
			</v-card>
	</v-hover>
		</v-flex>
	</v-layout>
	</v-col>
</v-row>

<div class="text-right mr-16">
	<v-btn
		color="#48B391" 
		dark
		small
		class="mt-3 mr-5 font-weight-bold"
		rounded
		to="/jobhun/askcareer"
		>
		Cari mentor
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
		<v-col class="my-3" 
		cols="6" 
		v-for="n in 6"
        :key="n"
		align="center"
		>
		<v-hover
		v-slot="{ hover }"
		>
		<v-card 
			class="rounded-0"
			max-width="700px"
			
			:elevation="hover ? 5 : 2"
			:class="{ 'on-hover': hover }"
			>
			<v-layout>
				<v-flex xs3>
					<v-img src="@/assets/images/web/bby.jpg"
					height="181px"
					></v-img>
				</v-flex>

				<v-flex xs7>
				<v-card-title primary-title
				class="mx-n1">
					{{ cardHeadlineJch }}
				</v-card-title>
				<v-card-text>
					<div class="mx-n1 mt-1 text-left">
							<!-- <div class="headline font-weight-bold mt-n1"></div> -->
							<h3 class="font-weight-bold mt-2">{{companyNameJch}}</h3>
							<div class="font-weight-thin mt-1">{{locationComp}}</div><br>
							<v-chip
							color="green"
							outlined
							small>
								<div class="font-weight-thin mt-n1">{{workType}}</div>
							</v-chip>
							
						</div>
				</v-card-text>
				</v-flex>
			</v-layout>
		</v-card>
		</v-hover>
</v-col>
</v-row>

<div class="text-right mr-15">
	<v-btn 
		color="#48B391" 
		dark
		medium
		class="mt-1 mr-1 font-weight-bold text-center"
		rounded
		to="/jobhun/careerhub"
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
				require('@/assets/Logo Web Jobhun/bekerjasama/telkomsel.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/ilmupedia.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/dilo.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/cicil.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/ipbi unair.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/panggilin.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/lias.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/cakap.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/sertiva.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/midtrans.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/qlue.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/dpkka unair.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/mpwr.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/alterra.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/ikigai.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/blibli.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/mau belajar apa.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/edufund.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/shipper.png'),
				require('@/assets/Logo Web Jobhun/bekerjasama/sekolahmu.png'),
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
				require('@/assets/Logo Web Jobhun/mitra-penjualan/midtrans.png'),
				require('@/assets/Logo Web Jobhun/mitra-penjualan/alfamart.png'),
				require('@/assets/Logo Web Jobhun/mitra-penjualan/alfamidi.png'),
				require('@/assets/Logo Web Jobhun/mitra-penjualan/dan+dan.png'),
				require('@/assets/Logo Web Jobhun/mitra-penjualan/lawson.png'),
			],
			featuredOnLogos: [
				require('@/assets/Logo Web Jobhun/media-diliput/daily social.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/tvri.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/surya.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/tribun news.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/idn times.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/suara surabaya.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/basha.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/sonora.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/provoke.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/sbo.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/scg.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/pas fm.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/prima radio.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/yot.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/ebs.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/bernas.png'),
				require('@/assets/Logo Web Jobhun/media-diliput/hipwee.png'),
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
