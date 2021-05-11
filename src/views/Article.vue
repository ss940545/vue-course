<template>
  <!-- <h1>this is article page</h1> -->
  <article v-if="articles.length">
    <h2>{{ filerById.title}}</h2>
    <i>{{filerById.date}}</i>
    <span v-html="filerById.content"></span>
  </article>
</template>

<script>
import axios from "axios";

export default {
    data() {
       return  {
           artId: null,
           articles: [],
       }
   }, 
   mounted() {
    //  可以直接拿到HOME的ID
    const id = this.$route.params.id
    console.log('id', id)
    this.artId = id
    // 拿到文章
    const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
    axios.get(api)
    .then(res=> {
       this.articles = res.data.data;
       console.log('articles', this.articles)
    })
   },
   computed: {
     filerById: function() {
       return this.articles.filter(art => art.id == this.artId)[0]
     }
   }
  
}
</script>

<style>

</style>