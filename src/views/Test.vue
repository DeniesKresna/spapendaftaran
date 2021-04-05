<template>
    <div>
        <p>Nama : {{user.nama}}</p>
        <p>Umur : {{user.umur}}</p>
        <p><input type="text" v-model="user.nama"/></p>
        <p><input type="text" v-model="user.umur"/></p>

        <h1 v-if="user.umur > 25">Tua</h1>
        <h1 v-else>Muda</h1>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            user : {
                nama : 'Andreas',
                umur : 21,
            },
            nama : 'Eas'
        }
    }
}
</script>