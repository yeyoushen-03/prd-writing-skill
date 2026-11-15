# Visual Design Reference Research

Use this procedure only when the product design deliverable includes user-facing visual direction, interface styling, or screen-level presentation. It is not required for a workflow-only or non-visual product design document.

## Source Use

Refero Styles (<https://styles.refero.design/>) is a library of distinct, AI-readable design systems. Its home page is a discovery index, not a visual specification. A style entry can expose a `DESIGN.md` with color roles, typography, spacing, components, layout, and usage guidance. Inspect a specific style entry before deriving concrete rules.

1. Start with the user's reference URL or named product if provided. If the user only names Refero, search its library for styles relevant to the product domain, audience, interaction density, and desired tone.
2. Select one coherent primary reference. A secondary reference may be used for a specific pattern only when it does not conflict with the primary system. If equally plausible directions would materially change the result, ask one focused question or present a concise recommendation and its trade-off.
3. Inspect the selected entry's actual design guidance, not only its title or thumbnail. Extract applicable roles and patterns: palette roles, type hierarchy, spacing rhythm, layout, component treatments, states, and explicit do / don't rules.
4. Record the reference page and explain which principles are adapted, modified, or intentionally not used. Translate the reference into this product's context; do not copy logos, proprietary brand language, screenshots, or unrelated visual flourishes.
5. If a specific style page cannot be accessed, say so in the design document. Use only the information actually available and mark unverified visual decisions as open; do not fabricate tokens from a title or preview.

## What to Include in the Design Document

- **Reference:** style / product name and exact page link.
- **Adapted system:** color roles, typography, spacing / density, layout, and component rules that matter to the product. Quote exact values only when they are visible in the source and appropriate to carry over.
- **Product-specific adaptation:** what changes to fit the user's audience, task, accessibility needs, platform, and brand constraints.
- **Excluded elements:** source details that should not be carried over, with a short reason when useful.
- **Open visual decisions:** missing brand assets, platform constraints, accessibility targets, or unresolved style choices that affect implementation.

Do not use visual inspiration to infer or expand features, permissions, workflows, business rules, or acceptance criteria. Keep such decisions in the PRD and functional design sections, then trace them into tests as usual.
