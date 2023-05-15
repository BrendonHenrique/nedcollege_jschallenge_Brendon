<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body">
          <CReset />
          <Header />
          <CBox pt="80px" as="main">
            <Nuxt />
          </CBox>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from "@chakra-ui/vue"
import Molecules from "@/components/Molecules"

export default {
  name: "DefaultLayout",
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    // eslint-disable-next-line vue/no-reserved-component-names
    Header: Molecules.Header
  }
}
</script>
