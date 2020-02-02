<template>
  <div>
    <h3 style="align-content: center;text-align: center;font-size:5rem;">Order Status</h3>
    <v-container>
      <v-row>
        <div class="card" style="width: 100%!important;">
          <div class="card-header">
            <h4 class="card-title">All Orders</h4>
            <p class="category">Edit Status</p>
          </div>
          <div class="card-content row">
            <div class="col-sm-12">
              <el-table v-show="this.bool" :data="this.$store.state.statuses">
                <el-table-column type="index">

                </el-table-column>
                <el-table-column prop="name"
                                 label="Customer name">
                </el-table-column>
                <el-table-column prop="id"
                                 label="Order ID">
                </el-table-column>
                <el-table-column prop="status"
                                 label="Order Status">
                </el-table-column>
                <el-table-column
                  label="Actions">
                  <template slot-scope="props">
                    <a class="btn btn-simple btn-warning btn-xs btn-icon edit" @click="handleEdit(props.$index, props.row)"><i class="ti-pencil-alt"></i></a>
                  </template>
                </el-table-column>
              </el-table>
              <div v-show="!this.bool" class="card">
                <form class="form-horizontal">
                  <div class="card-header">
                    <h4 class="card-title">
                      Add Item
                    </h4>
                  </div>
                  <div class="card-content">
                    <fieldset>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Customer Name</label>
                        <div class="col-sm-6">
                          <input type="text"
                                 name="requiredText"
                                 v-validate="modelValidations.requiredText"
                                 v-model="model.name"
                                 disabled=""
                                 class="form-control">
                          <small class="text-danger" v-show="requiredText.invalid">
                            {{ getError('requiredText') }}
                          </small>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Order Id</label>
                        <div class="col-sm-6">
                          <input type="text"
                                 name="requiredText"
                                 v-validate="modelValidations.requiredText"
                                 v-model="model.id"
                                 disabled=""
                                 class="form-control">
                          <small class="text-danger" v-show="requiredText.invalid">
                            {{ getError('requiredText') }}
                          </small>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Order Status</label>
                        <div class="col-sm-6">
                          <p-radio label="Order Placed" v-model="model.status">Order Placed</p-radio>
                          <p-radio label="Cooking" v-model="model.status">Cooking</p-radio>
                          <p-radio label="Ready" v-model="model.status">Ready</p-radio>
                          <p-radio label="Received" v-model="model.status">Received</p-radio>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div class="card-footer text-center">
                    <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Confirm Edit</button>
                    <button type="submit" @click.prevent="bool = !bool" class="btn btn-fill btn-danger btn-wd">Cancel Edit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import {mapFields} from 'vee-validate'
  import Vue from 'vue'
  import swal from 'sweetalert2'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import axios from 'axios'
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard'
  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    name: 'statusedit',
    data () {
      return {
        model: {
          id: '',
          name: '',
          statusid: '',
          status: ''
        },
        modelValidations: {
          requiredText: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          number: {
            required: true,
            decimal: true
          },
          url: {
            required: true,
            url: true
          },
          idSource: {
            required: true
          },
          idDestination: {
            required: true,
            confirmed: 'idSource'
          }
        },
        bool: true,
        statuses: null,
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
      ...mapFields(['requiredText', 'email', 'number', 'url', 'idSource', 'idDestination'])
      // menu () {
      //   return this.$store.state.menu
      // }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
          this.updateItem()
        })
      },
      updateItem () {
        let sessionurl = 'http://localhost:8098/api/data/updateStatus/'
        let vm = this
        swal({
          title: 'Are you sure?',
          text: `You won't be able to revert this!`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          confirmButtonText: 'Yes, edit it!',
          buttonsStyling: false
        }).then(function () {
          axios.post(sessionurl, vm.model, {}).then(res => {
            console.log(res.data)
            console.log('FETCHING Statuses')
            let sessionurl = 'http://localhost:8098/api/data/getStatuses'
            axios.post(sessionurl, {}, {}).then(res => {
              console.log(res.data)
              vm.statuses = res.data
              vm.$store.commit('setStatuses', res.data)
              console.log(vm.$store.state.statuses)
              swal({
                title: `Success!`,
                text: 'Item has been updated!',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success btn-fill',
                type: 'success'
              })
            }).catch(err => {
              console.log(err)
            })
            vm.bool = !vm.bool
          }).catch(err => {
            console.log(err)
            vm.bool = !vm.bool
          })
        })
      },
      handleEdit (index, row) {
        // alert(`Your want to edit ${row.name},${row.id}`)
        this.model = row
        this.bool = !this.bool
      }
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
