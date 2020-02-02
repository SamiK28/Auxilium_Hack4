<template>
  <div>
    <h3 style="align-content: center;text-align: center;font-size:5rem;">Support</h3>
  </div>
</template>

<script>
  import {mapFields} from 'vee-validate'
  import Vue from 'vue'
  import JsonExcel from 'vue-json-excel'
  import fb from '../../../../firebase'
  import swal from 'sweetalert2'
  import {Table, TableColumn} from 'element-ui'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard'
  Vue.component('downloadExcel', JsonExcel)
  Vue.use(Table)
  Vue.use(TableColumn)
  export default {
    name: 'menuedit',
    data () {
      return {
        editregistration: '',
        model: {
          email: '',
          fname: '',
          lname: '',
          phone: '',
          whatsapp: '',
          particpants: '',
          payment: '',
          paytm: '',
          rno: '',
          ticket: ''
        },
        modelValidations: {
          email: {
            required: true,
            email: true
          },
          fname: {
            required: true
          },
          lname: {
            required: true
          },
          phone: {
            required: true
          },
          whatsapp: {
            required: true
          },
          particpants: {
            required: true
          },
          payment: {
            required: true
          },
          paytm: {
            required: false
          },
          rno: {
            required: false
          },
          ticket: {
            required: true
          }
        },
        bool: true,
        menu: null,
        registrations: null,
        registrationupdate: null,
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
      ...mapFields(['fname', 'lname', 'email', 'phone', 'whatsapp', 'particpants', 'ticket', 'payment', 'paytm', 'rno'])
    },
    methods: {
      async fetchRegistrations () {
        let vm = this
        let users = []
        await fb.db.collection('registrations').orderBy('time').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              const user = doc.data()
              user.id = doc.id
              users.push(user)
            })
            vm.registrations = users
            vm.$store.commit('setRegistrations', users)
            console.log(vm.$store.state.registrations)
          })
          .catch(error => {
            console.error(error)
            vm.logout()
          })
      },
      logout () {
        this.$store.commit('setCurrentUser', null)
        window.location.reload()
      },
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
        let vm = this
        fb.db.collection('registrations').doc(vm.editregistration).set(vm.model).then(res => {
          console.log(res)
          console.log('FETCHING Menu')
          let users = []
          fb.db.collection('registrations').get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                const user = doc.data()
                user.id = doc.id
                users.push(user)
              })
              vm.registrations = users
              vm.$store.commit('setRegistrations', users)
              console.log(vm.$store.state.registrations)
              swal({
                title: `Success!`,
                text: 'Item has been updated!',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success btn-fill',
                type: 'success'
              })
            })
            .catch(error => {
              console.error(error)
            })
          vm.bool = !vm.bool
        }).catch(err => {
          console.log(err)
          vm.bool = !vm.bool
        })
      },
      handleEdit (index, row) {
        // alert(`Your want to edit ${row.name},${row.id}`)
        this.model = row
        this.bool = !this.bool
        this.editregistration = row.id
      },
      handleDelete (index, row) {
        let vm = this
        swal({
          title: 'Are you sure?',
          text: `You won't be able to revert this!`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success btn-fill',
          cancelButtonClass: 'btn btn-danger btn-fill',
          confirmButtonText: 'Yes, delete it!',
          buttonsStyling: false
        }).then(function () {
          fb.db.collection('registrations').doc(row.id).delete().then(resp => {
            swal({
              title: 'Deleted!',
              text: 'Item has been deleted.',
              type: 'success',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            })
            console.log(resp)
            console.log('FETCHING Registrations')
            vm.fetchRegistrations()
          }).catch(function (error) {
            console.error('Error removing document: ', error)
          })
        })
      }
    },
    mounted () {
      // this.$store.dispatch('fetchMenu')
      console.log('FETCHING Registrations')
      this.fetchRegistrations()
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
