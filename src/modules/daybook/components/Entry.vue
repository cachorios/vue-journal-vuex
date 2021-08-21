<template>
      <div class="entry-container mb-3 pointer p-2"
      @click="$router.push({name: 'entry', params:{id:10}})"
      >
            <div class="entry-title d-flex">
                  <span class="text-success fs-5 fw-bold">15</span>
                  <span class="mx-1 fs-5">Julio</span>
                  <span class="mx-2 fs-5 fw-light ">2021, jueves</span>
            </div>            
            <div class="entry-description">
                   Commodo excepteur qui culpa sit dolor anim commodo aute nostrud nostrud. Officia ea dolor nostrud sunt officia id cillum. Exercitation nisi eiusmod labore laborum anim ullamco eu nisi laborum nisi exercitation occaecat. Culpa laborum laborum veniam officia veniam duis officia laborum. Laboris esse ea labore elit minim quis consequat duis cillum irure.     
            </div>
      </div>
      
</template>

<script>
export default {
      name: '07JournalAppEntry',
      
};
</script>

<style lang="scss" scoped>
      .entry-container{
            border-bottom: 1px solid #2c3e50;
            transition: 0.2 all ease-in;
            
            &:hover {
                 background-color: lighten($color: gray, $amount: 45); 
            }
            .entry-description{
                  font-size: 12px;
            }
      }
</style>