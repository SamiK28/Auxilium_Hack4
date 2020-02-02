<template>
  <div>
    <div class="jumbotron paral paralsec1">
<!--      <h1 class="display-3" style="font-size:40px;">St. Paul General Hospital</h1>-->
      <p class="lead" style="left:20%;position:relative;">

      </p>
    </div>
    <h3 style="font-family: 'Roboto Medium'">Description</h3>
    <p style="font-weight:bold;font-size:20px;">About the Hospital:</p><p>first NABH (National Accreditation Board for Hospitals & Healthcare Providers) Accredited Hospital in Rajasthan, since July 2008. It is also the proud recipient of Nursing Excellence from NABH in 2016. These accreditations ensure that the highest and strictest patient safety standards are followed in the hospital. It is the veritable torch bearer of super specialty centres of excellence across the country. With over 245 beds, this tertiary care hospital has established itself as one of the best tertiary care hospitals in the region. In last 12 years, Fortis Escorts Hospital, Jaipur has successfully managed to develop world class facilities. Fortis Jaipur is a pioneer in high-end procedures like Kidney Transplant, Total Knee & Hip Replacement with Robotics & Computer Navigation, Adult and Paediatric Cardiac Surgery including Congenital Heart Disease, GI & Bariatric Surgery, Complex Neuro Intervention Procedures with minimal invasive throug</p>
    <p><span style="font-weight:bold;font-size:20px;">Address:</span><span> SP-4 & 6, Malviya Nagar Industrial Area, Malviya Nagar, Jaipur, Rajasthan 302017</span><br>
      <span style="font-weight:bold;font-size:20px;">Hours:</span>
      Open 24 hours<br>


      <span style="font-weight:bold;font-size:20px;">Phone:</span> 0141 410 1111</p>
    <h3>Our Services</h3>
    <v-container>
      <v-row>
        <v-col sm="3">
          <v-btn color="#fff" width="100%" style="width:100%;height:70px;">
            <v-list-item>
              <v-list-item-avatar color="grey" style="margin-right:20px;"><img src="static/img/patient.svg" alt="avatar"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">admissions</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-btn>
        </v-col>
        <v-col sm="3">
          <v-btn color="#fff" @click="dialog1" width="100%" style="width:100%;height:70px;">
            <v-list-item>
              <v-list-item-avatar color="grey" style="margin-right:20px;"><img src="static/img/doctor.svg" alt="avatar"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">consultation</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-btn>
        </v-col>
        <v-col sm="3">
          <v-btn color="#fff" width="100%" style="width:100%;height:70px;">
            <v-list-item>
              <v-list-item-avatar color="grey" style="margin-right:20px;"><img src="static/img/history.svg" alt="avatar"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">pathology</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <h3>Featured Healthcare Packages</h3>
    <carousel navigationenabled="true" :scrollPerPage="true" :perPageCustom="[[480, 2], [1280, 3]]">
      <template v-for="x in slider2">
        <slide style="max-width: 100%;">
          <div class="col-md-12">
            <Hospitalcard :title="x.title" :desc="x.desc" :type="x.type" :link="x.link" :img="x.img"></Hospitalcard>
          </div>
        </slide>
      </template>
    </carousel>
    <template>
      <v-dialog
        v-model="dialog"
        width="50%"
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-toolbar
            flat
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-toolbar-items>
              <v-btn
                dark
                text
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-toolbar-items>
            <v-menu
              bottom
              right
              offset-y
            >

            </v-menu>
          </v-toolbar>
          <v-card-text>

            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  class="ma-2"
                  v-on="on"
                >Tool Tip Activator</v-btn>
              </template>
              Tool Tip
            </v-tooltip>
            <v-list
              three-line
              subheader
            >
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list
              three-line
              subheader
            >
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <div style="flex: 1 1 auto;"></div>
        </v-card>
      </v-dialog>
    </template>

  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard'
  export default {
    name: 'home',
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        slider2: [
          {'title': 'Liver Screening Check', 'desc': 'Price range 3000 - 12000', 'type': 'Pathology', 'link': 'https://medika.ml', 'img': 'data:image/jpeg;base64,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'},
          {'title': 'Obesity Check', 'desc': 'Price range 4500 - 10000', 'type': 'Consultation', 'link': 'https://medika.ml', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMbH8hw-cZR_9zU0g1jkvmNyQ47ruRcPNj6RHE6D9nPKQiVaGr'},
          {'title': 'Cancer Screening Check', 'desc': 'Price range 1000 - 5000', 'type': 'Pathology', 'link': 'https://medika.ml', 'img': 'data:image/jpeg;base64,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'},
          {'title': 'Advanced Cardiac Checkup', 'desc': 'Price range 3000 - 9000', 'type': 'Pathology', 'link': 'https://medika.ml', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-fj3Qkj7x30d4UF4pcjy3z20a3Qxy81b91lEI5PttJctTmQlww'}
        ]
      }
    },
    components: {
      Hospitalcard,
      Carousel,
      Slide
    },
    methods: {
      dialog1 () {
        this.dialog = true
      }
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
    background-image: url("http://www.thevillagernewspaper.com/wordpress/wp-content/uploads/2015/01/Hospital-front-low-res-4-08.gif");}

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
