---
title: Iteration
description: Evolve your agentic coding system based on learnings - fix the system, not just the bugs.
sidebar:
  order: 0
---

Iteration is the meta-process of improving your AI coding workflow. When issues arise, the goal isn't just to fix the immediate problem—it's to evolve your system so the problem never recurs. Every mistake is an opportunity to make your system more reliable.

## Why Iteration Matters

Your system should get better over time. As you complete PIV loops:
- Global rules capture more of your conventions
- Commands become more refined
- On-demand context covers more patterns
- Planning produces better structured plans
- Implementation becomes more reliable

This continuous improvement compounds. After 10 PIV loops, your system should be significantly better than when you started.

## Topics in This Stage

- **[Evolving Your System](/agentic-coding-companion/06-iteration/evolving-your-system/)** - How to identify and implement system improvements

## Key Principles

### Every Mistake Is an Opportunity

When something goes wrong:
1. **Fix the immediate issue** - Get your code working
2. **Apply meta reasoning** - Why did this happen?
3. **Identify the root cause** - What part of your system allowed this?
4. **Evolve the system** - Update rules, commands, or templates
5. **Create a save state** - Commit the improved system

The immediate fix solves one problem. Evolving the system prevents an entire category of problems.

### Know What to Update

| Issue Type | Where to Look |
|------------|---------------|
| AI ignores conventions | Global rules (CLAUDE.md) |
| Planning misses context | Plan command or on-demand context |
| Implementation drifts | Execute command |
| Same bugs keep appearing | Validation or global rules |
| Layer 1 assumptions wrong | PRD or architecture docs |

### Use AI to Help Evolve

Ask your AI coding assistant to help identify system improvements:

```
This plan is way too long. Apply some meta reasoning here.
Why is the plan so long? How can I adjust my plan-feature
command to avoid this in the future?
```

The AI will analyze your system and recommend changes.

## The Evolution Cycle

```
PIV Loop Complete
       ↓
Issue Encountered
       ↓
Meta Reasoning: Why?
       ↓
Identify System Gap
       ↓
Update System (rules/commands/context)
       ↓
Commit Evolved System
       ↓
Next PIV Loop (benefits from improvement)
```

## Quick Reference

### When to Evolve Your System

- Same type of issue appears twice
- Planning produces incomplete or bloated output
- Implementation ignores documented conventions
- Validation misses issues repeatedly
- You explain the same thing in multiple conversations

### When NOT to Evolve

- One-off issues unlikely to recur
- Issues specific to a single project
- Low-impact problems not worth the maintenance
- Overly specific fixes (LLMs love to over-engineer)

### Remember

- Fix the system, not just the bug
- Use save states (commits) before and after changes
- Be selective—don't over-engineer
- Your system should compound in reliability
