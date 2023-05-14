import { Vue, Component } from "nuxt-property-decorator"
import { MyComponent } from "@/components/MyComp"

@Component
export default class Index extends Vue {
  render() {
    return (
      <div>
        foo
        <MyComponent initialValue="test" />
      </div>
    )
  }
}
