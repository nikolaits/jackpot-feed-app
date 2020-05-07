import Vue from 'vue'
import Vuex from 'vuex';
import * as axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        pots:[]
    },
    getters:{
        getPots: state=>state.pots
    },
    mutations: {
       addPots(state, arr){
           state.pots = arr
       }
    },
    actions: {
        getData({commit}){
            console.log("here in getData")
            return new Promise((resolve, reject) => {
                axios.default
                .get("static/data.json")
                .then(response => {
                    if(response.status == 200){
                        commit('addPots', response.data.pots);
                        resolve()
                    }
                })
                .catch(e=>{
                    console.log("Error", e);
                    reject(e);
                })
            })

        },
        getNewData({getters}){
            console.log("new request ")
            // let newPots = []
            getters.getPots.forEach(element => {
                let amount = parseFloat(element.amount);
                element.amount = `${amount+(amount*0.001)}`;
                // newPots.push(element);
            });
            // commit('addPots', newPots);
        }
    }
})