import { Vue, Component } from "nuxt-property-decorator"
import Atoms from "@/components/Atoms"
import Molecules from "@/components/Molecules"
import IBlogPost from "@/model/BlogPost"

@Component
export default class Index extends Vue {
  posts: IBlogPost[] | null = null

  asyncData() {
    try {
      const posts = require("@/static/posts.json")
      return { posts }
    } catch (error) {
      console.error(error)
      return { posts: [] }
    }
  }

  render() {
    return (
      <Atoms.Grid>
        {!!this.posts?.length &&
          this.posts?.map((post) => (
            <Atoms.Row marginBottom="48px">
              <Molecules.PostCard
                image={post.image}
                category={post.category}
                title={post.title}
                author={post.author}
                createdAt={post.createdAt}
                readTime={post.readTime}
                text={post.text}
              />
            </Atoms.Row>
          ))}
      </Atoms.Grid>
    )
  }
}
