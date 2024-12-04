import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity.client";
import Image from "next/image";
import dayjs from "dayjs";

import Blog from "./posts";

import Card3Img from "public/assets/blog/card3.png";
import TimeIconWhite from "public/assets/blog/clockW.png";
import TimeIcon from "public/assets/blog/clock.png";

import CalenderIconWhite from "public/assets/blog/calendarW.png";
import CalendarIconBlack from "public/assets/blog/calendarB.png";

import ArrowIcon from "public/assets/blog/arrow.png";
import { getImageUrl } from "@/heplers/imageUrl";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current) && defined(description)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, image, duration}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);



  const PostPreview = ({ post, index }) => {
    const calendarIcon = index % 2 === 0 ? CalenderIconWhite : CalendarIconBlack
    const timeIcon = index % 2 === 0 ? TimeIconWhite : TimeIcon

    console.log('post',post)





    return <li key={post._id}>
      <Link href={`/blog/${post.slug.current}`}>
        {/* <p>{new Date(post.publishedAt).toLocaleDateString()}</p> */}
        <div className={`${index % 2 === 0 ? 'bg-[#2B2B33]' : 'bg-[#F6F6F6]'}  rounded-lg`}>
          <div className="flex flex-col space-y-4">
            {post.image.asset._ref&&<Image src={getImageUrl(post.image)} width={200} height={200} alt="Blog Visual" className="h-[200px] w-full" />}
            <div className="pt-5 pb-5 p-8">
              <div className={`flex items-center text-sm  mb-2 ${index % 2 === 0 ? 'text-white' : 'text-grey-600'} `}>
                <Image src={calendarIcon} alt="Calendar" className="w-5 h-5 mr-2" />
                {dayjs(post.publishedAt).format("MMM DD YYYY")}
              </div>
              <h3 className={`text-xl font-medium
                    ${index % 2 === 0 ? 'text-[#0072E1]' : 'text-black'}`}
              >
                {post.title}                  </h3>
              <div className="flex justify-between items-center mt-4">
                <div>
                  {post.duration && <div className={`flex items-center text-sm ${index % 2 === 0 ? 'text-white' : 'text-grey-600'} `}>
                    <Image src={timeIcon} alt="Clock" className={`w-5 h-5 mr-2`} />
                    {post.duration} min read
                  </div>
                  }
                </div>

                <button
                  className={` ${index % 2 === 0 ? 'bg-[#0072E1]' : 'bg-black'}  bg-[#0072E1] text-white px-4 py-2 rounded-full flex items-center space-x-2 justify-self-end`}
                // onClick={() => router.push("/blog/blogPost")}
                >
                  <span>More</span>
                  <Image src={ArrowIcon} alt="Arrow" className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  }


  return (
    <main className="px-8 pt-10">
      <div className="flex space-x-8 mb-8">
        <button
          className={`font-bold "text-black" : "text-gray-500"}`}
        // onClick={() => setSelectedSection("newest")}
        >
          Newest
        </button>
        <button
          className={`font-bold  "text-gray-500"}`}
        // onClick={() => setSelectedSection("popular")}
        >
          Popular
        </button>
        <button
          className={`font-bold "text-gray-500"}`}
        // onClick={() => setSelectedSection("byDate")}
        >
          By Date
        </button>
      </div>
      <ul className='flex flex-col gap-y-4'>
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} index={i} />
        ))}
      </ul>
      {/* <Blog/> */}
    </main>
  );
}
