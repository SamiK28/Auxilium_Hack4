<template>
  <div class="row">
    <div class="col-md-6">
      <chart-card :chart-data="salesChart.data" :chart-options="salesChart.options">
        <div slot="header">
          <h4 class="card-title">2020 Sales</h4>
          <p class="category">All sales including Taxes</p>
        </div>
        <div class="stats" slot="footer-title">
          <i class="ti-check"></i> Data information certified
        </div>
        <div slot="footer">
          <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Electrician
            <i class="fa fa-circle text-warning"></i> Plumber
          </div>
          <hr>
          <div class="stats">
            <i class="ti-check"></i> Data information certified
          </div>
        </div>
      </chart-card>
    </div>
    <div class="col-md-6">
      <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
        <div slot="header">
          <h4 class="card-title">Users Behavior</h4>
          <p class="category">24 hours performance</p>
        </div>

        <div class="stats" slot="footer-title">
          <i class="ti-reload"></i> Updated 3 minutes ago
        </div>
        <div slot="footer">
          <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Open
            <i class="fa fa-circle text-danger"></i> Service Select
            <i class="fa fa-circle text-warning"></i> Booking
          </div>
          <hr>
          <div class="stats">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </div>
        </div>
      </chart-card>
    </div>

    <div class="col-lg-6 col-sm-6">
      <chart-card :chart-data="subscriptionsChart.data" :chart-options="subscriptionsChart.options">
        <span slot="title">169</span>
        <span slot="title-label" class="label label-danger">
          -14%
        </span>
        <h6 slot="subtitle">
          total subscriptions <span class="text-muted">in last</span> 7 days
        </h6>

        <div slot="footer-title">
          View all members
        </div>
        <button slot="footer-right" class="btn btn-default btn-fill btn-icon btn-sm">
          <i class="ti-angle-right"></i>
        </button>
      </chart-card>
    </div>

    <div class="col-lg-6 col-sm-6">
      <chart-card :chart-data="downloadsChart.data" :chart-options="downloadsChart.options">
        <span slot="title">8,960</span>
        <span slot="title-label" class="label label-warning">
          ~51%
        </span>
        <h6 slot="subtitle">
          total downloads <span class="text-muted">in last</span> 6 years
        </h6>

        <div slot="footer-title">
          View more details
        </div>
        <button slot="footer-right" class="btn btn-success btn-fill btn-icon btn-sm">
          <i class="ti-info"></i>
        </button>
      </chart-card>
    </div>


  </div>
</template>
<script>
  import TimeLine from './Stats/TimeLine.vue'
  import TimeLineItem from './Stats/TimeLineItem.vue'
  import TaskList from './Stats/TaskList'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      TimeLine,
      TimeLineItem,
      ChartCard,
      TaskList
    },
    data () {
      return {
        salesChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        usersChart: {
          data: {
            labels: ['9AM', '12AM', '3PM', '6PM', '9PM', '12PM', '3AM', '6AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            showLine: true,
            showPoint: false
          }
        },
        subscriptionsChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [60, 50, 30, 50, 70, 60, 90, 100]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-red'
            }
          }
        },
        downloadsChart: {
          data: {
            labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
            series: [
              [1200, 1000, 3490, 8345, 3256, 2566]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-orange'
            }
          }
        }
      }
    }
  }
</script>
<style>
</style>
