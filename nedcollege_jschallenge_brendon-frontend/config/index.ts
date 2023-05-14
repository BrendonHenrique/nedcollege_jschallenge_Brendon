import { Vue } from "nuxt-property-decorator"

export default class VueComponent<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends Record<string, any> = {}
> extends Vue {
  $props!: P
}
