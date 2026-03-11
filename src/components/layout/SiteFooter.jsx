import { useTranslation } from 'react-i18next';
import BrandWordmark from '../ui/BrandWordmark';

export default function SiteFooter({ onNavigate }) {
  const { t } = useTranslation();
  const solutionsMenu = t('megaMenu.solutions', { returnObjects: true });
  const functioningMenu = t('megaMenu.functioning', { returnObjects: true });
  const enterpriseMenu = t('megaMenu.enterprise', { returnObjects: true });

  const solutionSections = [
    ...(solutionsMenu?.groups || []).map((group) => ({
      label: group.title,
      links: (group.links || []).map((link) => ({
        label: link.label,
        page: link.page || 'case-studies',
      })),
    })),
    {
      label: t('nav.editorsApi'),
      links: [{ label: t('nav.editorsApi'), page: 'editors-api' }],
    },
    {
      label: 'Prévention & santé au travail',
      links: [{ label: 'Prévention & santé au travail', page: 'prevention-work-health' }],
    },
    {
      label: t('nav.pharmaResearch'),
      links: [{ label: t('nav.pharmaResearch'), page: 'case-studies' }],
    },
  ];

  const functioningLinks = (functioningMenu?.groups || [])
    .flatMap((group) => group?.links || [])
    .map((link) => ({ label: link.label, page: link.page || 'about' }));

  const partnershipLink =
    (enterpriseMenu?.groups || [])
      .flatMap((group) => group?.links || [])
      .find(
        (link) => link?.label && /partnership|partenariat/i.test(link.label)
      ) || null;

  const footerCol2Links = [
    // ...functioningLinks,
    ...(partnershipLink
      ? [
          {
            label: partnershipLink.label,
            page: partnershipLink.page || 'case-studies',
          },
        ]
      : []),
    { label: t('nav.security'), page: 'privacy' },
  ];

  const enterpriseBaseLinks = (enterpriseMenu?.groups?.[0]?.links || [])
    .filter((link) => !link.devOnly)
    .slice(0, 3)
    .map((link) => ({ label: link.label, page: link.page || 'about' }));

  const footerCol3PrimaryLinks = [
    ...enterpriseBaseLinks,
    { label: t('footer.contact'), page: 'contact' },
  ];

  const footerLegalLinks = [
    { label: t('footer.legalNotice'), page: 'legal-notice' },
    { label: t('footer.privacyPolicy'), page: 'privacy-policy' },
    { label: t('footer.cookies'), page: 'cookies-policy' },
  ];
  const solutionSplitIndex = Math.min(2, solutionSections.length);
  const solutionSectionsCol1 = solutionSections.slice(0, solutionSplitIndex);
  const solutionSectionsCol2 = solutionSections.slice(solutionSplitIndex);

  const linkClassName =
    'cursor-pointer text-[13px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]';

  return (
    <footer id="siteFooter" style={{ display: 'flex' }}>
      <div className="mx-auto flex w-full max-w-[var(--max)] flex-col gap-12">
        <div className="grid grid-cols-[minmax(220px,290px)_1fr] gap-8 max-[1180px]:grid-cols-1">
          <div className="flex self-start flex-col gap-[18px]">
            <div
              className="flex cursor-pointer items-center gap-[7px]"
              onClick={() => onNavigate('home')}
            >
              <BrandWordmark
                className="block h-[22px] w-auto"
                color="var(--logo-normal)"
                symbolColor="var(--logo-normal)"
                alt="Darkteam"
              />
            </div>
            <div>
              <p className="text-[22px] font-[var(--w500)] leading-[1.2] tracking-[var(--track-tight)]">
                {t('footer.tagline')}
              </p>
              <p className="mt-2 text-[13px] text-[var(--muted)]">
                {t('footer.subtitle')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[22px] self-start max-[920px]:grid-cols-2 max-[520px]:grid-cols-1">
            <div className="col-span-2 flex flex-col gap-[14px] max-[920px]:col-span-2 max-[520px]:col-span-1">
              <p className="border-b border-[var(--border)] pb-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">
                {t('footer.solutionsTitle')}
              </p>
              <div className="grid grid-cols-2 gap-x-7 gap-y-5 max-[560px]:grid-cols-1">
                <div className="flex flex-col gap-6">
                  {solutionSectionsCol1.map((sectionItem) => (
                    <div
                      key={sectionItem.label}
                      className="flex flex-col gap-[12px]"
                    >
                      <p className="pt-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[rgba(18,42,70,0.52)]">
                        {sectionItem.label}
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        {sectionItem.links.map((link) => (
                          <span
                            key={`${sectionItem.label}-${link.label}`}
                            className={linkClassName}
                            onClick={() => onNavigate(link.page)}
                          >
                            {link.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-6">
                  {solutionSectionsCol2.map((sectionItem) => (
                    <div
                      key={sectionItem.label}
                      className="flex flex-col gap-[12px]"
                    >
                      <p className="pt-1 text-[11px] font-[var(--w500)] uppercase tracking-[0.08em] text-[rgba(18,42,70,0.52)]">
                        {sectionItem.label}
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        {sectionItem.links.map((link) => (
                          <span
                            key={`${sectionItem.label}-${link.label}`}
                            className={linkClassName}
                            onClick={() => onNavigate(link.page)}
                          >
                            {link.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-[920px]:col-span-2 max-[520px]:col-span-1">
              <div className="grid grid-cols-1 gap-8 max-[920px]:grid-cols-2 max-[520px]:grid-cols-1">
                <div className="flex flex-col gap-[14px]">
                  <p className="border-b border-[var(--border)] pb-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">
                    {t('footer.resourcesTitle')}
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    {footerCol2Links.map((link) => (
                      <span
                        key={link.label}
                        className={linkClassName}
                        onClick={() => onNavigate(link.page)}
                      >
                        {link.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-[14px]">
                  <p className="border-b border-[var(--border)] pb-2 text-[13px] font-[var(--w500)] tracking-[var(--track)]">
                    {t('footer.companyTitle')}
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    {footerCol3PrimaryLinks.map((link) => (
                      <span
                        key={link.label}
                        className={linkClassName}
                        onClick={() => onNavigate(link.page)}
                      >
                        {link.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    {footerLegalLinks.map((link) => (
                      <span
                        key={link.label}
                        className={linkClassName}
                        onClick={() => onNavigate(link.page)}
                      >
                        {link.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-2 border-t border-[var(--border)] pt-5 max-[700px]:flex-col max-[700px]:items-start">
          <p className="text-[12px] text-[var(--muted)]">
            {t('footer.copyright')}
          </p>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('openCookiePreferences'));
              }
            }}
            className="cursor-pointer text-[12px] text-[var(--muted)] transition-colors duration-150 ease-out hover:text-[var(--color-primary)]"
          >
            {t('footer.manageCookies', 'Modifier mes préférences cookies')}
          </button>
        </div>
      </div>
    </footer>
  );
}
