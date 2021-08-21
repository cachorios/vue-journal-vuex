<template>
      <button class="btn btn-primary">
            <i :class="icon" class="fa fa-2x"></i>
      </button>
</template>

<script>
export default {
      name: '07JournalAppFab',
      props: {
            icon: {
                  type: String,
                  required: false,
                  default: "fa-plus"
            }
      },
   
};
</script>

<style lang="scss" scoped>
      button{
            border-radius: 100%;
            bottom: 20px;
            height: 60px;
            position: fixed;
            right: 20px;
            width: 60px;
      }
</style>