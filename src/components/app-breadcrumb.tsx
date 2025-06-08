"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { capitalize } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function AppBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // removes empty strings
  const fullPaths = segments.map(
    (_, i) => "/" + segments.slice(0, i + 1).join("/"),
  );
  const lastIndex = segments.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => (
          <Fragment key={segment + index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={fullPaths[index]}>
                {capitalize(segment)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== lastIndex && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
