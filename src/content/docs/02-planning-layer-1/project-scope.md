---
title: Project Scope
description: Create your PRD (Product Requirements Document) through vibe planning with your AI coding assistant.
sidebar:
  order: 1
---

## Overview

Your PRD (Product Requirements Document) is the highest-level document outlining the full scope of work for your MVP. It serves as a north star that you reference constantly during development—guiding which features to build next and ensuring alignment throughout the project.

## What Is a PRD?

The PRD is **not** an implementation plan. It's a reference document that defines:

- What you're building (executive summary, mission)
- Who it's for (target users)
- What's in scope for MVP (features, capabilities)
- How it's structured (architecture, tech stack)
- What patterns you'll follow (tools, conventions)

:::caution[Don't Send PRD to Implementation]
Never take your full PRD and send it directly into a PIV loop. The AI coding assistant will be overwhelmed. Instead, reference the PRD to identify the next feature, then create a focused Layer 2 plan for just that feature.
:::

## Principles

### Start with Vibe Planning

Don't try to write the PRD alone. Have an unstructured conversation with your AI coding assistant to explore ideas and get on the same page.

**Example starting prompt:**
> "Help me research this project I want to build. I want to create [description of your idea]. I'm thinking about using [tech stack preferences if any]. Help me explore feasibility and gather context for how we can achieve this build."

The conversation doesn't need to be structured at this point. Just explore:
- What you want to build
- Why you want to build it
- Tech stack preferences (or let the AI research options)
- Architecture ideas (or let the AI propose them)
- Existing resources to leverage (libraries, templates, guides)

### Inject Your Own Research

As you have ideas or find resources, inject them into the conversation. This reduces assumptions the AI makes.

**Example:** "I found this article on best practices for building tools. Read it and use these principles for our tool design." Then paste the URL or content.

**Example:** "For the plugin integration, I want to use this specific library: [link]. Research how it works so we can incorporate it."

### Lean on Expert Guidance

LLMs give generic advice. Supplement with expert resources:
- Official documentation
- Best practice articles from framework authors
- Example implementations that follow patterns you like

**Example:** Instead of letting the AI design your tool structure from scratch, find an authoritative guide (like Anthropic's "Building Effective Tools" article) and have the AI apply those principles to your specific use case.

### Ask Clarifying Questions

When ready to formalize, ask the AI if it needs clarification:

> "Create a PRD.md with sections for executive summary, mission, target users, MVP scope, core patterns, and tools. Ask me clarifying questions if needed before creating it."

This catches gaps in your conversation before they become gaps in your PRD.

### Refine Iteratively

After the PRD is created:
1. Read every section carefully
2. Identify anything that doesn't match your vision
3. Ask the AI to correct specific sections
4. Repeat until you're confident

:::tip[Common Refinements]
- "The implementation section is too verbose. Simplify it."
- "You misunderstood the architecture. I meant X, not Y."
- "Add a section about [missing topic]."
- "The tool design should follow option A, not B."
:::

## PRD Structure

A typical PRD includes these sections (customize as needed):

```markdown title="PRD.md"
# Project Name

## Executive Summary
2-3 sentences describing what this project does.

## Mission
The core goal and value proposition.

## Target Users
Who will use this and what are their needs.

## MVP Scope
### Core Features
- Feature 1: Description
- Feature 2: Description

### Out of Scope (for MVP)
- Features intentionally excluded from first version

## Architecture
### Tech Stack
- Language/framework choices
- Database and infrastructure
- Key libraries

### Project Structure
- Directory organization
- Key patterns

## Core Patterns
### [Pattern Category]
- Specific conventions to follow

## Tools / Capabilities
If building an agent, define the tools/capabilities.
```

## Quick Reference

### Vibe Planning Checklist

- Describe your idea in natural language
- Let AI research feasibility
- Inject your own research and preferences
- Clarify misconceptions as they arise
- Ask AI for options with pros/cons when unsure
- Answer AI's clarifying questions

### PRD Creation Checklist

- Request PRD with specific sections
- Ask for clarifying questions before creation
- Review every section after creation
- Refine sections that don't match your vision
- Simplify verbose sections
- Ensure alignment with global rules

### Remember

- PRD is a reference document, not an execution plan
- Create through conversation, not isolation
- Inject expert guidance to reduce generic advice
- Review meticulously—Layer 1 is your foundation
- Don't vibe code the PRD; take time to get it right
