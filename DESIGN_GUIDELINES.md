# Design Guidelines - Doctinum Website

## 🎨 Overview
Ce document définit les règles de design à suivre pour tout développement sur le site Doctinum. L'objectif est de maintenir une cohérence visuelle et technique à travers toutes les nouvelles fonctionnalités.

## 🎯 Principes Directeurs

### 1. **Approche Médicale Moderne**
- Design épuré, professionnel et digne de confiance
- Palette de couleurs claire et apaisante
- Typographie hiérarchisée et lisible

### 2. **Accessibilité**
- Contraste WCAG AA minimum
- Navigation intuitive
- Composants prédictibles

### 3. **Performance**
- Animations fluides et optimisées
- Code maintenable et réutilisable

---

## 🎨 Palette de Couleurs

### Couleurs Principales
```css
--color-bg: #ddecf9;          /* Fond principal bleu clair */
--color-surface: #ebf0f4;     /* Surfaces grises claires */
--color-white: #f5f6f7;       /* Blanc cassé */
--color-text: #0e1b29;        /* Texte principal bleu marine */
--color-primary: #0c243c;     /* Primaire bleu foncé */
```

### Couleurs Sémantiques
```css
--color-success: #23ac7e;     /* Succès vert */
--color-danger: #fe5f55;      /* Danger rouge corail */
--color-info: #969fe0;        /* Info bleu lavande */
--color-accent-1: #d8c8a8;    /* Accent 1 beige */
--color-accent-2: #d9a895;    /* Accent 2 rose poudré */
```

### Utilisation des Alpha Overlays
Privilégier les variables `--ink-*` pour les overlays de texte et `--white-*` pour les overlays de blanc :
```css
/* Texte subtil */
color: var(--ink-20);  /* 20% de texte primaire */

/* Overlay blanc */
background: var(--white-20);  /* 20% de blanc */
```

---

## 📝 Typographie

### Hiérarchie Typographique

#### Titres (Poppins)
```css
/* H1 - 72px, -4px letter-spacing, weight 500 */
font-family: 'Poppins', sans-serif;
font-size: var(--font-size-h1);
font-weight: var(--font-weight-h1);
letter-spacing: var(--letter-spacing-h1);

/* H2 - 52px, -0.055em letter-spacing, weight 500 */
font-family: 'Poppins', sans-serif;
font-size: var(--font-size-h2);
font-weight: var(--font-weight-h2);

/* H3 - 32px, -0.04em letter-spacing, weight 500 */
font-family: 'Poppins', sans-serif;
font-size: var(--font-size-h3);

/* H4 - 22px, -0.03em letter-spacing, weight 500 */
font-family: 'Poppins', sans-serif;
font-size: var(--font-size-h4);
```

#### Texte (Inter)
```css
/* Body - 20px, normal letter-spacing, weight 400 */
font-family: 'Inter', sans-serif;
font-size: var(--font-size-body);
font-weight: var(--font-weight-regular);
```

### Classes Utilitaires
```css
.ds-text-label     /* Labels: 12px, uppercase, tracking 0.06em */
.ds-text-lead      /* Texte lead: 24px, line-height 1.6 */
.ds-text-meta      /* Meta: 13px, line-height 1.55 */
```

---

## 🎯 Composants UI

### Boutons
Toujours utiliser le composant `Button.jsx` avec les variants appropriés :

```jsx
// Primaire (actions principales)
<Button variant="primary">Action Principale</Button>

// Secondaire (actions secondaires)
<Button variant="outline">Action Secondaire</Button>

// Hero (pages d'accueil)
<Button variant="heroPrimary">Hero Primaire</Button>
<Button variant="heroSecondary">Hero Secondaire</Button>

// Dark mode (sur fonds sombres)
<Button variant="darkPrimary">Dark Primaire</Button>
<Button variant="darkSecondary">Dark Secondaire</Button>
```

**Spécifications techniques :**
- Border radius: `rounded-full` (pill)
- Padding: `px-[22px] py-3`
- Font: Inter 14px medium
- Tracking: `var(--track)` (-0.04em)
- Hover: `scale-[0.98] opacity-90`

### Conteneurs
Utiliser systématiquement le composant `Container.jsx` :

```jsx
<Container>
  {/* Contenu */}
</Container>
```

**Spécifications :**
- Max-width: 1200px
- Padding horizontal: 16px (desktop), 8px (tablet), 5px (mobile)
- Margin: auto

---

## 📐 Espacement et Layout

