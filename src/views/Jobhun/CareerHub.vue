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
				
				</h1>
				</div>
			</v-col>
			</v-row>
	</v-img>

    <div>
		<v-row class="mt-10 text-center">
			<v-col cols="15">
				<span class="changeFont font-weight-black">
					Cari pekerjaan impianmu!</span>
			</v-col>
		</v-row>
    </div>

    <div class="bg-searchBar">
				<v-container class="">
                    <v-row justify="center" align="center"
                    class="mt-8"
                    >
                        <v-col
                            md="4" 
                            class=""
                            >
                                <v-text-field
                                    label="Kategori pekerjaan"
                                    solo
                                    right
                                    prepend-inner-icon="mdi-magnify"
                                    @keyup.enter="searchJobCategory"
                                    class=""
                                >
                                <v-icon>mdi-magnify</v-icon>
                            </v-text-field> 
                        </v-col>
                        <v-col
                            md="4" 
                            class=""
                            >
                                <v-text-field
                                    label="Lokasi"
                                    solo
                                    right
                                    prepend-inner-icon="mdi-magnify"
                                    @keyup.enter="searchLocation"
                                    class=""
                                >
                                <v-icon>mdi-magnify</v-icon>
                            </v-text-field> 
                        </v-col>
                    </v-row>
                    <div class="">
                        <v-row justify="center" align="left"
                        class="mt-n8">
                            <v-col 
                                cols="8" class="">
                                    <v-combobox
                                        class=""
                                        height="45"
                                        :items="workTypes"
                                        :search-input.sync="search"
                                        clearable
                                        label="Tipe pekerjaan"
                                        dense
                                        full-width
                                        hide-selected
                                        multiple
                                        small-chips
                                        solo
                                    ></v-combobox>
                                </v-col>
                        </v-row>
                </div>
                <v-spacer></v-spacer> 
                <div class="mx-14">
                    <v-row justify="center" class="mt-n7 mx-16">
                        <v-col 
                        cols="8" class="mx-16 ">
                            <v-combobox
                                class=""
                                height="45"
                                :items="workSystems"
                                :search-input.sync="search"
                                clearable
                                label="Sistem kerja"
                                dense
                                full-width
                                hide-selected
                                multiple
                                small-chips
                                solo
                            ></v-combobox>
                        </v-col> 
                        <v-spacer></v-spacer>   
                        <v-col class="">
                            <v-btn
                            outlined
                            color="white"
                            elevation="2"
                            large
                            class="mx-n16"
                            >
                            Cari
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
        </v-container>
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
export default {
    data(){
        return{
            workTypes: [
            'Full Time', 'Part Time', 'Internship',
            'Freelance', 'Remote', 'Volunteer'
        ],
        workSystems: [
            'Work From Office', 'Work From Home', 'WFH + WFO'
        ],
        cardHeadlineJch: 'Posisi',
        companyNameJch: 'Nama Perusahaan',
        locationComp: 'Lokasi',
        workType: 'Tipe Pekerjaan',
        page: 1
        }
    },
    methods:
    {
        toJobDetail: function(){
            this.$router.push('/jobhun/academy')
        }
    }
}
</script>

<style>
    .bg-searchBar{
        background-color: #48B391 !important;
    }
</style>