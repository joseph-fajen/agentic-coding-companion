---
title: Task Breakdown
description: Decompose features into small, implementable tasks through vibe planning, then formalize into structured plans.
sidebar:
  order: 1
---

Task breakdown is the process of transforming a feature idea into an executable plan. It happens in two phases: **vibe planning** (exploration) and **structured planning** (formalization). Good task breakdown enables your AI coding assistant to work systematically without losing context.

## The Two Phases

| Phase | What Happens | Output |
|-------|--------------|--------|
| **Vibe Planning** | Unstructured conversation to explore approach | Shared understanding |
| **Structured Planning** | Formalize into detailed implementation plan | Plan document |

## Principles

### Start with Vibe Planning

Vibe planning is exploratory conversation before structure. You're getting on the same page with your AI coding assistant about what to build.

**Example vibe planning prompt:**
```
Take a look at @.agents/prd.md and help me think about what
I should build first.
```

The AI will read your PRD, analyze your codebase, and recommend an approach. This is where you:
- Disagree if the approach doesn't feel right
- Inject your own preferences and knowledge
- Ask clarifying questions
- Explore alternatives

:::tip[You Don't Need to Know]
You don't have to know exactly what to build first. Ask the AI to analyze your PRD and recommend the next feature. Explore together.
:::

### Inject Your Knowledge

During vibe planning, reduce AI assumptions by injecting your expertise:

```
I disagree with the approach. I want to start by building
the agent itself. Since we're using Pydantic AI, do deep
research on it first. I want to use Anthropic as a provider.
```

**Things to inject:**
- Technology preferences
- Architecture decisions
- Specific libraries to use
- Patterns from your codebase
- Reference documentation to read

### Keep Iterations Small

Each PIV loop should be a small, focused piece of work. If the AI proposes building too much:

```
What would you actually implement now to start? I want to
keep this simple - no tools yet, just the basic agent.
```

Small iterations are more reliable. You can always add complexity in subsequent PIV loops.

### Transition to Structure

When vibe planning is complete, create the structured plan:

```
/plan
```

The planning command takes your vibe planning conversation and produces a structured document the AI can execute.

## Structured Plan Template

Your structured plan should include:

```markdown title="Plan Structure"
# Feature: [Name]

## Feature Description
2-3 sentences describing what we're building.

## User Story
As a [user], I want [capability] so that [benefit].

## Problem Statement
What problem this solves and why it matters.

## Context References
### Files to Modify
- file1.py - why
- file2.py - why

### Files to Create
- new_file.py - purpose

### Documentation to Reference
- Links to relevant docs

## Implementation Plan
### Task 1: [Description]
- Subtask 1.1
- Subtask 1.2

### Task 2: [Description]
- Subtask 2.1
...

## Validation Strategy
### Testing Approach
- Unit tests for X
- Integration tests for Y

### Validation Commands
- Command 1: what it validates
- Command 2: what it validates
```

:::caution[Control Plan Length]
Plans can get too long. If your plan exceeds 500-700 lines for a typical feature, ask the AI to make it more concise. Bloated plans waste context and can cause issues.
:::

### Think from the Agent's Perspective

The structured plan is consumed by another AI agent (the execute command). Format it for AI readability:
- Be explicit about file paths
- Include precise task descriptions
- Specify validation criteria
- Order tasks by dependency

## Quick Reference

### Vibe Planning Checklist

- Prime the AI on your codebase first
- Reference PRD or feature description
- Let AI propose an approach
- Disagree if the approach is wrong
- Inject your knowledge and preferences
- Ask clarifying questions
- Keep scope small for this iteration

### Structured Plan Checklist

- Clear feature description
- Files to modify/create listed
- Tasks ordered by dependency
- Each task is atomic and testable
- Validation strategy defined
- Plan length is reasonable (500-700 lines max)

### Common Vibe Planning Prompts

```
# Explore what to build
Take a look at @.agents/prd.md and help me think about
what I should build first.

# Disagree with approach
I disagree. I want to start with X instead of Y because...

# Inject constraints
For this, I want to use [specific library]. Research how
it works before we proceed.

# Clarify scope
What would you actually implement now to start? Keep it simple.

# Add context
Also read @reference/guide.md - I want to follow these patterns.
```

### Remember

- Vibe planning = exploration; structured planning = formalization
- Inject your knowledge to reduce assumptions
- Keep each PIV loop iteration small
- Plans are for AI consumption—be explicit
- If plan is too long, make it more concise before executing
