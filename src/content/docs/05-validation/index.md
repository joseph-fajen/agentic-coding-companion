---
title: Validation
description: Close the PIV loop through AI-automated testing and human code review - a shared responsibility that builds trust in your system.
sidebar:
  order: 0
---

Validation is where you verify that implementation matches the plan. This is a shared responsibility between you and your AI coding assistant—the AI handles automated checks while you perform strategic review and manual testing. This is also where you return to active involvement after delegating implementation.

## Why Validation Matters

Trust but verify. You delegated implementation to your AI coding assistant, now you close the loop by:
- Verifying automated tests pass
- Reviewing code changes
- Running the application manually
- Asking clarifying questions

Validation failures are feedback—not just about bugs in the code, but about potential improvements to your system.

## Topics in This Stage

- **[Validation Pyramid](/agentic-coding-companion/05-validation/validation-pyramid/)** - The 5 layers of validation from syntax to manual testing
- **[Code Review](/agentic-coding-companion/05-validation/code-review/)** - Commands for reviewing code changes systematically
- **[System Review](/agentic-coding-companion/05-validation/system-review/)** - Analyze divergence between plans and implementation to evolve your system

## Key Principles

### AI Handles Layers 1-4

The validation pyramid defines what your AI coding assistant validates automatically:
1. **Syntax & Style** - Linting and code formatting
2. **Type Safety** - Type checking and static analysis
3. **Unit Testing** - Testing individual functions
4. **Integration Testing** - Testing components together

All of this is embedded in your structured plan and runs during implementation.

### Humans Handle Layer 5

You perform strategic validation:
- **Code review** - Look at diffs, ask questions, verify changes
- **Manual testing** - Run the application as a user would
- **Strategic alignment** - Does implementation match your vision?

:::tip[You Don't Need to Read Every Line]
If you're less experienced with code, validate by asking questions. "Did you consider security?" "What edge cases does this handle?" The AI can walk you through changes.
:::

### Validation as Feedback

When validation fails, it reveals opportunities:
- **Bugs in code** → Fix the issue
- **Pattern failures** → Update your system (rules, commands, templates)

If the same validation failure happens repeatedly, evolve your system to prevent it.

## The Validation Flow

```
Implementation Complete
         ↓
AI Validation (automatic)
  - Linting & type checking
  - Unit tests
  - Integration tests
         ↓
Human Validation
  - Code review (diffs, questions)
  - Manual testing
  - Strategic alignment check
         ↓
All Pass? → Commit
         ↓
Issues Found? → Fix & Revalidate
```

## Quick Reference

### After Implementation

- AI ran all validation from structured plan
- Review code changes (diffs or AI summary)
- Ask clarifying questions
- Run manual tests
- Commit when confident

### Optional: System Review

After multiple PIV loops or when you notice patterns:
- Generate execution report
- Run system review command
- Identify divergences between plan and implementation
- Evolve system to prevent future issues

### Remember

- Validation = AI automation + human judgment
- Trust but verify—you delegated, now review
- Failures are feedback for system improvement
- Commit only when confident
