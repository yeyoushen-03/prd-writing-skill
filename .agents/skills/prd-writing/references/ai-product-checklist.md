# AI Product Checklist

Load this reference only when AI capability materially affects product behavior, user outcomes, risk, or acceptance. Apply relevant requirements, design rules, and tests across the full document set; do not assume a particular model, vendor, architecture, or autonomy level.

## PRD

- Define the user need and the AI-assisted task, including what is in and out of the capability boundary.
- Specify relevant input / output constraints, quality expectations, latency or availability needs, and how a meaningful outcome is recognized. Mark unknown metrics and thresholds as open decisions.
- Identify data sources, authorization / privacy constraints, retention requirements, and risks only to the extent established or needing a decision.
- State the required human review, correction, override, escalation, or fallback behavior where it affects product requirements.

## Product Design

- Show where AI enters the user flow and how generated or inferred content is presented.
- Define user confirmation, editing, retry, feedback, escalation, or manual fallback behavior where applicable.
- Describe visible states for unavailable, low-confidence, invalid, unsafe, delayed, or failed results only when relevant; do not invent thresholds or promises.
- Make the user's authority and the system's authority clear, especially before consequential or externally visible actions.

## Test Document

- Link evaluation cases to AI-related requirement and design IDs.
- Cover representative inputs, expected behavior, failure / fallback behavior, and human-control paths as applicable.
- Specify evaluation data, sampling, metrics, thresholds, and release gates only when provided or explicitly decided. Otherwise name the decision needed before these checks can be finalized.
- Include privacy, security, harmful-output, bias, robustness, or monitoring tests only where relevant to the product and available evidence.

## Unknowns

Do not fabricate model selection, accuracy claims, confidence thresholds, consent status, legal conclusions, retention periods, or evaluation results. Clearly separate known facts, hypotheses, and decisions required. An unresolved AI decision must remain consistent across the PRD, design document, and test document.
