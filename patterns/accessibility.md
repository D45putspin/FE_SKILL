# Accessibility (WCAG 2.2 AA-Oriented)

## Non-negotiables
- Semantic landmarks and heading hierarchy
- Full keyboard navigation
- Visible `:focus-visible` on all interactives
- Text/control contrast at WCAG AA minimum
- Reduced-motion support

## Component Contracts
### Dialog/Modal
- Focus trap while open
- Escape closes dialog
- Focus restored to trigger on close
- `aria-modal="true"` and labelled title

### Tabs
- Arrow key navigation between tabs
- Active tab has `aria-selected`
- Panel relationship via `aria-controls`

### Menus/Dropdowns
- Enter/Space opens
- Arrow keys move items
- Escape closes and restores focus

### Forms
- Inputs linked to labels
- Errors use `aria-invalid` + `aria-describedby`
- Validation messages are clear and actionable

### Icon-Only Controls
- Must include accessible name (`aria-label`)

## Testing Protocol
1. Keyboard-only walkthrough
2. Screen reader smoke test (NVDA/VoiceOver)
3. Contrast scan
4. Lighthouse + axe pass

## Fail Conditions
- Missing focus style
- Unreachable control by keyboard
- Color-only status meaning
- Form errors not announced/linked
