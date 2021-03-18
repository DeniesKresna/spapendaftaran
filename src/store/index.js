import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/plugins/api'

import academy from './academy';
import academyPeriod from './academy-period';
import customer from './customer';
import payment from './payment';
import mentor from './mentor';
import expert from './expert';
import auth from './auth';
Vue.use(Vuex);

const serverAssetUrl = "https://localhost:443/pendaftaran-api/public/assets/";

const state = {
  assetUrl: serverAssetUrl,
  overlay: false,
  page: "",
  user:{id: null, name:"Jobhun Indonesia", image_url: serverAssetUrl + "images/logo.png"},
  loginDialog:false,
  menus: [
    { 'text': 'Academy', 'icon':'mdi-school', 'allow':[1],'active': false,
      'children':[{'text':'Peserta','url':'/academy/customer','active':false},
      {'text':'Periode','url':'/academy/period','active':false},
      {'text':'Kelas','url':'/academy/list','active':false}]
    },{ 'text': 'Ask Career', 'icon':'mdi-teach', 'allow':[1],'active': false,
      'children':[{'text':'Ask Career','url':'/ask-career/customer','active':false},
      {'text':'Periode','url':'/ask-career/period','active':false},
      {'text':'Kelas','url':'/ask-career/list','active':false}]
    },{ 'text': 'Pendaftaran', 'icon':'mdi-account-plus', 'allow':[1,2],'active': false,
      'children':[{'text':'Jobhun Academy','url':'/academy/form','active':false},
      {'text':'Ask Career', 'url':'/ask-career/period','active':false},
      {'text':'Career Hub','url':'/ask-career/list','active':false}]
    },{ 'text': 'Pengguna', 'icon':'mdi-account', 'allow':[1], 'active': false,
      'children':[{'text':'Mentor','url':'/user/mentor','active':false},
      {'text':'Expert','url':'/user/expert','active':false}]
    }
  ]
};

const mutations = {
  setOverlay(state, payload){
    state.overlay = payload;
  },
  setLoginDialog(state, payload){
    state.loginDialog = payload;
  },
  setPage(state, payload){
    state.page = payload;
  },
  setUser(state, payload){
    state.loginDialog = false;
    state.user = payload;
  },
  logout(state){
    state.user = {id: null, name:"Jobhun Indonesia", image_url: state.assetUrl + "images/logo.png"};
    localStorage.removeItem('token');
  }
};

const actions = {
  login({commit}, payload){
    return new Promise((resolve, reject)=>{
      api.post('/auth/login',payload).then(response =>{
          localStorage.setItem('token',"Bearer "+response.data.token)
          commit('setUser',response.data.user);
          resolve(response.data);
      });
    });
  },
  me({commit}){
    return new Promise((resolve, reject)=>{
      api.get('/auth/me').then(response=>{
        let obj = response.data;
        if(obj.id != undefined)
          commit('setUser',response.data);
      })
    });
  }
};

const getters = {
  overlay(state){
    return state.overlay;
  },
  title(state){
    return state.page.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },
  user(state){
    return state.user;
  },
  loginDialog(state){
    return state.loginDialog;
  },
  menus(state){
    return state.menus;
  }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        academy,
        academyPeriod,
        customer,
        payment,
        mentor,
        expert,
        auth
    }
});
