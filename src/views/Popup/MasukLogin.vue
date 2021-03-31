<template>
    
    
    <v-container>
    
    <v-img
            class="mx-auto"
            src="@/assets/logo.png"
            height="100"
            width="130"
        ></v-img>   

    <div class="text-center">
    <v-btn :class="`mb-10 rounded-l-xl font-weight-bold `">
      Masuk
    </v-btn>
    <v-btn :class="`mb-10 rounded-r-xl font-weight-bold`"
    >
      Daftar
    </v-btn>
  </div> 

        <v-row>
     <div class="mb-5 font-weight-bold" >Silahkan masuk akun milikmu!</div>
        </v-row>
    
    <v-form v-model="valid" class="justify-center">
        <v-row
          cols="6"
          md="2"
        >
          <v-text-field
            v-model="alamatemail"
            label="Alamat email"
            class="font-weight-bold"
            required
          ></v-text-field>
        </v-row>
        <v-row
          cols="6"
          md="2"
        >
          <v-text-field
            v-model="katasandi"
            label="kata Sandi"
            type="password"
            class="font-weight-bold"
            required
          ></v-text-field>
        </v-row>  
    </v-form>
    <div class="text-end"> 
      <v-btn text class="ml-5 font-weight-bold">Lupa kata sandi</v-btn>
      </div> 
    
   <div class="text-center">
    <v-btn
      rounded
      color="#49BF94"
      dark
      class="mt-5 font-weight-black"
    >
      Masuk
    </v-btn>
  </div>
    </v-container>
  
</template>