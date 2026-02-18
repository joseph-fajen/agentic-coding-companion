---
title: Execute Command
description: The /execute command drives implementation by having your AI coding assistant work through the structured plan task by task.
sidebar:
  order: 1
---

## Overview

The execute command initiates implementation by pointing your AI coding assistant at a structured plan. It tells the AI how to be thorough and how to handle each task. Because your structured plan already contains all the context, the execute command itself is simple.

## What the Execute Command Does

The execute command serves two purposes:

| Purpose | Why It Matters |
|---------|----------------|
| **Ensure thoroughness** | AIs sometimes skip parts of plans or stop early |
| **Define task handling** | Specifies how to work through tasks systematically |

Without an execute command, the AI might:
- Read only part of the plan
- Skip validation commands
- Ask for permission after each task (slowing you down)
- Not verify its own work

## Command Structure

```markdown title=".claude/commands/execute.md"
# Execute: Implement from Plan

## Plan to Execute
Read plan file: $ARGUMENTS

## Execution Instructions

### 1. Read and Understand
- Read the ENTIRE plan carefully
- Understand all tasks and their dependencies
- Note the validation commands to run
- Review the testing strategy

### 2. Execute Tasks in Order
For EACH task in the implementation plan:

#### a. Navigate to the task
- Identify the file and action required
- Read existing related files if modifying

#### b. Implement the task
- Follow the detailed specifications exactly
- Maintain consistency with existing code patterns
- Include proper error handling

#### c. Verify as you go
- After each file change, check syntax
- Ensure imports are correct
- Verify types are properly defined

### 3. Run Validation Commands
Execute ALL validation commands from the plan in order.

If any command fails:
- Fix the issue
- Re-run the command
- Continue only when it passes

### 4. Final Verification
Before completing:
- [ ] All tasks from plan completed
- [ ] All tests created and passing
- [ ] All validation commands pass

## Output Report
Provide summary:
- Completed tasks
- Files created/modified
- Validation results
```

## Key Elements Explained

### Thoroughness Instructions

AIs have quirks where they like to be "lazy"—stopping early or asking permission:

```markdown
- Read the ENTIRE plan carefully
- Execute ALL validation commands
- Continue only when it passes
```

These instructions prevent lazy behavior.

### Task-by-Task Handling

Define how each task should be approached:

```markdown
For EACH task:
1. Navigate to the task
2. Implement the task
3. Verify as you go
```

This creates a systematic loop through all tasks.

### Verification Checkpoints

Include checkpoints that prevent moving on with broken code:

```markdown
After each file change:
- Check syntax
- Ensure imports are correct
- Verify types are properly defined
```

### Output Report

Specify what to report when done:

```markdown
Provide summary:
- Completed tasks
- Files created/modified
- Validation results
```

This helps you quickly understand what happened.

## Customization Options

### Task Management Integration

If you use external task management (Notion, Jira, Archon):

```markdown
After each task:
- Update task status in [tool]
- Log completion time
- Note any blockers
```

### Research at Task Start

If tasks benefit from additional research:

```markdown
At the start of each task:
- Read any referenced documentation
- Check for similar patterns in codebase
- Confirm approach before implementing
```

### Progress Reporting

For long implementations:

```markdown
After every 3 tasks:
- Provide progress summary
- List remaining tasks
- Note any concerns
```

## Using the Execute Command

**Basic usage:**
```
/execute .agents/plans/feature-name.md
```

**What happens:**
1. AI reads the plan file
2. AI reads all referenced files
3. AI works through tasks sequentially
4. AI runs validation commands
5. AI reports completion

## Quick Reference

### Execute Command Essentials

- Tell AI to be thorough (read entire plan)
- Define task-by-task process
- Include verification checkpoints
- Specify output report format

### Before Running Execute

- [ ] Plan is complete and committed
- [ ] Conversation cleared for fresh context
- [ ] You have time to let it run (can be 20-60 minutes)

### During Execution

- Watch loosely for correct tool calls
- Check thinking tokens show understanding
- Let it run without interruption if going well

### If Something Goes Wrong

1. Let it try to fix the issue
2. If stuck, provide guidance
3. If badly broken, revert to plan commit
4. Evolve system before retrying

### Remember

- Execute command = instructions for handling the plan
- Two key elements: thoroughness + task handling
- Most structure comes from the plan itself
- Execute command just orchestrates the work
