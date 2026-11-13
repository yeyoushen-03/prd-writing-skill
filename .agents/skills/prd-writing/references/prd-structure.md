# PRD Structure

Use the user's existing template when available. Otherwise select only the sections useful to the product's scale and decision needs. The PRD owns the product problem, scope, requirements, and success / acceptance logic; it is not a detailed interaction spec or test script.

## Suggested Sections

1. **Summary and status:** product / change name, document status, owner if known, and concise intent.
2. **Context and problem:** current situation, user pain or opportunity, supporting evidence, and what remains unverified.
3. **Users and scenarios:** target users, relevant context, and the job or outcome they need.
4. **Goals and non-goals:** intended outcomes and explicit exclusions for this release.
5. **Scope:** in-scope capabilities, out-of-scope items, dependencies, and constraints.
6. **Requirements:** stable IDs, priority when known, trigger / preconditions, expected behavior, important boundaries, and acceptance criteria.
7. **Measures:** success metric, definition / calculation, population, observation window, and baseline or target only when known. Mark missing definitions rather than inventing them.
8. **Risks and open decisions:** unresolved questions, impact, and decision owner / due date only when known.

## Requirement Quality

- State observable behavior, not just a proposed feature or vague aspiration.
- Separate user value from the solution idea. Preserve the solution when it is an explicit decision; otherwise record it as a proposal or option.
- Clarify the actor, trigger, expected outcome, and relevant exception where they affect scope or acceptance.
- Keep non-functional requirements measurable when the user has provided a threshold or a decision is needed. Do not invent numerical targets.
- Use a stable ID such as `REQ-001`. IDs remain stable while requirements are traced to design rules and test cases.
- Label evidence quality accurately: confirmed data, qualitative signal, assumption, or unvalidated hypothesis.

## Tailoring

For a small change, combine sections and keep only the decision-critical requirements, boundaries, and acceptance criteria. For a complex or AI-enabled product, expand only the relevant areas, such as permissions, lifecycle states, privacy, safety, reliability, rollout, or evaluation. The other two deliverables remain required even when this PRD is concise.
