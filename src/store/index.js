import Vue from 'vue'
import Vuex from 'vuex'

import journalModule from '../modules/daybook/store/journal';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        journal: journalModule
    }
})