---
title: Implementation
description: Execute your structured plan using the PIV loop methodology and the execute command.
sidebar:
  order: 0
---

Implementation is where your structured plan becomes code. If planning was done well, implementation is straightforward—you point your AI coding assistant at the plan and let it work through tasks systematically. This is where the upfront investment in planning pays off.

## Why Implementation Is Simple

The implementation phase is intentionally short. If you put effort into planning:
- The structured plan contains all context the AI needs
- Tasks are clearly defined and ordered
- Validation criteria are already specified
- You don't need to explain anything again

The execute command simply tells the AI: "Read this plan and implement it task by task."

:::tip[Proof in Practice]
Module 6 (Implementation) is the shortest module in the course. This directly reflects how implementation should feel—most of the work was done in planning.
:::

## Topics in This Stage

- **[Execute Command](/agentic-coding-companion/04-implementation/execute-command/)** - The command that drives implementation
- **[PIV Loops](/agentic-coding-companion/04-implementation/piv-loops/)** - The Plan → Implement → Validate cycle

## Key Principles

### Trust but Verify

During implementation, watch loosely. You don't need to micromanage, but verify that:
- The AI reads the entire plan (not just part of it)
- It's making the right tool calls
- Its thinking tokens show understanding of the plan
- Tasks are being managed properly

### Delegate Almost Entirely

Implementation is the phase where you step back. You were deeply involved in planning; you'll be deeply involved in validation. But implementation? Let the AI rip.

| Phase | Your Involvement |
|-------|------------------|
| **Planning** | High—validate every section |
| **Implementation** | Low—loose oversight |
| **Validation** | High—code review and manual testing |

### Commit Before and After

Always create save states:
1. **Before execution**: Commit your structured plan
2. **After execution**: Commit the implementation

If implementation fails badly, revert to the plan commit and try again with evolved system.

## The Implementation Flow

```
1. /commit (save plan as checkpoint)
2. /clear (start fresh conversation)
3. /execute [plan-path] (run implementation)
4. (AI works through tasks)
5. /commit (save implementation)
6. Proceed to validation
```

## Quick Reference

### Pre-Implementation Checklist

- [ ] Structured plan is complete and reviewed
- [ ] Plan is committed to git (save state)
- [ ] Conversation cleared for fresh context
- [ ] Execute command ready to invoke

### During Implementation

- Watch tool calls loosely
- Check thinking tokens show understanding
- Don't intervene unless necessary
- Let AI complete validation from the plan

### Post-Implementation

- [ ] AI completed all tasks
- [ ] AI ran validation commands from plan
- [ ] Commit implementation as save state
- [ ] Ready for human validation phase

### Remember

- Planning heavy, implementation light
- Trust the plan you validated
- Create save states before and after
- If it fails, evolve system and retry
