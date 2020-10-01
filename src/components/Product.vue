<template>
  <div class="product">
    
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props:{
    name: String,
  }
}
</script>


<style scoped>

</style>
