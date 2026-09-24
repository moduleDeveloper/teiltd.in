/** Every outbound URL the app links to, in one place. Update a destination here and
 * every button/link that references it updates too — nothing should hardcode a raw
 * URL string inside a component. */
export const EXTERNAL_LINKS = {
  /** "Try Now" (hero, plans, launch form) everywhere on the site. */
  login: 'https://app-test.teiltd.in/login',
  userLogin: 'https://user-test.teiltd.in/auth/login',
  appDownload: 'https://teiltd.in/app-download',
  whatsappChat: 'https://api.whatsapp.com/send?phone=918447247138',
  whatsappDirect: 'https://wa.me/918447247138',
  facebook: 'https://www.facebook.com/share/1HckgAhV2j/',
  instagram: 'https://www.instagram.com/setu.connect_?stkn=MWozcjZ5dGpjNG45eQ==',
  youtube: 'https://youtube.com/@setuconnect?si=0Rl7dRqogK06J5bY',
  watchDemo: 'https://youtu.be/Z_WIYiVoWIo?si=3aGQl-3E0oDIHMY4',
  /** Placeholder — swap for the real AI assistant destination once it exists. */
  aiBot: 'https://chatgpt.com/g/g-6a62b9836ff48191acad37b7641af69b-setu-sales-guide-assistant',
} as const;

export const SOLUTION_VIDEO_LINKS = {
  digitalCommunity: 'https://youtu.be/8LeCLj85XfU?si=fot0p7RNuMgl3nqX',
  voiceAgent: 'https://youtu.be/RTL7gQdiyWY?si=Dh8Moe3gvv--3t5u',
  digitalDirectory: 'https://youtu.be/rUEDAtnLIUo?si=P6cjTC5ZXd1RFA9F',
} as const;
