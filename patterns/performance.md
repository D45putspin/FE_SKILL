# Performance (Measurable)

## Target Budgets (mid-tier mobile)
- LCP: **< 2.5s**
- INP: **< 200ms**
- CLS: **< 0.1**
- Initial JS (first route): **< 170KB gzip** (guideline)

## Engineering Tactics
- Route/component lazy loading
- Responsive image sizes + modern formats
- Font strategy: subset + `font-display: swap`
- Avoid layout thrash (read/write batching)
- Prefer transform/opacity for animation

## Profiling Workflow
1. Measure baseline with Lighthouse/Web Vitals
2. Simulate mid-tier mobile and throttled network
3. Identify largest paint/layout contributors
4. Fix highest-impact bottlenecks
5. Re-run metrics and record deltas

## Media-heavy Interface Rules
- Progressive image loading in feeds
- Skeletons for perceived performance
- Avoid autoplay heavy media by default

## Fail Conditions
- Decorative animation causes jank
- Unbounded image payloads
- No evidence of metric pass in review report
