'use client';

import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import Button from '../../ui/Button';
import { ASSETS_BASE, SILK } from '../../../constants/homeStory';
import { drawSilkPaths } from '../../../lib/sceneFrame';

/**
 * Clôture de la page: le champ nacré du récit, ses voiles de soie et la sphère
 * de Clara avec sa vidéo — mais en MISE EN PAGE ORDINAIRE.
 *
 * Le récit positionne ses éléments en pixels dans un repère 1920x1080 mis à
 * l'échelle: c'est ce qui permet à une timeline de viser des coordonnées
 * fixes. Une section de fin de page n'a pas ce besoin, et hériter de ce repère
 * y faisait se chevaucher le titre, la sphère et les boutons. Ici tout est
 * dans le flux: une colonne centrée, des marges, des rembourrages.
 *
 * Du décor on ne reprend donc que ce qui garde un sens hors timeline: le fond,
 * les voiles et la sphère avec ses boucles ambiantes.
 */
export default function ShowcaseInviteSection({ onNavigate }) {
  const { t } = useTranslation();
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const sel = (selector) => root.querySelector(selector);
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    /* Voiles de soie: le tracé dépend du temps, redessiné à chaque frame. En
       mouvement réduit on le dessine une fois et on s'arrête. */
    const silkPaths = Array.from(root.querySelectorAll('[data-silk] path'));
    drawSilkPaths(silkPaths, SILK, 0, 1.05);
    const tickSilk = () =>
      drawSilkPaths(silkPaths, SILK, gsap.ticker.time, 1.05);
    if (!prefersReducedMotion) gsap.ticker.add(tickSilk);

    const context = gsap.context(() => {
      if (prefersReducedMotion) return;
      gsap.to('[data-orb-float]', {
        y: 9,
        duration: 3.6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
      gsap.to('.clara-ring', {
        scale: 1.22,
        opacity: 0,
        duration: 2.8,
        repeat: -1,
        ease: 'power1.out',
        stagger: 0.9,
        startAt: { scale: 0.92, opacity: 0.34 },
      });
    }, root);

    /* La vidéo: le son n'est autorisé qu'après un geste, le clic EST ce geste.
       Un second clic arrête. */
    const orb = sel('[data-orb]');
    const video = sel('[data-orb-video]');
    const playButton = sel('[data-orb-play]');
    const label = playButton?.querySelector('.lbl');
    const abortController = new AbortController();
    const listenerOptions = { signal: abortController.signal };

    const setLabel = (isPlaying) => {
      if (label) {
        label.textContent = isPlaying
          ? t('sections.homeStory.finale.stop')
          : t('sections.homeStory.finale.play');
      }
    };
    const stop = () => {
      video?.pause();
      orb?.classList.remove('playing');
      setLabel(false);
    };
    const toggle = () => {
      if (!video) return;
      if (video.paused) {
        video.muted = false;
        video
          .play()
          .then(() => {
            orb?.classList.add('playing');
            setLabel(true);
          })
          .catch(stop);
      } else {
        stop();
      }
    };

    orb?.addEventListener('click', toggle, listenerOptions);
    playButton?.addEventListener(
      'click',
      (event) => {
        event.stopPropagation();
        toggle();
      },
      listenerOptions
    );
    video?.addEventListener(
      'ended',
      () => {
        stop();
        video.currentTime = 0;
      },
      listenerOptions
    );
    setLabel(false);

    return () => {
      abortController.abort();
      gsap.ticker.remove(tickSilk);
      context.revert();
      stop();
    };
  }, [t]);

  return (
    <section
      ref={rootRef}
      // `home-story` n'apporte ici que les jetons et l'habillage de la sphère;
      // aucune classe de repère (`stage`, `ui`, `finale`) n'est reprise.
      className="home-story relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[image:var(--gradient-story-field)] px-[clamp(20px,5vw,48px)] py-[clamp(40px,5vw,72px)]"
      aria-labelledby="showcase-invite-title"
    >
      <svg
        className="silk silk--invite"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="invite-silkblur"
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <linearGradient id="invite-silkgrad" x1="0" y1="0" x2="1" y2="0.4">
            <stop className="g-silk-b" offset="0" stopOpacity="0" />
            <stop className="g-silk-a" offset="0.2" />
            <stop className="g-silk-b" offset="0.52" />
            <stop className="g-silk-a" offset="0.8" />
            <stop className="g-silk-b" offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g filter="url(#invite-silkblur)" data-silk>
          <path opacity="1" />
          <path opacity=".8" />
          <path opacity=".62" />
          <path opacity=".52" />
          <path opacity=".38" />
        </g>
      </svg>
      <div className="vignette" aria-hidden="true" />

      <div className="relative z-[2] mx-auto flex max-w-[860px] flex-col items-center text-center">
        {/* La sphère porte sa commande de lecture EN DESSOUS d'elle, en
            absolu: d'où la marge basse, qui lui réserve la place. */}
        <div className="invite-orb mb-[clamp(44px,5vw,66px)]">
          <div className="orb-float" data-orb-float>
            <div className="orb live" data-orb>
              <div className="orb-halo" />
              <div className="orb-core" />
              <div className="aura" aria-hidden="true">
                <span className="aura-band b1" />
                <span className="aura-band b2" />
              </div>
              <span className="clara-ring r1" />
              <span className="clara-ring r2" />
              <span className="clara-ring r3" />
              <img
                className="orb-img"
                src={`${ASSETS_BASE}/orbAvatar.webp`}
                alt={t('sections.homeStory.scenes.orb')}
                width="1100"
                height="1100"
                loading="lazy"
              />
              <video
                className="orb-video"
                data-orb-video
                playsInline
                preload="none"
                src={`${ASSETS_BASE}/clara.mp4`}
              />
              <button type="button" className="orb-play" data-orb-play>
                <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
                <svg className="i-stop" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="7" y="6" width="4" height="12" rx="1" />
                  <rect x="13" y="6" width="4" height="12" rx="1" />
                </svg>
                <span className="lbl">
                  {t('sections.homeStory.finale.play')}
                </span>
              </button>
            </div>
          </div>
        </div>

        <h2
          id="showcase-invite-title"
          className="mb-4 max-w-[30ch] font-serif text-[clamp(1.55rem,2.9vw,2.5rem)] font-[600] leading-[1.14] tracking-[-0.02em] text-[var(--color-text)] [text-wrap:balance]"
        >
          {t('sections.showcase.invite.title')}
        </h2>

        <p className="mb-8 max-w-[52ch] text-[clamp(14.5px,1.3vw,17px)] leading-[1.65] text-[var(--color-muted)]">
          {t('sections.showcase.invite.lede')}
        </p>

        <Button size="lg" onClick={() => onNavigate?.('demo')}>
          {t('sections.showcase.invite.cta')}
        </Button>
      </div>
    </section>
  );
}
