# Example 03 — Retro Instrument Panel

## Goal
Build a stylized retro control panel UI (synth/instrument vibe) without sacrificing usability.

## Aesthetic Thesis
- Retro-futuristic panel
- High-contrast labels and knobs
- Tasteful scanline/noise effects used sparingly

## Layout Structure
1. Header strip
   - mode label + profile/preset selector
2. Control matrix
   - knobs/sliders grouped by function
3. Signal display area
   - waveform/spectrum style visualization
4. Macro actions
   - save preset, randomize, reset

## Interaction Requirements
- Knob/slider interactions feel responsive
- Numeric value readouts update live
- Hover and active states are clear
- Reset actions require confirmation for destructive changes

## Motion Requirements
- Micro-animations for dial changes
- Avoid constant pulsing effects
- Respect reduced-motion preference

## Accessibility Requirements
- Keyboard adjustment for controls (arrow keys)
- Label every control explicitly
- Ensure contrast on retro color palette

## Performance Guardrails
- Canvas/SVG rendering throttled on inactive tabs
- Avoid heavy per-frame re-renders in React

## Acceptance Snapshot
- Can a user understand the control groups quickly?
- Are values and states readable on small screens?
- Is style distinctive without harming clarity?
