//import qs from 'qs';
import api from '@/plugins/api'

const auth= {
    namespaced: true,

    state: {
      auth: []
    },
/*
    mutations: {
      setPosts(state, posts){
        state.loadedPosts = posts;
      }
    },
*/
    actions: {
      register({}, payload){
        return new Promise((resolve, reject) => {
          api.post('/auth/register', payload).then(response => {
              resolve(response.data);
          });
        });
      },
    },

    getters: {
    }
}

export default auth;