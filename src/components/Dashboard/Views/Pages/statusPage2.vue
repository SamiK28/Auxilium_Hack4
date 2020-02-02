<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                  @click="toggleNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin">
            <div style="display:inline-block">
            <img src="static/img/vue-logo.png" style="width:90px;">
            <span>Restaurant Management System</span>
            </div></router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/register" tag="li">
              <a>Register</a>
            </router-link>
            <router-link to="/admin/overview" tag="li">
              <a>Dashboard</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/background-2.jpg">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form id="myForm">
                  <div class="card" data-background="color" data-color="blue">
                    <div class="card-header">
                      <h3 class="card-title">Orders</h3>
                    </div>
                  </div>
                </form>
              </div><div class="col-md-12">
                <div class="card" :key="ind">
                  <div class="card-header">
                    <h4 class="title">Striped table</h4>
                    <p class="category">Here is a subtitle for this table</p>
                    {{this.tableData}}
                  </div>
                  <div class="card-content table-responsive table-full-width">
                    <el-table class="table-striped" :data="this.$store.state.statuses">
                      <el-table-column label="Id" property="id"></el-table-column>
                      <el-table-column label="Name" property="name"></el-table-column>
                      <el-table-column label="Status" property="status"></el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-transparent">
          <div class="container">
            <div class="copyright">
              &copy;
              <a href="http://localhost:8098" target="_blank">ManipalX</a>
            </div>
          </div>
        </footer>
        <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/register" tag="li">
          <a>Register</a>
        </router-link>
        <router-link to="/admin/overview" tag="li">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import {Table, TableColumn} from 'element-ui'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    data () {
      return {
        ind: 0,
        errorMsg: '',
        email: null,
        password: null
      }
    },
    computed: {
      baseurl () {
        return window.location.origin
      }
    },
    methods: {
    },
    // methods: {
    //   login () {
    //     if (this.email !== null && this.password !== null) {
    //       this.$store.state.user = 'user'
    //       setTimeout(() => {
    //         this.$router.push('/')
    //       }, 500)
    //     }
    //   },
    //   toggleNavbar () {
    //     document.body.classList.toggle('nav-open')
    //   },
    //   closeMenu () {
    //     document.body.classList.remove('nav-open')
    //     document.body.classList.remove('off-canvas-sidebar')
    //   }
    // },
    mounted () {
      console.log('FETCHING Statuses')
      let vm = this
      let sessionurl = 'http://localhost:8098/api/data/getStatuses'
      setInterval(() => {
        axios.post(sessionurl, {}, {}).then(res => {
          console.log(res.data)
          vm.tableData = res.data
          vm.ind++
          console.log(vm.ind)
        }).catch(err => {
          console.log(err)
        })
      }, 10000)
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
