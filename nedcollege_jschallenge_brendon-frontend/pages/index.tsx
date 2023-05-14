import { Vue, Component } from "nuxt-property-decorator"
import { CBox } from "@chakra-ui/vue"
import MyComponent from "@/components/MyComp"

@Component
export default class Index extends Vue {
  render() {
    return (
      <div>
        <h1>Fooooooo</h1>
        <MyComponent initialValue="test" />
        <CBox bg={["success", "warning", "error"]} h="200px" w="200px">
          <p>Fooooooo</p>
        </CBox>
        <div class="foo">
          <p>Fooooooo</p>
        </div>
      </div>
    )
  }
}
