import { Vue, Component } from "nuxt-property-decorator"
import { CBox } from "@chakra-ui/vue"
import Atoms from "@/components/atoms"

@Component
export default class Index extends Vue {
  render() {
    return (
      <div>
        <h1>Fooooooo</h1>
        <CBox bg={["success", "warning", "error"]} h="200px" w="200px">
          <p>Fooooooo</p>
        </CBox>
        <div class="foo">
          <p>Fooooooo</p>
        </div>
        <Atoms.Icons name="arrow-up" color="error" />
      </div>
    )
  }
}
