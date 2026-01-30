import { notFound } from "next/navigation";
import { servicesData } from "@/data/serviceData"; 
import ServiceContent from "./ServiceContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  if (!servicesData[slug as keyof typeof servicesData]) {
    return notFound();
  }

  return <ServiceContent slug={slug} />;
}