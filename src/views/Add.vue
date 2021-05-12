<template>
<div>
  <h1>this is add page</h1>
  <p>account: {{ account}}</p>
</div>
  
   
</template>

<script>
import {mapState} from 'vuex'
export default {
  // 一定要從computed拿mapstate拿資料
  computed: {
    ...mapState(['account'])
  },
}
</script>

<style>

</style>