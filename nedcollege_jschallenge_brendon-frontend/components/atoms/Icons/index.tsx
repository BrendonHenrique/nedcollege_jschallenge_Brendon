import { Component, Prop } from "nuxt-property-decorator"
import { VNode } from "vue"
import { CPseudoBox } from "@chakra-ui/vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// eslint-disable-next-line import/no-duplicates
import { IconNames } from "./iconography"
// eslint-disable-next-line import/no-duplicates
import "./iconography"
import VueComponent from "@/config"

export interface IAtomIcon {
  size?: "xs" | "sm" | "lg" | "xl"
  color?: string
  name: IconNames
}

@Component
export default class AtomIcons extends VueComponent<IAtomIcon> {
  @Prop({ type: String, default: "sm" }) size!: string
  @Prop(String) color!: string
  @Prop(String) name!: string

  render(): VNode {
    return (
      <CPseudoBox
        color={this.color}
        {...{
          on: { ...this.$listeners },
          attrs: { ...this.$attrs }
        }}
      >
        <FontAwesomeIcon icon={`fa-solid fa-${this.name}`} size={this.size} />
      </CPseudoBox>
    )
  }
}
