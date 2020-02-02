<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Profile</h4>
    </div>
    <div class="card-content">
      <form>
        <div class="row">
          <div class="col-md-3">

            <fg-input type="text"
                      label="Username"
                      placeholder="Username"
                      v-model="user.username">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      label="Email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="phone"
                      label="Phone Number"
                      placeholder="Phone Number"
                      v-model="user.phone">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="user.fname">
            </fg-input>
          </div>
          <div class="col-md-5">
            <fg-input type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="user.lname">
            </fg-input>
          </div>
          <div class="col-md-2">
            <fg-input type="text"
                      label="Gender"
                      placeholder="Gender"
                      v-model="user.gender">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8">
            <fg-input type="text"
                      label="Address"
                      placeholder="Home Address"
                      v-model="user.address">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="BMI"
                      placeholder="BMI"
                      v-model="user.bmi">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Height"
                      placeholder="Height"
                      v-model="user.height">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Weight (Kg)"
                      placeholder="Weight"
                      v-model="user.weight">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Blood Group"
                      placeholder="Blood Group"
                      v-model="user.bloodgroup">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h4 class="title">Emergency Contact</h4>
            <div class="col-md-4">
              <fg-input type="text"
                        label="Name"
                        placeholder="Name"
                        v-model="user.emergencyContact.name">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input type="number"
                        label="Phone Number"
                        placeholder="Phone Number"
                        v-model="user.emergencyContact.phone">
              </fg-input>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Update Profile
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {}
      }
    },
    methods: {
      updateProfile () {
        this.$store.state.userData = this.user
      }
    },
    mounted () {
      this.user = this.$store.state.userData
    }
  }

</script>
<style>

</style>
