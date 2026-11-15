# Product Design Document Structure

Translate the approved PRD into a user-facing product behavior model. This document explains how users move through in-scope work and how the product responds. It complements, rather than repeats, the PRD.

Do not imply that visual mockups, final copy, technical architecture, APIs, schemas, or implementation choices exist unless the user supplied or approved them. Record missing design decisions as open items and explain the affected behavior.

When visual UI direction is explicitly in scope, consult the visual design research procedure in [visual-design-research.md](visual-design-research.md). Keep visual inspiration separate from functional requirements: references can inform presentation, but cannot establish new product behavior.

## Suggested Sections

1. **Design summary and source:** product / change name, status, and links to PRD requirements.
2. **Principles and constraints:** only principles that affect the current behavior or trade-offs.
3. **Actors and permissions:** roles, access, and allowed / denied actions where relevant.
4. **User flows:** entry point, steps, decision points, completion, and exit paths.
5. **Screens or interaction surfaces:** purpose, key information, primary action, secondary actions, and navigation when applicable. For non-UI services, describe the equivalent interaction surface.
6. **States and transitions:** initial, in-progress, success, failure, empty, loading, pending, or other relevant states; state who or what can cause a transition.
7. **Rules and edge cases:** validation, limits, conflicts, retries, cancellation, permissions, timeouts, and recovery behavior as applicable.
8. **Content and accessibility:** meaningful messages, error guidance, keyboard / assistive support, localization, or other constraints when relevant.
9. **Open design decisions:** unresolved behavior and its impact; do not use blank headings as a substitute.

## Traceability

Assign stable design rule IDs such as `DES-001` when useful, and link them to the originating `REQ-*` requirements. Every in-scope requirement should be represented by one or more design rules, flows, states, or an explicit note that the design decision remains open. A design choice must not introduce unapproved product scope.

For workflows with multiple states, a compact state table may help:

| Current state | Trigger / actor | Product response | Next state | Related requirement |
| --- | --- | --- | --- | --- |

Use a table only when it improves comparison; a short ordered flow is clearer for simple behavior.
