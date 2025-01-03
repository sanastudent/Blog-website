

// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// import { components } from "@/app/components/CustomComponents";
// // import { SlugInput } from "sanity";
// // import { SlUserFollowing } from "react-icons/sl";

// export const revalidate = 60; //seconds

//  export async function generateStaticParams() {
//   const query = `*[_type=='post']{
//     "slug":slug.current
//   }`;
//   const slugs = await client.fetch(query);
//   const slugRoutes = slugs.map((item:{slug:string})=>(
//     item.slug
//   ));
//   // console.log(slugRoutes)
//   return slugRoutes.map((slug:string)=>(
//     {slug}
//   ))
  
// }


// type PageParams = {
//   slug: string;  // Define slug as a string
// };

// type PageProps = {
//   params: PageParams;  // Add PageParams as the type for params
// };



// // To create static pages for dynamic routes
// export default async function page({ params }: PageProps) {

//   const query = `*[_type=='post' && slug.current== $slug]{
//     title,summary,image,content,
//       author->{bio,image,name}
//   }[0]`;

//   const {slug} = params;
//   const post = await client.fetch(query,{slug});
//   // console.log(post);



//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

//       {/* Blog Title */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {post.title}
//       </h1>

//       {/* Featured Image */}
//       <Image
//         src={urlFor(post.image)}
//         width={500}
//         height={500}
//         alt="AI for everyone"
//         className="rounded"
//       />

//       {/* Blog Summary Section */}
//       <section>
//       <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//         Summary
//       </h2>
//       <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//         {post.summary}
//       </p>
//       </section>

//       {/* Author Section (Image & Bio) */}
//       <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
//         <Image
//           src={urlFor(post.author.image)}
//           width={250}
//           height={250}
//           alt="author"
//           className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
//         />
//         <div className="flex flex-col gap-1">
//           <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
//           <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
//             {post.author.bio}
//           </p>
//         </div>
//       </section>

//       {/* Main Body of Blog */}
//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80
//       prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
//       prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
//       prose-strong:text-dark dark:prose-strong:text-white
      
//       ">
//         <PortableText 
//         value={post.content} 
//         components={components} 
//         />
        
//       </section>
//     </article>
//   );
// }

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { components } from "@/app/components/CustomComponents";

export const revalidate = 60; // seconds

// Correct typing and structure for dynamic params
export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);

  return slugRoutes.map((slug: string) => ({
    slug,
  }));
}

type PageParams = {
  slug: string; // Define slug as a string
};

type PageProps = {
  params: PageParams; // Add PageParams as the type for params
};

// To create static pages for dynamic routes
export default async function page({ params }: PageProps) {
  const query = `*[_type=='post' && slug.current== $slug]{
    title, summary, image, content,
      author->{bio, image, name}
  }[0]`;

  const { slug } = params;
  const post = await client.fetch(query, { slug });

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlFor(post.image)}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {post.summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlFor(post.author.image)}
          width={250}
          height={250}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
        <PortableText value={post.content} components={components} />
      </section>
    </article>
  );
}