### Système d'Espacement
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-7: 32px
--space-8: 40px
--space-9: 56px
--space-10: 64px
```

### Layout Grid
- Largeur max: 1200px (`var(--layout-max)`)
- Navigation height: 80px (`var(--layout-nav-h)`)

---

## 🎭 Animations et Transitions

### Durées
```css
--duration-fast: 180ms    /* Animations rapides */
--duration-mid: 380ms     /* Animations standards */
```

### Easing Functions
```css
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)  /* Spring naturel */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)        /* Sortie douce */
```

### Animations Prédéfinies
Utiliser les classes d'animation du config Tailwind :

```jsx
// Fade in avec translation
<div className="animate-fadeUp">...</div>

// Animations hero avec delays
<div className="animate-fadeUpHero">...</div>
<div className="animate-fadeUpSub">...</div>
<div className="animate-fadeUpCTA">...</div>

// Animations médicales
<div className="animate-medicalWavePulse">...</div>
```

---

## 🔧 Bordures et Coins

### Border Radius
```css
--radius-sm: 8px     /* Petits éléments */
--radius-md: 16px    /* Cards, boutons */
--radius-lg: 24px    /* Grandes surfaces */
--radius-pill: 100px /* Boutons pils */
```

### Bordures
```css
--border-default: var(--color-border)     /* 8% opacity */
--border-strong: var(--color-border-strong) /* 12% opacity */
```

---

## 📱 Responsive Design

### Breakpoints
- Mobile: `< 809px`
- Tablet: `809px - 1199px`
- Desktop: `> 1200px`

### Adaptations Typographiques Mobile
```css
/* Responsive automatique via typography.css */
h1: clamp(46px, 12vw, 64px)
h2: clamp(30px, 7.5vw, 42px)
h3: clamp(24px, 6vw, 30px)
h4: clamp(20px, 5vw, 24px)
```

---

## 🎨 Thème et Mode Sombre

### Variables CSS
Le site utilise un système de variables CSS avec support du mode sombre via `darkMode: 'class'`.

### Classes Sémantiques
Privilégier les variables sémantiques plutôt que les couleurs brutes :

```css
/* ✅ Bon */
background: var(--bg-surface);
color: var(--text-primary);
border-color: var(--border-default);

/* ❌ Éviter */
background: #ebf0f4;
color: #0e1b29;
border-color: rgba(12, 36, 60, 0.08);
```

---

## 🧩 Composants Réutilisables

### Structure des Dossiers
```
src/components/
├── ui/              # Composants UI de base (Button, Input, etc.)
├── layout/          # Composants de layout (Container, Header, etc.)
├── blocks/          # Blocks de contenu réutilisables
└── features/        # Composants spécifiques aux fonctionnalités
```

### Conventions de Nommage
- Composants: PascalCase (ex: `Button.jsx`, `Container.jsx`)
- Classes CSS: kebab-case avec préfixe `ds-` (ex: `ds-text-label`)
- Variables CSS: kebab-case (ex: `--color-primary`)

---

## ⚡ Performance et Optimisation

### Images
- Format: WebP de préférence
- Compression: Optimisée pour le web
- Lazy loading: Sur les images below-the-fold

### Animations
- Privilégier `transform` et `opacity` pour 60fps
- Éviter les animations sur `width`/`height`
- Utiliser `will-change` avec parcimonie

### CSS
- Utiliser les variables CSS du thème
- Éviter le CSS inline
- Privilégier les classes utilitaires Tailwind

---

## 🔍 Checklist de Développement

Avant de livrer une nouvelle fonctionnalité :

- [ ] Les couleurs utilisent les variables CSS du thème
- [ ] La typographie respecte la hiérarchie définie
- [ ] Les composants réutilisables sont utilisés
- [ ] Le responsive design est testé sur tous les breakpoints
- [ ] Les animations sont fluides et performantes
- [ ] L'accessibilité est respectée (contraste, navigation)
- [ ] Le code est maintenable et documenté

---

## 📚 Références

### Fichiers de Configuration
- `tailwind.config.js` - Configuration Tailwind
- `src/theme/tokens.css` - Variables de design
- `src/theme/semantic.css` - Variables sémantiques
- `src/theme/typography.css` - Typographie

### Composants de Référence
- `src/components/ui/Button.jsx` - Boutons
- `src/components/layout/Container.jsx` - Conteneurs
- `src/components/ui/` - Autres composants UI

---

*Mis à jour le 23 Mars 2026 - Doctinum Design System*
