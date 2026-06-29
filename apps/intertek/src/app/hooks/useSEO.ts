import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  canonicalPath?: string;
  schema?: JsonValue;
}

const DEFAULT_IMAGE = 'https://intertekgroup.org/img/IG%20PHOTOS/marine-inspection-037.jpeg';

type JsonPrimitive = string | number | boolean | null;
type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

export function useSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  image,
  canonicalPath,
  schema,
}: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Intertek Group`;
    const canonicalUrl = new URL(canonicalPath || window.location.pathname, window.location.origin).toString();

    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateCanonical = (href: string) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const updateJsonLd = (json: string) => {
      let element = document.querySelector('script[data-seo-schema="true"]');
      if (!element) {
        element = document.createElement('script');
        element.setAttribute('type', 'application/ld+json');
        element.setAttribute('data-seo-schema', 'true');
        document.head.appendChild(element);
      }
      element.textContent = json;
    };

    updateMeta('description', description);
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (keywords) {
      updateMeta('keywords', keywords);
    }
    updateCanonical(canonicalUrl);
    updateProperty('og:title', ogTitle || title);
    updateProperty('og:description', ogDescription || description);
    updateProperty('og:url', canonicalUrl);
    updateProperty('og:image', image || DEFAULT_IMAGE);
    updateMeta('twitter:title', ogTitle || title);
    updateMeta('twitter:description', ogDescription || description);
    updateMeta('twitter:image', image || DEFAULT_IMAGE);

    if (schema) {
      const payload = Array.isArray(schema)
        ? schema.map((item) => (isJsonObject(item) ? { ...item, url: canonicalUrl } : item))
        : isJsonObject(schema)
          ? { ...schema, url: canonicalUrl }
          : schema;
      updateJsonLd(JSON.stringify(payload));
    } else {
      const element = document.querySelector('script[data-seo-schema="true"]');
      element?.remove();
    }
  }, [title, description, keywords, ogTitle, ogDescription, image, canonicalPath, schema]);
}

function isJsonObject(value: JsonValue): value is { [key: string]: JsonValue } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
