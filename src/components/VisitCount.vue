<template>
    <section class="section">
        <p v-if="storageAvailable">
            You've visited this site <strong>{{ timesVisited }}</strong> {{ timesVisited | pluralize('time') }} this academic week.
        </p>
        <p>
            {{ quote }}
        </p>
    </section>
</template>

<script>
    import { updateLocalStorageAndGetTimes} from '../js/visitCounter'
    import { getWeek } from "../js/weekNumber"

    export default {
        name: "VisitCount",
        data() {
            return {
                timesVisited: '',
                storageAvailable: true
            }
        },
        mounted() {
            // this.storageAvailable = storageAvailable("localstorage");
            this.timesVisited = updateLocalStorageAndGetTimes(getWeek());
        },
        computed: {
            quote: function () {
                if(this.timesVisited <= 5) {
                    return 'What are you, new?';
                } else if(this.timesVisited <= 10) {
                    return 'Having some memory issues?';
                } else if(this.timesVisited <= 15) {
                    return 'This is getting silly.';
                } else if(this.timesVisited <= 20) {
                    return 'You must have a project due this week. Good luck!';
                } else if(this.timesVisited <= 25) {
                    return 'Quit Procrastinating';
                } else if(this.timesVisited <= 30) {
                    return 'Get a memory test, tiger.';
                } else {
                    return 'Stop spamming me.';
                }
            }
        }
    }
</script>

<style scoped>

</style>