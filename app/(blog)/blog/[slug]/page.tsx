import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity.client";
import Image from "next/image";
import dayjs from "dayjs";

import { getImageUrl } from "@/heplers/imageUrl";

import TimeIcon from "public/assets/blog/clock.png";
import CalendarIconBlack from "public/assets/blog/calendarB.png";
import PopImg1 from "public/assets/blog/most_popular1.png";
import PopImg2 from "public/assets/blog/most_popular2.png";
import PopImg3 from "public/assets/blog/most_popular3.png";
import PopImg4 from "public/assets/blog/most_popular4.png";

type Post = { slug: { current: string } }


const articles = [
  {
    category: "Engineering, Data/ML",
    date: "August 29",
    region: "Global",
    title: "Pinot for Low-Latency Offline Table Analytics",
    image: PopImg1, // Add your image paths here
  },
  {
    category: "Engineering, Data/ML",
    date: "November 07",
    region: "Global",
    title: "Presto Express: Speeding up Query Processing with Minimal Resources",
    image: PopImg2,
  },
  {
    category: "Engineering, Data/ML",
    date: "August 29",
    region: "Global",
    title: "Lucene: Uber’s Search Platform Version Upgrade",
    image: PopImg3,
  },
  {
    category: "Engineering, Backend, Mobile",
    date: "August 29",
    region: "Global",
    title: "Unified Checkout: Streaming Uber’s Payment Ecosystem",
    image: PopImg4,
  },
];


export async function generateStaticParams() {

  const options = { next: { revalidate: 30 } };


  const posts = await client.fetch<Post[]>(`*[_type == "post"]`,{},options );

  console.log('posts',posts)

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
              <Image src={TimeIcon} alt="Clock" className="w-5 h-5 mr-2" />
              {post.duration} min read
            </div>
          </div>

        </div>
        {Array.isArray(post.body) && <PortableText value={post.body} components={components} />}



      </div>
      <div className="font-inter bg-white text-black max-w-3xl pt-4 mx-auto">
                  {/* Heading */}
                  <h1 className="text-2xl font-bold mb-6">Most popular</h1>
                  <hr className="mb-4 border-gray-300" />

                  {/* Article List */}
                  <div className="space-y-6">
                    {articles.map((article, index) => (
                      <div key={index} className="flex justify-between items-center pb-4">
                        {/* Left Section */}
                        <div>
                          <p className="text-sm text-gray-500">
                            <span className="text-gray-800">{article.category}</span>{" "}
                            <span>{article.date}</span> / {article.region}
                          </p>
                          <h2 className="text-base font-medium mt-1">{article.title}</h2>
                        </div>
                        {/* Image Section */}
                        <Image
                          src={article.image} // Dynamically add images
                          alt={article.title}
                          className="w-20 h-20 object-cover rounded-md"
                          width={80}
                          height={84}
                        />
                      </div>
                    ))}
                  </div>
                </div>
    </main>
  );
}
