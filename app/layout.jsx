import Script from 'next/script';
import '../src/theme/tokens.css';
import '../src/theme/semantic.css';
import '../src/theme/gradients.css';
import '../src/theme/components.css';
import '../src/styles/main.css';
import '../src/theme/typography.css';

export const metadata = {
  metadataBase: new URL('https://doctinum.example'),
  title: 'Doctinum',
  description: 'Creative growth partner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="e0b7425b-b0ff-4e95-aa5d-a1ad24b4c596";
              
              // Attendre que le loader soit terminé avant d'afficher Crisp
              function initCrisp() {
                const loader = document.getElementById('ls');
                if (loader && loader.style.display !== 'none' && !loader.classList.contains('hide')) {
                  setTimeout(initCrisp, 100);
                  return;
                }
                
                // Loader terminé, initialiser Crisp
                (function(){
                  d=document;
                  s=d.createElement("script");
                  s.src="https://client.crisp.chat/l.js";
                  s.async=1;
                  d.getElementsByTagName("head")[0].appendChild(s);
                })();
              }
              
              initCrisp();
            `,
          }}
        />
      </body>
    </html>
  );
}
