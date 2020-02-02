<template>
  <div class="row">
    <div class="col-md-8 offset-md-1">
      <edit-profile-form>

      </edit-profile-form>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'

  export default {
    components: {
      EditProfileForm,
      UserCard,
      MembersCard
    }
  }

</script>
<style>

</style>
