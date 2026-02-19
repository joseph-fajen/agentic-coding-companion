---
title: Evolving Your System
description: Systematically identify and implement improvements to your agentic coding workflow using meta reasoning.
sidebar:
  order: 1
---

## Overview

System evolution is the process of improving your AI coding workflow based on observed patterns. When you encounter issues during PIV loops, you apply **meta reasoning** to identify what part of your system allowed the issue, then update that component to prevent recurrence.

## The Meta Reasoning Approach

Meta reasoning means stepping back from the immediate problem to analyze the system that produced it.

**Instead of:**
> "This code is wrong. Fix it."

**Ask:**
> "Why did this happen? What part of my system allowed this? How can I prevent it in the future?"

### Example: Plans Too Long

**Problem:** Your structured plan came out at 1,700 lines—way too long for reliable implementation.

**Meta reasoning prompt:**
```
This plan is way too long. It needs to be more concise.
Apply some meta reasoning here. Don't fix the problem yet.
Help me understand why the plan is so long and how I can
adjust the plan-feature command to avoid this in the future.
```

**Result:** AI analyzes your planning command and suggests adding a hard constraint like "Plan must be between 500-700 lines."

**System evolution:** Add the constraint to your planning command. Now all future plans will be appropriately sized.

## What to Evolve

### Global Rules (CLAUDE.md)

Update when the AI repeatedly ignores conventions.

**Trigger:** AI creates new architecture instead of following existing patterns.

**Evolution:** Add explicit pattern to global rules:

```markdown
## Architecture Patterns
When creating new tools, follow the existing pattern in `/tools/`.
Always use the service layer, not direct tool functions.
```

### Planning Commands

Update when planning produces incomplete or incorrect output.

**Trigger:** Plans miss important context or include irrelevant details.

**Evolution:**
```markdown
## Research Validation
Before creating the structured plan:
1. Read any reports generated during vibe planning
2. Validate research reports are complete
3. Confirm all assumptions are documented
```

### Execute Commands

Update when implementation drifts from the plan.

**Trigger:** Implementation ignores plan constraints.

**Evolution:**
```markdown
## Hard Constraints
- Plan must be between 500-700 lines (reject if longer)
- Read the ENTIRE plan before starting (don't skim)
- Follow task order exactly
```

### On-Demand Context

Update when specific task types consistently have issues.

**Trigger:** Every time you build tools, token streaming is broken.

**Evolution:** Create `reference/streaming-guide.md` with correct patterns and reference it in your tool-building command.

## The Evolution Process

### 1. Identify the Issue

Something went wrong in your PIV loop:
- Plan was too verbose
- Implementation missed a constraint
- Validation didn't catch an error

### 2. Apply Meta Reasoning

Ask your AI coding assistant to help analyze:
```
Apply meta reasoning. Don't fix it yet.
Look at my commands, my rules, my reference guides.
What part of my system allowed this issue?
What should I change to prevent this going forward?
```

### 3. Evaluate Suggestions

LLMs tend to over-engineer. Be selective:
- **Accept:** Patterns that will apply broadly
- **Reject:** One-off fixes or overly specific changes
- **Simplify:** Complex solutions that could be simpler

### 4. Implement Changes

Update the relevant part of your system:
- Edit global rules
- Modify commands
- Add on-demand context

### 5. Commit the Evolved System

Create a save state so you can reference the evolution:
```
git add .
git commit -m "Evolve system: Add plan length constraint"
```

### 6. Validate on Next PIV Loop

The next time you use the evolved component, verify the fix works. If not, iterate again.

## Leveraging Save States

Save states (commits) enable powerful evolution patterns:

### Retry with Evolved System

1. Hit an issue during implementation
2. Evolve your system to address the root cause
3. Revert to the plan commit
4. Retry implementation with the improved system

### Compare Before/After

When debugging system issues, compare current output against previous versions to identify what changed.

### Branch for Experiments

Test system changes on a branch before committing to main. If the evolution doesn't help, discard it.

## Common Evolution Patterns

| Problem | Evolution |
|---------|-----------|
| Plans too long | Add line count constraint |
| Missing validations | Add verification step |
| Wrong architecture | Document correct pattern in rules |
| Repeated research | Create reference guide |
| Incomplete context | Add to on-demand guides |
| Ignored constraints | Make constraints explicit in execute command |

## Quick Reference

### Meta Reasoning Prompts

```
# For planning issues
This plan is [problem]. Apply meta reasoning.
What should I change in my plan-feature command?

# For implementation issues
The implementation [problem]. Apply meta reasoning.
Look at my commands and rules. What allowed this?

# For validation issues
My validation missed [issue]. Apply meta reasoning.
How can I evolve my validate command or global rules?
```

### Evolution Checklist

- Identify the issue clearly
- Apply meta reasoning (don't just fix)
- Get AI recommendations
- Be selective (reject over-engineering)
- Update appropriate system component
- Commit with descriptive message
- Validate on next PIV loop

### System Components to Evolve

| Component | File Location |
|-----------|---------------|
| Global Rules | `CLAUDE.md` or `agents.md` |
| Plan Command | `.claude/commands/plan.md` |
| Execute Command | `.claude/commands/execute.md` |
| On-Demand Context | `.agents/reference/` or `guides/` |
| PRD | `PRD.md` or `.agents/prd.md` |

### Remember

- Meta reasoning asks "why" before "how to fix"
- Every issue is a chance to improve your system
- Be selective—LLMs over-engineer
- Save states enable retry and comparison
- Evolution compounds: systems get better over time
