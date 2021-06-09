<template>
    <div>
        
        <div class="bg-bread font-weight-bold">
            <v-breadcrumbs :items="items"
            class=""
            >
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </div>

    <div>
        <v-row class="">
            <v-avatar
                    class="profile mt-12 ml-15"
                    size="400"
                    tile>
                        <img
                            src="@/assets/images/web/cute.jpg"
                            alt="bby"
                            class="rounded-lg"
                        >
                </v-avatar>
                
            <v-col class="mt-10 mx-5">
                <span class="changeFont font-weight-bold">{{mentorName}}</span>
                <v-divider inset class="mx-10 ml-n3 mb-5 mt-2"></v-divider>
                <span class="font-weight-bold">Jadwal dan waktu yang tersedia untuk mentoring:</span>
                <v-col>
                    <v-img src="@/assets/icons/clock.png"
                    height="" width="20px" class="mb-n8"
                    ></v-img>
                        <v-row>
                            <v-col>
                                <div class="mx-10">
                                    <span 
                                    class="font-weight-regular"
                                    >Senin-Jumat pukul 18.00 – 21.00 WIB</span><br>
                                </div>
                        </v-col>
                    </v-row>
                </v-col>

                <span class="font-weight-bold">Tarif mentoring per jam:</span>
                <v-col>
                    <v-img src="@/assets/icons/wallet.png"
                    height="" width="20px" class="mb-n8"
                    ></v-img>
                        <v-row>
                            <v-col>
                                <div class="mx-10">
                                    <span 
                                    class="font-weight-regular"
                                    >Rp100.000,-</span><br>
                                </div>
                        </v-col>
                    </v-row>
                </v-col>
                <div class="mt-14">
                <v-btn 
					color="#48B391" 
					dark
					large
					class="mt-16 font-weight-bold"
                    to="/jobhun/formpendaftaranjac"
					>Pilih mentor
                </v-btn>
                </div>
            </v-col>
        </v-row>
        
        <v-divider inset class="mx-12 mt-10"></v-divider>
        
        <div>
            <v-row>
                <v-col class="ml-8">
                    <span class="changeFont font-weight-bold mx-16">Detail mentor</span>
                        <v-col>
                            <span class="font-weight-black mx-16">Profesi:</span>
                            <v-row>
                                <v-col class="mt-n2">
                                    <div class="mx-16">
                                        <span 
                                        class="font-weight-regular"
                                        >{{mentorsProfession}}</span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-8 mt-n10">
                        <v-col>
                            <span class="font-weight-black mx-16">Asal perusahaan:</span>
                            <v-row>
                                <v-col class="mt-n2">
                                    <div class="mx-16">
                                        <span 
                                        class="font-weight-regular"
                                        >{{originCompany}}</span><br>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-8 mt-n10">
                        <v-col>
                            <span class="font-weight-black mx-16">Bidang yang dikuasai:</span>
                            <v-row>
                                <v-col class="mt-n2">
                                    <div class="mx-16">
                                        <span 
                                        class="font-weight-regular"
                                        >{{masteredField}}</span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-8 mt-n10">
                        <v-col>
                            <span class="font-weight-black mx-16">Materi yang akan diajarkan dalam bentuk pembahasan:</span>
                            <v-row>
                                <v-col class="mt-n2">
                                    <div class="mx-16">
                                        <span 
                                        class="font-weight-regular"
                                        >{{courseMaterial}}</span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-8 mt-n10">
                        <v-col>
                            <span class="font-weight-black mx-16">Latar belakang pendidikan:</span>
                            <v-row>
                                <v-col class="mt-n2">
                                    <div class="mx-16">
                                        <span 
                                        class="font-weight-regular"
                                        >{{mentorsBackground}}</span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-8 mt-n10">
                        <v-col>
                            <span class="font-weight-black mx-16">Pengalaman:</span>
                            <v-row>
                                <v-col class="mt-n2">
                                    <div class="mx-16">
                                        <span 
                                        class="font-weight-regular"
                                        ><ul v-for="mentorsExperience in mentorsExperiences"
                                        :key="mentorsExperience.text">
                                            <li>
                                                <span v-text="mentorsExperience.text"></span>
                                                </li>
                                            </ul></span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-8 mt-n10">
                        <v-col>
                            <span class="font-weight-black mx-16">Cek profil LinkedIn mentor di <a href="#" class="txt-color">sini</a></span>
                        </v-col>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>
        </div>

        <v-divider inset class="mx-12 mt-5 mb-5"></v-divider>

        <div>
            <v-row>
                <v-col class="ml-8">
                    <span class="changeFont font-weight-bold mx-16">Lihat rekomendasi mentor lain</span>
                </v-col>
            </v-row>
        </div>

    </div>
    <v-row 
		class="mt-n2 mx-15 mb-5"
		>
		<v-col class="my-4" 
		cols="3" 
		v-for="n in 3"
        :key="n"
        sm="4"
		align="center"

		>
		<v-card 
			class=""
			width="400px"
			rounded="0"
            @click="toAskCareer"
			>
			<v-layout>
				<v-flex xs5>
                    <v-avatar
                        class="profile mt-2 mr-5"
                        size="130"
                        tile
                    >
                        <v-img src="@/assets/images/web/cute.jpg"></v-img>
                    </v-avatar>
					<!-- <v-img src="@/assets/images/web/bby.jpg"
                    class="mt-2 mr-5"
					height="130px"
                    width="130px"
					></v-img> -->
				</v-flex>
				<v-flex xs7>
				<v-card-title primary-title>
						<div class="mx-n9 mt-n1 text-left"	
						>
							<div class="title font-weight-bold">{{ cardHeadlineJac }}</div>
							<div class="subtitle font-weight-bold mt-1">{{ cardProfJac }}</div>
                            <!-- <v-list-item-subtitle>{{ cardProfJac }}</v-list-item-subtitle> -->
							<div class="font-weight-thin mt-n3">{{ cardCompanyJac }}</div><br>
							<div class="font-weight-thin mt-n8">{{ cardCategoryJac }}</div><br>
							<div class="font-weight-thin mt-n10">{{ cardPriceJac }}</div>
						</div>

					</v-card-title>
                        <div class="mr-lg-16 ml-n16 mt-n5" >
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
					
				</v-card-actions>
				</v-flex>
			</v-layout>
		</v-card>
    </v-col>
