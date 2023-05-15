import { Component } from "nuxt-property-decorator"
import { CPseudoBox } from "@chakra-ui/vue"
import VueComponent from "@/config"
import Atoms from "@/components/Atoms"

interface IHeaderCard {}

@Component
export default class HeaderCard extends VueComponent<IHeaderCard> {
  render() {
    return (
      <CPseudoBox
        h="80px"
        w="100vw"
        as="header"
        bg="secondary"
        position="fixed"
        top="0"
        z-index="banner"
      >
        <Atoms.Grid h="100%" my="0 !important">
          <Atoms.Row align-items="center">
            <Atoms.Typography as="h3">Home</Atoms.Typography>
          </Atoms.Row>
        </Atoms.Grid>
      </CPseudoBox>
    )
  }
}
