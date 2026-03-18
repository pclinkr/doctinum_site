import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Badge from '../../ui/Badge';
import Container from '../../layout/Container';

export default function DemoBookingSection() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4">{t('demoPage.badge')}</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t('demoPage.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('demoPage.subtitle')}
          </p>
        </div>

        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/contact-doctinum/30-min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f5f6f7&text_color=0e1b29&primary_color=0c243c" 
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </Container>
  );
}
