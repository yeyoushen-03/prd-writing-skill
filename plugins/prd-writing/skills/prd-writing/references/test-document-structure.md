# Test Document Structure

Define how the PRD requirements and product design rules will be verified. The test document is a usable verification artifact, not merely a list of quality goals. Keep testability aligned with the confidence of the underlying decisions.

## Suggested Sections

1. **Purpose and scope:** included / excluded behavior, target release, and relevant platforms or environments when known.
2. **Test basis:** PRD and design document versions, assumptions, dependencies, and test data needs.
3. **Coverage map:** requirement IDs to design rule IDs and test case IDs.
4. **Scenarios / cases:** for each applicable case, identify:
   - Case ID and linked `REQ-*` / `DES-*` IDs.
   - Preconditions and actor / permissions.
   - Input, trigger, or actions.
   - Expected observable result.
   - Priority or test type when useful.
5. **Cross-cutting checks:** applicable compatibility, accessibility, security, privacy, reliability, performance, analytics, or operational checks.
6. **Known gaps and exit criteria:** decisions that block a deterministic expected result, required evidence, and release gates only when defined.

## Test Design Rules

- Cover the main success path and decision-relevant alternate, boundary, permission, and failure paths. Scale breadth to risk and complexity.
- Expected results must be observable and trace to an approved requirement or an explicitly labeled assumption. Do not turn an unresolved product decision into a definitive pass / fail rule.
- For an unresolved rule, document the scenario and mark its oracle as blocked by the named decision; state what must be decided before the test can be finalized.
- Do not claim coverage merely because a requirement is mentioned. Include a runnable action / input and a result that can be judged.
- Include non-functional or AI-specific evaluation only when relevant; do not invent thresholds, datasets, sample sizes, or go-live gates.

## Traceability Matrix

Use a compact matrix when it helps reviewers see coverage:

| Requirement | Design rule / flow | Test case(s) | Status / open decision |
| --- | --- | --- | --- |

Every in-scope requirement must map to applicable design treatment and verification. If behavior is intentionally not testable yet, name the unresolved decision and its impact rather than leaving a blank cell.
