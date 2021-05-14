<template>
<div>
   <h1>this is admin home</h1>
   <!-- <p>account: {{ account}}</p>
   <pre>{{articles}}</pre>
   <b-button @click="fetchArticles"> dispatch fetchArticles</b-button> -->

   <b-table :fields="fields" :items="articles" >
     <template v-slot:cell(date)="data">
       {{data.value |toDate }}
     </template>
     <template v-slot:cell(content)="data">
       {{data.value |subContent }}
     </template>
     <template v-slot:cell(id)="data">
        <b-button @click="editArticle(data.value)">修改</b-button>
        <b-button @click="deleteArticle(data.value)"  variant="danger">刪除</b-button>
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
        {key:'id', lable: "修改/刪除"},
        {key:'banner', lable: '背景'}
      ]
    };
  },
  // 去打action
  methods: {
    ...mapActions(['fetchArticles']),
    editArticle: function(id){
      this.$router.push(`/admin/edit/:${id}`)
    },
    deleteArticle:function(id) {
      console.log('id', id)
    },
  },
  // 一定要從computed拿mapstate拿資料
  computed: {
    ...mapState(['account', 'articles'])
  },
  filters: {
    subContent: (conetent) => {
      return conetent.substring(0,150)
    },
    toDate: (timestamp) => {
      const date= new Date(timestamp);
      let Y = date.getFullYear();
      let M = date.getMonth();
      let D = date.getDate();
      let H = date.getHours();
      // let min = date.getMinutes();
      console.log('time', timestamp)
      console.log('date', date)
      // console.log( Y , M,D,H)
      // let min = (array(2).join('0') + date.getMinutes()).slice(-2);
      return `${Y}/${M+1} / ${D} ${H}`;
    },
  },
}
</script>

<style>

</style>