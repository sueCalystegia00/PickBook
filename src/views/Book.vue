<template>
  <div class="book">
    <div id="searchArea">
      <form>
        <input type="search" placeholder="商品名で検索">
        <input type="submit" value="検索">
      </form>
    </div>
    <div class="title">
      <h2>カテゴリー</h2>
    </div>

    <div class="tab">
      <button v-for="(tab, index) in tabs"
              :key="tab.id"
              :class="{ active: currentTab === index }"
              @click="currentTab = index">
        {{ tab.tabName }}
      </button>
    </div>

    <div id="productsBox">
      <div v-show="currentTab === 0">
        <Product  v-for="product in products"
                  :key="product.id"
                  v-bind:name="product.name"
        />
      </div>
      <div v-show="currentTab === 1">
        <Product  v-for="tea in teaItems"
                  :key="tea.id"
                  v-bind:name="tea.name"
        />
      </div>
      <div v-show="currentTab === 2">
        <Product  v-for="coffee in coffeeItems"
                  :key="coffee.id"
                  v-bind:name="coffee.name"
        />
      </div>
      <div v-show="currentTab === 3">
        <Product  v-for="onigiri in onigiriItems"
                  :key="onigiri.id"
                  v-bind:name="onigiri.name"
        />
      </div>
      <div v-show="currentTab === 4">
        <Product  v-for="sandwich in sandwichItems"
                  :key="sandwich.id"
                  v-bind:name="sandwich.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  name: 'Book',
  components: {
    Product,
  },
  data () {
    return {
      currentTab: 0,
      id: 0,
      tabName: "",
      tabs: [
        {id: 1, tabName: 'すべて'},
        {id: 2, tabName: 'お茶'},
        {id: 3, tabName: 'コーヒー'},
        {id: 4, tabName: 'おにぎり'},
        {id: 5, tabName: 'サンドイッチ'},
      ],
      products:[
        {id: 1, category:'tea', name: '綾鷹'},
        {id: 2, category:'tea', name: 'お〜いお茶'},
        {id: 3, category:'tea', name: '伊右衛門'},
        {id: 4, category:'tea', name: '天然ミネラル麦茶'},
        {id: 5, category:'coffee', name: 'エメラルドマウンテン'},
        {id: 6, category:'coffee', name: 'なんかの微糖'},
        {id: 7, category:'onigiri', name: '鮭'},
        {id: 8, category:'onigiri', name: '梅干し'},
        {id: 9, category:'onigiri', name: 'ツナマヨ'},
        {id: 10, category:'sandwich', name: 'カツサンド'},
      ]
      
    }
  },
  computed:{
    teaItems(){
      const data = this.products;
      const result = data.filter(x => x.category === 'tea');
      return result;
    },
    coffeeItems(){
      const data = this.products;
      const result = data.filter(x => x.category === 'coffee');
      return result;
    },
    onigiriItems(){
      const data = this.products;
      const result = data.filter(x => x.category === 'onigiri');
      return result;
    },
    sandwichItems(){
      const data = this.products;
      const result = data.filter(x => x.category === 'sandwich');
      return result;
    },
  }
}
</script>


<style scoped>

</style>
