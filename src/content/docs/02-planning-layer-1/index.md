---
title: Planning (Layer 1)
description: Project-level planning that you do once per project - defining scope, creating PRDs, and establishing AI-optimized templates.
sidebar:
  order: 0
---

Layer 1 planning is everything done **once and updated rarely**. While Layer 2 planning happens for every feature or task, Layer 1 establishes the stable foundation that guides all future development. This is the highest level of preparation before any code is written.

## What Is Layer 1 Planning?

Layer 1 consists of three main components:

| Component | Purpose | When to Create |
|-----------|---------|----------------|
| **PRD (Product Requirements Document)** | High-level scope of work for MVP | Before starting any implementation |
| **Global Rules** | Coding conventions and architectural decisions | After PRD, before first PIV loop |
| **On-Demand Context** | Reference guides for specific task types | As patterns emerge during development |

:::tip[Order Matters for New Projects]
For greenfield projects, create your PRD first. Then use it to help create your global rules and on-demand context. The PRD conversation is rich with insights about architecture and tech stack decisions.
:::

## Topics in This Stage

- **[Project Scope](/agentic-coding-companion/02-planning-layer-1/project-scope/)** - Create your PRD and define the MVP scope of work
- **[AI-Optimized Templates](/agentic-coding-companion/02-planning-layer-1/ai-optimized-templates/)** - Start from templates that are optimized for AI coding assistants

## Key Principles

### Create the PRD Through Conversation

Don't try to write the PRD alone. Use your AI coding assistant to explore ideas, research tech stack options, and refine your vision. The conversation itself becomes valuable context.

**The vibe planning process:**
1. **Explore ideas** - Describe what you want to build in natural language
2. **Research with the AI** - Let it investigate feasibility, tech stack options, and architecture
3. **Refine iteratively** - Clarify misconceptions, answer its questions, inject your own research
4. **Formalize into PRD** - Ask it to create a structured document from the conversation

### Validate All Layer 1 Planning Together

Before moving to Layer 2 (task planning), ensure all your Layer 1 artifacts are aligned:
- PRD matches your global rules
- On-demand context doesn't contradict global rules
- External references (articles, guides) align with your decisions

:::caution[Critical Alignment Check]
Any inconsistencies in Layer 1 planning will cascade into Layer 2 and implementation. Use your AI coding assistant to analyze all Layer 1 artifacts for contradictions before proceeding.
:::

### Don't Use PRD as Implementation Plan

A common mistake is sending your PRD directly into implementation. The PRD is a **reference document**, not a task list.

| PRD | Layer 2 Plan |
|-----|--------------|
| Full MVP scope | Single feature or task |
| Reference for direction | Direct input to implementation |
| Updated rarely | Created fresh each PIV loop |

**The PRD answers:** "What are we building for the MVP?"
**Layer 2 planning answers:** "What specific feature am I implementing now?"

## Process Comparison

### For New Projects (Greenfield)

```
1. PRD creation (vibe planning → structured document)
2. Global rules (use PRD to define conventions)
3. On-demand context (as needed)
4. Validate alignment
5. Begin Layer 2 planning
```

### For Existing Projects

```
1. Analyze codebase (have AI explore existing patterns)
2. Global rules (document what already exists)
3. On-demand context (as needed)
4. Validate alignment
5. Begin Layer 2 planning
```

:::note[Connection to Setup]
Layer 1 planning builds on your Setup stage. Your global rules and context loading strategies (covered in [Setup](/agentic-coding-companion/01-setup/)) should be established before creating feature-specific plans. The PRD then provides the scope that guides which features to build.
:::

## Quick Reference

### What to Include in Layer 1

- **PRD** - Executive summary, target users, MVP scope, core patterns, tech stack
- **Global Rules** - Architecture, code style, testing approach, logging patterns
- **On-Demand Context** - Tool-building guides, API patterns, component templates

### What Belongs in Layer 2

- Feature-specific implementation plans
- Task breakdowns for individual features
- File-by-file modification lists
- Test cases for specific functionality

### Remember

- Layer 1 = done once, updated rarely
- Layer 2 = done per feature, created fresh each time
- PRD is a reference, not an execution plan
- Validate all Layer 1 artifacts for alignment before implementation
