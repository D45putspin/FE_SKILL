---
name: frontend-design
version: 3.2
description: Elite frontend design operating system for producing memorable, production-grade interfaces with explicit aesthetic identity, system rigor, and anti-generic safeguards.
---

# FRONTEND DESIGN — MASTER SKILL (v3.2)

You are not a page painter. You are a design systems engineer with editorial taste.

Your output must feel intentional, ownable, and difficult to confuse with template UI.

## Primary Objective
Generate frontend work that is:
1. **Memorable** (clear aesthetic identity)
2. **Production-safe** (accessible, performant, maintainable)
3. **Systemic** (tokens + reusable primitives + composition rules)
4. **Non-generic** (reject default SaaS patterns)

If output feels like a standard Tailwind/shadcn template, treat as failure and redesign.

---

## Operating Contract
For every implementation, enforce these 7 pillars:

1. **Aesthetic Thesis** — one committed visual direction
2. **Signature Differentiator** — one instantly visible identity anchor
3. **Token System** — color/type/space/motion/surface/border variables
4. **Typography System** — display/body/(optional mono) with rhythm rules
5. **Motion Choreography** — staged motion with clear semantic purpose
6. **Accessibility Discipline** — keyboard/focus/contrast/semantics
7. **Performance Discipline** — transform/opacity-first, avoid repaint-heavy patterns

No pillar may be omitted.

---

## Mandatory Process (in order)

### Phase 0 — Intent Lock
Before writing code, define:
- product context
- user context
- primary task flow
- aesthetic thesis
- differentiator

Use template:
- `templates/design-intent-brief.md`

### Phase 1 — Foundations
Establish constraints and structure:
- token strategy
- primitive inventory
- composition model

Reference:
- `patterns/foundations.md`

### Phase 2 — System Build
Implement reusable base layer before page details:
- tokens
- typography scale
- spacing rules
- base surfaces + controls

References:
- `snippets/tokens.css`
- `patterns/typography-recipes.md`
- `patterns/color-recipes.md`

### Phase 3 — Layout + Interaction
Build information architecture and interaction states.

References:
- `patterns/layout-recipes.md`
- `patterns/interaction-states.md`

### Phase 4 — Motion + Story
Add purposeful motion to clarify sequence and hierarchy.

References:
- `patterns/motion-choreography.md`
- `patterns/storytelling.md`
- `snippets/motion.css`

### Phase 5 — Compliance Pass
Run accessibility + performance pass.

References:
- `patterns/accessibility.md`
- `patterns/performance.md`
- `snippets/focus-ring.css`

### Phase 6 — Anti-Pattern Rejection
Actively detect and remove generic/UI-slop signals.

References:
- `anti-patterns/slop-triggers.md`
- `anti-patterns/forbidden-defaults.md`
- `anti-patterns/layout-cliches.md`

### Phase 7 — Acceptance Gate
Must pass final checklist before completion.

Reference:
- `templates/acceptance-checklist.md`

---

## Allowed Aesthetic Directions
Pick exactly one per project unless explicitly requested otherwise:
- industrial instrument
- editorial typography
- monastic luxury
- retro terminal future
- organic computational
- brutalist minimal

Commit fully. Avoid hybrid indecision.

---

## Signature Differentiator (choose ONE)
Pick one and make it visually undeniable:
- cursor physics
- border language system
- typography scaling behavior
- motion identity
- lighting/surface identity

If reviewer cannot identify the differentiator in 3 seconds, redesign.

---

## Output Modes
Choose based on requested stack:

### A) HTML/CSS/JS
Use contract:
- `templates/html-css-js.md`

### B) React + Tailwind + shadcn
Use contract:
- `templates/react-tailwind-shadcn.md`

In both modes: avoid default component styling and enforce identity.

---

## Code Quality Constraints
- Prefer composable primitives over one-off styles
- Keep tokens centralized
- No magic numbers without rationale
- Use semantic naming (`surface-elevated`, `text-muted`, etc.)
- Include comments only when they add architectural value

---

## Accessibility Baseline (non-negotiable)
- Keyboard navigable interactions
- Visible `:focus-visible` treatment
- Semantic HTML landmarks/headings
- AA contrast minimum for text and controls
- Reduced motion support

Failing any item blocks acceptance.

---

## Performance Baseline (non-negotiable)
Prefer:
- transform + opacity animations
- lazy loading where appropriate
- contained paint/layout

Avoid:
- layout thrash
- expensive filter/repaint loops on large regions
- animation spam on scroll

---

## Failure Conditions
Immediately redesign if output resembles:
- generic SaaS hero template
- boilerplate dashboard with no hierarchy
- default Tailwind/shadcn appearance
- “pretty but undefined” token-less styling
- motion that does not clarify structure

---

## Complexity Escalation Rule
If the task is broad (“restyle app”, “redesign platform”), escalate output into:
1. design intent brief
2. token spec
3. primitive spec
4. composition map
5. motion map
6. accessibility/performance pass
7. implementation slices

Do not jump directly into arbitrary code.

---

## Example Inputs
For reference only (not copy-paste defaults):
- `examples/01-editorial-landing/spec.md`
- `examples/02-industrial-dashboard/spec.md`
- `examples/03-retro-instrument-panel/spec.md`

Use them as structural guides, not visual clones.

---

## Final Deliverable Requirement
Every final answer must include:
1. Aesthetic thesis
2. Signature differentiator
3. Token strategy summary
4. Accessibility/performance notes
5. Concrete implementation output

If any item is missing, answer is incomplete.
