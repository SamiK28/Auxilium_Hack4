<template>
  <div>
    <div class="jumbotron paral paralsec1">
      <h1 class="display-3">Find Campaigns Worth Donating!</h1>
      <p class="lead" style="left:20%;position:relative;">
        <form class="navbar-form navbar-left navbar-search-form" role="search" style="left:38%;position:relative;padding-right:30px;">
          <div class="input-group">
            <input type="text" value="" class="form-control" placeholder="Search...">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
        </form>
      </p>
    </div>
    <h3 style="align-content: center;text-align: center;font-size:5rem;">All Listings</h3>
    <v-container>
      <v-row>
        <template v-for="(item, x) in this.services">
          <v-col sm="3">
            <template>
              <v-card
                max-width="344"
                class="mx-auto"
              >
                <v-list-item>
                  <v-list-item-avatar color="grey"></v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="headline">Australian Bush Fires</v-list-item-title>
                    <v-list-item-subtitle>by Auxilium</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img
                  src="https://images.news18.com/optimize/CuGLxYLvy0hatqXxDExWjaD0rvs=/342x227/images.news18.com/ibnlive/uploads/342x227/jpg/2020/01/Untitled-design-2020-01-06T124325.893.png"
                  height="194"
                ></v-img>

                <v-card-text>
                  Donate to save the kangaroos :)
                </v-card-text>

                <v-card-actions>
                  <router-link to="/newDonation/ex">
                  <v-btn
                    text
                    color="deep-purple accent-4"
                  >
                    More Info
                  </v-btn>
                  </router-link>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios'
  import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
  import PProgress from 'src/components/UIComponents/Progress.vue'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard'
  export default {
    name: 'home',
    data () {
      return {
        show: true,
        datePicker: '',
        timePicker: '',
        services: [
          {'name': 'Cooking', 'path': 'cooking', 'image': 'cook.png'},
          {'name': 'Cleaning', 'path': 'cleaning', 'image': 'house.png'},
          {'name': 'Gardening', 'path': 'gardening', 'image': 'growth.png'},
          {'name': 'Plumbing', 'path': 'plumbing', 'image': 'pipeline.png'},
          {'name': 'Driver', 'path': 'driver', 'image': 'steering-wheel.png'},
          {'name': 'Electrician', 'path': 'electrician', 'image': 'electrician.png'},
          {'name': 'Babysitter', 'path': 'babysitter', 'image': 'baby-stroller.png'},
          {'name': 'Maid', 'path': 'maid', 'image': 'housekeeping.png'},
          {'name': 'Painter', 'path': 'painter', 'image': 'paint-roller.png'},
          {'name': 'Labour', 'path': 'labour', 'image': 'builder.png'},
          {'name': 'Caretaking', 'path': 'caretaking', 'image': 'nanny.png'},
          {'name': 'Pest Control', 'path': 'pestcontrol', 'image': 'smart.png'}
        ],
        imgg: 'https://source.unsplash.com/collection/1353633/800x600'
      }
    },
    components: {
      [DatePicker.name]: DatePicker,
      [TimeSelect.name]: TimeSelect,
      [Slider.name]: Slider,
      [Tag.name]: Tag,
      [Input.name]: Input,
      [Button.name]: Button,
      [Option.name]: Option,
      [Select.name]: Select,
      PSwitch,
      PProgress,
      Hospitalcard,
      Carousel,
      Slide
    },
    computed: {
      // menu () {
      //   return this.$store.state.menu
      // }
    },
    methods: {
      taketo (er) {
        this.$router.push('/')
      }
    },
    mounted () {
      // this.$store.dispatch('fetchMenu')
    }
  }
</script>

<style>
  .paral {
    min-height: 500px;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50% 50%;
  }

  /* Paragrapgh for Parallax Section */
  .paral p {
    font-size: 24px;
    color:#f5f5f5;
    text-align: center;
    line-height: 60px;
  }

  /* Heading for Parallax Section */
  .paral h1 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 60px;
    text-align: center;
    padding-top: 60px;
    line-height: 100px;
  }

  /* Image for Parallax Section */
  .paralsec {
    background-image: url("https://img.webnots.com/2017/05/parallax.jpg");
  }

  .paralsec1 {
    background-image: url("https://img.webnots.com/2017/05/parallax1.jpg");}

  .paralsec2 {
    background-image: url("https://img.webnots.com/2015/11/parallax2.jpg");
  }

  /* Add more images for more sections */

  /* Remove Bottom Margin from Jumbotron */
  .jumbotron{margin-bottom: 0;}

  /* Footer */
  .wn-footer {
    padding: 2.5rem 0;
    text-align: center;
    color: white;
    background-color: #607D8B;
    border-top: .05rem solid #e5e5e5;
  }

  .wn-footer a {
    color: yellow;
  }
</style>
