<template>
    <div class="container">
        <WeekNumber/>
        <DaysGraduation/>
        <VisitCount/>
    </div>
</template>

<script>
    import WeekNumber from './components/WeekNumber'
    import DaysGraduation from './components/DaysGraduation'
    import VisitCount from './components/VisitCount'

    export default {
        name: 'app',
        components: {
            WeekNumber,
            DaysGraduation,
            VisitCount
        }
    }
</script>

<style>
</style>
