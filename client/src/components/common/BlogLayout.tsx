import Image from "next/image";

// components/BlogLayout.tsx
type BlogLayoutProps = {
  data: any;
};

export default function BlogLayout({ data }: BlogLayoutProps) {
  return (
    <article className=" max-w-4xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        {data.title}
      </h1>

      {/* Author */}
      <div className="flex justify-between py-2 mt-4 border-y border-gray-600">
       <div className="blog-header flex items-center gap-3">
         <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            src={data.avatar}
            alt={data.author}
            width={50}
            height={50}
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-bold">{data.author}</p>
          <p className="text-sm text-gray-400">
            {data.publishedAt} · {data.readTime}
          </p>
        </div>
       </div>

      <div className="flex items-center">
         <button className="px-4 py-1 bg-white text-black pointer rounded-full">Follow</button>
      </div>
      </div>

      {/* Content */}
      <div className="mt-10 space-y-6">
        {data.content.map((block: any, index: number) => {
          switch (block.type) {
            case "heading":
              return (
                <h2 key={index} className="text-2xl font-semibold mt-10">
                  {block.value}
                </h2>
              );

            case "paragraph":
              return (
                <p key={index} className="text-lg leading-relaxed">
                  {block.value}
                </p>
              );

            case "quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-gray-400 pl-4 italic "
                >
                  {block.value}
                </blockquote>
              );

            case "list":
              return (
                <ul key={index} className="list-disc pl-6 space-y-2">
                  {block.value.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );

            case "code":
              return (
                <pre
                  key={index}
                  className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto"
                >
                  <code>{block.value}</code>
                </pre>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10">
        {data.tags.map((tag: string, i: number) => (
          <span key={i} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
