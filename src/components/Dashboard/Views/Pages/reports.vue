<template>
  <div>
    <div class="row">
      <div class="col-md-12" :key="componentKey">
        <div class="card" id="printMe">
          <div class="card-header">
            <h4 class="card-title">Cart</h4>
            <p class="category">Restaurant Billing System</p>
            <br/>
          </div>
          <button @click="print">PRINT</button>
          <div class="col-md-3">
            <div class="form-group">
              <label>Enter Name</label>
              <input type="text"
                     name="text"
                     v-model="name"
                     class="form-control">
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label>Enter Phone</label>
              <input type="number"
                     name="phone"
                     v-model="phone"
                     class="form-control">
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <button @click="createOrder" type="button" class="btn btn-wd btn-default btn-fill btn-move-right">
                Create Order
                <span class="btn-label">
                                                <i class="ti-angle-right"></i>
                                            </span>
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <button @click="refreshCart" type="button" class="btn btn-wd btn-default btn-fill btn-move-right">
                Refresh Cart
                <span class="btn-label">
                                                <i class="ti-angle-right"></i>
                                            </span>
              </button>
            </div>
          </div>
          <div class="table-responsive">
            <el-table class="table-shopping"
                      :summary-method="getSummaries"
                      show-summary
                      style="width: 100%"
                      :data="this.cart">
              <el-table-column min-width="120">
                <template slot-scope="props">
                  <div class="img-container">
                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg" alt="Agenda">
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
                    <button class="btn btn-sm" @click="decreasequantity(props.row.id)"><i class="ti-minus"></i></button>
                    <button class="btn btn-sm" @click="increasequantity(props.row.id)"><i class="ti-plus"></i></button>
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
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import swal from 'sweetalert2'
  import Vue from 'vue'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import VueHtmlToPaper from 'vue-html-to-paper'
  Vue.use(VueHtmlToPaper)
  Vue.use(Table)
  Vue.use(TableColumn)
  export default{
    components: {
      PSwitch
    },
    data () {
      return {
        name: '',
        phone: null,
        componentKey: 0,
        cart: this.$store.state.cart,
        productsTable: [
          {
            image: 'static/img/tables/agenda.png',
            title: 'Notebook',
            subTitle: 'Most beautiful agenda for the office.',
            price: 49,
            quantity: 1
          },
          {
            image: 'static/img/tables/stylus.jpg',
            title: 'Stylus',
            subTitle: 'Design is not just what it looks like and feels like. Design is how it works.',
            price: 499,
            quantity: 2
          },
          {
            image: 'static/img/tables/evernote.png',
            title: 'Evernote iPad Stander',
            subTitle: 'A groundbreaking Retina display. All-flash architecture. Fourth-generation Intel processors.',
            price: 799,
            quantity: 1
          }
        ]
      }
    },
    // computed: {
    //   cart () {
    //     return this.$store.state.cart
    //   }
    // },
    methods: {
      print() {
        // Pass the element id here
        this.$htmlToPaper('printMe');
      },
      refreshCart () {
        this.$store.commit('setCart', [])
        window.location.reload()
      },
      createOrder () {
        let t = {'name': this.name, 'phone': this.phone}
        console.log(this.name)
        console.log(this.phone)
        let d = {'t': t, 'reference': this}
        this.$store.dispatch('createorder', d)
        this.name = null
        this.phone = null
      },
      forceRerender () {
        this.componentKey += 1
      },
      increasequantity (payload) {
        // console.log(payload)
        let x = 0
        let vm = this
        this.$store.state.cart.forEach(function (item, index) {
          if (item.id === payload) {
            console.log(item.quantity)
            item.quantity++
            console.log(item.quantity)
            vm.cart = vm.$store.state.cart
            vm.forceRerender()
          }
        })
        console.log(x)
      },
      decreasequantity (payload) {
        // console.log(payload)
        let x = 0
        let vm = this
        this.$store.state.cart.forEach(function (item, index) {
          if (item.id === payload) {
            console.log(item.quantity)
            item.quantity = ((item.quantity - 1) >= 0) ? --item.quantity : 0
            console.log(item.quantity)
            vm.cart = vm.$store.state.cart
            vm.forceRerender()
          }
        })
        console.log(x)
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
            this.cart.forEach((obj) => {
              sum += obj.quantity * obj.price
            })
            sums[index] = `₹ ${sum}`
          }
        })
        return sums
      }
    }
  }
</script>
<style>
</style>
