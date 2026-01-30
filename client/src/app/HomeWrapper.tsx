"use client";

import ConsultationDrawer from "@/components/common/ConsultationDrawer";
import AboutSection from "@/components/home/About";
import DifferenceSection from "@/components/home/DifferenceSection";
import HeroSection from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesPage } from "@/components/home/ServicePage";
import TestimonialSection from "@/components/home/TestimonialSection";
import React, { useEffect, useState } from "react";
import CallAction from "@/components/home/CallAction";
import TrandingBlogCard from "@/components/common/TrandingBlogCard";
import { Blog } from "@/types/model";

const HomeWrapper = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("/api/blogs?limit=5&trending=true");
      const json = await res.json();

      setBlogs(json.data || []);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <HeroSection onOpen={openForm} />
      <AboutSection />
      <ServicesPage onOpen={openForm} />
      <DifferenceSection />
      <ProcessSection onOpen={openForm} />
      <TestimonialSection />
      <TrandingBlogCard trandingBlog={blogs} loading={loading} />
      <CallAction onOpen={openForm} />
      <ConsultationDrawer isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default HomeWrapper;
