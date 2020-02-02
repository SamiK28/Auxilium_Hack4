<template>
  <div class="user">
    <div class="photo">
      <img src="static/img/faces/face-2.jpg"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" @click="toggleMenu" href="javascript:void(0)">
           <span>
             {{this.$store.state.userProfile.name}}
             <b class="caret"></b>
          </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <el-collapse-transition>
          <ul class="nav" v-show="!isClosed">
            <li>
              <router-link to="/my-profile">
                <span class="sidebar-mini">P</span>
                <span class="sidebar-normal">Profile</span>
              </router-link>
            </li>
            <li>
              <router-link to="/editprofile">
                <span class="sidebar-mini">Ep</span>
                <span class="sidebar-normal">Edit Profile</span>
              </router-link>
            </li>
            <li>
              <a @click="logout">
                <span class="sidebar-mini">L</span>
                <span class="sidebar-normal">Logout</span>
              </a>
            </li>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  export default {
    components: {
      [CollapseTransition.name]: CollapseTransition
    },
    data () {
      return {
        isClosed: true
      }
    },
    methods: {
      logout () {
        let vm = this
        this.$store.dispatch('logoutUser').then(res => {
          vm.$router.push('/')
          window.location.reload()
        })
      },
      toggleMenu () {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style>
  .collapsed {
    transition: opacity 1s;
  }
</style>
