import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faArrowDown,
  faArrowUp,
  faCalendarAlt,
  faClock
} from "@fortawesome/free-solid-svg-icons"

library.add(faArrowDown, faArrowUp, faCalendarAlt, faClock)

export type IconNames = "arrow-down" | "arrow-up" | "calendar-alt" | "clock"
