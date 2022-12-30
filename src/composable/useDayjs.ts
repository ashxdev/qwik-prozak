import dayjs from "dayjs"
import "dayjs/locale/uk"

export const useDayjs = () => {
  dayjs.locale("uk")
  return dayjs
}
