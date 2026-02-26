# Example 02 — Industrial Dashboard

## Goal
Design a high-density operations dashboard that remains scannable under pressure.

## Aesthetic Thesis
- Technical, robust, low-noise UI
- Clear status semantics (ok/warn/error)
- Minimal decorative effects; maximum readability

## Information Architecture
1. Top command bar
   - environment selector
   - global search
   - quick actions
2. KPI row
   - throughput, latency, errors, queue depth
3. Main grid
   - alerts panel
   - jobs/tasks table
   - timeline/activity feed
4. Detail drawer
   - selected item diagnostics and actions

## Interaction Requirements
- Sort/filter table with visible active filters
- Inline status chips with icon + text
- Keyboard shortcuts for common actions
- Acknowledge/resolve alert actions with confirmations

## State Handling
- Empty: no incidents found
- Loading: skeleton rows/cards
- Error: retry + diagnostic hint
- Success: transient confirmation toast

## Accessibility Requirements
- Color not sole carrier of meaning
- Focus rings on all interactive controls
- Announce critical alerts (aria-live where needed)

## Performance Guardrails
- Virtualize long lists/tables
- Debounce expensive filters/search
- Keep heavy charts lazy-mounted

## Acceptance Snapshot
- Can operators identify critical issue in one scan?
- Can they complete acknowledge flow in <= 2 clicks?
- Are error and recovery paths explicit?
