import moment from 'moment'

export const formatDate = function (value, formatString) {
  if (formatString) {
    return moment(String(value)).format(formatString)
  } else {
    return moment(String(value)).format('YYYY-MM-DD hh:mm')
  }
}