<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="card-content">
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" >
            <div class="col-xs-3">
              <div class="avatar">
                <img src="static/img/faces/face-0.jpg" alt="Circle Image" class="img-circle img-no-padding img-responsive">
              </div>
            </div>
            <div class="col-xs-6">
              {{member.name}}
              <br>
              <span :class="getStatusClass(Available)">
                <small>Available</small>
              </span>
            </div>
            <div class="col-xs-3 text-right">
              <button class="btn btn-sm btn-success btn-icon" @click='phone'>
                <i class="fa fa-phone"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'Emergency Contacts',
        member: {}
      }
    },
    methods: {
      phone () {
        window.location.href = `Tel:` + this.member.phone
      },
      getStatusClass (status) {
        switch (status) {
          case 'Offline':
            return 'text-muted'
          case 'Available':
            return 'text-success'
          case 'Busy':
            return 'text-danger'
          default:
            return 'text-success'
        }
      }
    },
    mounted () {
      this.member = this.$store.state.userData.emergencyContact
    }
  }

</script>
<style>

</style>
