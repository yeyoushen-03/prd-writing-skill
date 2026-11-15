---
name: prd-writing
description: "Help product managers and cross-functional teams turn product ideas or existing requirement drafts into a complete, reviewable document set: PRD, product design document, and test document. Use when creating, clarifying, reviewing, or improving product requirements, including AI-enabled products."
---

# PRD Writing

Turn the user's product context into a coherent document set that teams can discuss, design, implement, and verify. Preserve user decisions and existing templates. Treat missing information explicitly; never invent product facts or silently decide unresolved trade-offs.

## Required Deliverables

Every completed workflow MUST include all three deliverables:

1. **PRD:** what and why; goals, users, scope, requirements, measures, and acceptance criteria.
2. **Product design document:** how users experience the in-scope behavior; flows, states, interactions, rules, and relevant edge cases.
3. **Test document:** how the requirements and design will be verified; scope, scenarios or cases, inputs / actions, and expected results.

Do not omit the design or test document because the user asked only for a PRD, supplied little context, or declined further questions. In those cases, complete all three using clearly labeled assumptions and open decisions. The documents may be separate files or clearly separated sections in one Markdown file, following the user's requested format and repository conventions. Do not substitute three duplicated summaries for three documents with distinct purposes.

## Workflow

1. Identify whether the user is starting from an idea, improving existing material, or resolving a specific requirement. Detect whether AI behavior materially affects the product. Reuse facts and decisions already provided; do not ask for them again.
2. For an interactive discovery workflow, clarify adaptively: ask one neutral, focused question at a time about the highest-impact uncertainty. Depending on the answer, probe the user's goal, real scenario, evidence, assumptions, boundaries, or trade-offs. Do not turn this into a fixed questionnaire or steer toward a preferred solution.
3. Stop asking when further answers are unlikely to change scope, priority, product behavior, or verification. Stop immediately if the user asks to proceed without questions, declines, or asks to stop. Drafting requests should not be blocked by low-risk unknowns.
4. Establish a shared requirements baseline. Draft the PRD first, then derive the product design document from it, then derive the test document from both. For existing material, preserve valid decisions and note material changes.
5. Use stable requirement IDs (for example, `REQ-001`) or equally clear references. Link each in-scope requirement to relevant design rule(s) and test case(s). Keep terminology, scope, assumptions, unresolved decisions, states, permissions, and acceptance logic consistent across all three documents. Design must not silently expand scope; tests must not assert behavior that has no approved requirement or explicitly labeled assumption.
6. If a decision is unresolved, still write the applicable parts of all three documents. Mark the open decision and its impact consistently. Test known behavior; identify any case whose expected result depends on the unresolved decision instead of fabricating an oracle.
7. Perform an internal adversarial quality pass across the complete document set. Look for contradictions, missing boundaries, unsupported claims, scope drift, untestable requirements, unhandled failure paths, and gaps in requirement-to-design-to-test coverage. Do not expose the review process, internal reasoning, checklist, or an “adversarial review” label. Surface only material conclusions as neutral, actionable risks or open decisions.
8. Before delivery, verify that all three documents are present, substantive, mutually consistent, and traceable. Then provide a concise delivery note with the artifact locations or section names, key assumptions, and unresolved decisions. Never claim a document is complete if it is only a placeholder.

## Reference Routing

- For a new or revised PRD, read [references/prd-structure.md](references/prd-structure.md).
- For the product design deliverable, read [references/product-design-structure.md](references/product-design-structure.md).
- When user-facing visual direction or interface styling is in scope, also read [references/visual-design-research.md](references/visual-design-research.md). Treat a style library as a set of distinct references, not as one universal template.
- For the test deliverable and traceability, read [references/test-document-structure.md](references/test-document-structure.md).
- If AI capability affects product outcomes, read [references/ai-product-checklist.md](references/ai-product-checklist.md). Apply relevant checks across all three documents; do not add irrelevant AI sections to a non-AI product.

## Delivery Rules

- Prefer the user's template and file format. If no format is specified, use Markdown and make the three deliverables easy to distinguish.
- Keep the clarification method implicit. Never name or explain it in user-facing questions, the PRD, product design document, test document, or delivery note; ask directly about the relevant product decision instead.
- Distinguish confirmed facts, user decisions, assumptions, recommendations, and open decisions. Do not disguise an assumption as a fact.
- Keep scope proportional to the product. Tailor detail to complexity rather than filling every possible heading.
- Do not invent visual mockups, technical architecture, APIs, data models, vendors, targets, legal conclusions, or operational commitments. Mark these as decisions needed only when relevant.
- When improving a draft, retain valid information, identify contradictions, and summarize significant changes without reproducing internal review notes.
- Keep hidden quality review hidden, but do not hide a risk or unresolved decision that materially affects user choice, implementation, safety, or testability.
