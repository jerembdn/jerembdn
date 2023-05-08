import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { useTheme } from "styled-components";
import urlcat from "urlcat";

import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/constants/manifest";

type HeadProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

const Head: React.FC<HeadProps> = ({
  title,
  subtitle,
  description,
  keywords,
  thumbnailUrl,
  noIndex,
  noFollow,
}: HeadProps) => {
  const { locales, asPath } = useRouter();

  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APP_NAME}`
    : APP_NAME;

  const finalDescription = description || APP_DESCRIPTION;

  const finalThumbnailUrl =
    urlcat(
      `https://og-image.onruntime.com/${
        encodeURIComponent(subtitle || "") ||
        encodeURIComponent(title || "") ||
        APP_NAME
      }.jpeg`,
      {
        description: encodeURIComponent(description || APP_DESCRIPTION),
        theme: "dark",
        md: 1,
        fontSize: "100px",
        images: `${APP_URL}/static/images/logo/logo.svg`,
        thumbnail: thumbnailUrl,
      }
    ) || "/static/images/open-graph-image.jpg";

  const languageAlternates = locales
    ? locales.map((locale) => ({
        hrefLang: locale,
        href: `${APP_URL}/${locale}${asPath}`,
      }))
    : [];

  const theme = useTheme();

  return (
    <NextSeo
      title={finalTitle}
      description={finalDescription}
      openGraph={{
        title: finalTitle,
        description: finalDescription,
        site_name: APP_NAME,
        images: [
          {
            url: finalThumbnailUrl,
            alt: finalTitle,
            type: "image/jpeg",
          },
        ],
        type: "website",
      }}
      twitter={{
        handle: "@jeremdotjs",
        site: "@jeremdotjs",
        cardType: "summary_large_image",
      }}
      languageAlternates={[
        ...languageAlternates,
        {
          hrefLang: "x-default",
          href: `${APP_URL}${asPath}`,
        },
      ]}
      additionalMetaTags={[
        {
          property: "keywords",
          content: `jeremy baudrin${
            keywords ? `, ${keywords.join(", ").toLowerCase()}` : ""
          }`,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
        },
        {
          name: "theme-color",
          content: theme ? theme.colors.background.primary : "#000000",
        },
      ]}
      noindex={noIndex}
      nofollow={noFollow}
      canonical="https://jeremybdn.fr"
    />
  );
};

export type { HeadProps };
export default Head;
