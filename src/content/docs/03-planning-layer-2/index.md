---
title: Planning (Layer 2)
description: Task-level planning that you do for every feature - breaking down work, creating structured plans, and preparing for implementation.
sidebar:
  order: 0
---

Layer 2 planning happens **for every feature or task**. Unlike Layer 1 (done once, updated rarely), Layer 2 is where you create specific implementation plans before each PIV loop iteration. This is the bridge between your high-level scope and actual code.

## The Layer 2 Workflow

Layer 2 planning follows a consistent pattern:

```
1. Prime → Catch up coding assistant on codebase
2. Vibe Plan → Explore what to build through conversation
3. Structured Plan → Create detailed, AI-optimized plan
4. Review & Iterate → Validate plan before execution
```

:::tip[Commands Automate This]
Each step above becomes a command in your system. Instead of typing out instructions each time, you run `/prime`, then `/plan`. Commands are the core of Layer 2 planning.
:::

## Topics in This Stage

- **[Task Breakdown](/agentic-coding-companion/03-planning-layer-2/task-breakdown/)** - Decompose features into implementable tasks through vibe planning
- **[Planning Commands](/agentic-coding-companion/03-planning-layer-2/planning-commands/)** - Commands to automate your planning workflow

## Key Principles

### Start Every PIV Loop with Priming

When you start a new conversation, your AI coding assistant knows nothing about your codebase. The prime command catches it up by analyzing your project structure, reading key files, and understanding your architecture.

```
/prime
```

Skip priming only if you're truly starting from scratch with no existing code.

### Move from Vibe to Structure

After priming, explore what to build through **vibe planning**—unstructured conversation where you and the AI get on the same page:

- What feature are you building?
- What files need to change?
- What approach makes sense?
- What assumptions should you eliminate?

Then formalize this into a **structured plan** that the AI can execute systematically.

### Keep Iterations Small

Each PIV loop should tackle a small, focused piece of work. If your plan feels too ambitious:
- Break it into multiple PIV loops
- Focus on the minimum viable feature
- Add complexity in subsequent iterations

:::note[Why Small Iterations?]
Small iterations are more reliable. Your system plus small scope leads to incredible results, even when building something advanced over many PIV loops.
:::

### Validate Plans Before Execution

Before running `/execute`, review the structured plan:
- Does it understand the feature correctly?
- Are the tasks in the right order?
- Is the plan concise (not bloated)?
- Does validation match your requirements?

If the plan is too long, ask the AI to make it more concise. If something is wrong, iterate before execution.

## Commands vs. Manual Prompting

In Layer 2, you graduate from manual prompting to commands:

| Manual (Module 2) | Systematized (Modules 4+) |
|-------------------|---------------------------|
| Type out research request | `/prime` |
| Describe plan structure | `/plan` |
| Explain how to execute | `/execute` |
| Request commit | `/commit` |

Commands make your workflow repeatable, shareable, and improvable.

## Quick Reference

### Layer 2 Checklist

- [ ] Run `/prime` to load project context
- [ ] Explore feature through vibe planning
- [ ] Create structured plan with `/plan`
- [ ] Review plan for correctness and conciseness
- [ ] Iterate on plan if needed
- [ ] Commit plan as save state before execution

### When to Use Layer 2

- Every new feature implementation
- Every bug fix (with RCA → implement fix workflow)
- Every refactoring task
- Any change that touches multiple files

### Remember

- Layer 2 = done per feature, created fresh each time
- Prime → Vibe Plan → Structured Plan → Execute
- Commands replace manual prompting
- Small iterations = reliable results
- Validate plans before execution
