<template>
  <div>
    <div v-if="this.$store.state.userProfile.usertype === 'customer'">
      <h3 style="align-content: center;text-align: center;font-size:5rem;">Orders</h3>
      <v-container>
        <v-row>
          <div class="card" style="width: 100%!important;">
            <div class="card-header">
              <h4 class="card-title">All Orders</h4>
            </div>
            <div class="card-content row">
              <div class="col-sm-12">
                <el-table :data="orders">
                  <el-table-column type="index">

                  </el-table-column>
                  <el-table-column prop="name"
                                   label="Name">
                  </el-table-column>
                  <el-table-column prop="time"
                                   label="Time">
                  </el-table-column>
                  <el-table-column prop="bill"
                                   label="Bill">
                  </el-table-column>
                  <el-table-column prop="orderid"
                                   label="Order ID">
                  </el-table-column>
                  <el-table-column
                    label="Actions">
                    <template slot-scope="props">
                      <router-link :to="'/order/' + props.row.id" tag="li">
                        <button type="button" class="btn btn-wd btn-default btn-fill btn-move-right">
                          Details
                          <span class="btn-label">
	                                                <i class="ti-angle-right"></i>
	                                            </span>
                        </button>
                      </router-link>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
        </v-row>
      </v-container>
    </div>
    <div v-else class="card">
      <h1 class="danger">You don't have the rights to view this page!</h1>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  // import swal from 'sweetalert2'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import axios from 'axios'
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    name: 'orders',
    data () {
      return {
        bool: true,
        orders: null,
        imgg: 'https://source.unsplash.com/collection/1353633/800x600'
      }
    },
    components: {
      PSwitch,
      Hospitalcard,
      Carousel,
      Slide
    },
    computed: {
      // orders () {
      //   return this.$store.state.orders
      // }
    },
    methods: {
    },
    mounted () {
      // this.$store.dispatch('fetchorders')
      console.log('FETCHING All Orders')
      let vm = this
      let sessionurl = 'http://localhost:8098/api/data/getOrders'
      axios.post(sessionurl, {}, {}).then(res => {
        console.log(res.data)
        vm.orders = res.data
        vm.$store.commit('setOrders', res.data)
        console.log(vm.$store.state.orders)
      }).catch(err => {
        console.log(err)
      })
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
