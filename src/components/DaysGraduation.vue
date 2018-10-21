<template>
    <section class="section">
        <p v-if="daysUntilGraduation > 0">
            There are <strong>{{ daysUntilGraduation }}</strong> days until graduation,
            <strong>{{ gradDate }}</strong>!
        </p>
        <p v-else-if="daysUntilGraduation === 0 || daysUntilGraduation === -1">
            Graduation {{ year }} is <strong>today</strong>!
        </p>
        <p v-else>
            Oops! This site hasn't been updated for the new academic term.
        </p>
    </section>
</template>

<script>
    import {getDaysUntilGraduation, getFormatGradDate} from "../js/daysuntilgraduation";
    import moment from 'moment';

    export default {
        name: "DaysGraduation",
        data(){
            return {
                daysUntilGraduation: getDaysUntilGraduation(),
                gradDate: getFormatGradDate(),
                year: moment().format('YYYY')
            }
        }
    }
</script>

<style scoped>

</style>