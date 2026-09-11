'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ASSETS_BASE,
  BLOCKS,
  SCENES,
  TIMING,
} from '../../../constants/homeStory';
import { STORY_ICONS, CALENDAR_GLYPH } from './HomeStoryIcons';
import useHomeStoryMotion from '../../../hooks/useHomeStoryMotion';

/**
 * La scène d'accueil: un récit unique porté par une timeline GSAP, dont
 * ScrollTrigger met la tête de lecture en correspondance avec la hauteur de la
 * piste épinglée.
 *
 * TOUT le texte est rendu ici, par le serveur — titres d'actes, vingt-quatre
 * blocs, compteur, rail, finale. Dans le prototype, ces éléments étaient créés
 * en JavaScript et le HTML livré ne contenait rien d'indexable; c'est pourtant
 * là que vivent les mots-clés de la page. Le hook n'anime que du DOM existant,
 * il n'en fabrique plus.
 */
export default function HomeStorySection({ onNavigate }) {
  const { t } = useTranslation();
  const rootRef = useRef(null);

  const stat = t('sections.homeStory.stat', { returnObjects: true });
  const railSteps = t('sections.homeStory.rail.steps', { returnObjects: true });
  const actTitles = t('sections.homeStory.titles', { returnObjects: true });
  const finaleBadges = t('sections.homeStory.finale.badges', {
    returnObjects: true,
  });

  useHomeStoryMotion(rootRef);

  const asset = (name) => `${ASSETS_BASE}/${name}.webp`;

  const bookingButton = (labelKey, extraClass = '') => (
    <button
      type="button"
      className={`btn btn-primary ${extraClass}`.trim()}
      onClick={() => onNavigate?.('demo')}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {CALENDAR_GLYPH}
      </svg>
      <span className="lbl">{t(labelKey)}</span>
    </button>
  );

  return (
    <section
      className="home-story track"
      ref={rootRef}
      style={{ height: `calc(100vh + ${TIMING.trackVh}vh)` }}
      aria-label={t('sections.homeStory.rail.label')}
    >
      <div className="sticky">
        <div className="viewport" data-viewport>
          <div className="stage" data-stage>
            <div className="cam" data-cam>
              <div className="decor">
                <svg
                  className="silk"
                  viewBox="0 0 1920 1080"
                  aria-hidden="true"
                >
                  <defs>
                    <filter
                      id="story-silkblur"
                      x="-20%"
                      y="-40%"
                      width="140%"
                      height="180%"
                    >
                      <feGaussianBlur stdDeviation="15" />
                    </filter>
                    <linearGradient
                      id="story-silkgrad"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0.4"
                    >
                      <stop className="g-silk-b" offset="0" stopOpacity="0" />
                      <stop className="g-silk-a" offset="0.2" />
                      <stop className="g-silk-b" offset="0.52" />
                      <stop className="g-silk-a" offset="0.8" />
                      <stop className="g-silk-b" offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g filter="url(#story-silkblur)" data-silk>
                    <path opacity="1" />
                    <path opacity=".8" />
                    <path opacity=".62" />
                    <path opacity=".52" />
                    <path opacity=".38" />
                  </g>
                </svg>

                {/* Les deux couches d'une même photographie partagent
                    EXACTEMENT la même boîte et le même object-fit, donc le
                    même recadrage au pixel près. La découpe reste dessous en
                    permanence; c'est la photo complète qui s'efface par
                    dessus. */}
                {SCENES.map((scene) => (
                  <div
                    className="full"
                    key={`full-${scene.id}`}
                    data-full={scene.id}
                  >
                    <img
                      src={asset(scene.full)}
                      alt=""
                      width={scene.fullSize[0]}
                      height={scene.fullSize[1]}
                      /* Le premier décor est l'arrière-plan du premier écran:
                         il ne doit surtout pas être différé. */
                      loading={scene.id === 'office' ? 'eager' : 'lazy'}
                      fetchPriority={scene.id === 'office' ? 'high' : 'auto'}
                    />
                  </div>
                ))}

                {SCENES.map((scene) => (
                  <div
                    className="set"
                    key={`set-${scene.id}`}
                    data-set={scene.id}
                  >
                    <img
                      className="cut"
                      src={asset(scene.cut)}
                      alt={t(`sections.homeStory.scenes.${scene.id}`)}
                      width={scene.cutSize[0]}
                      height={scene.cutSize[1]}
                      loading={scene.id === 'office' ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>

              {/* Sujets: même échelle de recouvrement que le décor, mais sans
                  son recadrage latéral — la sphère reste centrée. */}
              <div className="subject">
                <div className="orb-slot" data-orb-slot>
                  <div className="orb-float" data-orb-float>
                    <div className="orb" data-orb>
                      <div className="orb-halo" data-orb-halo />
                      <div className="orb-core" data-orb-core />
                      {/* L'aura tourne d'elle-même: elle ne dépend pas du
                          défilement, la sphère reste vivante à l'arrêt. */}
                      <div className="aura" aria-hidden="true">
                        <span className="aura-band b1" />
                        <span className="aura-band b2" />
                      </div>
                      <span className="clara-ring r1" />
                      <span className="clara-ring r2" />
                      <span className="clara-ring r3" />
                      <img
                        className="orb-img"
                        src={asset('orbAvatar')}
                        alt={t('sections.homeStory.scenes.orb')}
                        width="1100"
                        height="1100"
                        loading="lazy"
                      />
                      {/* `preload="none"`: 2,6 Mo de vidéo n'ont rien à faire
                          dans le chargement d'une page qui ne la joue qu'au
                          tout dernier acte, et sur clic. */}
                      <video
                        className="orb-video"
                        data-orb-video
                        playsInline
                        preload="none"
                        src={`${ASSETS_BASE}/clara.mp4`}
                      />
                      <button
                        type="button"
                        className="orb-play"
                        data-orb-play
                        hidden
                      >
                        <svg
                          className="i-play"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5.5v13l11-6.5z" />
                        </svg>
                        <svg
                          className="i-stop"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
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
              </div>

              <div className="scrim" data-scrim />
            </div>
          </div>

          <div className="ui" data-ui>
            <div data-blocks>
              {BLOCKS.map((block) => (
                <div className="slot" key={block.k} data-slot={block.k}>
                  <div
                    className={['blk', block.sm ? 'sm' : '', block.tone || '']
                      .filter(Boolean)
                      .join(' ')}
                    data-block={block.k}
                  >
                    {block.face ? (
                      <span className="face">
                        <img
                          src={asset(block.face)}
                          alt=""
                          width="220"
                          height="220"
                          loading="lazy"
                        />
                      </span>
                    ) : (
                      <span className="ico">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          {STORY_ICONS[block.ico]}
                        </svg>
                      </span>
                    )}
                    <div>
                      <div className="t1">
                        {t(`sections.homeStory.blocks.${block.k}.t1`)}
                      </div>
                      {t(`sections.homeStory.blocks.${block.k}.t2`, {
                        defaultValue: '',
                      }) ? (
                        <div className="t2">
                          {t(`sections.homeStory.blocks.${block.k}.t2`)}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}

              <div className="stat" data-stat data-stat-target={stat.value}>
                <b data-stat-value>0</b>
                <em>{stat.caption}</em>
              </div>
            </div>

            <div className="titles">
              {actTitles.map((title, index) => (
                <div className="act" key={index} data-act={index + 1}>
                  <h2>{title}</h2>
                </div>
              ))}
            </div>

            <div className="hero" data-hero>
              <h1>
                {t('sections.homeStory.hero.titleBefore')}
                <em>{t('sections.homeStory.hero.titleAccent')}</em>
              </h1>
              <p>{t('sections.homeStory.hero.lede')}</p>
              <div className="actions">
                {bookingButton('sections.homeStory.hero.cta')}
              </div>
            </div>

            <div className="cue-in" data-cue>
              <span className="lbl">{t('sections.homeStory.hero.cue')}</span>
              <span className="mouse" aria-hidden="true">
                <i />
              </span>
              <span className="chevs" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 8l7 7 7-7" />
                </svg>
                <svg viewBox="0 0 24 24">
                  <path d="M5 8l7 7 7-7" />
                </svg>
              </span>
            </div>

            <div className="finale" data-finale>
              <h2>{t('sections.homeStory.finale.title')}</h2>
              <p>{t('sections.homeStory.finale.lede')}</p>
              <div className="actions">
                {bookingButton('sections.homeStory.finale.cta')}
              </div>
              <ul className="badges">
                {finaleBadges.map((badge, index) => (
                  <li key={index}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {index === 0 ? (
                        <>
                          <path d="M12 3l7 3v6c0 4.4-3 8.2-7 9-4-.8-7-4.6-7-9V6z" />
                          <path d="M9 12l2 2 4-4" />
                        </>
                      ) : index === 1 ? (
                        <>
                          <ellipse cx="12" cy="6" rx="8" ry="3" />
                          <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
                          <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                        </>
                      ) : (
                        <>
                          <rect x="4" y="4" width="16" height="16" rx="4" />
                          <path d="M9 10h6M9 14h4" />
                        </>
                      )}
                    </svg>
                    <span className="lbl">{badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <svg className="grain" aria-hidden="true">
            <filter id="story-grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="3"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#story-grain)" />
          </svg>
          <div className="vignette" aria-hidden="true" />
        </div>

        <nav
          className="rail"
          data-rail
          aria-label={t('sections.homeStory.rail.label')}
        >
          {railSteps.map((label, index) => (
            <button
              key={index}
              type="button"
              data-rail-step={index}
              aria-current={index === 0 ? 'true' : 'false'}
            >
              <span className="l">{label}</span>
              <span className="n">{String(index).padStart(2, '0')}</span>
              <i className="tick" aria-hidden="true" />
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
