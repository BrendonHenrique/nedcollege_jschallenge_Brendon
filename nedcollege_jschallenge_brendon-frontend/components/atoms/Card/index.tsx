import { Component, Prop } from "nuxt-property-decorator"
import { CPseudoBox } from "@chakra-ui/vue"
import VueComponent from "@/config"

interface IAtomCard {
  margin?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
}

@Component
export default class AtomCard extends VueComponent<IAtomCard> {
  @Prop(String) margin!: string
  @Prop(String) marginTop!: string
  @Prop(String) marginRight!: string
  @Prop(String) marginBottom!: string
  @Prop(String) marginLeft!: string

  render() {
    return (
      <CPseudoBox
        {...{
          on: { ...this.$listeners },
          attrs: {
            padding: "4",
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
