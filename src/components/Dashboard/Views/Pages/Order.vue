<template>
  <div class="row">
    <div class="col-md-10">
      <div>
        <div class="col-md-3">
          <button type="button" @click="print" class="btn btn-wd btn-default btn-fill btn-move-right">
            Print Receipt
            <span class="btn-label">
	                                                <i class="ti-angle-right"></i>
	                                            </span>
          </button>
        </div>
      </div>
      <div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Name</label>
            <input type="text"
                   name="text"
                   v-model="name"
                   disabled=""
                   class="form-control">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Phone</label>
            <input type="number"
                   name="phone"
                   v-model="phone"
                   disabled=""
                   class="form-control">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Order ID</label>
            <input type="text"
                   name="text"
                   v-model="orderid"
                   disabled=""
                   class="form-control">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Time</label>
            <input type="text"
                   name="text"
                   v-model="time"
                   disabled=""
                   class="form-control">
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Bill</label>
            <input type="number"
                   name="phone"
                   v-model="bill"
                   disabled=""
                   class="form-control">
          </div>
        </div>
        <div class="table-responsive">
          <el-table class="table-shopping"
                    :summary-method="getSummaries"
                    show-summary
                    style="width: 100%"
                    :data="this.itemsdata">
            <el-table-column min-width="120">
              <template slot-scope="props">
                <div class="img-container">
                  <img src="https://source.unsplash.com/collection/1353633/400x300" alt="Agenda">
                </div>
              </template>
            </el-table-column>
            <el-table-column min-width="220">
              <template slot-scope="props">
                <strong>{{props.row.name}}</strong>
                <p>{{props.row.desc}}</p>
              </template>
            </el-table-column>
            <el-table-column
              min-width="80"
              class="td-price"
              label="Price">
              <template slot-scope="props">
                <small>₹</small> {{props.row.price}}
              </template>
            </el-table-column>
            <el-table-column
              min-width="150"
              label="Quantity"
              class="td-number td-quantity">
              <template slot-scope="props">
                {{props.row.quantity}}
                <div class="btn-group">
                  <button class="btn btn-sm" disabled=""><i class="ti-minus"></i></button>
                  <button class="btn btn-sm" disabled=""><i class="ti-plus"></i></button>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="Total"  min-width="100">
              <template slot-scope="props">
                <strong><small>₹</small> {{props.row.quantity * props.row.price}} </strong>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div v-show="false" id="printMe">
        <h2 style="text-align: center;">INVOICE</h2>
        <div class="col-md-3">
          <div class="form-group">
            <h4>Name : {{this.name}}</h4>
            <h4>Phone : {{this.phone}}</h4>
            <h4>Order ID : {{this.orderid}}</h4>
            <h4>Bill : {{this.bill}}</h4>
            <h4>Time : {{this.time}}</h4>
          </div>
        </div>
        <div class="table-responsive">
          <el-table class="table-shopping"
                    :summary-method="getSummaries"
                    show-summary
                    style="width: 100%"
                    :data="this.itemsdata">
            <el-table-column min-width="220">
              <template slot-scope="props">
                <strong>{{props.row.name}}</strong>
                <p>{{props.row.desc}}</p>
              </template>
            </el-table-column>
            <el-table-column
              min-width="80"
              class="td-price"
              label="Price">
              <template slot-scope="props">
                <small>₹</small> {{props.row.price}}
              </template>
            </el-table-column>
            <el-table-column
              min-width="150"
              label="Quantity"
              class="td-number td-quantity">
              <template slot-scope="props">
                {{props.row.quantity}}
              </template>
            </el-table-column>
            <el-table-column label="Total"  min-width="100">
              <template slot-scope="props">
                <strong><small>₹</small> {{props.row.quantity * props.row.price}} </strong>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import MembersCard from './UserProfile/MembersCard.vue'
  // import swal from 'sweetalert2'
  import Vue from 'vue'
  import axios from 'axios'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import VueHtmlToPaper from 'vue-html-to-paper'
  const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
      'http://localhost:8098/static/css/themify-icons.css',
      'http://localhost:8098/static/css/app.6d7981c6fc2b2e48b13611629ea164ca.css'
    ]
  }

  Vue.use(VueHtmlToPaper, options)
  Vue.use(Table)
  Vue.use(TableColumn)

  export default {
    data () {
      return {
        name: '',
        phone: Number,
        orderid: '',
        time: '',
        bill: '',
        items: '',
        itemsdata: [],
        imgg: 'https://source.unsplash.com/collection/1353633/800x600'
      }
    },
    methods: {
      print () {
        // Pass the element id here
        this.$htmlToPaper('printMe')
      },
      getSummaries (param) {
        const { columns } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total'
          } else if (index < columns.length - 1) {
            sums[index] = ''
          } else {
            let sum = 0
            this.itemsdata.forEach((obj) => {
              sum += obj.quantity * obj.price
            })
            sums[index] = `₹ ${sum}`
          }
        })
        return sums
      }
    },
    components: {
      EditProfileForm,
      UserCard,
      MembersCard,
      PSwitch
    },
    mounted () {
      console.log('FETCHING Menu')
      let vm = this
      let sessionurl = 'http://localhost:8098/api/data/getOrder/' + this.$route.params.id
      axios.post(sessionurl, {}, {}).then(res => {
        console.log(res.data)
        vm.name = res.data.name
        vm.phone = res.data.phone
        vm.orderid = res.data.orderid
        vm.time = res.data.time
        vm.bill = res.data.bill
        vm.items = res.data.items
        let d = ''
        vm.items.forEach(function (x) {
          d = d + ' ' + x
        })
        let sessionurl1 = 'http://localhost:8098/api/data/getItems/' + d.trim()
        axios.post(sessionurl1, {}, {}).then(res => {
          vm.itemsdata = res.data
          console.log('GETTING ITEMS DATA')
          console.log(res.data)
          console.log(vm.itemsdata)
        }).catch(err => {
          console.log(err)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }

</script>
<style>

</style>
