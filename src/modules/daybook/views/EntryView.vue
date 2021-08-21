<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="max-2 fs-3 fw-light">2021, Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="mx-2 fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="mx-2 fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>
  <fab icon="fa-save"/>
  <img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg"
       alt="entry-pricture"
       class="img-thumbnail"
  
  >
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: "07JournalAppEntryview",
  components: {
        Fab: defineAsyncComponent(() => import('../components/fab.vue'))
  },
};
</script>
      
      

<style lang="scss" scoped>
    textarea{
          font-size: 20px;
          border: none;
          height: 100%;

          &:focus{
                outline: none;
          }
    }  
    img{
          width: 200px;
          position: fixed;
          bottom: 150px;
          right: 20px;
          box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.4);
    }
</style>