import { Component, Prop } from "nuxt-property-decorator"
import { CButton } from "@chakra-ui/vue"
import VueComponent from "@/config"

interface IAtomButton {
  variant?: "outline" | "solid" | "ghost"
  background?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error"
  size?: "xs" | "sm" | "md" | "lg"
}

@Component
export default class AtomButton extends VueComponent<IAtomButton> {
  @Prop({
    type: String,
    default: "solid"
  })
  variant!: string

  @Prop({
    type: String,
    default: "primary"
  })
  background!: string

  @Prop({
    type: String,
    default: "sm"
  })
  size!: string

  render() {
    const { variant, background, size } = this

    return (
      <CButton
        {...{
          on: { ...this.$listeners },
          attrs: {
            variant,
            background,
            size
          }
        }}
      >
        {this.$slots.default}
      </CButton>
    )
  }
}
