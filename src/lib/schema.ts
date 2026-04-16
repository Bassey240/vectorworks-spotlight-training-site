import { site, toAbsoluteUrl } from "@/lib/site";

type Link = {
  href: string;
  label: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.company,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLines[0],
      postalCode: site.addressLines[1],
      addressLocality: site.addressLines[2],
      addressCountry: "NL"
    },
    sameAs: site.socials.map((item) => item.href)
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.trainer.name,
    jobTitle: site.trainer.role,
    worksFor: {
      "@id": `${site.url}/#organization`
    },
    description: site.trainer.bio
  };
}

export function breadcrumbSchema(items: Link[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: toAbsoluteUrl(item.href)
    }))
  };
}

export function courseSchema(data: {
  title: string;
  description: string;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.title,
    description: data.description,
    provider: {
      "@id": `${site.url}/#organization`
    },
    url: toAbsoluteUrl(data.pathname)
  };
}

export function serviceSchema(data: {
  title: string;
  description: string;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.description,
    provider: {
      "@id": `${site.url}/#organization`
    },
    areaServed: "Nederland",
    url: toAbsoluteUrl(data.pathname)
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function articleSchema(data: {
  title: string;
  description: string;
  pathname: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    datePublished: data.date,
    author: {
      "@id": `${site.url}/#person`
    },
    publisher: {
      "@id": `${site.url}/#organization`
    },
    mainEntityOfPage: toAbsoluteUrl(data.pathname)
  };
}
