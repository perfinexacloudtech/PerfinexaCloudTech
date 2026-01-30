import Navbar from "./Navbar";

type BlogLayoutProps = {
  data: {
    title: string;
    content: string;
    authorName: string;
    blogCategory: string;
    createdAt: string;
    views: number;
  };
};

export default function BlogLayout({ data }: BlogLayoutProps) {
  const readTime = Math.ceil((data?.content?.split(" ").length || 0) / 200);

  const formattedDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <article className="pt-20 pb-4 md:pt-28 min-h-screen font-sans">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 pb-4">
          <div className="flex items-center gap-4 mb-4 md:mb-8">
            <div className="h-11 w-11 rounded-full border border-black">
              <div className="h-full w-full rounded-full  flex items-center justify-center text-sm font-bold">
                {data.authorName.charAt(0)}
              </div>
            </div>

            <div className="flex flex-col text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium ">{data.authorName}</span>
                <span className="text-gray-500">·</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mt-0.5">
                <span>{readTime} min read</span>
                <span>·</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-y border-gray-800 py-3 mb-10 text-gray-400">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
                <span className="text-sm">{data.views}</span>
              </button>
            </div>

            <div className="flex items-center gap-5">
              <button className="hover:text-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
              <button className="hover:text-gray-200 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>

          <div
            className="
   blog-content text-justify
  "
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </article>
    </>
  );
}
