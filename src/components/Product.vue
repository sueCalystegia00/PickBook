<template>
  <div class="product">
    <div class="rect">
      <p>{{ name }}</p>
    </div>
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


<style>
.product
{
  width: 47%;
}
.rect
{
  width : 100% ;
  padding-bottom : 100% ;
  background-color: #FFFFFF;
}
</style>
