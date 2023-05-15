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

        <Atoms.Typography as="span">span</Atoms.Typography>
        <Atoms.Typography as="p">p</Atoms.Typography>
        <Atoms.Typography as="h1">h1</Atoms.Typography>
        <Atoms.Typography as="h2">h2</Atoms.Typography>
        <Atoms.Typography as="h3">h3</Atoms.Typography>
        <Atoms.Typography as="h4">h4</Atoms.Typography>
        <Atoms.Typography as="h5">h5</Atoms.Typography>
        <Atoms.Typography as="h6">h6</Atoms.Typography>

        <Atoms.Typography as={["span", "h3", "h1"]}>
          RESPONSIVE
        </Atoms.Typography>

        <Atoms.Button size="xs">Atoms.Button xs</Atoms.Button>
        <Atoms.Button>Atoms.Button sm</Atoms.Button>
        <Atoms.Button size="md">Atoms.Button md</Atoms.Button>
        <Atoms.Button size="lg">Atoms.Button lg</Atoms.Button>

        <Atoms.Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          modi cumque nihil! Nesciunt reprehenderit veritatis at deserunt
          voluptatum? Quas voluptates repellat tempora non ex perferendis,
          voluptatum nesciunt molestiae et provident!
        </Atoms.Card>

        <Atoms.Grid>
          <Atoms.Row>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dicta optio sequi vero tempore sint unde similique, fugiat mollitia
            eos quibusdam atque odio eveniet aspernatur aliquam quia praesentium
            deserunt eum?
          </Atoms.Row>

          <Atoms.Row desktopStart={2} desktopEnd={11}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dicta optio sequi vero tempore sint unde similique, fugiat mollitia
            eos quibusdam atque odio eveniet aspernatur aliquam quia praesentium
            deserunt eum?
          </Atoms.Row>

          <Atoms.Row
            mobileStart={2}
            mobileEnd={3}
            desktopStart={3}
            desktopEnd={10}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dicta optio sequi vero tempore sint unde similique, fugiat mollitia
            eos quibusdam atque odio eveniet aspernatur aliquam quia praesentium
            deserunt eum?
          </Atoms.Row>
        </Atoms.Grid>
      </div>
    )
  }
}
