import { Component, Prop } from "nuxt-property-decorator"
import { CPseudoBox } from "@chakra-ui/vue"
import VueComponent from "@/config"

interface IAtomCard {
  margin?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  padding?: string
  height?: string
  width?: string
}

@Component
export default class AtomCard extends VueComponent<IAtomCard> {
  @Prop(String) margin!: string
  @Prop(String) marginTop!: string
  @Prop(String) marginRight!: string
  @Prop(String) marginBottom!: string
  @Prop(String) marginLeft!: string
  @Prop({
    type: String,
    default: "auto"
  })
  height!: string

  @Prop({
    type: String,
    default: "auto"
  })
  width!: string

  @Prop({
    type: String,
    default: "16px"
  })
  padding!: string

  render() {
    return (
      <CPseudoBox
        {...{
          on: { ...this.$listeners },
          attrs: {
            padding: this.padding,
            height: this.height,
            "min-width": this.width,
            borderRadius: "8",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "tertiary",
            ...this.$attrs
          }
        }}
      >
        {this.$slots.default}
      </CPseudoBox>
    )
  }
}
