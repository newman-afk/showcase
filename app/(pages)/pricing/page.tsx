import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Nothing actually here",
};

export default async function DemoPage() {
  return <div className="container mx-auto py-10">pricing</div>;
}
