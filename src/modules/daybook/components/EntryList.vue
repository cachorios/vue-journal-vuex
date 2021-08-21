<template>
      <div class="entry-list-container">
            <div class="px-2 pt-2">
                  <input 
                        type="text"
                        class="form-control"
                        placeholder="Buscar entrada"
                  />
            </div>
            <div class="entry-scrollarea">
                  <h2 v-for="item in 100" :key="item" >
                        <entry/>
                  </h2>
            </div>
      </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';


export default {
      name: '07JournalAppEntrylist',

      components: {
            Entry: defineAsyncComponent(() => import(/*webpackTrunckName: entry*/'./Entry.vue') )

      },

      data() {
            return {
                  
            };
      },

      mounted() {
            
      },

      methods: {
            
      },
};
</script>

<style lang="scss" scoped>

      .entry-list-container{
            border-right: 1px solid #2c3e50;            
            height: calc(100vh - 75px);
      }
      .entry-scrollarea{
            margin-top: 5px;
            margin-bottom: 5px;
            height: calc( 100vh - 125px);
            overflow: scroll;
            padding: 1rem;

      }
</style>