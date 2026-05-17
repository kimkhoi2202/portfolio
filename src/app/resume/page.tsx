import type { Metadata } from "next";

import { ResumeViewer } from "@/components/resume-viewer";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `View ${DATA.name}'s resume in the browser.`,
};

export default function ResumePage() {
  return <ResumeViewer />;
}
