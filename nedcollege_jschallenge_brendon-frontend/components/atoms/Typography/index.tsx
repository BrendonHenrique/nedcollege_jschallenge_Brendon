import { Component, Prop } from "nuxt-property-decorator"
import { CText } from "@chakra-ui/vue"
import PropAcessor, { valiableOptions } from "./typography"
import VueComponent from "@/config"

interface IAtomTypography {
  as: valiableOptions | valiableOptions[]
  color?: string
  fontWeight?: number
  lineHeight?: string
}

@Component
export default class AtomTypography extends VueComponent<IAtomTypography> {
  @Prop([String, Array]) as!: valiableOptions | valiableOptions[]
  @Prop(String) color!: string
  @Prop(Number) fontWeight!: number
  @Prop(String) lineHeight!: string

  render() {
    const flatedValue = [this.as].flat()
    const typos = flatedValue.map((opt) => PropAcessor()[opt])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getTypography = (options: any) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options.reduce((acc: any, obj: any) => {
        Object.entries(obj).forEach(([key, value]) => {
          if (!acc[key]) acc[key] = []
          if (!acc[key].includes(value)) acc[key].push(value)
        })
        return acc
      }, {})

    const { as, fontSize, fontWeight, lineHeight } = getTypography(typos)

    return (
      <CText
        as={as[0]}
        {...{
          attrs: {
            fontSize,
            fontWeight,
            lineHeight,
            ...this.$attrs
          },
          on: { ...this.$listeners }
        }}
      >
        {this.$slots.default}
      </CText>
    )
  }
}
