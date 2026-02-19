---
title: AI-Optimized Templates
description: Start projects from templates that are optimized for AI coding assistants to understand and build upon.
sidebar:
  order: 2
---

## Overview

AI-optimized templates are starter codebases designed specifically for AI coding assistants to work with effectively. Instead of starting from scratch every time, you can clone a template that already includes best practices for infrastructure, logging, configuration, and code organization.

## Why Use Templates?

Starting from a well-structured template provides several advantages:

| Benefit | Description |
|---------|-------------|
| **Faster MVP** | Skip boilerplate setup and get to feature development sooner |
| **Consistent patterns** | AI has clear examples to follow for new code |
| **Built-in best practices** | Logging, testing, and configuration already set up |
| **Reduced assumptions** | AI doesn't have to guess your preferred patterns |
| **Pre-configured tooling** | Docker, linting, testing frameworks ready to use |

:::tip[Not Required, But Powerful]
Templates aren't required to start a project—you can build from scratch. But having a template optimized for AI coding can significantly accelerate development and improve code quality.
:::

## Principles

### Start with Templates When Possible

If a template exists that matches your tech stack, use it as a launching pad. You can always customize it after cloning.

**Using GitHub templates:**
1. Find a template repository (or create your own)
2. Click "Use this template" → "Create a new repository"
3. Clone the new repository
4. Let your AI coding assistant help you get it running

**Example prompt after cloning:**
> "Read the README.md, identify how to get the project up and running, and then let me know how to get started once you've done the analysis."

### Let AI Help You Validate the Template

After cloning, have your AI coding assistant run through the setup:

```
"Run all the commands to start the project locally and validate everything is working."
```

The AI will:
1. Read the README for setup instructions
2. Run dependency installation
3. Start any containers or services
4. Validate endpoints or tests pass

### Turn Setup Into a Command

Once you've validated the template works, turn the setup process into a reusable command:

> "List out all the commands you used for validation and running everything."

Then:

> "Turn this into a new command at `.claude/commands/init-project.md` with simple instructions for running each command."

Now you can run `/init-project` instead of typing out full instructions each time.

### Combine Template Rules with Your Project Rules

Templates often come with their own global rules (CLAUDE.md or agents.md). When starting a project from a template, you need to merge:

1. **Template rules** - Tech stack, infrastructure, existing patterns
2. **Your project rules** - Project-specific architecture, conventions, goals

**Example prompt:**
> "I have two global rule files. One is for the template and one is for my project specifically. Read both, analyze my PRD, and combine them into a single CLAUDE.md that keeps things concise while covering both the template patterns and project-specific needs."

:::caution[Check for Contradictions]
Before implementing features, ensure your combined global rules don't have contradictions between template patterns and project-specific decisions.
:::

## What Makes a Template AI-Optimized?

Good templates for AI coding include:

### Clear Directory Structure

```
project/
├── src/
│   ├── api/          # API endpoints
│   ├── services/     # Business logic
│   ├── models/       # Data models
│   └── utils/        # Shared utilities
├── tests/            # Test files mirror src/
├── docs/             # Documentation
└── config/           # Configuration files
```

### Example Implementations

Include at least one complete example of each pattern:
- One API endpoint with full CRUD
- One service with business logic
- One model with validation
- One test file with multiple test types

### Pre-configured Tooling

- Docker/Docker Compose for containerization
- Linting and formatting (ESLint, Prettier, Ruff, etc.)
- Testing framework with example tests
- Environment variable management
- Database migrations (if applicable)

### Documentation for AI

- README with setup instructions
- Global rules file (CLAUDE.md or agents.md)
- Inline comments explaining non-obvious patterns
- Architecture decisions documented

## Quick Reference

### Using a Template

1. Clone or use template to create new repository
2. Ask AI to read README and explain setup
3. Have AI run setup and validate
4. Turn setup into reusable command
5. Merge template rules with project rules
6. Check for contradictions

### Creating Your Own Templates

- Include one complete example of each pattern
- Document setup clearly in README
- Add global rules file with conventions
- Pre-configure Docker, linting, testing
- Include environment variable examples

### What to Look For

- Clear directory structure
- Example implementations for each pattern
- Pre-configured development tooling
- Documentation in README
- Global rules file for AI guidance
- Easy local development setup

### Remember

- Templates accelerate MVP development
- AI can validate and run template setup
- Combine template rules with project-specific rules
- Turn repetitive setup into commands
- Create your own templates for patterns you use frequently
