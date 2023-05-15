<script>
import { CPseudoBox } from "@chakra-ui/vue"
import Vue from "vue"

/**
 * @prop {any} $props any props listed here: https://vue.chakra-ui.com/style-props
 */
export default Vue.component("AtomGrid", {
  render: function (createElement) {
    return createElement(
      CPseudoBox,
      {
        on: { ...this.$listeners },
        class: "atom-grid",
        attrs: {
          ...this.$attrs
        }
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.atom-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: $gutter-sm;
  padding: $gutter-lg $gutter-sm;
  width: 100%;
}

@media screen and (min-width: #{$breakpoints-md}) {
  .atom-grid {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: $gutter-lg;
    max-width: $breakpoints-lg;
    margin: $gutter-xl auto $gutter-2xl auto;
    width: calc(100vw - 324px);
    padding: 0;
  }
}
</style>
