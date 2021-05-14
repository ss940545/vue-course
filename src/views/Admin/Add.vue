<template>
<div>
  <div>
  <h1>this is add page</h1>

    <b-form>
      <b-form-group
        id="input-group-1"
        label="文章標題:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formData.title"
          type="text"
          placeholder="Enter account"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
      id="input-group-2" 
      label="文章內容:" 
      label-for="textarea">
        <b-form-textarea
          id="textarea"
          
          v-model="formData.content"
          placeholder="Enter something"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button @click.prevent="submitFormData" type="submit" variant="primary">送出</b-button>
      <b-button @click.prevent="resetFormData"  type="reset" variant="danger">重製</b-button>
    </b-form>
  
  </div>
</div>
  
   
</template>

<script>
import {mapState , mapActions } from 'vuex'
export default {
  data(){
    return {
      formData: {
        title:'',
        content:'',
        data:'',
      }
    }
  },
  methods: {
    ...mapActions( ['addArticles'] ),
    resetFormData(){
      this.formData = {
        title:'',
        content:'',
        data:'',
      }
    },
    submitFormData(){
      this.formData.data  = new Date().getTime();
      // console.log('formdata', this.formData);
      this.addArticles(this.formData)
    }
  },
  // 一定要從computed拿mapstate拿資料
  computed: {
    ...mapState(['account'])
  },
}
</script>

<style>

</style>