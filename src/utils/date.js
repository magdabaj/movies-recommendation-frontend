import fromUnixTime from 'date-fns/fromUnixTime'
import format from 'date-fns/format'
// import messages from 'components/DeviceWidget/components/Data/components/NoData/messages'
import { utcToZonedTime } from 'date-fns-tz'
import { compose, curry } from 'rambda'
import compareAsc from 'date-fns/compareAsc'
import moment from 'moment'

export const unixDateBeginning = fromUnixTime(0)

export const isUnixDateBeginning = date =>
  compareAsc(date, unixDateBeginning) === 0

const dateFnsInvalidDate = 'Invalid Date'
export const isInvalidDate = date => date.toString() === dateFnsInvalidDate

export const formatUnixTimestamp = unixTimestamp => {
  const date = fromUnixTime(unixTimestamp)

  return isInvalidDate(date)
    ? 'No data provided'
    : format(date, 'dd.MM.yyyy HH:mm')
}

export const fromUnixTimestampToUtcDate = compose(
  utcToZonedTime,
  fromUnixTime,
)

export const toHoursMinuteSeconds = date => {
  const dateFormat = 'HH:mm:ss'

  return moment(date).format(dateFormat)
}

export const toDate = d => new Date(d)
export const isEarlierThan = curry((d1, d2) => d2 < d1)
export const now = () => new Date()
export const toISOString = d => d.toISOString()
