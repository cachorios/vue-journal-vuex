<template>
      <Navbar/>
      <div class="d-flex">
            <div class="col-4">
                  <entry-list/>
            </div>
            <div class="col">
                  <router-view />

            </div>
      </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'


export default {
      components: {
            Navbar: defineAsyncComponent(    () => import(/* webpackChunckName: nabbar */'../components/Navbar.vue') ),
            EntryList: defineAsyncComponent( () => import(/* webpackChunckName: entrylist */'../components/EntryList.vue')) ,
      }
}
</script>