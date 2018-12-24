import moment from 'moment';

// Set up the dates
var semesterStarts = [];
var fallSemester = {
    start: moment("2018-08-27"),
    break: moment("2018-11-18")
    // break: moment('2018-10-13')
};

var springSemester = {
    start: moment("2019-01-23"),
    break: moment("2018-03-11")
};

var summerSemester = {
    start: moment("2019-05-16"),
    break: null
};

semesterStarts.push(fallSemester);
semesterStarts.push(springSemester);
semesterStarts.push(summerSemester);

/**
 * Determine the number of weeks from the start of semester
 * @returns {number} Number of weeks
 */
function getWeek(){
    let now = moment();
    let offset = 1;
    let semester = getSemester();
    if(semester.break.isBefore(now)){
        offset = 0;
    }
    return now.diff(semester.start, 'weeks') + offset;
}

/**
 * Determine which semester we are currently in
 * @returns {Object} Start of semester
 */
function getSemester(){
    semesterStarts.reverse();
    for (let semester of semesterStarts) {
        if(semester.start.isSameOrBefore(moment())){
            return semester;
        }
    }
    return semesterStarts[0];
}

function isBreakWeek(){
    let semester = getSemester();
    return semester.break.isSame(moment(), 'week');
}

function isFinalsWeek(){
    let week = getWeek();
    return week === 15;
}

export {
    getWeek,
    isBreakWeek,
    isFinalsWeek
}