# Example 01 — Editorial Landing

## Goal
Create a premium editorial landing page for a fashion/social product where the first 5 seconds communicate identity and value.

## Aesthetic Thesis
- Dark cinematic base
- Strong typographic hero
- Controlled accent color (single primary accent)
- Subtle grain/glass surfaces

## Page Structure
1. Hero
   - headline with clear product promise
   - short supporting copy
   - primary CTA + secondary CTA
2. Social proof strip
   - logos/testimonials/metrics
3. Feature trio
   - visual cards with concise benefits
4. Signature section
   - a distinctive motif (motion/text treatment)
5. Footer CTA

## Interaction Requirements
- Buttons: hover, active, focus-visible states
- Hero content reveal with staggered motion
- Card hover lift <= 4px
- Reduced-motion fallback

## Accessibility Requirements
- Logical heading order (h1/h2/h3)
- AA contrast on all text
- Keyboard navigable CTAs
- Icon buttons include accessible labels

## Performance Guardrails
- Optimize hero media
- Avoid heavy JS animation libs unless necessary
- Prefer CSS transitions/animations

## Acceptance Snapshot
- Can a user understand product + next step in <3 seconds?
- Is there one clear primary action above the fold?
- Does the page still feel premium with animations disabled?
