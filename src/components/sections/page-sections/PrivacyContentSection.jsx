import Container from '../../layout/Container';

export default function PrivacyContentSection() {
  return (
    <Container className="grid grid-cols-1 gap-0 pb-20 pt-[calc(var(--nav-h)+48px)]">
      <h1 className="rev mb-10">Privacy Policy</h1>
      <div className="rev flex max-w-[660px] flex-col gap-[18px] [&_a]:border-b [&_a]:border-[var(--border-mid)] [&_a]:text-[var(--color-primary)] [&_a]:transition-colors [&_a]:duration-150 [&_a]:ease-out hover:[&_a]:border-[var(--color-primary)] [&_p]:text-[var(--font-size-body)] [&_p]:leading-[1.8] [&_p]:tracking-[var(--letter-spacing-body)] [&_p]:text-[var(--muted)]">
        <p>
          Viral ("we," "our," or "us") respects your privacy and is committed to
          protecting your personal information. This policy outlines what we
          collect, how we use it, and your rights.
        </p>
        <p>
          When you visit our website or contact us, we may collect personal
          information you provide, such as your name, email address, company
          details, and any information submitted through forms or messages.
        </p>
        <p>
          We also collect basic usage data including your IP address, browser
          type, pages visited, and time spent on the site. Cookies and similar
          technologies help us improve your experience. We use this information
          to respond to inquiries, deliver support, optimise the site, send
          occasional updates or promotional content with your permission, and
          comply with legal obligations.
        </p>
        <p>
          We do not sell or rent your personal data. We may share it with
          trusted service providers who help us operate this website, such as
          hosting providers or email platforms.
        </p>
        <p>
          We may also share information when required by law or to protect our
          legal rights. You have the right to access the personal data we hold
          about you, request corrections, opt out of marketing emails, and
          request deletion of your data where legally applicable.
        </p>
        <p>
          To make a request, contact us at{' '}
          <a href="mailto:hello@doctinum.com">hello@doctinum.com</a>. We take
          reasonable steps to secure your data, but no online system is
          completely risk-free.
        </p>
        <p>
          By using this site, you accept the inherent risks of internet
          communication. This site may contain links to other websites. We are
          not responsible for the privacy practices or content of those external
          sites. We may update this policy from time to time. Please check this
          page for the latest version.
        </p>
      </div>
    </Container>
  );
}
