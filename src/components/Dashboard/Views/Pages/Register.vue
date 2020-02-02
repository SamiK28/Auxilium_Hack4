<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle navbar-toggle-black"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login" class="btn">
                Looking to login?
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <h2>Servico</h2>
                  <h4>Register to get a job</h4>
                  <hr>
                </div>
              </div>
              <div class="col-md-4 col-md-offset-2">
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-danger">
                      <i class="ti ti-user"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Free Account</h5>
                    Just fill up the form beside to get started, Enter basic user information in the next steps.
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-warning">
                      <i class="ti-bar-chart-alt"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Get trained. Get a job</h5>
                    Know someone unemployed? Register them here.
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-info">
                      <i class="ti-headphone"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>24/7 Helpline</h5>
                    Having any problems with the app? <br>We are always here to help! :)
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <form method="#" action="#">
                  <div class="card card-plain">
                    <div class="content">
                      <div class="form-group">
                        <input type="email" placeholder="Your First Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Your Last Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="email" placeholder="Enter email" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password Confirmation" class="form-control">
                      </div>
                      <div class="form-group">
                        <p-radio v-model="enabledRadio" label="1">Employee</p-radio>
                        <p-radio v-model="enabledRadio" label="2">User</p-radio>
                      </div>
                    </div>

                    <div class="footer text-center">
                      <button type="button" class="btn btn-fill btn-danger btn-wd">Create Free Account</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer footer-transparent">
          <div class="container">
            <div class="copyright text-center">
              &copy;
              <a href="#" target="_blank">Servico</a>.
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/login">
            Looking to login?
          </router-link>
        </li>
        <li>
          <router-link to="/admin">
            Dashboard
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        enabledRadio: '2'}
    },
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
