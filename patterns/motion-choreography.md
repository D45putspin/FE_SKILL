# Motion Choreography

## Purpose of Motion
- Guide attention
- Confirm action result
- Explain layout/state change

## Timing
- Fast interactions: 120-180ms
- Medium transitions: 220-320ms
- Complex entrances: 360-500ms

## Easing
- Use one or two easing curves consistently.
- Prefer smooth ease-out for most UI transitions.

## Patterns
- Stagger list entrances lightly (40-80ms offset)
- Hover: subtle lift or glow, not both heavy
- Modal: fade backdrop + scale content
- Route transitions: avoid dramatic page wipes

## Reduced Motion
Respect `prefers-reduced-motion` and disable decorative animations.
