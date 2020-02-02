<template>
  <div>
<!--    <div class="jumbotron paral paralsec1">-->
<!--      <h1 class="display-3">Restaurant Management</h1>-->
<!--&lt;!&ndash;      <p class="lead" style="left:20%;position:relative;">&ndash;&gt;-->
<!--&lt;!&ndash;        <form class="navbar-form navbar-left navbar-search-form" role="search" style="left:38%;position:relative;padding-right:30px;">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="input-group">&ndash;&gt;-->
<!--&lt;!&ndash;            <input type="text" value="" class="form-control" placeholder="Search...">&ndash;&gt;-->
<!--&lt;!&ndash;            <span class="input-group-addon"><i class="fa fa-search"></i></span>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </form>&ndash;&gt;-->
<!--&lt;!&ndash;      </p>&ndash;&gt;-->
<!--    </div>-->



<!--    <h3>Featured Hospitals</h3>-->
<!--    <carousel navigationenabled="true" :scrollPerPage="true" :perPageCustom="[[480, 2], [1280, 3]]">-->
<!--      <template v-for="x in slider">-->
<!--        <slide style="max-width: 100%;">-->
<!--          <div class="col-md-12">-->
<!--            <Hospitalcard :title="x.title" :desc="x.desc" :type="x.type" :rlink="x.rlink" :img="x.img"></Hospitalcard>-->
<!--          </div>-->
<!--        </slide>-->
<!--      </template>-->
<!--    </carousel>-->
    <h3 style="align-content: center;text-align: center;font-size:5rem;">Order Statuses</h3>
    <v-container>
      <v-row>
        <template v-for="(item, x) in this.$store.state.statuses">
          <v-col sm="3">
            <Hospitalcard showselect="false" :title="item.name" :desc="item.status" :type="item.id" img="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></Hospitalcard>
          </v-col>
        </template>
<!--        <v-col sm="3">-->
<!--          <Hospitalcard title="Hospital" desc='Speciality in Pulmonoligy' type="2.5km" rlink="x.rlink" img="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></Hospitalcard>-->
<!--        </v-col>-->
<!--        <v-col sm="3">-->
<!--          <Hospitalcard title="Hospital" desc='Speciality in Pathology' type="4km" rlink="x.rlink" img="https://images.wisegeek.com/large-hospital.jpg"></Hospitalcard>-->
<!--        </v-col>-->
<!--        <v-col sm="3">-->
<!--          <Hospitalcard title="Hospital" desc='Speciality in Cardialogy' type="6km" rlink="x.rlink" img="https://images.wisegeek.com/large-hospital.jpg"></Hospitalcard>-->
<!--        </v-col>-->
      </v-row>
    </v-container>
<!--    <h3>Featured Healthcare Packages</h3>-->
<!--    {{this.$store.state.menu}}-->
<!--    <carousel navigationenabled="true" :scrollPerPage="true" :perPageCustom="[[480, 2], [1280, 3]]">-->
<!--      <template v-for="x in slider2">-->
<!--        <slide style="max-width: 100%;">-->
<!--          <div class="col-md-12">-->
<!--            <Hospitalcard :title="x.title" :desc="x.desc" :type="x.type" :rlink="x.rlink" :img="x.img"></Hospitalcard>-->
<!--          </div>-->
<!--        </slide>-->
<!--      </template>-->
<!--    </carousel>-->

  </div>
</template>

<script>
  import axios from 'axios'
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard2'
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    name: 'home',
    data () {
      return {
        statuses: null
      }
    },
    components: {
      Hospitalcard,
      Carousel,
      Slide
    },
    computed: {
      // menu () {
      //   return this.$store.state.menu
      // }
    },
    mounted () {
      // this.$store.dispatch('fetchMenu')
      console.log('FETCHING Statuses')
      let vm = this
      let sessionurl = 'http://localhost:8098/api/data/getStatuses'
      setInterval(() => {
        axios.post(sessionurl, {}, {}).then(res => {
          console.log(res.data)
          vm.statuses = res.data
          vm.$store.commit('setStatuses', res.data)
          console.log(vm.$store.state.statuses)
        }).catch(err => {
          console.log(err)
        })
      }, 8000)
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
