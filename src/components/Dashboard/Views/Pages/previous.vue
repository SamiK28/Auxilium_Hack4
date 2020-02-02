<template>
  <div class="col-md-12">
    <time-line>
      <template v-for="(i, x) in done">
        <time-line-item v-if="x%2!==0" badgeType="success" badgeIcon="ti-check-box">
          <span slot="header" class="label label-success">{{i.title}}</span>

          <p slot="body" style="font-weight: bold;">{{i.desc}}</p>
          <p slot="body">24 - 11 - 2020</p>
          <p slot="body">{{i.instruction}}</p>
        </time-line-item>
        <time-line-item v-else class="timeline-inverted" badgeType="success" badgeIcon="ti-check-box">
          <span slot="header" class="label label-success">{{i.title}}</span>

          <div class="col-md-4">
            <h4 class="card-title">Date Picker</h4>
            <div class="form-group">

            </div>
          </div>
          <p slot="body" style="font-weight: bold;">{{i.desc}}</p>
          <p slot="body">24 - 09 - 2020</p>
          <p slot="body">{{i.instruction}}</p>
        </time-line-item>
      </template>

    </time-line>
  </div>

</template>
<script>
  import TimeLine from './../Dashboard/Stats/TimeLine.vue'
  import TimeLineItem from './../Dashboard/Stats/TimeLineItem.vue'
  import {DatePicker, TimeSelect, Slider, Tag, Input, Button, Select, Option} from 'element-ui'
  import PProgress from 'src/components/UIComponents/Progress.vue'
  import PSwitch from 'src/components/UIComponents/Switch.vue'
  export default {
    components: {
      [DatePicker.name]: DatePicker,
      [TimeSelect.name]: TimeSelect,
      [Slider.name]: Slider,
      [Tag.name]: Tag,
      [Input.name]: Input,
      [Button.name]: Button,
      [Option.name]: Option,
      [Select.name]: Select,
      PSwitch,
      PProgress,
      TimeLine,
      TimeLineItem
    },
    data () {
      return {
        datePicker: '',
        done: [
          {'title': 'Disaster Fund', 'desc': 'Australia Bush Fires', 'instruction': 'Donated 1000$ succesfully!'},
          {'title': 'Disaster Fund', 'desc': 'African Floods', 'instruction': 'Donated 500$ succesfully!'},
          {'title': 'Disaster Fund', 'desc': 'Amazon Forest Fires', 'instruction': 'Donated 250$ succesfully!'}
        ]
      }
    }
  }
</script>
<style>
</style>
