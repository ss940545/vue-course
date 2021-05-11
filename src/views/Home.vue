<template>
  <div class="home">
    <article v-for="art in articles" :key="art.title">
      <h3 @click="routerToArticle(art.id)">{{ art.title}}</h3>
      <i>{{ art.date}}</i>
      <span>{{ art.content | subContent}}</span>
    </article>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";


export default {
  name: 'Home',
  components: {

  },
  data(){
    return  {
      articles: null,
    }
  },
  mounted() {
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
    axios.get(api)
    .then(res=> {
       this.articles = res.data.data;
       console.log('articles', this.articles)
    })
  },
  methods: {
    routerToArticle: function(id){
      this.$router.push({
        name:"Article",
        params: { id : id}
      })
    }
  },
  filters: {
    subContent: (conetent) => {
      return conetent.substring(0,150)
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  display: flex;
  padding-left: 2rem;
  justify-content: center;
  margin: 1rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ddd;
}
</style>