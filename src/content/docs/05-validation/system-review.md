---
title: System Review
description: Analyze divergence between plans and implementations to evolve your agentic coding system over time.
sidebar:
  order: 3
---

## Overview

System review is **not** code review. Code review finds bugs in code; system review finds bugs in your AI coding workflow. By analyzing divergence between structured plans and actual implementations, you identify opportunities to improve your rules, commands, and templates.

This is the most powerful part of validation—systematizing the improvement of your system itself.

## Why System Review Matters

After multiple PIV loops, you'll notice patterns:
- Certain issues keep recurring
- The AI misunderstands specific constraints
- Some validations fail repeatedly

These patterns reveal problems in your system, not just the code. System review helps you:
- Identify why divergence happens
- Update your system to prevent it
- Continuously improve your workflow

:::tip[High Leverage]
Fixing a bug fixes one problem. Evolving your system prevents entire categories of problems in all future PIV loops.
:::

## The Divergence Analysis Process

System review analyzes **divergence**—differences between what you planned and what was implemented.

**Not all divergence is bad:**
- AI found a better approach during implementation
- Plan assumed something that didn't exist
- AI recognized a constraint the plan missed

**Most divergence is problematic:**
- AI ignored constraints in the plan
- AI created new architecture instead of following existing
- AI skipped validation steps
- AI introduced inconsistent patterns

The goal is to understand **why** divergence happened and fix the root cause.

## The Two Commands

System review requires two commands that work together:

### 1. Execution Report Command

Run immediately after implementation, before any validation or commits:

```markdown title=".claude/commands/execution-report.md"
# Execution Report: Reflect on Implementation

## Context
You've just finished implementing a feature.
Before moving on, reflect on what you implemented.

## Process
Reference the plan from execute command arguments.
Document what happened during implementation.

## Output
Save to `.agents/reports/[feature]-execution.md`:

### Plan File
[Path to structured plan]

### Files Added
- [List files created]

### Files Modified
- [List files changed]

### Validation Results
- Unit tests: [pass/fail count]
- Integration tests: [pass/fail count]
- Linting: [issues fixed]

### What Went Well
- [Positive observations]

### Challenges Encountered
- [Problems hit, workarounds used]

### Divergences from Plan
- [Any deviations, why they happened]
```

**Key insight:** Run this in the same context window as implementation. The AI has full memory of what it did and why.

### 2. System Review Command

Run in a new context with the execution report and plan:

```markdown title=".claude/commands/system-review.md"
# System Review: Analyze for Process Improvements

## Core Principle
System review is NOT code review.
We're looking for bugs in the PROCESS, not bugs in the code.

## Input
1. Planning command: @.claude/commands/plan.md
2. Execute command: @.claude/commands/execute.md
3. Structured plan: $1 (first argument)
4. Execution report: $2 (second argument)

## Process

### 1. Understand Planned Approach
Read the structured plan in detail:
- What was supposed to be built?
- What constraints were specified?
- What validation was required?

### 2. Understand What Happened
Read the execution report:
- What challenges occurred?
- What workarounds were used?
- What diverged from plan?

### 3. Analyze Each Divergence
For each divergence, classify as:
- GOOD: AI found a better approach
- BAD: AI ignored constraints or conventions

### 4. Trace Root Causes
For bad divergences, identify why:
- Was the plan unclear? → Update planning command
- Was context missing? → Add to global rules or on-demand context
- Was validation missing? → Update execute command

### 5. Generate Recommendations
What should change in:
- Global rules (CLAUDE.md)
- Planning command
- Execute command
- On-demand context

## Output
Save to `.agents/system-reviews/[date]-review.md`:

### Alignment Score
[X/10] - Overall adherence to plan

### Good Divergences
- [Divergence]: Why it was an improvement

### Bad Divergences
- [Divergence]: Root cause analysis

### Recommendations
#### Global Rules Updates
- [Specific changes to make]

#### Planning Command Updates
- [Specific changes to make]

#### Execute Command Updates
- [Specific changes to make]
```

## Actioning on Recommendations

After system review, selectively implement recommendations:

:::caution[Don't Over-Engineer]
LLMs love to recommend things. Be selective. Only update your system for patterns that:
- Occur repeatedly (not one-off issues)
- Apply to future work (not project-specific)
- Are high-impact (worth the maintenance)
:::

**Example:** If the system review recommends 10 changes:
- Pick 2-3 that address real patterns
- Ignore overly specific suggestions
- Ignore low-impact changes

Then ask the AI to make those specific changes to your commands and rules.

## When to Run System Review

System review is optional and high-leverage. Run it:
- After a few PIV loops on a new project
- When you notice repeated issues
- After a particularly problematic implementation
- Periodically (weekly, monthly) on active projects

**Don't run it:**
- After every PIV loop (overhead)
- On trivial changes
- When the system is already working well

## Quick Reference

### System Review Flow

```
Implementation Complete
         ↓
  /execution-report (same context)
         ↓
      /commit
         ↓
    /clear (new context)
         ↓
  /system-review plan.md report.md
         ↓
    Review recommendations
         ↓
  Selectively update system
```

### What You're Looking For

| Signal | Indicates | Action |
|--------|-----------|--------|
| AI ignores constraints | Plan unclear | Clarify planning command |
| Missing context | Global rules gaps | Add to CLAUDE.md |
| Repeated validation failures | Execute issues | Update execute command |
| Architecture drift | Layer 1 gaps | Update on-demand context |

### Root Cause Categories

- **Plan unclear** → Update planning command
- **Context missing** → Add to global rules or guides
- **Validation missing** → Update execute command
- **Pattern not documented** → Add to on-demand context

### Remember

- System review ≠ code review
- Find bugs in process, not bugs in code
- Run execution report immediately after implementation
- Be selective with recommendations
- Evolve system for patterns, not one-offs
