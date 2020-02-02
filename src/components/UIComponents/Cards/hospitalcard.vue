<template>
  <div>
    <v-card
      max-width="344"
      class="mx-auto"
    >
      <v-list-item>
<!--        <v-list-item-avatar color="grey" style="margin-right:20px;"><img :src="this.img" alt="avatar"></v-list-item-avatar>-->
        <v-list-item-avatar color="grey" style="margin-right:20px;"><img src="https://source.unsplash.com/collection/1353633/800x600" alt="avatar"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{this.title}}</v-list-item-title>
          <v-list-item-subtitle>{{this.type}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img
        src="https://source.unsplash.com/collection/1353633/800x600"
        height="194"
      ></v-img>

      <v-card-text>
        <h2>Price: {{this.price}}</h2><br>
        {{this.desc}}
      </v-card-text>

      <v-card-actions>
        <v-btn
          text
          color="deep-purple accent-4"
          @click="select"
        >
          Select
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
  import swal from 'sweetalert2'
  export default{
    name: 'hospitalcard',
    data () {
      return {
        user: 'user'
      }
    },
    props: {
      title: String,
      desc: String,
      type: String,
      link: String,
      img: String,
      index: Number,
      price: Number
    },
    methods: {
      select () {
        this.$store.dispatch('addtocart', this.index)
        swal({
          title: `Added to Cart!`,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success btn-fill'
        })
      }
    }
  }
</script>
<style>
</style>
