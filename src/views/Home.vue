<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <h1>Hola Mundo</h1>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success" @click="gotoDayBook">Success</button>
    
    
  </div>
</template>

<script>


export default {
  methods:{
    gotoDayBook(){
      this.$router.push({name : "no-entry"})
    }
  }  
}
</script>
