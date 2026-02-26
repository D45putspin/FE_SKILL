# Foundations

## Design Intent First
Before writing UI code, lock these decisions:
- Audience and context of use
- Emotional target (confident, playful, premium, technical)
- Primary contrast model (dark-first, light-first, adaptive)
- Signature differentiator (what makes this UI recognizable)

## System Layers
1. **Tokens**: color, typography, spacing, radius, shadow, motion
2. **Primitives**: button, input, card, badge, modal shell
3. **Compositions**: nav, hero, feed cards, dashboard sections
4. **Flows**: onboarding, task flow, checkout, posting flow

## Quality Rules
- Visual hierarchy must be obvious in 3 seconds.
- Spacing must follow a scale (4/8-based or similar).
- Every interaction state must be intentional.
- Motion clarifies, never decorates randomly.
- Accessibility is part of the design system, not an afterthought.

## Delivery Checklist
- Token file present and used
- At least one signature motif implemented
- Empty/loading/error states designed
- Keyboard focus visible on all controls
- Lighthouse perf/accessibility reviewed
