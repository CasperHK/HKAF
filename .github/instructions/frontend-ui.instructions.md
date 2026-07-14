---
description: "Use when working on HKAF frontend UI, pages, layouts, styling, or components. Enforce a consistent Tailgrids and Tailwind-based design system, strong component architecture, responsive behavior, and Nuxt SSR-safe patterns."
applyTo: "src/frontend/**/*.{vue,ts,js,css,scss}"
---

# HKAF Frontend UI Instructions

Use Tailgrids and Tailwind as the default UI system for the HKAF frontend.

## UI consistency

- Prefer Tailgrids-style sections, cards, forms, buttons, navigation, and content layouts before inventing one-off UI patterns.
- Keep spacing, border radius, shadows, typography, and interaction states consistent across pages.
- Reuse existing visual patterns for headers, cards, lists, filters, forms, and action areas instead of redesigning each screen independently.
- Avoid ad hoc inline styles and page-specific visual hacks when the same result can be achieved with shared components or shared utility classes.

## Component architecture

- Build UI in reusable components instead of large page-level templates.
- Keep pages thin and focused on composition, routing, and data loading.
- Extract repeated UI sections into `components/` as soon as the pattern appears more than once or is likely to recur.
- Keep presentational components separate from data-fetching and business logic where practical.
- Prefer clear component boundaries such as layout components, section components, content cards, form controls, and shared feedback states.

## Tailgrids and Tailwind usage

- Use Tailwind utility classes as the primary styling mechanism.
- Use Tailgrids conventions for layout rhythm and responsive composition so new screens feel like part of one product.
- Prefer extending shared classes or shared wrapper components over writing large custom CSS blocks.
- If custom CSS is necessary, keep it small, local, and justified.

## Nuxt and SSR safety

- Preserve Nuxt SSR assumptions.
- Do not access `window`, `document`, `localStorage`, or other browser-only APIs outside client-safe boundaries such as `onMounted` or `ClientOnly`.
- Prefer Nuxt-native patterns for async data, routing, and page composition.

## Content and UX

- Prefer Traditional Chinese for user-facing copy unless there is a clear product reason not to.
- Keep academic UI tone clear, structured, and professional rather than decorative or trendy.
- Maintain responsive behavior across mobile and desktop, especially for navigation, forms, and discussion content.

## Implementation preference

- When adding a new frontend feature, first look for the smallest reusable component structure that fits it.
- When updating existing UI, move it toward the shared Tailgrids-based system instead of introducing another visual language.