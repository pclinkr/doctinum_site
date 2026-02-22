'use client';

import { useTranslation } from 'react-i18next';
import {
  Sparkles,
  ShieldCheck,
  Bot,
  PhoneCall,
  Globe,
  BadgeCheck,
  CircleHelp,
  ChevronRight
} from 'lucide-react';
import Button from '../../../src/components/ui/Button';
import Badge from '../../../src/components/ui/Badge';
import Card from '../../../src/components/ui/Card';
import TextInput from '../../../src/components/ui/TextInput';
import TextArea from '../../../src/components/ui/TextArea';
import Accordion from '../../../src/components/ui/Accordion';
import BrandIcon from '../../../src/components/ui/BrandIcon';

const styleguideFaqItems = [
  {
    question: 'How do I change brand colors globally?',
    answer: 'Update color tokens in src/theme/tokens.css and semantic aliases in src/theme/semantic.css.'
  },
  {
    question: 'Where do I manage H1/H2 typography?',
    answer: 'Adjust --font-size-h1/h2 and related line-height/letter-spacing tokens in src/theme/tokens.css.'
  },
  {
    question: 'How do I add a new button style?',
    answer: 'Create a new semantic variant in src/theme/components.css and expose it in src/components/ui/Button.jsx.'
  }
];

const colorTokens = [
  { label: 'Page Background', variable: '--bg-page' },
  { label: 'Surface', variable: '--bg-surface' },
  { label: 'Surface Alt', variable: '--bg-white' },
  { label: 'Primary Text', variable: '--text-primary' },
  { label: 'Muted Text', variable: '--text-muted' },
  { label: 'Primary Action', variable: '--action-primary-bg' },
  { label: 'Primary Action Text', variable: '--action-primary-fg' },
  { label: 'Border', variable: '--border-default' }
];

const gradientTokens = [
  { label: 'Voice Phone Glow', variable: '--gradient-voice-phone-glow' },
  { label: 'Voice Avatar', variable: '--gradient-voice-avatar-base' },
  { label: 'Surface Medical Premium', variable: '--gradient-surface-medical-premium' },
  { label: 'Surface Dots', variable: '--gradient-surface-dots' },
  { label: 'Problem Surface', variable: '--gradient-problem-surface' },
  { label: 'Accent Warm', variable: '--gradient-accent-warm' },
  { label: 'Overlay Top', variable: '--gradient-overlay-top' },
  { label: 'Nav Dynamic Fade', variable: '--gradient-nav-fade-dynamic' },
  { label: 'Nav Mask Soft', variable: '--gradient-nav-mask-soft' },
  { label: 'Nav Mask Strong', variable: '--gradient-nav-mask-strong' },
  { label: 'Marquee Rail', variable: '--gradient-marquee-rail' },
  { label: 'Marquee Fade Left', variable: '--gradient-marquee-fade-left' },
  { label: 'Marquee Fade Right', variable: '--gradient-marquee-fade-right' }
];

const iconItems = [
  { label: 'Sparkles', Icon: Sparkles },
  { label: 'Shield', Icon: ShieldCheck },
  { label: 'Bot', Icon: Bot },
  { label: 'Phone', Icon: PhoneCall },
  { label: 'Globe', Icon: Globe },
  { label: 'Badge', Icon: BadgeCheck },
  { label: 'Help', Icon: CircleHelp },
  { label: 'Arrow', Icon: ChevronRight },
  { label: 'Brand', Icon: BrandIcon }
];

function SectionBlock({ title, description, children }) {
  return (
    <section style={{ marginBottom: '34px' }}>
      <Card style={{ padding: '24px' }}>
        <div style={{ marginBottom: '18px', display: 'grid', gap: '8px' }}>
          <h2>{title}</h2>
          {description ? (
            <p style={{ color: 'var(--text-muted)', maxWidth: '70ch' }}>{description}</p>
          ) : null}
        </div>
        {children}
      </Card>
    </section>
  );
}

