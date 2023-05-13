import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class MyComponent extends Vue {
  value: string = ''

  render() {
    return ( 
      <div>
        <input v-model={this.value} />

        {this.value}
      </div>
    )
  }
}