import { axios } from '@/plugins/axios'

const URL = 'https://banner-prod-ssb-01.ipm.edu.mo:9010/PROD/szkwdta.get_room_schedule'

export function getRoomSchedule (roomNo, startDate, endDate) {
  return axios.get(URL, {
    params: {
      P_ROOM: roomNo,
      ...(startDate && {P_START_DATE: startDate}),
      ...(endDate && {P_END_DATE: endDate })
    }
  })
}
