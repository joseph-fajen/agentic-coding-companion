---
title: Code Review
description: Commands for systematically reviewing AI-generated code changes and fixing issues found during review.
sidebar:
  order: 2
---

## Overview

Code review is Layer 5 of the validation pyramid—the human verification layer. You can think of it like the prime command: analyzing the codebase, but instead of gathering context, you're looking for issues. Create commands to systematize this process.

## Why Code Review Matters

Even with comprehensive automated testing, you should:
- Understand what changed in your codebase
- Verify changes align with your vision
- Catch issues that tests might miss (logic errors, security, performance)
- Learn what your AI coding assistant implemented

:::tip[Anthropic's Approach]
Anthropic runs a code review command on every pull request as a validation gate. This is the first pass before human review.
:::

## Code Review Command

Create a command for comprehensive code review:

```markdown title=".claude/commands/code-review.md"
# Code Review: Analyze Recent Changes

## Core Principles
System review is NOT code review. This command:
- Analyzes code changes for bugs and issues
- Does NOT propose system improvements

## What to Review
Gather context on recent changes:
1. Run `git status` to see uncommitted changes
2. Run `git diff` to see what changed
3. Read each changed/created file

## For Each Changed File, Look For:
- Logic errors (incorrect conditions, off-by-one, etc.)
- Security issues (injection, auth problems, secrets)
- Performance problems (N+1 queries, memory leaks)
- Code smells and anti-patterns
- Missing error handling
- Violations of project conventions

## Output Format
Save review to `.agents/code-reviews/[date]-review.md`:

### Summary
- Overall assessment: [Approved/Needs Work/Critical Issues]
- Total issues found: X

### High Severity
- [Issue 1]: Description, location, impact

### Medium Severity
- [Issue 2]: Description, location, recommendation

### Low Severity
- [Issue 3]: Description, location
```

## Using the Code Review Command

**Typical flow:**
1. Complete implementation
2. Before committing, run `/code-review`
3. Review the output
4. Fix issues found
5. Commit when clean

**Alternative uses:**
- After multiple PIV loops, review the full codebase
- When joining a new project, audit the codebase
- As part of PR review process

## Code Review Fix Command

Create a companion command to fix issues from the review:

```markdown title=".claude/commands/code-review-fix.md"
# Code Review Fix: Address Issues from Review

## Input
Either:
- Path to code review file: $ARGUMENTS
- OR description of issue to fix

## Process
1. Read the entire code review file
2. For each issue:
   - Understand what was wrong
   - Implement the fix
   - Create/run relevant tests
   - Verify the fix works

## After All Fixes
Run `/validate` to ensure nothing broke.

## Output
Summary of fixes applied and test results.
```

**Usage:**
```
/code-review-fix .agents/code-reviews/2024-01-15-review.md
```

Or for manual testing issues:
```
/code-review-fix I noticed the delete button doesn't show a confirmation
```

## Strategies for Code Review

### Using Git Diffs

Review changes visually with git tools:
- **GitHub Desktop** - Visual diff viewer
- **git diff** - Terminal-based diff
- **VS Code** - Built-in diff viewer

**Ask AI for summary:**
```
Give me the git diff. List the files that were changed and created.
```

### Asking Questions

If you're less experienced, validate through conversation:
- "What did you implement for security?"
- "How does this handle edge cases?"
- "Walk me through the error handling."
- "What environment variables were added?"

This lets you validate without reading every line of code.

### Specialized Reviews

Create specialized review commands for different focuses:

| Command | Focus |
|---------|-------|
| `/review-security` | Security vulnerabilities only |
| `/review-performance` | Performance issues only |
| `/review-tests` | Test coverage and quality |

## Quick Reference

### Code Review Checklist

- [ ] Run code review command
- [ ] Check high severity issues first
- [ ] Fix critical issues before committing
- [ ] Verify fixes with validation
- [ ] Commit when review passes

### What to Look For

| Category | Examples |
|----------|----------|
| **Logic** | Wrong conditions, missing cases |
| **Security** | Injection, auth bypass, secrets |
| **Performance** | N+1 queries, blocking calls |
| **Style** | Naming, structure, patterns |
| **Testing** | Missing tests, weak assertions |

### Code Review Flow

```
Implementation Complete
         ↓
   /code-review
         ↓
Issues Found? ──Yes──> /code-review-fix
         │                    │
         No                   ↓
         │             /validate
         ↓                    │
      /commit <───────────────┘
```

### Remember

- Code review is Layer 5 of validation pyramid
- Create commands to systematize review
- Ask questions if you don't understand changes
- Use git diffs for visual review
- Fix issues before committing
