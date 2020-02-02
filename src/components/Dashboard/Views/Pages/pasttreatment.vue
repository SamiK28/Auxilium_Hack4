<template>
  <div>
    <div class="jumbotron paral paralsec1">
      <h1 class="display-3">Past Treatments</h1>
      <p class="lead" style="left:20%;position:relative;">
        <form class="navbar-form navbar-left navbar-search-form" role="search" style="left:38%;position:relative;padding-right:30px;">
          <div class="input-group">
            <input type="text" value="" class="form-control" placeholder="Search...">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
        </form>
      </p>
    </div>
    <carousel navigationenabled="true" :scrollPerPage="true" :perPageCustom="[[480, 2], [1280, 3]]">
      <template v-for="x in slider">
        <slide style="max-width: 100%;">
          <div class="col-md-12">
            <Hospitalcard :title="x.title" :desc="x.desc" :type="x.type" :rlink="x.rlink" :img="x.img"></Hospitalcard>
          </div>
        </slide>
      </template>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import Hospitalcard from '../../../UIComponents/Cards/hospitalcard'
  export default {
    name: 'home',
    data () {
      return {
        slider: [
          {'title': 'Hospital', 'desc': '22/07/19', 'type': 'Medical', 'rlink': '/user/my-treatments', 'img': 'https://kingwood247er.com/wp-content/uploads/2018/04/Kingwood-Hospital_010.jpg'},
          {'title': 'Hospital', 'desc': '02/07/19', 'type': 'Medical', 'rlink': '/user/my-treatments', 'img': 'https://images.wisegeek.com/large-hospital.jpg'},
          {'title': 'Hospital', 'desc': '02/07/18', 'type': 'Dispensary', 'rlink': '/user/my-treatments', 'img': 'https://content3.jdmagicbox.com/comp/guntur/n9/9999px863.x863.150527175746.d7n9/catalogue/ramesh-hospitals-nagarampalem-guntur-hospitals-4g0bip4.jpg'},
          {'title': 'Hospital', 'desc': '22/07/19', 'type': 'Medical', 'rlink': '/user/my-treatments', 'img': 'https://media.glassdoor.com/l/574153/aster-hospital-office.jpg'},
          {'title': 'Hospital', 'desc': '02/07/18', 'type': 'Medical', 'rlink': '/user/my-treatments', 'img': 'https://californiahealthline.org/wp-content/uploads/sites/3/2017/02/san-mateo-hospital-front-770.jpg'},
          {'title': 'Hospital', 'desc': '22/07/19', 'type': 'Medical', 'rlink': '/user/my-treatments', 'img': 'http://www.thevillagernewspaper.com/wordpress/wp-content/uploads/2015/01/Hospital-front-low-res-4-08.gif'},
          {'title': 'Hospital', 'desc': '02/07/18', 'type': 'Medical', 'rlink': '/user/my-treatments', 'img': 'https://www.duckcorollaobx.com/wp-content/uploads/2016/05/OB-Hospital-Front.jpg'}
        ],
        slider2: [
          {'title': 'Liver Screening Check', 'desc': 'Price range 3000 - 12000', 'type': 'AIIMS', 'rlink': '/user/my-treatments', 'img': 'https://kingwood247er.com/wp-content/uploads/2018/04/Kingwood-Hospital_010.jpg'},
          {'title': 'Obesity Check', 'desc': 'Price range 4500 - 10000', 'type': 'Medanta', 'rlink': '/user/my-treatments', 'img': 'https://images.wisegeek.com/large-hospital.jpg'},
          {'title': 'Cancer Screening Check', 'desc': 'Price range 1000 - 5000', 'type': 'Apollo', 'rlink': '/user/my-treatments', 'img': 'https://content3.jdmagicbox.com/comp/guntur/n9/9999px863.x863.150527175746.d7n9/catalogue/ramesh-hospitals-nagarampalem-guntur-hospitals-4g0bip4.jpg'},
          {'title': 'Advanced Cardiac Checkup', 'desc': 'Price range 3000 - 9000', 'type': 'Apollo', 'rlink': '/user/my-treatments', 'img': 'https://content3.jdmagicbox.com/comp/guntur/n9/9999px863.x863.150527175746.d7n9/catalogue/ramesh-hospitals-nagarampalem-guntur-hospitals-4g0bip4.jpg'}
        ]
      }
    },
    components: {
      Hospitalcard,
      Carousel,
      Slide
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
