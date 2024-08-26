"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  location?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  location,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      setIsExpanded(true);
    }
  }, [isMobile]);

  const handleTitleClick = () => {
    if (!isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleTextClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isMobile && (e.key === "Enter" || e.key === " ")) {
      setIsExpanded(!isExpanded);
    }
  };

  const parseDescription = (text: string) => {
    const urlRegex = /(\bhttps?:\/\/\S+\b)/g;
    const parts = text.split(urlRegex).flatMap((part, index) => {
      if (urlRegex.test(part)) {
        return [
          <Link key={`link-${index}`} href={part} target="_blank" rel="noopener noreferrer">
            <span className="text-blue-500 underline cursor-pointer">{part}</span>
          </Link>,
        ];
      }
      return part.split('\n').map((line, lineIndex) => (
        <React.Fragment key={`line-${index}-${lineIndex}`}>
          {line}
          {lineIndex < part.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    });
    return parts;
  };

  return (
    <Card className="flex">
      <Link href={href ?? "#"} target="_blank" rel="noopener noreferrer">
        <div className="flex-none block cursor-pointer" tabIndex={0}>
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
      </Link>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3
              className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm cursor-pointer"
              onClick={handleTitleClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
            >
              {title}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={badge}
                      onClick={handleTextClick}
                      tabIndex={0}
                      role="button"
                      onKeyDown={handleKeyDown}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              {!isMobile && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </h3>
            <button
              className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right"
              onClick={handleTextClick}
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {period}
            </button>
          </div>
          {subtitle && (
            <div
              className="font-sans text-xs"
              onClick={handleTextClick}
              tabIndex={0}
              role="button"
              onKeyDown={handleKeyDown}
            >
              {subtitle}
            </div>
          )}
          {isMobile && location && (
            <div className="font-sans text-xs text-muted-foreground mt-1">
              {location}
            </div>
          )}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: isMobile ? 1 : 0, height: isMobile ? "auto" : 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
            onClick={handleTextClick}
            tabIndex={0}
            role="button"
            onKeyDown={handleKeyDown}
          >
            {parseDescription(description)}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
