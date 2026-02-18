---
title: Setup
description: Configure your AI coding environment with global rules and context loading strategies before starting any project.
sidebar:
  order: 0
---

The Setup stage establishes the foundation for reliable AI-assisted development. Before writing any code, configure your environment to guide your AI coding assistant effectively. This stage is part of **Layer 1 planning**—work you do once and update rarely.

## Why Setup Matters

Every AI coding session starts with zero knowledge of your project. Without proper setup, you pay a "context loading tax" every single conversation—spending minutes explaining your tech stack, architecture, and coding conventions. Global rules and context loading strategies eliminate this tax by front-loading the context once, then auto-loading it into every session automatically.

Think of it like employee onboarding: global rules are your "day 1 training" that every new team member (or AI session) receives. This upfront investment saves hours over the course of a project.

## Topics in This Stage

- **[Global Rules](/agentic-coding-companion/01-setup/global-rules/)** - Define persistent rules that apply to every interaction with your AI coding assistant
- **[Context Loading](/agentic-coding-companion/01-setup/context-loading/)** - Strategies for providing relevant context—automatic vs. on-demand loading

## Key Principles

- **Configure once, benefit forever** - Global rules are auto-loaded into every session, eliminating repetitive explanations
- **Load context strategically** - Not everything needs to be in every session; use on-demand loading for task-specific guides
- **Keep it concise** - Bloated rules waste context window space; include only what applies to *all* tasks
- **Customize to your codebase** - Generic best practices matter less than your specific conventions and architecture
- **Separate principles from processes** - Global rules are for principles; workflows belong in commands (covered in Planning Layer 2)

:::note[Connection to PIV Loop]
Setup is the foundation that enables efficient planning, implementation, and validation. Without proper global rules, every PIV loop iteration starts from scratch. See [PIV Loops](/agentic-coding-companion/04-implementation/piv-loops/) for the complete mental model.
:::
