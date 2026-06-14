import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSEO({ title, description, keywords, ogTitle, ogDescription }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Intertek Total Quality Assurance`;
    
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

    updateMeta('description', description);
    if (keywords) {
      updateMeta('keywords', keywords);
    }
    updateProperty('og:title', ogTitle || title);
    updateProperty('og:description', ogDescription || description);
  }, [title, description, keywords, ogTitle, ogDescription]);
}