</v-row>


    </div>
</template>

<script>
import List from '../Academy/List.vue'
export default {
    data: () => ({
        List,
        mentorName: 'Nama Mentor',
        mentorsProfession: 'Public Relations Account Executive',
        originCompany: 'Inke Maris & Associates',
        masteredField: 'Public relations, pengembangan karier',
        courseMaterial: 'Teori, Karier',
        mentorsBackground: 'Gelar Associate Hubungan Masyarakat di Universitas Sebelas Maret (2016-2019)',
        mentorsExperiences: [
            {
                text: 'External Relations Staff di AIESEC in Sebelas Maret University (2017)',
            },
            {
                text: 'Delegates Service Youth Speak Forum 2018 di AIESEC in Sebelas Maret University (2018)',
            },
            {
                text: 'Organizing Committee Solo Leadership Conference 7.0 di AIESEC in Sebelas Maret University (2018)',
            },
            {
                text: 'Strategic Alliance Staff di AIESEC in Sebelas Maret University (2018)',
            },
            {
                text: 'Account Executive Intern di Ogilvy (2019)',
            },
            {
                text: 'Conference Committee Vice President Indonesia Youth Leadership Conference di AIESEC Indonesia (2019)',
            },
            {
                text: 'Media Relations di Piar Consulting (2019-2020)',
            },
            {
                text: 'Founder di KAR Notebook (2017-saat ini)',
            },
            {
                text: 'Account Executive di Inke Maris & Associates, Strategic Communications Consultant (2020-saat ini)',
            },
        ],
        items: [
            {
            text: 'Home',
            disabled: false,
            href: '/',
            },
            {
            text: 'Ask Career',
            disabled: false,
            href: '/jobhun/askcareer',
            },
            {
            text: 'Nama Mentor',
            disabled: true,
            href: '#',
            },
        ],
        cardHeadlineJac:'Nama Mentor',
        cardProfJac: 'Profesi',
        cardCompanyJac: 'Asal perusahaan',
        cardCategoryJac: 'Kategori',
        cardPriceJac: 'Rp600.000,-',
        rating: 4,
    }),
    methods:
    {
        toAskCareer: function(){
            this.$router.push('/jobhun/academy')
        }
    }
}
</script>
<style>
    .txt-color{
        color: #48B391 !important;
    }
    .bg-bread{
        background-color: #48B391 !important;
    }
    .changeFont{
		font-size: 1.5em;
	}

    .img-filtering{
		filter: #48B391 !important;
	}
</style>