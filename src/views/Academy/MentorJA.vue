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

        <v-row class="mb-10">
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
                <span class="changeFont font-weight-bold">{{classNameJACs}}</span>
                <v-divider class="mx-10 ml-n3 mb-5 mt-2"></v-divider>
                    <v-card
                        class="mx-5"
                        max-width="230"
                    >
                        <v-card-title>
                        <div class="mb-3">
                            Tarif kelas:
                        </div>
                            <v-col>
                                <v-img src="@/assets/icons/price-tag.png"
                                height="" width="20px" class="mt-n3 mx-n2"
                                ></v-img>
                                        <v-row>
                                            <v-col>
                                                <div class="mx-6 mt-n9">
                                                    <h3
                                                    class="font-weight-bold"
                                                    >Rp100.000</h3><br>
                                                </div>
                                            </v-col>
                                        </v-row>
                            </v-col>
                        <div class="mt-n13">
                            Sisa kuota: {{remainingQuotas}}
                        </div>
                        </v-card-title>
                        <v-row
                        class="px-4 grey--text"
                        align="center"
                        >
                        </v-row>

                        <v-divider class="mt-6 mx-4"></v-divider>

                        <v-card-text
                        class="text-center">
                        <v-btn 
                            color="#48B391" 
                            dark
                            large
                            class="font-weight-bold"
                            to="/jobhun/formpendaftaranjac"
                            >Pilih kelas
                        </v-btn>
                        </v-card-text>
                    </v-card>
                <div class="mt-14">
                </div>
            </v-col>
        </v-row>
    
    <v-divider class="mt-n5 mb-5 mx-12"></v-divider>

    <div>
        <span class="changeFont font-weight-bold mx-15">Deskripsi</span>
        <v-row>
            <v-col cols="8">
                <v-layout>
                    <v-flex
                    class="flex overflow-y">
                        <v-card height="1000px"
                        width="1000px"
                        class="card-scroll"
                        tile
                        elevation="0">
                            <v-card-text
                            class="card-text txt-black"> 
                                <v-row>
                                    <v-col class="ml-8 mt-n10">
                                            <v-col>
                                                <h3 class="font-weight-black mx-16">{{classDescriptionTitles}}</h3>
                                                <v-row>
                                                    <v-col class="mt-n2">
                                                        <div class="mx-16">
                                                            <span 
                                                            class="font-weight-regular"
                                                            >
                                                                <span>{{classDescriptions}}</span>
                                                            </span>
                                                        </div>
                                                    </v-col>
                                                </v-row>
                                                <v-divider class="mb-5"></v-divider>
                                                
                                                <v-card
                                                color="#48B391"
                                                height="auto"
                                                max-width="800px"
                                                class="mx-16"
                                                >
                                                <h3 class="pa-3 mx-5 txt-white">Mengapa kamu harus mendaftar kelas ini</h3>

                                                <v-col
                                                v-for="cardReasonJoin in cardReasonJoins"
                                                :key="cardReasonJoin.text"
                                                >
                                                    <v-img src="@/assets/icons/checked-black.png"
                                                        width="15px" class="mb-n8 ml-7"
                                                        ></v-img>
                                                                <v-row>
                                                                    <v-col>
                                                                        <div class="mx-14 mb-n3">
                                                                            <span class="font-weight-bold txt-white"
                                                                            >
                                                                            {{cardReasonJoin.title}}<br>
                                                                            </span>
                                                                            <span 
                                                                            class="font-weight-thin sublineFooter txt-white"
                                                                            >{{cardReasonJoin.text}}</span>
                                                                    </div>
                                                                </v-col>
                                                            </v-row>
                                                    </v-col>
                                                </v-card>

                                                <v-divider class="mb-5 mt-5"></v-divider>
                                                
                                                <v-card
                                                color="#48B391"
                                                height="auto"
                                                max-width="800px"
                                                class="mx-16"
                                                >
                                                <h3 class="pa-3 mx-5 txt-white">Materi yang akan dipelajari</h3>

                                                <v-col class="mt-n4">
                                                    <v-row>
                                                        <v-col md="12">
                                                                    <div class="mx-10">
                                                                        <span 
                                                                        class="font-weight-thin sublineFooter txt-white"
                                                                            ><ol>
                                                                                <li v-for="cardCourseMaterial in cardCourseMaterials"
                                                                                :key="cardCourseMaterial.text">
                                                                                {{cardCourseMaterial.text}}
                                                                                </li>
                                                                            </ol>
                                                                        </span>
                                                                </div>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                </v-card>

                                                <v-divider class="mb-5 mt-5"></v-divider>

                                                <h3 class="font-weight-black mx-16">{{learningProccessTitle}}</h3>
                                                <v-row>
                                                    <v-col class="mt-n2">
                                                        <div class="mx-16">
                                                            <span 
                                                            class="font-weight-thin"
                                                            >
                                                                <span>{{learningProccess}}</span>
                                                            </span>
                                                        </div>
                                                    </v-col>
                                                </v-row>

                                                <h3 class="font-weight-black mx-16">{{usedPlatforms}}</h3>
                                                <v-row>
                                                    <v-col class="mt-n2">
                                                        <div class="mx-16">
                                                            <span 
                                                            class="font-weight-regular"
                                                            ><ol v-for="usedPlatformList in usedPlatformLists"
                                                            :key="usedPlatformList.text">
                                                                <li>
                                                                    <span v-text="usedPlatformList.text"></span>
                                                                    </li>
                                                                </ol>
                                                            </span>
                                                        </div>
                                                    </v-col>
                                                </v-row>

                                                <h3 class="font-weight-black mx-16">{{facilitiess}}</h3>
                                                <v-row>
                                                    <v-col class="mt-n2">
                                                        <div class="mx-16">
                                                            <span 
                                                            class="font-weight-regular"
                                                            ><ul v-for="facilitiesList in facilitiesLists"
                                                            :key="facilitiesList.text">
                                                                <li>
                                                                    <span v-text="facilitiesList.text"></span>
                                                                    </li>
                                                                </ul>
                                                            </span>
                                                        </div>
                                                    </v-col>
                                                </v-row>

                                                <v-divider class="mb-5 mt-5"></v-divider>

                                                <h3 class="font-weight-black mx-16">{{mentorsProfilesTitle}}</h3>
                                                <v-card
                                                    class="mt-3 mx-16"
                                                    max-width="200"
                                                    color="#48B391"
                                                >
                                                    <v-card-title class="justify-center">
                                                        <v-avatar
                                                            class="profile"
                                                            size="150px"
                                                            tile>
                                                                <img
                                                                    src="@/assets/images/web/doge.png"
                                                                    alt="doge"
                                                                    class="rounded-lg"
                                                                >
                                                        </v-avatar>
                                                    </v-card-title>

                                                    <v-divider class="mx-4"></v-divider>
                                                    
                                                    <v-card-title primary-title
                                                    class="mt-n2 font-weight-bold justify-center">
                                                        {{mentorProfileNames}}
                                                    </v-card-title>
                                                    <v-card-text class="text-center mt-n4">
                                                        
                                                            <span class="">{{mentorsTitle}}</span>
                                                        
                                                    </v-card-text>
                                                </v-card>

                                                <v-divider class="mb-5 mt-5"></v-divider>

                                                <h3 class="font-weight-black mx-16">{{mentorsExperiencesTitle}}</h3>
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
                                                                </ul>
                                                            </span>
                                                        </div>
                                                    </v-col>
                                                </v-row>

                                                <v-col>

                                                </v-col>
                                            </v-col>
                                        <v-row>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-col>

            <div class="changeFont font-weight-bold mt-n11">Jadwal</div>
            
            <v-flex>
                <v-layout>
                    <v-row>
                    <v-col class="mx-n15">
                    <v-card
                        class="mt-3"
                        max-width="300"
                        height=""
                        color="#48B391"
                        >
                        <v-col
                        v-for="classSchedule in classSchedules"
                        :key="classSchedule.text"
                        >
                            <ul class="mt-n2 mb-1">
                                <li class="">
                                    <v-row>
                                    <v-col>
                                        <div class="mb-n5 mt-n5">
                                            <div class="font-weight-bold txt-white"
                                            >
                                            {{classSchedule.title}}<br>
                                            </div>
                                            <div 
                                            class="font-weight-thin sublineFooter txt-white"
                                            >{{classSchedule.text}}</div>
                                    </div>
                                </v-col>
                            </v-row>
                                </li>
                            </ul>
                                
                    </v-col>
                </v-card>

                <div class="changeFont font-weight-bold mx-n10 mt-5">Testimoni</div>

                <v-card
                        class="mt-3"
                        max-width="400"
                        height=""
                        color="#48B391"
                        v-for="(testimonialsJA, i) in testimonialsJAs"
                        :key="i"
                        >
                        <v-col
                        >
                        <v-row>
                        <v-col>
                            <div class="mb-n5 mt-n5">
                                <div class="font-weight-bold txt-white mt-2"
                                >
                                {{testimonialsJA.title}}<br>
                                </div>
                                <v-divider class="mt-2 mb-2" ></v-divider>
                                <div 
                                class="font-weight-thin sublineFooter txt-white mb-2"
                                >{{testimonialsJA.text}}</div>
                                </div>
                            </v-col>
                        </v-row>
                                
                                
                    </v-col>
                </v-card>
                
            </v-col>
            </v-row>    
                </v-layout>
            </v-flex>
        </v-row>

        
    </div>


    </div>
