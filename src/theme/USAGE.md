# Theme Usage (Single Source of Truth)

## Goal
Keep styling centralized, predictable, and DRY.

## Source of truth
- `src/theme/tokens.css`: raw design tokens (brand colors, typography scale, spacing, radius, motion).
- `src/theme/semantic.css`: semantic aliases and derived overlays (what UI means, not how it looks).
- `src/theme/gradients.css`: centralized gradient tokens used across major sections and components.
- `src/theme/typography.css`: global element typography (`body`, `h1..h4`, `p`) and a few non-redundant text utilities.
- `src/theme/components.css`: DS component contracts (`.ds-btn*`, `.ds-input`, `.ds-card`, `.ds-accordion*`, etc.).

## Usage rules
1. Prefer semantic tokens in new code (`--text-muted`, `--border-default`, `--action-primary-bg`) over legacy aliases.
2. Use native tags for typography:
   - headings with `h1..h4`
   - body copy with `p`
3. Use DS classes for micro-components:
   - buttons via `Button` (`.ds-btn*`)
   - inputs/textarea via `TextInput`/`TextArea`
   - cards via `Card`
4. Use Tailwind mainly for layout/spacing/composition in JSX.
5. Keep animation-specific CSS in `src/styles/main.css`.

## Legacy compatibility
`src/styles/main.css` still exposes legacy aliases (`--bg`, `--surface`, `--muted`, etc.) for existing code paths.
Treat them as compatibility layer and migrate gradually to semantic tokens.

## Practical migration order
1. Replace direct legacy aliases by semantic tokens in touched files.
2. Remove hardcoded typography values when the global element style already covers the case.
3. Delete CSS rules only after all call sites are migrated.
