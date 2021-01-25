//import qs from 'qs';
import api from '@/plugins/api'

const expert= {
    namespaced: true,
/*
    state: {
      loadedPosts: []
    },

    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts;
      }
    },
*/
    actions: {
      index({}, payload){
        return new Promise((resolve, reject) => {
          api.get('/experts'+payload).then(response => {
              resolve(response.data);
          });
        });
      },
      list({}, payload){
        return new Promise((resolve, reject) => {
          api.get('/experts/list'+payload).then(response => {
              resolve(response.data);
          });
        });
      },
      store({}, payload){
        return new Promise((resolve, reject) => {
          api.post('/experts', payload).then(response => {
            resolve(response.data);
          });
        });
      },
      update({}, payload){
        return new Promise((resolve, reject) => {
          api.put('/experts/'+payload.id,payload).then(response => {
            resolve(response.data);
          });
        });
      },
      destroy({}, payload){
        return new Promise((resolve, reject) => {
          api.delete('/experts/'+payload).then(response => {
            resolve(response.data);
          });
        });
      },
      pageData({}, payload=""){
        return new Promise((resolve, reject)=>{
          api.get('/experts/page_data'+payload).then(response =>{
            resolve(response.data);
          });
        });
      }
    },

    getters: {
    }
}

export default expert;