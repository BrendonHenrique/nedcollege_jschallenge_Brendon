import { Component, Prop } from "nuxt-property-decorator"
import VueComponent from "@/config"

export interface IMyComponent {
  initialValue?: string
}

@Component
export default class MyComponent extends VueComponent<IMyComponent> {
  @Prop(String) initialValue!: string
  value: string = ""

  render() {
    return (
      <div>
        <input v-model={this.value} />
        {this.value}
        {this.initialValue}
      </div>
    )
  }
}
