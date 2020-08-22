import { Resolver, Query, Ctx } from "type-graphql";
import { Post } from "src/entities/posts";
import { MyContext } from "src/types";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}
