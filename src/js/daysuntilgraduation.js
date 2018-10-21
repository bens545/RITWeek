import moment from 'moment';
// Must be manually updated for new academic years.
const gradDateString = '2019-05-11';

const gradDateMoment = moment(gradDateString, 'YYYY-MM-DD');

// Returns an integer whose value is the floor of the difference in number of days from now until the graduation date
function getDaysUntilGraduation() {
    return gradDateMoment.diff(new Date(), 'days');
}

function getFormatGradDate() {
    return gradDateMoment.format('MMM DD, YYYY')
}

export{
    getDaysUntilGraduation,
    getFormatGradDate
}