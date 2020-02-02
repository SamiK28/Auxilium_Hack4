<template>
  <div class="col-md-12">
    <time-line>
      <template v-for="(i, x) in rem">
        <time-line-item v-if="x%2!==0" class="timeline-inverted" badgeType="warning" badgeIcon="ti-timer">
          <span slot="header" class="label label-warning">{{i.title}}</span>
          <p slot="body" style="font-weight: bold;">{{i.desc}}</p>
          <p slot="body">{{i.instruction}}</p>
        </time-line-item>
        <time-line-item v-else badgeType="warning" badgeIcon="ti-timer">
          <span slot="header" class="label label-warning">{{i.title}}</span>
          <p slot="body" style="font-weight: bold;">{{i.desc}}</p>
          <p slot="body">{{i.instruction}}</p>
        </time-line-item>
      </template>

    </time-line>
  </div>

</template>
<script>
  import TimeLine from './../Dashboard/Stats/TimeLine.vue'
  import TimeLineItem from './../Dashboard/Stats/TimeLineItem.vue'

  export default {
    data () {
      return {
        rem: [
          {'title': 'Plumbing', 'desc': 'Kitchen Sink Problem.', 'instruction': 'The Plumber has been dispatched and will reach your location soon.'},
          {'title': 'Electrician', 'desc': 'Changing fused Bulbs', 'instruction': 'The Electrician is on the way to get new bulbs,'}
        ]
      }
    },
    components: {
      TimeLine,
      TimeLineItem
    }
  }
</script>
<style>
</style>