</template>
<script>
export default {
    data: () => ({
        items: [
            {
            text: 'Home',
            disabled: false,
            href: '/',
            },
            {
            text: 'Academy',
            disabled: false,
            href: '/jobhun/academy',
            },
            {
            text: 'Nama kelas',
            disabled: true,
            href: '#',
            },
        ],
        classNameJACs: 'Jobhun Academy: UX Researcher',
        remainingQuotas: 8,
        mentorsExperiencesTitle : 'Pengalaman',
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
        classDescriptionTitles : 'Deskripsi kelas',
        classDescriptions : 'Profesi Business Development merupakan salah satu posisi inti yang ada di perusahaan. Seorang business development bertanggung jawab dalam menyusun target dan strategi jangka panjang organisasi, membangun hubungan dengan pelanggan, mengidentifikasi peluang bisnis, melakukan negosiasi bisnis, serta memonitor perkembangan pasar. Selain aspek bisnis, seorang business development manager harus mengerti mengenai industri yang digelutinya. Di Jobhun Academy, kamu bisa belajar menjadi seorang Business Development bersama dengan pakarnya langsung. Tidak hanya belajar secara teori saja, namun kamu juga akan praktek, sehingga bisa menghasilkan portfolio yang akan digunakan untuk mencari kerjaan nantinya. Selain itu, kamu juga bisa mempersiapkan karier sebagai seorang Business Development melalui program ini.',
        cardReasonJoins : [
            {
                title : "Belajar dengan formula khusus untuk persiapan karier",
                text : 'Di Jobhun Academy, kamu tidak hanya belajar secara teori saja. Namun juga akan praktek secara langsung untuk menghasilkan portfolio penunjang karier. Kamu juga bisa sharing bersama mentor untuk membahas persiapan karier.'
            },
            {
                title : "Berkesempatan untuk mendapatkan pekerjaan",
                text : 'Jobhun bekerjasama dengan berbagai perusahaan dalam mencari kandidat terbaik. Apabila kamu berhasil menyelesaikan program di Jobhun Academy dengan baik dan sesuai dengan kriteria yang sedang dicari oleh perusahaan, maka Jobhun akan merekomendasikan kamu agar bisa bekerja di beberapa perusahaan kerja sama Jobhun tersebut.'
            },
            {
                title : "Dibimbing oleh mentor-mentor berkualitas dan berpengalaman",
                text : 'Jobhun selalu berupaya menghadirkan mentor berkualitas dan berpengalaman dibidangnya, serta memiliki prestasi yang baik di bidang tersebut.'
            },
        ],
        cardCourseMaterials : [
            {
                text : 'Memahami pengertian Business Development dan mengapa penting untuk mempelajari ilmu ini'
            },
            {
                text : 'Memahami seluruh peran, tugas, tanggung jawab, dan etika seorang Business Development.'
            },
            {
                text : 'Memahami urutan jabatan untuk berkarier sebagai Business Development'
            },
        ],
        learningProccessTitle : 'Proses pembelajaran',
        learningProccess : 'Kelas berupa webinar selama 8 kali pertemuan (Teori, praktek, study case, dan diskusi) – Latihan soal yang berkaitan dengan materi atau teori (Dilaksanakan saat kelas berlangsung) – Tugas akhir dari mentor (Waktu pengerjaan akan ditentukan oleh mentor, deadline maksimal H+1 seminggu setelah kelas berakhir) – Mentor akan memproses nilai untuk sertifikat (Maksimal penilaian setelah H+1 minggu tugas dikumpulkan) – Kelas tambahan untuk career preparation bersama HR (Jadwal menyesuaikan kelas yang tersedia di bulan tersebut) – Sertifikat diterbitkan maksimal H+2 minggu setelah nilai masuk dari mentor.',
        usedPlatforms : 'Platform yang akan digunakan',
        usedPlatformLists : [
            {
                text : 'Zoom untuk webinar (Video webinar juga akan dibagikan kepada peserta)'
            },
            {
                text : 'Grup WhatsApp untuk berdiskusi'
            }
        ],
        facilitiess : 'Fasilitas',
        facilitiesLists : [
            {
                text : 'Materi dan modul'
            },
            {
                text : 'Grup WhatsApp untuk berdiskusi'
            },
            {
                text : 'Certificate of Completion'
            },  
        ],
        mentorsProfilesTitle : 'Profil mentor',
        mentorProfileNames : 'Nama mentor',
        mentorsTitle : 'Jabatan',
        classSchedules : [
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            },
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            },
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            },
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            },
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            },
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            },
            {
                title : "Kamis, 27 Mei 2021",
                text : "19.00-21.00 WIB"
            }
        ],
        testimonialsJAs : [
            {
                title : "Sigit",
                text : "Mantap sekali sumpah ga ada embel embel apapun bener bener bermutu kelas dengan kualitas premium."
            },
            {
                title : "Sigit",
                text : "Mantap sekali sumpah ga ada embel embel apapun bener bener bermutu kelas dengan kualitas premium."
            },
            {
                title : "Sigit",
                text : "Mantap sekali sumpah ga ada embel embel apapun bener bener bermutu kelas dengan kualitas premium. Mantap sekali sumpah ga ada embel embel apapun bener bener bermutu kelas dengan kualitas premium. Mantap sekali sumpah ga ada embel embel apapun bener bener bermutu kelas dengan kualitas premium."
            }
        ] 
    })
}
</script>
<style>
    .bg-bread{
        background-color: #48B391 !important;
    }
    .card-scroll {
    display: flex !important;
    flex-direction: column;
    }

    .card-text {
    flex-grow: 1;
    overflow: auto;
    }

    .scroll-off {
    overflow: hidden !important;
    scrollbar-width: none;
    -ms-overflow-style: none;
    }

    .txt-black{
        color: black !important;
    }

    .txt-white{
        color: white !important;
    }

    .text-bg-wh{
        background-color: white !important;
    }
</style>