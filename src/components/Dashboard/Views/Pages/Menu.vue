<template>
  <div>
    <div v-if="this.$store.state.userProfile.usertype === 'admin'" class="card">
      <form class="form-horizontal">
        <div class="card-header">
          <h4 class="card-title">
            Add Item
          </h4>
        </div>
        <div class="card-content">
          <fieldset>
            <div class="form-group">
              <label class="col-sm-2 control-label">Item Name</label>
              <div class="col-sm-6">
                <input type="text"
                       name="requiredText"
                       v-validate="modelValidations.requiredText"
                       v-model="model.name"
                       class="form-control">
                <small class="text-danger" v-show="requiredText.invalid">
                  {{ getError('requiredText') }}
                </small>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div class="form-group">
              <label class="col-sm-2 control-label">Item Category</label>
              <div class="col-sm-6">
                <input type="text"
                       name="requiredText"
                       v-validate="modelValidations.requiredText"
                       v-model="model.category"
                       class="form-control">
                <small class="text-danger" v-show="requiredText.invalid">
                  {{ getError('requiredText') }}
                </small>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div class="form-group">
              <label class="col-sm-2 control-label">Item Description</label>
              <div class="col-sm-6">
                <input type="text"
                       name="requiredText"
                       v-validate="modelValidations.requiredText"
                       v-model="model.desc"
                       class="form-control">
                <small class="text-danger" v-show="requiredText.invalid">
                  {{ getError('requiredText') }}
                </small>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div class="form-group">
              <label class="col-sm-2 control-label">Item Price</label>
              <div class="col-sm-6">
                <input type="number"
                       name="number"
                       v-validate="modelValidations.number"
                       v-model="model.price"
                       class="form-control">
                <small class="text-danger" v-show="number.invalid">
                  {{ getError('number') }}
                </small>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="card-footer text-center">
          <button type="submit" @click.prevent="validate" class="btn btn-fill btn-info btn-wd">Confirm Add</button>
        </div>
      </form>

    </div>
    <div v-else class="card">
    <h1 class="danger">You don't have the rights to view this page!</h1>
  </div>
  </div>
</template>
<script>
  import swal from 'sweetalert2'
  import {mapFields} from 'vee-validate'
  import axios from 'axios'
  export default {
    computed: {
      ...mapFields(['requiredText', 'email', 'number', 'url', 'idSource', 'idDestination'])
    },
    data () {
      return {
        model: {
          name: '',
          price: '',
          category: '',
          desc: ''
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
        }
      }
    },
    methods: {
      getError (fieldName) {
        return this.errors.first(fieldName)
      },
      validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
          this.addItem()
        })
      },
      addItem () {
        let sessionurl = 'http://localhost:8098/api/data/menu/addItem/'
        let vm = this
        axios.post(sessionurl, this.model, {}).then(res => {
          console.log(res.data)
          vm.model = {
            name: '',
            price: '',
            category: '',
            desc: ''
          }
          swal({
            title: `Success!`,
            text: 'Item has been added!',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success btn-fill',
            type: 'success'
          })
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style>
</style>
