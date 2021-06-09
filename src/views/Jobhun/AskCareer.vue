<template>
    <div>
        <v-img
			src="@/assets/images/web/foto slider jac.png" aspect-ratio="3" height="665"
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
				Temukan mentor yang siap<br>
                menuntunmu menuju<br>
                karier impian!
				</h1>
				</div>
			</v-col>
			</v-row>
	</v-img>

    <div>
        <v-row class="mt-10" justify="center">
            <v-col cols="10">
                <p class="text-center">Jobhun Ask Career adalah layanan yang menghubungkan para pencari kerja agar dapat 
                    berkonsultasi dengan berbagai macam expert dengan keahlian profesional secara one-on-one. Kamu bisa 
                    bertanya seputar profesi, ketertarikan, study case, teori bidang tertentu, praktek, tools, hingga 
                    hambatan dalam berkarier secara bebas dan tanpa batas. Lakukan tatap muka dengan mudah secara virtual 
                    bersama mentor pilihan yang telah berpengalaman dibidangnya. Kamu bisa menyesuaikan dengan kebutuhanmu.</p>
            </v-col>
    </v-row>
    </div>

    <v-card
    elevation="5"
    max-width="680px"
    class="mx-auto mt-10 mb-16"
    >
        <v-carousel
        cycle
        show-arrows-on-hover
        hide-delimiter-background
        hide-delimiters
        height="400px"
        >
        <v-carousel-item
            v-for="(slidesJAC,i) in slidesJACs"
            :key="i"
            :src="slidesJAC.src"
            ></v-carousel-item>
        </v-carousel>
    </v-card>

    <div>
		<v-row class="text-center mt-n3">
			<v-col cols="15">
				<span class="font-weight-bold font-size">
					Kembangkan potensimu bersama mentor yang siap bersedia memandu, kapan saja dan di mana saja.<br>
                    Harga konsultasi mulai dari Rp100.000,- per jam. Mulai konsultasi sekarang juga!​
                </span>
			</v-col>
		</v-row>
    </div>

    <div>
		<v-row class="text-center">
			<v-col cols="15">
				<span class="changeFont font-weight-black tx-bold">
					Pilih mentormu disini!</span>
			</v-col>
		</v-row>
    </div>
    
    <div class="bg-searchBar">
				<v-container class="">
                    <v-row justify="center" align="stretch"
                    class="mt-8"
                    >
                        <v-col
                            md="4" 
                            class="d-flex justify-center align-center"
                            >
                                <v-text-field
                                    label="Cari mentor"
                                    solo
                                    right
                                    prepend-inner-icon="mdi-magnify"
                                    @keyup.enter="searchClass"
                                    class=""
                                >
                                <v-icon>mdi-magnify</v-icon>
                            </v-text-field> 
                            
                        </v-col>
                        <v-col 
                        cols="4">
                            <v-combobox
                                class=""
                                height="48"
                                :items="items"
                                :search-input.sync="search"
                                clearable
                                label="Kategori"
                                dense
                                full-width
                                hide-selected
                                
                                small-chips
                                solo
                            ></v-combobox>
                        </v-col>
                    </v-row>
                </v-container>
    </div>

    <v-row 
		class="mt-5 mx-15"
		>
		<v-col class="my-4" 
		cols="3" 
		v-for="n in 9"
        :key="n"
        sm="4"
		align="center"
		>
        <v-hover
        v-slot="{ hover }"
        >
		<v-card 
			class=""
			width="400px"
			rounded="0"
            :elevation="hover ? 5 : 2"
			:class="{ 'on-hover': hover }"
			>
			<v-layout>
				<v-flex xs5>
                    <v-avatar
                        class="profile mt-2 mr-5"
                        size="130"
                        tile
                    >
                        <v-img src="@/assets/images/web/bby.jpg"></v-img>
                    </v-avatar>
					<!-- <v-img src="@/assets/images/web/bby.jpg"
                    class="mt-2 mr-5"
					height="130px"
                    width="130px"
					></v-img> -->
				</v-flex>
				<v-flex xs7>
				<v-card-title primary-title
                class="text-left mx-n10 mt-n2">
                    {{ cardHeadlineJac }}
					</v-card-title>

                    <v-card-text>
                            <div class="mx-n7 mt-n4 text-left"	
                                >
                                <!-- <div class="title font-weight-bold"></div> -->
                                <v-card-subtitle class="font-weight-bold mt-n10 mx-n7">{{ cardProfJac }}</v-card-subtitle>
                                <!-- <v-list-item-subtitle>{{ cardProfJac }}</v-list-item-subtitle> -->
                                <h4 class="font-weight-thin mt-n3 mx-n3">{{ cardCompanyJac }}</h4><br>
                                <h5 class="font-weight-thin mt-n7 mx-n3">{{ cardCategoryJac }}</h5><br>
                                <h3 class="font-weight-bold mt-n4 mx-n3">{{ cardPriceJac }}</h3>
                            </div>
                    </v-card-text>
                        <div class="mr-lg-16 text-left ml-n6 mt-n5" >
                            <v-rating
                            v-model="rating"
                            color="yellow darken-3"
                            background-color="grey darken-1"
                            empty-icon="$ratingFull"
                            class="mr-10"
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
					class="mt-3 font-weight-bold"
                    to="/jobhun/mentoraskcareer"
					>Pilih mentor</v-btn>
					
				</v-card-actions>
				</v-flex>
			</v-layout>
		</v-card>
        </v-hover>
    </v-col>
</v-row>

    <div class="text-right mr-16 mb-7">
        <v-row justify="end">
            <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            color="#48B391"
            ></v-pagination>
        </v-row>
    </div>

    </div>
</template>

<script>
import Footter from '@/components/Footer'
export default {
    Footter,
    data(){
        return{
            page: 1,
            slidesJACs :[
                {
                    src : require('@/assets/material-jac/slider-1/item-slider-1.jpeg'),
                },
                {
                    src : require('@/assets/material-jac/slider-1/item-slider-2.jpeg'),
                },
                {
                    src : require('@/assets/material-jac/slider-1/item-slider-3.jpeg'),
                },
            ],
			cardHeadlineJac: 'Nama Mentor',
			cardProfJac: 'Profesi',
            cardCompanyJac: 'Asal perusahaan',
            cardCategoryJac: 'Kategori',
            cardPriceJac: 'Rp600.000,-',
			rating: 4,
            items: ['Blogger', 'Brand', 'C Level', 'Data Engineer',
            'Digital Marketer', 'Graphic Designer', 'Health Sector',
            'Interpreter', 'Marketing & Business Development', 'Partnership',
            'People Management', 'Product Development', 'Programmer', 'Public Relation',
            'Public Speaker', 'Research (2)', 'SEO Specialist', 'Social Initiator',
            'Translator', 'UI/UX Design', 'Voice Over', 'Writing'],
        }
    }
}
</script>
<style>
    .changeFont{
		font-size: 1.8em;
		
	}
    .bg-searchBar{
        background-color: #48B391 !important;

    }
    .txt-size{
        font-weight: 1.25rem;
    }
</style>