---
title: Planning Commands
description: Reusable slash commands for the planning phase - prime, plan, and related workflows.
sidebar:
  order: 2
---

## Overview

Commands are packaged processes that define your repeatable workflows. Instead of typing the same prompts repeatedly, you create markdown files that your AI coding assistant executes with a simple slash command. Commands are the foundation of your system.

**The golden rule:** When you find yourself typing something more than 3 times, turn it into a command.

## What Are Commands?

Commands are markdown documents stored in a specific folder that your AI coding assistant loads as callable workflows:

| Tool | Command Location |
|------|------------------|
| **Claude Code** | `.claude/commands/` |
| **Other tools** | Reference the file path in your prompt |

```markdown title=".claude/commands/review-code.md"
# Code Review Process

## Context
You are reviewing code for bugs and best practices.

## Process
1. Read all changed files
2. Analyze for common issues
3. Check against our coding standards

## Output
For each issue found, describe the problem and suggest a fix.
```

Invoke with `/review-code` instead of typing the full prompt.

## Core Planning Commands

### Prime Command

The prime command catches your AI coding assistant up on your codebase. Use it at the start of every PIV loop.

```markdown title=".claude/commands/prime.md"
# Prime: Load Project Context

## Objective
Build understanding of the codebase before implementation.

## Process
1. List all tracked files with git
2. Analyze directory structure
3. Read core documentation (README, CLAUDE.md)
4. Read key configuration files
5. Understand current project state

## Output
Provide a summary of:
- Project purpose and architecture
- Key patterns identified
- Current state and recent changes
- Readiness for implementation
```

**Usage:**
```
/prime
```

:::tip[Parameterized Priming]
Add parameters to focus priming: `/prime frontend` to prime on frontend code, or `/prime tools` to load your tool-building guide.
:::

### Plan Command

The plan command creates a structured implementation plan from your vibe planning conversation.

```markdown title=".claude/commands/plan.md"
# Plan: Create Implementation Plan

## Input
Use the current conversation context and PRD reference.

## Process
1. Research the feature requirements
2. Identify files to modify/create
3. Read relevant documentation
4. Create structured plan document

## Plan Template
Fill in the following structure:

### Feature Description
[2-3 sentences]

### Files to Modify
- [file path] - [reason]

### Implementation Tasks
- [ ] Task 1
- [ ] Task 2
...

### Validation Strategy
- Tests to create
- Commands to run

## Output
Write plan to `.agents/plans/[feature-name].md`
```

**Usage:**
```
/plan
```

## Command Structure: Input → Process → Output

All commands follow the same mental model:

| Section | Purpose | Examples |
|---------|---------|----------|
| **Input** | What context does the agent need? | Parameters, files to read, on-demand context |
| **Process** | Step-by-step instructions | Research steps, analysis, implementation |
| **Output** | What should the agent produce? | Summary, document, code changes |

### Input: What the Agent Needs

- Context around the process (project info, constraints)
- Parameters for this specific invocation (`$ARGUMENTS`)
- On-demand context to load (`@guides/tool-guide.md`)
- Persona (how should the agent behave?)

### Process: Step-by-Step Instructions

This is the core workflow. Be explicit:
- What to research or analyze
- What tools to use (GitHub CLI, MCP servers)
- How to manage tasks
- What code changes to make

### Output: What to Produce

Think about who consumes the output:
- **You** (human) → Make it readable, include summaries
- **Another agent** → Make it detailed, machine-parseable
- **Git** → Formatted commit messages

## Advanced Command Features

### Arguments

Make commands dynamic with parameters:

```markdown title=".claude/commands/fix-issue.md"
# Fix Issue $ARGUMENTS

## Process
1. Read GitHub issue #$ARGUMENTS
2. Perform root cause analysis
3. Implement the fix
```

**Usage:**
```
/fix-issue 123
```

For multiple arguments, use `$1`, `$2`, `$3`:
```markdown
Review PR #$1 with priority $2 assigned to $3
```

### Auto-Executing Commands

Inject context automatically with `!`:

```markdown title=".claude/commands/commit.md"
# Git Context
!git status
!git diff HEAD

# Process
Analyze the changes and create a commit...
```

The `!git status` runs automatically and injects the output.

### Loading On-Demand Context

Reference Layer 1 guides in your commands:

```markdown title=".claude/commands/create-tool.md"
# Create Tool: $ARGUMENTS

## Context
Read the tool building guide: @reference/tool-guide.md

## Process
Follow the patterns in the guide to create a new tool for $ARGUMENTS.
```

The `@filepath` syntax loads the file content into the command.

## Command Library: The Core Four

| Command | Purpose | Consumer |
|---------|---------|----------|
| `/prime` | Catch up on codebase | You (validate understanding) |
| `/plan` | Create structured plan | Execute command (agent) |
| `/execute` | Implement the plan | You + Git |
| `/commit` | Create save state | Git + reviewers |

These four commands cover the entire PIV loop:
1. **Prime** → Load context
2. **Plan** → Create structured plan
3. **Execute** → Implement task by task
4. **Commit** → Save state

### Bug Fix Workflow Commands

For issue-based workflows:

| Command | Purpose |
|---------|---------|
| `/rca [issue]` | Root cause analysis for GitHub issue |
| `/implement-fix [issue]` | Implement fix from RCA document |

The RCA command produces a document that becomes input to implement-fix.

## Quick Reference

### Creating Commands

1. Identify a repeated workflow
2. Create `.claude/commands/[name].md`
3. Structure with Input → Process → Output
4. Use parameters for dynamic behavior
5. Reference on-demand context with `@filepath`

### Command Best Practices

- Follow Input → Process → Output structure
- Think from the agent's perspective
- Make output format explicit
- Use parameters to make commands dynamic
- Reference Layer 1 context when needed

### Why Commands Matter

| Without Commands | With Commands |
|------------------|---------------|
| Retype prompts every time | One slash command |
| Inconsistent process | Standardized workflow |
| Can't evolve system | Iterate on command file |
| Knowledge stays in your head | Shareable with team |

### Remember

- Commands = packaged processes for repeatable workflows
- Global rules = principles; Commands = processes
- Structure: Input → Process → Output
- Use `$ARGUMENTS` for dynamic parameters
- Use `@filepath` to load on-demand context
- Use `!command` to auto-execute bash commands
- Evolve commands when you find mistakes
