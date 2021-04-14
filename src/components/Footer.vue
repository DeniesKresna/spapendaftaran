<template>
    <div>
        
<v-footer
    dark
    padless
    color="black"
        >
        <v-row class="mt-10">
            <v-col md="3">
                <v-container>
                    <v-row>
                        <v-col>
                            <div class="mx-15">
                                <span 
                                class="font-weight-bold headlineFooter"
                                >Jobhun</span><br><br>
                            
                                <span 
                                class="font-weight-thin mt-10 sublineFooter"
                                >Semua hal yang dibutuhkan 
                                para 
                                pencari kerja maupun perusahaan yang sedang
                                mencari pekerja ada di
                                Jobhun. Pencari kerja dapat 
                                menemukan pekerjaan, 
                                membekali diri dengan
                                kemampuan yang relevan 
                                dengan industry, serta 
                                menemukan mentor yang tepat. 
                                Sedangkan perusahaan bisa mencari 
                                pekerja dengan cara 
                                yang cepat dan mudah.</span>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-col md="3">
            <v-container>
                <v-row>
                    <v-col>
                        <div>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Program</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Blog</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Tentang Jobhun</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Pasang Lowongan Kerja</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Berkarier di Jobhun</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Kerjasama Media Partner</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Syarat & Ketentuan</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Kebijakan Privasi</a><br><br>
                            <a href="#"
                                class="font-weight-thin text-hover"
                                >Profil Perusahaan & Brand Kit</a><br><br>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-col md="3">
            <v-container>
                <v-row>
                    <v-col>
                        <div>
                            <span 
                                class="font-weight-bold headlineFooter"
                                >Hubungi Kami</span><br><br>

                            <span 
                                class="font-weight-thin"
                                >Jobhun - PT Jobhun Membangun Indonesia</span><br><br>
                            
                            <span 
                                class="font-weight-thin"
                                >Jl. Dharmawangsa No. 33B, Airlangga, Gubeng, Surabaya, Jawa Timur, Indonesia 60286</span><br><br>
                            
                            <span 
                                class="font-weight-thin"
                                >E-mail: info@jobhun.id;<br>partnership@jobhun.id.</span><br><br>

                            <span 
                                class="font-weight-thin"
                                >Phone: 081332905635</span><br><br>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-col md="2">
            <v-container>
                <v-row>
                    <v-col>
                        <div>
                            <span 
                                class="font-weight-bold headlineFooter"
                                >Media sosial Jobhun</span><br><br>

                                <v-row class="mx-1">
                                        <a href="http://instagram.com/jobhun">
                                            <v-img src="@/assets/medsos/ig-tosca.png" class="img-hover" width="25px"></v-img>
                                        </a>

                                        <a href="https://www.linkedin.com/company/13406000/">
                                            <v-img src="@/assets/medsos/linkedin-tosca.png"  width="30px" class="mx-3 img-hover"></v-img>
                                        </a>
                                    
                                        <a href="https://www.youtube.com/channel/UCCzKrMp711xzX8nI8zempKw?view_as=subscriber">
                                            <v-img src="@/assets/medsos/youtube-tosca.png" class="img-hover" width="25px"></v-img>
                                        </a>
                                </v-row><br><br>
                            
                                <span 
                                class="font-weight-bold headlineFooter"
                                >Masukkan alamat emailmu
                                untuk mendapatkan
                                informasi seputar layanan
                                dan program Jobhun!</span><br><br>

                                <v-col
                                class="mx-n3"
                                    md="16"
                                    >
                                    <v-text-field
                                    class="text-black"
                                        focusable
                                        dense
                                        outlined
                                        background-color="white" 
                                        color="#48B391"
                                ></v-text-field>
                                </v-col>    

                                <div class="">
                                    <v-btn 
                                        color="#48B391" 
                                        dark
                                        medium
                                        class="mt-n10 mr-1 font-weight-bold"
                                        rounded
                                        >
                                        Saya mau!
                                    </v-btn>
                                </div>
                                    
                                
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
    </v-footer>
    <v-col
            class="text-center"
            cols="12"
            >
            <span>2021</span> — <strong>PT Jobhun Membangun Indonesia</strong>
            </v-col>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mediaSocialLogos: [
				{
					src: '@/assets/medsos/ig-tosca.png',
				},
				{
					src: '@/assets/medsos/linkedin-tosca.png',
				},
				{
					src: '@/assets/medsos/youtube-tosca.png',
				},
			],
        }
    }
    
}
</script>
<style>
    a{
        color: white !important;
        text-decoration: none;
    }

    .text-hover:hover {
        color:#48B391 !important;
    }

    .img-hover:hover {
        opacity: 0.3 !important;
        transition: .5s ease;
    }

    .text-black input {
        color: black !important;
    }
</style>