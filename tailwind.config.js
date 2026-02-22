/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors from tokens.css and semantic.css
      colors: {
        // Semantic colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        
        // Original color tokens
        "color-bg": "var(--color-bg)",
        "color-surface": "var(--color-surface)",
        "color-surface-2": "var(--color-surface-2)",
        "color-text": "var(--color-text)",
        "color-white": "var(--color-white)",
        "color-muted": "var(--color-muted)",
        "color-subtle": "var(--color-subtle)",
        "color-border": "var(--color-border)",
        "color-border-strong": "var(--color-border-strong)",
        "color-primary": "var(--color-primary)",
        "color-primary-contrast": "var(--color-primary-contrast)",
        
        // Alpha overlays
        "ink-00": "var(--ink-00)",
        "ink-04": "var(--ink-04)",
        "ink-05": "var(--ink-05)",
        "ink-06": "var(--ink-06)",
        "ink-07": "var(--ink-07)",
        "ink-08": "var(--ink-08)",
        "ink-10": "var(--ink-10)",
        "ink-14": "var(--ink-14)",
        "ink-15": "var(--ink-15)",
        "ink-16": "var(--ink-16)",
        "ink-20": "var(--ink-20)",
        "ink-22": "var(--ink-22)",
        "ink-25": "var(--ink-25)",
        "ink-28": "var(--ink-28)",
        "ink-30": "var(--ink-30)",
        "ink-34": "var(--ink-34)",
        "ink-35": "var(--ink-35)",
        "ink-40": "var(--ink-40)",
        "ink-50": "var(--ink-50)",
        "ink-60": "var(--ink-60)",
        "ink-62": "var(--ink-62)",
        "ink-65": "var(--ink-65)",
        "ink-68": "var(--ink-68)",
        "ink-72": "var(--ink-72)",
        "ink-95": "var(--ink-95)",
        "ink-96": "var(--ink-96)",
        "ink-98": "var(--ink-98)",
        
        // White overlays
        "white-14": "var(--white-14)",
        "white-15": "var(--white-15)",
        "white-20": "var(--white-20)",
        "white-28": "var(--white-28)",
        "white-38": "var(--white-38)",
        "white-40": "var(--white-40)",
        "white-46": "var(--white-46)",
        "white-50": "var(--white-50)",
        "white-54": "var(--white-54)",
        "white-55": "var(--white-55)",
        "white-65": "var(--white-65)",
        "white-70": "var(--white-70)",
        "white-72": "var(--white-72)",
        "white-75": "var(--white-75)",
        "white-78": "var(--white-78)",
        "white-84": "var(--white-84)",
        "white-90": "var(--white-90)",
        "white-92": "var(--white-92)",
        "white-96": "var(--white-96)",
        
        // Background overlays
        "bg-overlay-00": "var(--bg-overlay-00)",
        "bg-overlay-03": "var(--bg-overlay-03)",
        "bg-overlay-10": "var(--bg-overlay-10)",
        "bg-overlay-28": "var(--bg-overlay-28)",
        "bg-overlay-34": "var(--bg-overlay-34)",
        "bg-overlay-58": "var(--bg-overlay-58)",
        "bg-overlay-62": "var(--bg-overlay-62)",
        "bg-overlay-80": "var(--bg-overlay-80)",
        "bg-overlay-82": "var(--bg-overlay-82)",
        "bg-overlay-92": "var(--bg-overlay-92)",
        "bg-overlay-94": "var(--bg-overlay-94)",
        "bg-overlay-95": "var(--bg-overlay-95)",
      },
      
      // Typography
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      fontSize: {
        "body": "var(--font-size-body)",
        "h1": "var(--font-size-h1)",
        "h2": "var(--font-size-h2)",
        "h3": "var(--font-size-h3)",
        "h4": "var(--font-size-h4)",
        "nav-link": "var(--font-size-nav-link)",
      },
      fontWeight: {
        "regular": "var(--font-weight-regular)",
        "medium": "var(--font-weight-medium)",
        "h1": "var(--font-weight-h1)",
        "h2": "var(--font-weight-h2)",
        "h3": "var(--font-weight-h3)",
        "h4": "var(--font-weight-h4)",
        "nav-link": "var(--font-weight-nav-link)",
      },
      lineHeight: {
        "body": "var(--line-height-body)",
        "h1": "var(--line-height-h1)",
        "h2": "var(--line-height-h2)",
        "h3": "var(--line-height-h3)",
        "h4": "var(--line-height-h4)",
        "nav-link": "var(--line-height-nav-link)",
      },
      letterSpacing: {
        "body": "var(--letter-spacing-body)",
        "h1": "var(--letter-spacing-h1)",
        "h2": "var(--letter-spacing-h2)",
        "h3": "var(--letter-spacing-h3)",
        "h4": "var(--letter-spacing-h4)",
        "nav-link": "var(--letter-spacing-nav-link)",
      },
      
      // Spacing
      spacing: {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "7": "var(--space-7)",
        "8": "var(--space-8)",
        "9": "var(--space-9)",
        "10": "var(--space-10)",
      },
      
      // Border radius
      borderRadius: {
        "sm": "var(--radius-sm)",
        "md": "var(--radius-md)",
        "lg": "var(--radius-lg)",
        "pill": "var(--radius-pill)",
        "DEFAULT": "var(--radius)",
      },
      
      // Animation and transitions
      transitionDuration: {
        "fast": "var(--duration-fast)",
        "mid": "var(--duration-mid)",
      },
      transitionTimingFunction: {
        "spring": "var(--ease-spring)",
        "out": "var(--ease-out)",
      },
      
      // Layout
      maxWidth: {
        "layout": "var(--layout-max)",
      },
      
      // Custom keyframes
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fadeIn": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fadeUp": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fadeIn": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "medicalLineIn": {
          "0%": { opacity: "0", transform: "translate3d(0,10px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        // Loading screen animations
        "lsContentIntro": {
          from: { opacity: "0", transform: "translate3d(0,-46px,0)" },
          "65%": { opacity: "1" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "curtainLift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-104%)" },
        },
        "lsContentExit": {
          "0%,72%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "lsLogoOut": {
          "0%": { opacity: "1", transform: "translate3d(0,0,0) scale(1)" },
          "62%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translate3d(0,-120vh,0) scale(.92)" },
        },
        "lsBarOut": {
          "0%": { opacity: "1", transform: "translate3d(0,0,0)" },
          "56%": { opacity: ".95" },
          "100%": { opacity: "0", transform: "translate3d(0,-112vh,0)" },
        },
        "lsBar": {
          to: { width: "100%" },
        },
        // Page transition animations
        "pageLoaderReveal": {
          from: { opacity: "0", transform: "translate3d(0,36px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "pageRouteExit": {
          from: { opacity: "1", transform: "translate3d(0,0,0)" },
          to: { opacity: "0", transform: "translate3d(0,-56px,0)" },
        },
        "pageRouteEnter": {
          from: { opacity: "0", transform: "translate3d(0,52px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        // Medical animations
        "medicalWavePulse": {
          "0%": { opacity: "0", transform: "scale(.82)" },
          "24%": { opacity: ".4" },
          "100%": { opacity: "0", transform: "scale(1.42)" },
        },
        "slideHintFlow": {
          "0%": { opacity: ".12", transform: "translateX(-4px) rotate(45deg)" },
          "45%": { opacity: ".44" },
          "100%": { opacity: ".12", transform: "translateX(5px) rotate(45deg)" },
        },
        "lsPulse": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".45", transform: "scale(.93)" },
        },
        "callKnobBreath": {
          "0%,100%": { boxShadow: "0 9px 18px rgba(20,95,58,.22)" },
          "50%": { boxShadow: "0 14px 26px rgba(20,95,58,.38)" },
        },
        "barProg": {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeIn": "fadeIn 0.3s ease-out",
        "marquee": "marquee 20s linear infinite",
        "medicalLineIn": "medicalLineIn 0.5s ease-out",
        "fadeUp": "fadeUp 0.5s ease-out forwards",
        "none": "none",
        // Hero animations avec delays originaux
        "fadeUpPlatforms": "fadeUp 0.5s ease-out 2.2s both",
        "fadeUpHero": "fadeUp 0.6s ease-out 2.3s both",
        "fadeUpSub": "fadeUp 0.6s ease-out 2.4s both",
        "fadeUpCTA": "fadeUp 0.6s ease-out 2.5s both",
        // Loading screen animations
        "lsContentIntro": "lsContentIntro 0.82s cubic-bezier(.28,.02,.21,1) forwards",
        "curtainLift": "curtainLift 0.6s cubic-bezier(.28,.02,.21,1) forwards",
        "lsContentExit": "lsContentExit .82s cubic-bezier(.28,.02,.21,1) forwards",
        "lsLogoOut": "lsLogoOut .5s cubic-bezier(.3,.02,.2,1) forwards",
        "lsBarOut": "lsBarOut .64s cubic-bezier(.28,.02,.21,1) forwards",
        "lsBar": "lsBar 1.2s cubic-bezier(.28,.02,.21,1) forwards",
        // Page transition animations
        "pageLoaderReveal": "pageLoaderReveal .9s cubic-bezier(.22,.61,.36,1) .18s both",
        "pageRouteExit": "pageRouteExit .52s cubic-bezier(.22,.61,.36,1) both",
        "pageRouteEnter": "pageRouteEnter .62s cubic-bezier(.22,.61,.36,1) both",
        // Medical voice animations (originales)
        "fadeUpVoice": "fadeUp .5s var(--ease-out) .08s both",
        "fadeUpTitle": "fadeUp .52s var(--ease-out) .18s both",
        // Medical animations
        "medicalWavePulse": "medicalWavePulse 2.25s ease-out infinite",
        "slideHintFlow": "slideHintFlow 1s ease-in-out infinite",
        "callKnobBreath": "callKnobBreath 1.6s ease-in-out infinite",
        "lsPulse": "lsPulse 1.6s ease-in-out infinite",
        "lsBar": "lsBar 1.8s var(--ease-out) 0.1s forwards",
        "lsLogoOut": "lsLogoOut 0.4s ease-out forwards",
        "barProg": "barProg var(--sd,3s) ease-linear forwards",
        // Loading screen animations spécifiques
        "curtainLiftLong": "curtainLift 1.36s cubic-bezier(.19,1,.22,1) forwards",
        // Page transitions spécifiques
        "pageLoaderRevealFull": "pageLoaderReveal .9s cubic-bezier(.22,.61,.36,1) .18s both",
        "pageRouteExitFull": "pageRouteExit .52s cubic-bezier(.22,.61,.36,1) both",
        "pageRouteEnterFull": "pageRouteEnter .62s cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Plugin pour ajouter les utilitaires personnalisés
    function({ addUtilities }) {
      addUtilities({
        // Utilitaires pour éviter les classes arbitraires
        '.italic': {
          'font-style': 'italic',
        },
        '.direction-rtl': {
          'direction': 'rtl',
        },
        '.direction-ltr': {
          'direction': 'ltr',
        },
        '.stroke-linecap-round': {
          'stroke-linecap': 'round',
        },
        '.stroke-linejoin-round': {
          'stroke-linejoin': 'round',
        },
      })
    },
  ],
};

export default config;
