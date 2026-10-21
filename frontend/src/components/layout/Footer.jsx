import { useState } from 'react';
import { ExternalLink, Reveal } from '@/components/ui';
import { COMPANY, CONTACT } from '@/lib/config/constants';
import { EXTERNAL_LINKS } from '@/lib/config/links';
import { FOOTER_SECTIONS } from '@/lib/data/footer';
import { SOCIALS } from '@/lib/data/socials';
import FooterColumn from './FooterColumn';
import { cn, container, link, tag } from '@/lib/styles';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer id="footer" className="tablet:px-[40px]! mobile:px-[20px]! mobile:pt-[40px]! mobile:pb-[96px]! border-t border-t-line pt-[56px] pb-[40px] px-[100px] bg-bg-2">
      <div className={cn(container, 'tablet:grid-cols-[1.4fr_1fr_1fr]! mobile:grid-cols-1! mobile:gap-[22px]! grid grid-cols-[1.25fr_1fr_0.9fr_0.8fr_1.35fr] gap-[28px] *:min-w-0')}>
        <Reveal as="div" variant="up" staggerIndex={0} className="flex flex-col gap-[14px]">
          <img
            src="/setu-logo.webp"
            alt="SETU — Where AI Connections Create Power"
            width={210}
            height={210}
            loading="lazy"
            decoding="async"
            className="w-[210px] h-[210px] rounded-[18px] object-contain bg-[#000] p-[8px] border border-line block"
          />
          <div className="text-[13px] text-sub leading-[1.7]">
            Where AI Connections Create Power.
            <br />
            A digital ecosystem by {COMPANY.name}
          </div>
          <div className="text-[12px] text-sub-2 leading-[1.7]">
            {COMPANY.address}
            <br />
            CIN:&nbsp;{COMPANY.cin}
            <br />
            GSTIN:&nbsp;{COMPANY.gstin}
          </div>
        </Reveal>

        {FOOTER_SECTIONS.map((section, i) => (
          <FooterColumn key={section.title} section={section} staggerIndex={i + 1} />
        ))}

        <Reveal as="div" variant="up" staggerIndex={FOOTER_SECTIONS.length + 1} className="flex flex-col gap-[10px] text-[13.5px] text-sub">
          <div className="font-bold text-ink mb-[4px]">Support</div>
          <a href={`mailto:${CONTACT.supportEmail}`} className="text-inherit hover:text-gold-2 [transition:color_0.2s] break-all">
            {CONTACT.supportEmail}
          </a>
          <a href={CONTACT.phoneNumberTel} className="text-inherit hover:text-gold-2 [transition:color_0.2s]">
            Phone {CONTACT.phoneNumberDisplay}
          </a>
          <div className="flex gap-[8px] mt-[6px]">
            <ExternalLink href={EXTERNAL_LINKS.userLogin} newTab={false} className={cn(link, tag, "whitespace-nowrap")}>
              User Login
            </ExternalLink>
            <ExternalLink href={EXTERNAL_LINKS.login} newTab={false} className={cn(link, tag, "whitespace-nowrap")}>
              App Login
            </ExternalLink>
          </div>
          <div className="mt-[18px]">
            <div className="text-[12px] text-sub-2 tracking-[0.04em] mb-[10px]">Also connect with us</div>
            <div className="flex gap-[10px]">
              {SOCIALS.map((s) => (
                <ExternalLink
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className={cn(link, s.bounceClass, 'motion-reduce:animate-none! w-[36px] h-[36px] rounded-[10px] bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] flex items-center justify-center [box-shadow:0_4px_12px_rgba(0,0,0,0.5)]')}
                >
                  <div
                    className={cn('w-[20px] h-[20px] flex items-center justify-center', s.iconClass)}
                  >
                    {s.icon}
                  </div>
                </ExternalLink>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className={cn(container, 'mt-[28px] pt-[20px] border-t border-t-line flex justify-between items-center flex-wrap gap-[10px]')}
      >
        <span className="text-[12px] text-sub-2">© 2026 {COMPANY.name} All rights reserved.</span>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="bg-none border-none p-0 text-[12px] text-sub-2 cursor-pointer underline underline-offset-[3px]"
        >
          Crafted by the SETU Dev Team ↗
        </button>
      </div>

      {modalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
          className="flex fixed inset-0 z-[100] bg-[rgba(0,0,0,0.7)] items-center justify-center p-[20px]"
        >
          <div className="bg-bg-2 border border-line-2 rounded-[18px] p-[32px] max-w-[360px] w-full relative [box-shadow:0_30px_70px_rgba(0,0,0,0.6)]">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              className="bg-none border-none p-0 absolute top-[16px] right-[18px] cursor-pointer text-sub-2 text-[18px]"
            >
              ✕
            </button>
            <div className="[font-family:'Playfair_Display',serif] text-[20px] font-bold text-gold-2 mb-[6px]">
              Design &amp; Development
            </div>
            <div className="text-[14px] text-ink font-semibold">SETU Development Team</div>
            <div className="text-[13px] text-sub mt-[10px] leading-[1.6]">
              Built in-house by the SETU technology team at {COMPANY.name}
            </div>
            <div className="mt-[16px] flex flex-col gap-[6px] text-[13px] text-sub">
              <span>✉️ {CONTACT.supportEmail}</span>
              <span>📞 {CONTACT.phoneNumberDisplay}</span>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
