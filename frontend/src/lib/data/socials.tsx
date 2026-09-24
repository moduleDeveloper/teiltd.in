import { EXTERNAL_LINKS } from '../config/links';
import type { SocialLink } from '../types';

/** Footer "Also connect with us" icons. Centralized here so the URLs live in
 * config/links.ts and only the presentation (icon/colors/stagger) lives with the data. */
export const SOCIALS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: EXTERNAL_LINKS.instagram,
    bounceDelay: '0s',
    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    borderRadius: 6,
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: EXTERNAL_LINKS.facebook,
    bounceDelay: '.6s',
    background: 'linear-gradient(135deg,#4599FF 0%,#1877F2 50%,#0C5FD1 100%)',
    borderRadius: 6,
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.3C16.3 4.2 15.4 4 14.4 4c-2.1 0-3.6 1.28-3.6 3.64V10.5H8.3v3h2.5V21h2.7z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: EXTERNAL_LINKS.youtube,
    bounceDelay: '1.2s',
    background: 'linear-gradient(135deg,#FF3B30 0%,#FF0000 55%,#CC0000 100%)',
    borderRadius: 6,
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
        <path d="M22 12s0-3.2-.4-4.7c-.24-.86-.9-1.53-1.76-1.77C18.3 5 12 5 12 5s-6.3 0-7.84.53c-.86.24-1.52.9-1.76 1.77C2 8.8 2 12 2 12s0 3.2.4 4.7c.24.86.9 1.5 1.76 1.75C5.7 19 12 19 12 19s6.3 0 7.84-.55c.86-.24 1.52-.88 1.76-1.75.4-1.5.4-4.7.4-4.7z" />
        <path d="M10 15.5l5.2-3.1L10 9.3v6.2z" fill="#FF3B30" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: EXTERNAL_LINKS.whatsappDirect,
    bounceDelay: '1.8s',
    background: 'linear-gradient(135deg,#5BD066 0%,#25D366 45%,#128C7E 100%)',
    borderRadius: 999,
    icon: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.29-1.39c1.4.76 3 1.2 4.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.9C21.91 6.45 17.5 2 12.04 2zm0 1.67c4.55 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24-1.5 0-2.97-.4-4.24-1.16l-.3-.18-3.14.82.84-3.06-.2-.32a8.19 8.19 0 01-1.26-4.36c0-4.55 3.7-8.23 8.24-8.23zm4.53 10.4c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
];
