<template>
<div>
   <h1>this is admin home</h1>
   <!-- <p>account: {{ account}}</p>
   <pre>{{articles}}</pre>
   <b-button @click="fetchArticles"> dispatch fetchArticles</b-button> -->
   <b-table :items="articles">
     <template v-slot:cell(content)="data">
       {{data.value |subContent }}
     </template>
   </b-table>
</div>
 
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return {
      fields:[
        {key:'title', lable: "文章標題"},
        {key:'date', lable: "上船日期"},
        {key:'content', lable: "文章內容"},
        {key:'id', lable: "修改/刪除"}

      ]
    }
  },
  // 去打action
  methods: {
    ...mapActions(['fetchArticles'])
  },
  // 一定要從computed拿mapstate拿資料
  computed: {
    ...mapState(['account', 'articles'])
  },
  filters: {
    subContent: (conetent) => {
      return conetent.substring(0,150)
    },
  },
}
</script>

<style>

</style>