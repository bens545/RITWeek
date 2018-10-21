<template>
  <section class="section">
    <h1 class="title is-1" v-if="finalsWeek">
      It's FINALS WEEK!  Good luck on your finals.
    </h1>
    <h1 v-else class="title is-1">
      It is currently week <strong>{{ weekNum }}</strong> at <span class="rit-logo">RIT</span>.
    </h1>
    <p class="notification is-danger" v-if="weekNum < 1">
      I've detected an error.  Email Ben Shaner (ben@benshaner.com) to make me fix it.
    </p>
    <p class="subtitle">
      <strong>Note:</strong> This value updates on <strong>Mondays</strong>, and is not guaranteed to be accurate.
    </p>
    <p v-if="breakWeek">It's a break week, go have some fun!</p>
  </section>
</template>

<script>
  import {getWeek, isBreakWeek, isFinalsWeek} from '../js/weekNumber';
export default {
  name: 'WeekNumber',
    data () {
      return {
          weekNum: getWeek(),
          breakWeek: isBreakWeek(),
          finalsWeek: isFinalsWeek()
      }
    }
}
</script>
