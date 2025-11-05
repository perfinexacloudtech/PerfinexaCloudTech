



import { coursesData } from "@/data/courses";
import CourseDetailsClient from "@/components/CourseDetailsClient";

export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ Must await params

  console.log("Slug received:", slug);

  const course = coursesData[slug as keyof typeof coursesData];

  if (!course) {
    return <div className="text-center mt-20 text-xl">Course Not Found</div>;
  }

  return <CourseDetailsClient courseData={course} />;
}
