import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function page() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl inline-block font-heading tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
        <hr className="my-8" />
        {(
          <div className="grid gap-10 sm:grid-cols-2">
            {" "}
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    alt={post.title}
                    src={post.image}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-md text-muted-foreground">
                    {post.description}
                  </p>
                )}
                {post.date && (
                  <p className="text-md text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) || <p>No posts published</p>}
      </div>
    </div>
  );
}