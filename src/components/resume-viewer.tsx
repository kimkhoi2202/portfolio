"use client";

import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin, type ToolbarProps } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { ChevronsUpDown } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const resumeUrl = "/Khoi-Lam-Resume.pdf";
const workerUrl = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export function ResumeViewer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("resume-page");

    return () => {
      document.body.classList.remove("resume-page");
    };
  }, []);

  const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;

        return (
          <div className="flex w-full flex-wrap items-center justify-between gap-2 px-2 py-2">
            <div className="flex min-w-0 items-center gap-1">
              <ShowSearchPopover />
              <GoToPreviousPage />
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <div className="w-12">
                  <CurrentPageInput />
                </div>
                <span>/</span>
                <NumberOfPages />
              </div>
              <GoToNextPage />
            </div>
            <div className="flex min-w-0 items-center gap-1">
              <Zoom>
                {({ onZoom }) => (
                  <button
                    aria-label="Fit page"
                    className="rpv-core__minimal-button"
                    title="Fit page"
                    type="button"
                    onClick={() => onZoom(SpecialZoomLevel.PageFit)}
                  >
                    <ChevronsUpDown className="size-4" />
                  </button>
                )}
              </Zoom>
              <ZoomOut />
              <div className="hidden min-w-16 text-center text-xs text-muted-foreground sm:block">
                <Zoom />
              </div>
              <ZoomIn />
              <EnterFullScreen />
              <Print />
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  });

  return (
    <section className="relative left-1/2 w-[min(calc(100vw_-_1.5rem),1040px)] -translate-x-1/2 space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="outline" size="sm" className="w-fit">
          <Link href="/">Back Home</Link>
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              Open PDF
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={resumeUrl} download="Khoi-Lam-Resume.pdf">
              Download PDF
            </a>
          </Button>
        </div>
      </div>
      <div className="resume-viewer h-[calc(100dvh-5.5rem)] min-h-[620px] overflow-hidden rounded-lg border bg-background shadow-sm">
        {mounted ? (
          <Worker workerUrl={workerUrl}>
            <Viewer
              fileUrl={resumeUrl}
              defaultScale={SpecialZoomLevel.PageFit}
              plugins={[defaultLayoutPluginInstance]}
              theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
          </Worker>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Loading resume...
          </div>
        )}
      </div>
    </section>
  );
}
