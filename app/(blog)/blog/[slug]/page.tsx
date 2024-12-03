import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity.client";
import Image from "next/image";
import dayjs from "dayjs";

import { getImageUrl } from "@/heplers/imageUrl";

import TimeIconWhite from "../assets/clockW.png";
import CalendarIconBlack from "../assets/calendarB.png";

type Post = { slug: { current: string } }

export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`);
  return posts.map((post: Post) => ({
    slug:post.slug.current
  }));
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();

const options = { next: { revalidate: 30 } };



export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = getImageUrl(post.image)

  console.log(JSON.stringify(post))

  // Custom serializer for image components
  const components = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null; // No image, return nothing
        }
        return (
          <Image
            src={getImageUrl(value.asset)}
            alt={value.alt || "Image"}
            width='550'
            height='310'
            style={{ maxWidth: "100%", height: "auto" }}
            className='aspect-video rounded-xl !w-full my-4'

          />
        );
      },
    },
  };

  return (
    <main className='container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4'>

      <div className="mt-6 max-w-2xl mx-auto ">
        {/* Title Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800 leading-snug">
            {post.title}
          </h1>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
            <div className="flex items-center text-sm">
              <Image src={CalendarIconBlack} alt="Clock" className="w-5 h-5 mr-2" />
              {dayjs(post.publishedAt).format("MMM DD YYYY")}
            </div>
            <div className="flex items-center text-sm">
              <Image src={TimeIconWhite} alt="Clock" className="w-5 h-5 mr-2" />
              {post.duration} min read
            </div>
          </div>

        </div>
        {Array.isArray(post.body) && <PortableText value={post.body} components={components} />}



      </div>
    </main>
  );
}
