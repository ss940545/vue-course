<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">BLOG</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/">{{ $t("home") }}
            </b-nav-item>
            <b-nav-item  to="/about">{{ $t("about") }}
            </b-nav-item>
             <b-nav-item  to="/login">Login
            </b-nav-item>

            <!-- <b-nav-item  to="/add">add
            </b-nav-item> -->
            
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" 
                v-model="searchKey" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" 
                @click.prevent="submitSearchKey"
                type="submit">Search</b-button>
            </b-nav-form>

            
            <b-form-select  v-model="language" :options="selectlang" />
            

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data() {
        return  {
            searchKey: '',
            language: "zh",
            selectlang: [
                { text: "繁體中文", value: "zh" },
                { text: "English", value: "en" },
            ],
        }
    },
    mounted(){
        this.lang();
    },
    methods: {
        ...mapActions(['changeSearchKey']),
        submitSearchKey: function() {
            this.changeSearchKey(this.searchKey)
        },
        lang: function(){
            console.log('aaaaaaaaaa');
            localStorage.setItem("language", this.language);
        }
    },
    watch: {
        searchKey: {
            handler(val) {
                if(val === '') {
                    
                    this.submitSearchKey()
                }
            },
            deep: true
        },
    }
}
</script>

<style lang="scss" scoped>
.form-inline {
    display: flex;
}
</style>