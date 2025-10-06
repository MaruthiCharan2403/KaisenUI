declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-FZ1NDDFB9T'; 

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GAEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GAEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};