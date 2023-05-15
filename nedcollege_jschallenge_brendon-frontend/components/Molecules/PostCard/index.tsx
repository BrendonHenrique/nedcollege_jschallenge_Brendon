import { Component, Prop } from "nuxt-property-decorator"
import { CBox, CFlex, CAvatar, CImage } from "@chakra-ui/vue"
import VClamp from "vue-clamp"
import VueComponent from "@/config"
import Atoms from "@/components/Atoms"
import IBlogpost from "@/model/BlogPost"

interface IPostCard extends IBlogpost {}

@Component
export default class PostCard extends VueComponent<IPostCard> {
  @Prop(String) image!: string
  @Prop(String) category!: string
  @Prop(String) title!: string
  @Prop(String) author!: string
  @Prop(String) createdAt!: string
  @Prop(String) readTime!: string
  @Prop(String) text!: string

  render() {
    return (
      <CFlex flex-direction={["column", "row"]} gap="16px">
        <Atoms.Card width="266px" height="190px" padding="0 !important">
          <CImage
            border-radius="8"
            src={this.image}
            height="100%"
            width="100%"
            object-fit="cover"
          />
        </Atoms.Card>

        <CBox>
          <CBox mb={["18px", "8px"]}>
            <Atoms.Button background="tertiary">
              <Atoms.Typography as="span">{this.category}</Atoms.Typography>
            </Atoms.Button>
          </CBox>

          <CBox mb="16px">
            <Atoms.Typography as="h3-bold">{this.title}</Atoms.Typography>
          </CBox>

          <CFlex align-items="center" gap="16px" mb="16px">
            <CFlex align-items="center" gap="8px">
              <CAvatar size="xs" />
              <Atoms.Typography as="span">{this.author}</Atoms.Typography>
            </CFlex>
            |
            <CFlex align-items="center" gap="8px">
              <Atoms.Icons name="calendar-alt" />
              <Atoms.Typography as="span">{this.createdAt}</Atoms.Typography>
            </CFlex>
            |
            <CFlex align-items="center" gap="8px">
              <Atoms.Icons name="clock" />
              <Atoms.Typography as="span">
                {this.readTime} to read
              </Atoms.Typography>
            </CFlex>
          </CFlex>

          <Atoms.Typography as="p">
            <VClamp autoresize max-lines={2}>
              {this.text}
            </VClamp>
          </Atoms.Typography>
        </CBox>
      </CFlex>
    )
  }
}
