import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  window.onNuxtReady(() => {
    console.log('ready')
    new VuexPersistence({
      storage: window.localStorage
    }).plugin(store);
  });
}