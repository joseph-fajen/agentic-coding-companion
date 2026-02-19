---
title: Global Rules
description: Define persistent rules in CLAUDE.md or similar files that guide your AI coding assistant across all interactions.
sidebar:
  order: 1
---

Global rules are persistent instructions stored in configuration files that your AI coding assistant reads at the start of every session. They establish coding conventions, architectural patterns, and behavioral guidelines that remain constant across all tasks. Think of them as your "day 1 onboarding" for the AI—everything it needs to know on its first day working with your codebase.

## What Are Global Rules?

Different AI coding assistants use different filenames for global rules:

| Tool | Filename | Notes |
|------|----------|-------|
| **Claude Code** | `CLAUDE.md` | Can also use parent directories or home folder |
| **Codex, Cursor, Gemini CLI** | `agents.md` | Becoming a universal standard |
| **Legacy Cursor/Windsurf** | `.cursor_rules`, `.windsurf_rules` | Older dot notation |

Just as `README.md` is for humans to understand a project, `agents.md` (or `CLAUDE.md`) is for AI agents to understand how to work with your codebase.

:::tip[Start Simple]
Place a single global rules file at the root of your repository, right next to your README. You can add nested rules in subdirectories later, but start with one file.
:::

## Principles

### Keep Rules Stable and Universal

Global rules should apply to **any task** in your codebase—fixing bugs, adding features, refactoring, or starting from scratch. If something changes frequently or only applies to certain task types, it doesn't belong in global rules.

**The golden rule:** If anything in your global rules changes a lot, it certainly does not belong there.

### Include the Right Sections

Structure your global rules around what you'd tell a new developer on their first day:

```markdown title="Recommended CLAUDE.md Structure"
# Project Name

## Core Principles
- High-level guidelines that apply everywhere
- Your team's coding philosophy

## Tech Stack
- Languages, frameworks, and major libraries
- Database and infrastructure choices

## Architecture
- Directory structure overview
- Key patterns and conventions

## Code Style
- Naming conventions (classes, functions, variables)
- Import organization
- Comment style

## Testing
- Test framework and commands
- Coverage expectations
- Test file naming conventions

## Logging
- Log level guidelines
- Structured logging format

## Common Commands
- Build, test, and run commands
- Development workflow commands
```

### Know What NOT to Include

Global rules should be concise. Avoid these common mistakes:

| Don't Include | Why | Where It Belongs |
|---------------|-----|------------------|
| Universal knowledge | LLMs already know common patterns | Nowhere—trust the model |
| Workflows/processes | These are task-specific sequences | Commands (Module 4) |
| Task-specific details | Changes per feature or bug | Layer 2 planning |
| Verbose explanations | Wastes context window space | Keep it concise |

:::caution[Common Mistake]
Don't bloat your global rules with step-by-step processes. Global rules are for **principles**; commands (covered in Planning Layer 2) are for **workflows**.
:::

### Organize Modularly (Optional)

You can structure global rules in two ways:

**Option 1: Single File (Recommended for most projects)**
```markdown
# CLAUDE.md
All sections in one file. Simple to maintain.
```

**Option 2: Multiple Files (For large teams)**
```markdown
# CLAUDE.md
@guides/core-principles.md
@guides/tech-stack.md
@guides/architecture.md
```

When you use `@filepath` syntax, the contents are automatically loaded. This is useful when teams share principles across multiple repositories.

### Create Rules with AI Assistance

You don't have to write global rules from scratch. Use your AI coding assistant to help:

1. **For existing projects:** Ask the AI to analyze your codebase and extract architecture, tech stack, and patterns
2. **For new projects:** Describe your idea and tech preferences; let the AI research best practices and draft the rules
3. **Review meticulously:** Layer 1 planning is the foundation for all future code—don't vibe code this

**Example:**
> "Analyze this codebase and create a CLAUDE.md file with sections for core principles, tech stack, architecture, code style, testing, and logging. Keep it under 300 lines."

### Apply the Two-Question Framework

For each section you consider adding to global rules, ask:

1. **Is this constant?** (Stable and reusable vs. task-specific)
   - If task-specific → Layer 2 planning, not global rules

2. **Is it needed every session?** (Always relevant vs. task-type specific)
   - If always relevant → Keep in global rules
   - If only for certain task types → Move to on-demand context (see [Context Loading](/agentic-coding-companion/01-setup/context-loading/))

## Quick Reference

### Do This
- **Create one file** at repository root (`CLAUDE.md` or `agents.md`)
- **Include universal principles** that apply to all tasks
- **Document your specific conventions** (naming, testing, logging)
- **Keep it concise**—target under 300 lines
- **Update rarely** after initial setup

### Avoid This
- **Over-engineering** with too many nested rule files
- **Including workflows** (those belong in commands)
- **Documenting obvious patterns** (LLMs already know)
- **Bloating with task-specific details**

### Remember
- Global rules = Day 1 onboarding
- Front-load context once, auto-load forever
- Principles, not processes
- Concise beats comprehensive
