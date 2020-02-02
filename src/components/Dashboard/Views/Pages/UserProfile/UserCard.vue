<template>
  <div class="card card-user">
    <div class="image">
      <img src="static/img/background.jpg" alt="...">
    </div>
    <div class="card-content">
      <div class="author">
        <img class="avatar border-white" src="static/img/faces/face-2.jpg" alt="...">
        <h4 class="title">{{this.$store.state.userData.fname}} {{this.$store.state.userData.lname}}
          <br>
          <a href="#">
            <small>{{this.$store.state.userData.username}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        {{this.$store.state.userData.address}}<br>
        {{this.$store.state.userData.phone}}<br>
        {{this.$store.state.userData.email}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        details: [
          {
            title: '12',
            subTitle: 'Orders'
          },
          {
            title: 'Manager',
            subTitle: 'Post'
          },
          {
            title: '10456$',
            subTitle: 'Collected'
          }
        ]
      }
    },
    methods: {
      getClasses (index) {
        const remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>

</style>
