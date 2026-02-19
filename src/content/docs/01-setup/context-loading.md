---
title: Context Loading
description: Strategies for providing relevant context to your AI coding assistant - automatic vs. on-demand loading for Layer 1 planning.
sidebar:
  order: 2
---

Context loading determines what information your AI coding assistant has access to during a session. Layer 1 planning includes both **automatic context** (global rules) and **on-demand context** (task-type specific guides). Understanding when to use each strategy is key to efficient AI-assisted development.

## The Two Loading Strategies

Layer 1 planning has two distinct approaches for front-loading context:

| Strategy | What It Is | When It's Loaded | Best For |
|----------|-----------|------------------|----------|
| **Automatic** | Global rules | Every session, automatically | Universal principles |
| **On-Demand** | Reference guides | When needed for specific task types | Task-type specific patterns |

Think of it this way:
- **Automatic (Global Rules)** = Day 1 employee training
- **On-Demand (Reference Guides)** = Department-specific training
- **Layer 2 Planning** = This week's specific assignment

## Principles

### Understand the Context Loading Problem

Every AI coding session starts with zero knowledge of your project. There are two ways to catch it up:

**Manual Context Loading (Slow)**
- Start a session, explain your tech stack
- Describe your architecture and patterns
- Clarify your coding conventions
- **Pay this tax every single session**

**Front-Loaded Context (Fast)**
- Invest time once to create rules and guides
- System auto-loads or easily loads context
- Jump straight into productive work
- **Save hours over the life of a project**

:::tip[The Math]
5 minutes of manual context loading × 100 sessions = 8+ hours wasted. Front-loading takes 1-2 hours upfront but saves exponentially more time.
:::

### Know When to Use On-Demand Context

On-demand context is for task-type guides that:
- Don't apply to every session (not universal enough for global rules)
- Apply to many tasks over time (not specific enough for Layer 2 planning)
- Represent stable, reusable patterns for a category of work

**Example:** A guide on "How to Build Tools for Our AI Agent" doesn't apply when fixing bugs or updating the API. But when building new tools (which happens repeatedly), you want this guide loaded.

```markdown title="Example: On-Demand Reference Guide"
# Building Agent Tools Guide

## When to Use
Load this guide when creating new tools for the AI agent.

## Tool Structure Pattern
- Each tool gets its own module in `/tools/`
- Include input validation and error handling
- Add structured logging for debugging

## Testing Requirements
- Unit tests for each tool function
- Integration test with mock agent context
```

### Choose How to Load On-Demand Context

There are two methods for loading reference guides:

**Method 1: Reference in Global Rules**

```markdown title="CLAUDE.md"
## Task-Specific Reference Guides
When building API endpoints, read `@guides/api-guide.md`
When creating React components, read `@guides/components-guide.md`
```

| Pros | Cons |
|------|------|
| Flexible—AI decides when to load | AI might not load it when you want it to |
| No manual intervention needed | Less predictable |

**Method 2: Load via Commands (Recommended)**

```markdown title="commands/build-api.md"
# Build API Endpoint

## Process
1. Read the API guide: @guides/api-guide.md
2. Analyze the existing endpoints
3. Implement the new endpoint following the guide
```

| Pros | Cons |
|------|------|
| Guaranteed to load when you want it | Requires using the command |
| Predictable and consistent | Less automatic |

:::note[Recommendation]
Use **Method 2** for most on-demand context. Commands give you deterministic control over what context is loaded. See [Planning Commands](/agentic-coding-companion/03-planning-layer-2/planning-commands/) for how to build commands.
:::

### Structure Your Reference Guides Well

On-demand reference guides follow the same principles as global rules—concise, actionable, and specific to your codebase:

```markdown title="Reference Guide Template"
# [Task Type] Guide

## When to Use This Guide
Brief description of when to load this context.

## Principles
Key patterns and conventions for this task type.

## Examples
Concrete examples from your codebase.

## Validation Checklist
How to verify the work follows this guide.
```

### Avoid Context Overload

Not everything needs to be front-loaded. Consider:

| Context Type | Strategy |
|--------------|----------|
| Universal principles | Global rules (auto-load) |
| Task-type patterns | On-demand guides |
| Feature-specific details | Layer 2 planning (per-task) |
| External documentation | Link URLs, don't paste contents |

:::caution[Don't Over-Engineer]
Start with just global rules. Add on-demand reference guides only when you notice repeated task types that would benefit from documented patterns.
:::

## Quick Reference

### When to Use Automatic Context (Global Rules)
- Principles that apply to **every** session
- Core architecture and tech stack
- Universal coding conventions
- Always-relevant testing requirements

### When to Use On-Demand Context (Reference Guides)
- Patterns for specific task types (building APIs, creating components)
- Guides that bloat global rules but are frequently needed
- Documentation that only matters for certain workflows

### When to Use Neither (Layer 2 Planning)
- Details specific to one feature or bug
- Context that changes with each task
- Information only relevant to the current session

### Loading Strategy Decision Tree

```
Is this context always needed?
├── Yes → Global Rules (auto-load)
└── No → Is it for a repeated task type?
    ├── Yes → On-Demand Reference Guide
    └── No → Layer 2 Planning (per-task context)
```

### Remember
- Front-load context to eliminate repetitive explanations
- Global rules = universal; on-demand = task-type specific
- Commands are the best way to load on-demand context deterministically
- Start simple, add complexity only when needed
