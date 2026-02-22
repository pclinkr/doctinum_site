import '../src/theme/tokens.css';
import '../src/theme/semantic.css';
import '../src/theme/gradients.css';
import '../src/theme/components.css';
import '../src/styles/main.css';
import '../src/theme/typography.css';

export const metadata = {
  metadataBase: new URL('https://doctinum.example'),
  title: 'Doctinum',
  description: 'Creative growth partner.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
