<template>
  <div class="col-md-12">
    <time-line>
      <template v-for="(i, x) in done">
        <time-line-item v-if="x%2!==0" badgeType="success" badgeIcon="ti-check-box">
          <span slot="header" class="label label-success">{{i.title}}</span>
          <p slot="body" style="font-weight: bold;">{{i.desc}}</p>
          <p slot="body">{{i.instruction}}</p>
        </time-line-item>
        <time-line-item v-else class="timeline-inverted" badgeType="success" badgeIcon="ti-check-box">
          <span slot="header" class="label label-success">{{i.title}}</span>
          <p slot="body" style="font-weight: bold;">{{i.desc}}</p>
          <p slot="body">{{i.instruction}}</p>
        </time-line-item>
      </template>
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
        done: [
          {'title': 'Pathology', 'desc': 'X-Ray', 'instruction': 'Offline report can be collected at room number 315, Building no. 1 or can be found in your Reports Panel!'},
          {'title': 'Pathology', 'desc': 'Blood Test', 'instruction': 'Blood work is under process, you will be notified once completed.'},
          {'title': 'Medication', 'desc': 'Pre-operation medication', 'instruction': 'Saline solution as well as haemotoxilin has been given to the patient.'}
        ],
        rem: [
          {'title': 'Surgery', 'desc': 'Gall Bladder Removal', 'instruction': 'Patient will be prepped in room number OTP4, to be taken by 3p.m.'},
          {'title': 'Medication', 'desc': 'Post-operation Medication', 'instruction': 'Patient has to be injected with morphine and glucose.'}
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
