---
title: Validation Pyramid
description: The 5 layers of validation from syntax checking to human review, embedded in every PIV loop.
sidebar:
  order: 1
---

The validation pyramid defines 5 layers of validation that close every PIV loop. Layers 1-4 are handled by your AI coding assistant as part of the structured plan. Layer 5 is your responsibility as the human in the loop.

## The 5 Layers

| Layer | Type | What It Validates | Who Does It |
|-------|------|-------------------|-------------|
| **1** | Syntax & Style | Code formatting, linting rules | AI (Automated) |
| **2** | Type Safety | Type checking, static analysis | AI (Automated) |
| **3** | Unit Testing | Individual functions | AI (Automated) |
| **4** | Integration Testing | Components working together | AI (Automated) |
| **5** | Human Review | Code review, manual testing, strategic alignment | You |

```
        ▲
       /5\       Human Review
      /───\
     /  4  \     Integration Testing
    /───────\
   /    3    \   Unit Testing
  /───────────\
 /      2      \ Type Safety
/───────────────\
        1        Syntax & Style
```

## Layer 1: Syntax & Style

This layer ensures your code is tidy and consistent.

**What It Does:**
- Code formatting (indentation, spacing)
- Linting rules enforcement
- Style guide adherence

**Tools by Language:**
| Language | Common Tools |
|----------|--------------|
| Python | Ruff, Black, Flake8 |
| TypeScript | ESLint, Prettier |
| Go | gofmt, golint |

:::tip[Why This Matters]
A tidy codebase is easier for both humans and AI to work with. Consistent formatting reduces cognitive load and helps AI coding assistants understand your patterns.
:::

## Layer 2: Type Safety

This layer catches type errors before runtime.

**What It Does:**
- Type checking on function parameters and returns
- Variable type validation
- Interface/contract verification

**Tools by Language:**
| Language | Common Tools |
|----------|--------------|
| Python | mypy, pyright |
| TypeScript | tsc (built-in) |
| Go | (built-in) |

## Layer 3: Unit Testing

This layer tests individual functions in isolation.

**What It Does:**
- Tests each function independently
- Validates edge cases and error handling
- Ensures functions behave as expected

**Tools by Language:**
| Language | Common Tools |
|----------|--------------|
| Python | pytest |
| TypeScript | Jest, Vitest |
| Go | testing (built-in) |

You might create dozens of unit tests for a single feature to cover edge cases.

## Layer 4: Integration Testing

This layer tests components working together.

**What It Does:**
- Tests API endpoints end-to-end
- Validates database interactions
- Ensures services communicate correctly

**Advanced Integration:**
- AI can start your application
- AI can interact with running endpoints
- AI can use tools like Playwright for browser testing

:::note[Live Validation]
Modern AI coding assistants can actually run your application and interact with it to verify functionality—not just run test suites.
:::

## Layer 5: Human Review

This is your layer. The AI has done its automated checks, now you verify strategically.

**What You Do:**

1. **Code Review**
   - Review git diffs (GitHub Desktop, git diff)
   - Ask AI for summary of changes
   - Ask clarifying questions about implementation

2. **Manual Testing**
   - Run the application as a user would
   - Try the new feature
   - Look for edge cases the AI might have missed

3. **Strategic Alignment**
   - Does implementation match your vision?
   - Does it align with the structured plan?
   - Any unexpected changes?

**For Less Experienced Developers:**
You don't need to understand every line. Ask questions:
- "What did you implement for security?"
- "How does this handle errors?"
- "Walk me through the changes you made."

## Embedding in Structured Plans

The validation pyramid is built into your structured plan:

```markdown title="Structured Plan - Validation Section"
## Validation Strategy

### Layer 1-2: Code Quality
- Run `ruff check .` for linting
- Run `mypy src/` for type checking

### Layer 3: Unit Testing
- Create tests for each new function
- Test edge cases: empty input, max values
- Run `pytest tests/unit/`

### Layer 4: Integration Testing
- Create integration test for API endpoint
- Start server, make request, verify response
- Run `pytest tests/integration/`

### Layer 5: Human Review
- Review git diff
- Manual test: try [specific user flow]
```

## Standalone Validate Command

Sometimes you want to run validation outside of the execute command:

```markdown title=".claude/commands/validate.md"
# Validate: Run Full Validation Pyramid

## Process
1. Run linting: `ruff check .`
2. Run type checking: `mypy src/`
3. Run unit tests: `pytest tests/unit/`
4. Run integration tests: `pytest tests/integration/`
5. Report results

## Output
Provide summary:
- Linting passed
- Type checking passed
- Unit tests passed
- Integration tests passed
```

Use this after fixing bugs or making changes outside of a full PIV loop.

## Quick Reference

### What AI Validates

| Layer | Validates | Typical Commands |
|-------|-----------|------------------|
| 1 | Syntax/Style | `ruff check`, `eslint` |
| 2 | Types | `mypy`, `tsc` |
| 3 | Unit Tests | `pytest`, `jest` |
| 4 | Integration | `pytest`, curl, Playwright |

### What You Validate

- **Code Review** - Diffs, questions, understanding
- **Manual Testing** - Run app, try features
- **Alignment** - Does it match the plan?

### Remember

- Layers 1-4 are automated in the structured plan
- Layer 5 is your responsibility
- Ask questions if you're unsure about changes
- Validation failures reveal system improvement opportunities
