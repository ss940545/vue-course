<template>
  <!-- <h1 @click="routerToAdmin">this is login page</h1> -->
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="輸入帳號:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.account"
          type="text"
          placeholder="Enter account"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" 
      label="輸入密碼:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button @click.prevent="routerToAdmin" type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
  
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                account: '',
                password: ''
            }
        }
    },
    methods: {
        routerToAdmin: function() {
            this.$router.push({ name: "Admin"})
        }
    }
}
</script>

<style>

</style>