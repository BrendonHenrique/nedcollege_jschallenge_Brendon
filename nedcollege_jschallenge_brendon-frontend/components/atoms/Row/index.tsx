import { CPseudoBox } from "@chakra-ui/vue"
import { Component, Prop } from "nuxt-property-decorator"
import VueComponent from "@/config"
import "./style.scss"

interface IAtomRow {
  mobileStart?: number
  desktopStart?: number
  mobileEnd?: number
  desktopEnd?: number
  marginBottom?: string
  alignItems?: string
}

@Component
export default class AtomRow extends VueComponent<IAtomRow> {
  @Prop({
    type: Number,
    default: 1
  })
  mobileStart!: number

  @Prop({
    type: Number,
    default: 1
  })
  desktopStart!: number

  @Prop({
    type: Number,
    default: 4
  })
  mobileEnd!: number

  @Prop({
    type: Number,
    default: 12
  })
  desktopEnd!: number

  @Prop(String) marginBottom!: string
  @Prop(String) alignItems!: string

  render() {
    return (
      <CPseudoBox
        {...{
          on: { ...this.$listeners },
          class: "atom-row",
          style: {
            display: "flex",
            "--grid-column-start-mobile": `${this.mobileStart}`,
            "--grid-column-start-desktop": `${this.desktopStart}`,
            "--grid-column-end-mobile": `${this.mobileEnd + 1}`,
            "--grid-column-end-desktop": `${this.desktopEnd + 1}`
          },
          attrs: {
            marginBottom: this.marginBottom,
            alignItems: this.alignItems
          }
        }}
      >
        {this.$slots.default}
      </CPseudoBox>
    )
  }
}