export default function StyleguidePage() {
  const { i18n } = useTranslation();

  return (
    <main style={{ paddingTop: 'calc(var(--layout-nav-h) + 48px)', paddingInline: '64px', paddingBottom: '72px', maxWidth: '1200px', marginInline: 'auto' }}>
      <section style={{ marginBottom: '34px' }}>
        <Badge>Design System</Badge>
        <h1  style={{ marginTop: '16px' }}>Style Guide</h1>
        <p  style={{ color: 'var(--text-muted)', maxWidth: '68ch', marginTop: '12px' }}>
          This page centralizes reusable UI components and typography scales. Current locale: <strong>{i18n.resolvedLanguage || i18n.language}</strong>.
        </p>
      </section>

      <SectionBlock
        title="Typography"
        description="Global heading and text styles controlled by design tokens in src/theme/tokens.css."
      >
        <div style={{ display: 'grid', gap: '16px' }}>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <p>Body text. The quick brown fox jumps over the lazy dog.</p>
          <p className="ds-text-label">Label text</p>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Theme Rules"
        description="Short conventions to keep the codebase centralized and maintainable."
      >
        <ul style={{ display: 'grid', gap: '10px', paddingLeft: '20px' }}>
          <li>Use semantic tokens first (`--text-*`, `--border-*`, `--action-*`) in new code.</li>
          <li>Use native tags for typography (`h1..h4`, `p`) and avoid duplicating text classes.</li>
          <li>Use DS components for micro UI (`Button`, `Card`, `TextInput`, `TextArea`, `Accordion`).</li>
          <li>Use Tailwind mostly for layout and spacing; keep animations in `main.css`.</li>
          <li>Treat legacy aliases in `main.css` as compatibility only for progressive migration.</li>
        </ul>
      </SectionBlock>

      <SectionBlock
        title="Colors"
        description="Semantic tokens used across surfaces, text, actions, and borders."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {colorTokens.map((token) => (
            <div key={token.variable} style={{ border: '1px solid var(--border-default)', borderRadius: '12px', padding: '10px' }}>
              <div style={{ height: '64px', borderRadius: '10px', background: `var(${token.variable})`, border: '1px solid var(--border-default)' }} />
              <p style={{ marginTop: '10px', fontSize: '13px', fontWeight: 500 }}>{token.label}</p>
              <p style={{ marginTop: '4px', fontSize: '12px', color: 'var(--text-muted)' }}>{token.variable}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title="Gradients"
        description="Gradient tokens centralized in src/theme/gradients.css."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          {gradientTokens.map((token) => (
            <div key={token.variable} style={{ border: '1px solid var(--border-default)', borderRadius: '12px', padding: '10px' }}>
              <div style={{ height: '74px', borderRadius: '10px', background: `var(${token.variable})`, border: '1px solid var(--border-default)' }} />
              <p style={{ marginTop: '10px', fontSize: '13px', fontWeight: 500 }}>{token.label}</p>
              <p style={{ marginTop: '4px', fontSize: '12px', color: 'var(--text-muted)' }}>{token.variable}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title="Buttons"
        description="Primary actions, secondary actions, and large CTA variants."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="light">Light</Button>
          <Button variant="primary" size="lg">Primary Large</Button>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Badges"
        description="Compact contextual labels for content categories and status."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <Badge>Default</Badge>
          <Badge>Product</Badge>
          <Badge>Soon</Badge>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Cards"
        description="Unified surface style for feature cards, content cards, and metric blocks."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
          <Card style={{ padding: '20px' }}>
            <h3>Feature Card</h3>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>Reusable card with semantic tokens.</p>
          </Card>
          <Card style={{ padding: '20px' }}>
            <h3>Content Card</h3>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>Use Card for consistent surfaces and radius.</p>
          </Card>
          <Card style={{ padding: '20px' }}>
            <h3>Stat Card</h3>
            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>Edit tokens once, update all cards.</p>
          </Card>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Form Controls"
        description="Text inputs and textarea with consistent radius, borders, and focus states."
      >
        <Card style={{ padding: '20px', display: 'grid', gap: '14px' }}>
          <label className="form-label">Name</label>
          <TextInput placeholder="Your full name" />
          <label className="form-label">Email</label>
          <TextInput type="email" placeholder="you@company.com" />
          <label className="form-label">Message</label>
          <TextArea placeholder="Tell us about your project..." />
          <div>
            <Button variant="primary">Submit</Button>
          </div>
        </Card>
      </SectionBlock>

      <SectionBlock
        title="Icons"
        description="Icon style examples for nav, cards, actions, and brand markers."
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' }}>
          {iconItems.map(({ label, Icon }) => (
            <div key={label} style={{ border: '1px solid var(--border-default)', borderRadius: '12px', padding: '12px', display: 'grid', placeItems: 'center', gap: '10px' }}>
              <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--bg-surface)', display: 'grid', placeItems: 'center', border: '1px solid var(--border-default)' }}>
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title="Accordion"
        description="Reusable collapsible disclosure content with smooth open/close motion."
      >
        <Accordion items={styleguideFaqItems} />
      </SectionBlock>
    </main>
  );
}
