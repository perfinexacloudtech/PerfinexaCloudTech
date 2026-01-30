import { getPageMetadata } from "@/lib/Metadata";
import HomeWrapper from "./HomeWrapper";

export const metadata = getPageMetadata({
  title: "Perfinexa CloudTech Pvt. Ltd – IT Company in Nagpur",
  description:
    "Leading IT company in Nagpur offering digital marketing, website development, software development, Salesforce solutions, app development in Nagpur.",
  path: "/",
});

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <HomeWrapper />
    </div>
  );
}
