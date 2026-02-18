# Feature: Phase 2 - Content Distillation

The following plan should be complete, but validate documentation and codebase patterns before implementing.

Pay special attention to the transcript-to-page mapping and cross-cutting concept handling. Each page must follow the established content structure pattern.

## Feature Description

Distill 27 course transcripts (~39,000 lines) into structured, scannable content for the Agentic Coding Companion documentation website. This involves extracting key principles, examples, and command patterns from each module and populating the 20 existing placeholder pages (14 topic pages + 6 stage index pages) with rich, actionable content.

## User Story

As an agentic coding practitioner
I want distilled, scannable content from the course transcripts
So that I can quickly verify I'm applying the methodology correctly during active project work

## Problem Statement

The website currently has placeholder pages with minimal content. Users cannot reference the agentic coding methodology because the actual principles, examples, and command patterns from the course have not been extracted and organized.

## Solution Statement

Systematically process each course transcript to extract:
- Key principles (2-4 sentence summaries)
- Concrete examples (code blocks, command templates)
- Quick reference checklists
- Cross-cutting concept connections

Populate all 20 pages following a consistent structure using Starlight components for enhanced readability.

## Feature Metadata

**Feature Type**: Content Creation / Enhancement
**Estimated Complexity**: Medium-High
**Primary Systems Affected**: `src/content/docs/` (all 6 stage directories)
**Dependencies**: None (content-only changes)

---

## CONTEXT REFERENCES

### Relevant Codebase Files - READ BEFORE IMPLEMENTING

- `PRD.md` (lines 209-238) - Content structure pattern (Overview → Principles → Examples → Quick Reference)
- `PRD.md` (lines 423-433) - Lesson-to-stage mapping
- `src/content/docs/index.mdx` - Homepage structure with Starlight components
- `src/content/docs/01-setup/index.md` - Current placeholder index page pattern
- `src/content/docs/05-validation/validation-pyramid.md` - Current placeholder topic page pattern

### Source Transcript Files

All transcripts are in `transcripts/` directory with frontmatter containing module, lesson, and related_lessons metadata.

**Module 1 (Introduction):** Contextual only, minimal extraction
- `1.1 - Welcome to the Agentic Coding Course (Full Overview).md`
- `1.2 - Course Prerequisites.md`
- `1.3 - Introduction to the System Gap.md`
- `1.5 - Agentic Coding Course Master Guide.md`

**Module 2 (PIV Loop):** Core concepts, heavy extraction
- `2.1 - The PIV Loop (Plan -> Implement -> Validate).md`
- `2.2 - Planning - The Two Layers.md`
- `2.3 - Implementation - Structured Plan Execution.md`
- `2.4 - Validation - An AI + Human Effort.md`

**Module 3 (Global Rules):** Setup stage, focused extraction
- `3.1 - The Fundamentals of Global Rules.md`
- `3.2 - The Two Strategies for Context Loading.md`
- `3.3 - Creating Global Rules with AI.md`
- `3.4 - Exercise - Fixing Bloated Global Rules.md`

**Module 4 (Commands):** Planning L2, implementation patterns
- `4.1 - The Fundamentals of Commands.md`
- `4.2 - The Optimal Structure for Commands.md`
- `4.3 - Universal Command Patterns.md`
- `4.4 - Exercise - Build Your Own Commands.md`
- `4.5 - Command Chaining.md`

**Module 5 (Planning System):** Planning L1 & L2, heavy extraction
- `5.1 - Important Overview of the Next Few Modules.md`
- `5.2 - The Start of Our Planning System (Project Scope, Layer One Planning).md`
- `5.3 - Implementing Our AI Coding Optimized Template.md`
- `5.4 - Perfecting Our Layer One Planning.md`
- `5.5 - Build Our AI Agent (PIV Loop, Layer Two Planning).md`
- `5.6 - Connecting Our Agents to Obsidian (PIV Loop 2).md`
- `5.7 - Exercise - Creating Your Planning Command.md`

**Module 6 (Execute):** Implementation stage
- `6.1 - The Execute Command.md`
- `6.2 - Implementing with Multiple PIV Loops & Evolving Our System.md`

**Module 7 (Validation):** Validation stage, focused extraction
- `7.1 - The Validation Pyramid.md`
- `7.2 - Exercise - Create Your Code Review Command.md`
- `7.3 - The Core Validation System Commands.md`
- `7.4 - Exercise - Create Your System Review Command.md`

**Module 8 (GitHub):** OUT OF SCOPE
- `8.1 - Intro to GitHub for Agentic Coding.md` - DO NOT PROCESS

### Files to Update

**Stage 1: Setup (3 files)**
- `src/content/docs/01-setup/index.md`
- `src/content/docs/01-setup/global-rules.md`
- `src/content/docs/01-setup/context-loading.md`

**Stage 2: Planning Layer 1 (3 files)**
- `src/content/docs/02-planning-layer-1/index.md`
- `src/content/docs/02-planning-layer-1/project-scope.md`
- `src/content/docs/02-planning-layer-1/ai-optimized-templates.md`

**Stage 3: Planning Layer 2 (3 files)**
- `src/content/docs/03-planning-layer-2/index.md`
- `src/content/docs/03-planning-layer-2/task-breakdown.md`
- `src/content/docs/03-planning-layer-2/planning-commands.md`

**Stage 4: Implementation (3 files)**
- `src/content/docs/04-implementation/index.md`
- `src/content/docs/04-implementation/piv-loops.md`
- `src/content/docs/04-implementation/execute-command.md`

**Stage 5: Validation (4 files)**
- `src/content/docs/05-validation/index.md`
- `src/content/docs/05-validation/validation-pyramid.md`
- `src/content/docs/05-validation/code-review.md`
- `src/content/docs/05-validation/system-review.md`

**Stage 6: Iteration (2 files)**
- `src/content/docs/06-iteration/index.md`
- `src/content/docs/06-iteration/evolving-your-system.md`

### Relevant Documentation - READ BEFORE IMPLEMENTING

- [Starlight Components Guide](https://starlight.astro.build/guides/components/)
  - Steps, Tabs, Asides components
  - Why: Enhanced content presentation

- [Starlight Authoring Content](https://starlight.astro.build/guides/authoring-content/)
  - Markdown features, aside syntax
  - Why: Content formatting standards

- [Starlight Asides](https://starlight.astro.build/components/asides/)
  - `:::note`, `:::tip`, `:::caution`, `:::danger` syntax
  - Why: Callouts for best practices and warnings

- [Starlight Steps](https://starlight.astro.build/components/steps/)
  - `<Steps>` component for sequential workflows
  - Why: PIV Loop and command execution sequences

### Patterns to Follow

**Aside Syntax (Markdown - no import needed):**
```markdown
:::tip[Best Practice]
Content here with **markdown** support.
:::

:::caution[Common Mistake]
Warning content here.
:::
```

**Steps Component (MDX - requires import):**
```mdx
import { Steps } from '@astrojs/starlight/components';

<Steps>
1. First step with details
2. Second step with details
3. Third step with details
</Steps>
```

**Code Block with Title:**
```markdown
```bash title="Command Example"
/prime --context project
```
```

**Principle Structure Pattern:**
```markdown
### Principle Name

2-4 sentence summary explaining the principle. Include the "why" not just the "what". Connect to the user's goal of reliable AI-assisted development.

**Example:**

Concrete example showing the principle in action. Use code blocks for commands or templates.

```markdown title="Example: Global Rules File"
# Project: My App
## Tech Stack
- Framework: Next.js 14
- Language: TypeScript
```
```

**Quick Reference Pattern:**
```markdown
## Quick Reference

- **Do This:** Actionable item with brief explanation
- **Avoid This:** Anti-pattern to avoid
- **Remember:** Key reminder for this topic
```

---

## TRANSCRIPT-TO-PAGE MAPPING

### Stage 1: Setup

| Page | Primary Transcript(s) | Supporting Content |
|------|----------------------|-------------------|
| `index.md` | 3.1 (intro sections) | Module 3 overview |
| `global-rules.md` | 3.1, 3.3 | 3.4 (exercise examples) |
| `context-loading.md` | 3.2 | 3.3, 3.4 |

### Stage 2: Planning Layer 1

| Page | Primary Transcript(s) | Supporting Content |
|------|----------------------|-------------------|
| `index.md` | 5.1, 5.2 (intro) | 2.2 (Layer 1 overview) |
| `project-scope.md` | 5.2 | 5.4 |
| `ai-optimized-templates.md` | 5.3 | 5.4 |

### Stage 3: Planning Layer 2

| Page | Primary Transcript(s) | Supporting Content |
|------|----------------------|-------------------|
| `index.md` | 2.2 (Layer 2 sections), 5.5 | 4.1 |
| `task-breakdown.md` | 2.2, 5.5 | 5.6 |
| `planning-commands.md` | 4.1, 4.2, 4.3 | 4.5, 5.7 |

### Stage 4: Implementation

| Page | Primary Transcript(s) | Supporting Content |
|------|----------------------|-------------------|
| `index.md` | 2.1 (overview), 2.3 | 6.1 |
| `piv-loops.md` | 2.1 | 2.2, 2.3, 2.4 |
| `execute-command.md` | 6.1, 6.2 | 4.2 |

### Stage 5: Validation

| Page | Primary Transcript(s) | Supporting Content |
|------|----------------------|-------------------|
| `index.md` | 2.4, 7.1 (intro) | Module 7 overview |
| `validation-pyramid.md` | 7.1 | 2.4 |
| `code-review.md` | 7.2, 7.3 | 4.3 |
| `system-review.md` | 7.4, 7.3 | 6.2 |

### Stage 6: Iteration

| Page | Primary Transcript(s) | Supporting Content |
|------|----------------------|-------------------|
| `index.md` | 6.2 (intro) | 7.3, 7.4 |
| `evolving-your-system.md` | 6.2 | 7.3, 7.4 |

---

## CROSS-CUTTING CONCEPTS

These concepts span multiple pages. Handle as follows:

### PIV Loop (Plan → Implement → Validate)

- **Primary Location:** `04-implementation/piv-loops.md` - Full explanation with Steps component
- **Secondary Mentions:**
  - `02-planning-layer-1/index.md` - Brief intro, link to primary
  - `03-planning-layer-2/index.md` - Planning phase detail, link to primary
  - `05-validation/index.md` - Validation phase detail, link to primary
- **Pattern:** Use `:::note` aside with "See [PIV Loops](/agentic-coding-companion/04-implementation/piv-loops/) for the complete mental model."

### Context Engineering (4 Pillars)

- **Primary Location:** `03-planning-layer-2/task-breakdown.md` - Full explanation
- **Secondary Mentions:**
  - `01-setup/context-loading.md` - Memory/RAG aspects
  - `04-implementation/execute-command.md` - Applied during execution
- **Pattern:** Brief mention with link to primary location

### Command Structure (Input/Process/Output)

- **Primary Location:** `03-planning-layer-2/planning-commands.md` - Full template
- **Secondary Mentions:**
  - `05-validation/code-review.md` - Applied to review command
  - `05-validation/system-review.md` - Applied to system review command
- **Pattern:** Reference structure, show specific application

---

## IMPLEMENTATION PLAN

### Phase 1: Setup Stage (3 pages)

Process Module 3 transcripts to populate Setup stage pages.

**Tasks:**
- Read and analyze transcripts 3.1, 3.2, 3.3, 3.4
- Extract key principles about global rules
- Extract context loading strategies
- Enhance index page with stage overview
- Populate global-rules.md with principles and examples
- Populate context-loading.md with principles and examples

### Phase 2: Planning Layer 1 Stage (3 pages)

Process Module 5 transcripts (5.1-5.4) for Layer 1 planning.

**Tasks:**
- Read and analyze transcripts 5.1, 5.2, 5.3, 5.4
- Extract project scope principles
- Extract AI-optimized template patterns
- Enhance index page with stage overview
- Populate project-scope.md
- Populate ai-optimized-templates.md

### Phase 3: Planning Layer 2 Stage (3 pages)

Process Module 2, 4, and 5 transcripts for Layer 2 planning.

**Tasks:**
- Read and analyze transcripts 2.2, 4.1, 4.2, 4.3, 4.5, 5.5, 5.6, 5.7
- Extract task breakdown principles
- Extract command structure patterns
- Enhance index page with stage overview
- Populate task-breakdown.md
- Populate planning-commands.md with command templates

### Phase 4: Implementation Stage (3 pages)

Process Module 2 and 6 transcripts for Implementation stage.

**Tasks:**
- Read and analyze transcripts 2.1, 2.3, 6.1, 6.2
- Extract PIV Loop principles (PRIMARY location)
- Extract execute command patterns
- Enhance index page with stage overview
- Populate piv-loops.md with Steps component
- Populate execute-command.md

### Phase 5: Validation Stage (4 pages)

Process Module 2 and 7 transcripts for Validation stage.

**Tasks:**
- Read and analyze transcripts 2.4, 7.1, 7.2, 7.3, 7.4
- Extract validation pyramid principles
- Extract code review patterns
- Extract system review patterns
- Enhance index page with stage overview
- Populate validation-pyramid.md
- Populate code-review.md with command template
- Populate system-review.md with command template

### Phase 6: Iteration Stage (2 pages)

Process Module 6 transcripts for Iteration stage.

**Tasks:**
- Read and analyze transcript 6.2 (iteration sections)
- Extract system evolution principles
- Enhance index page with stage overview
- Populate evolving-your-system.md

### Phase 7: Cross-Reference Verification

Verify all cross-cutting concepts are properly linked.

**Tasks:**
- Verify PIV Loop references link to primary location
- Verify Context Engineering references link correctly
- Verify Command Structure references are consistent
- Check all internal links resolve correctly

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute tasks in order. Each stage should be completed fully before moving to the next. Request human review after each stage.

---

### STAGE 1: SETUP

#### Task 1.1: READ Setup Stage Transcripts

- **ACTION**: Read all Module 3 transcripts to understand content
- **FILES**:
  - `transcripts/3.1 - The Fundamentals of Global Rules.md`
  - `transcripts/3.2 - The Two Strategies for Context Loading.md`
  - `transcripts/3.3 - Creating Global Rules with AI.md`
  - `transcripts/3.4 - Exercise - Fixing Bloated Global Rules.md`
- **EXTRACT**: Key principles, examples, command patterns, common mistakes
- **NOTE**: Identify timestamp sections that contain concrete principles vs. introductory content

#### Task 1.2: UPDATE src/content/docs/01-setup/index.md

- **ACTION**: Enhance stage index with overview content
- **CONTENT REQUIREMENTS**:
  - Expanded stage overview (3-5 sentences)
  - Why this stage matters
  - Topics list with descriptions
  - Key principles summary (bullet points)
  - Remove placeholder footer
- **PATTERN**: Follow index page pattern from PRD
- **VALIDATE**: `npm run build` - should complete without errors

#### Task 1.3: UPDATE src/content/docs/01-setup/global-rules.md

- **ACTION**: Populate with distilled content from 3.1 and 3.3
- **CONTENT REQUIREMENTS**:
  - Overview: What are global rules, why they matter (2-4 sentences)
  - 4-6 Principles with examples:
    - What global rules are (CLAUDE.md, agents.md)
    - Recommended sections to include
    - Keeping rules concise and actionable
    - Customization to your use case
    - Connection to Layer 1 planning
  - Code examples: Sample CLAUDE.md structure
  - Quick Reference: Checklist format
  - Use `:::tip` for best practices
  - Use `:::caution` for common mistakes
- **REMOVE**: Placeholder text, "Coming soon" messages
- **VALIDATE**: `npm run build` - should complete without errors

#### Task 1.4: UPDATE src/content/docs/01-setup/context-loading.md

- **ACTION**: Populate with distilled content from 3.2
- **CONTENT REQUIREMENTS**:
  - Overview: What is context loading (2-4 sentences)
  - 3-5 Principles with examples:
    - The two strategies (stable vs. dynamic context)
    - What to include in stable context
    - When to load dynamic context
    - Avoiding context window overflow
  - Quick Reference: Checklist format
  - Use `:::tip` for best practices
- **REMOVE**: Placeholder text, "Coming soon" messages
- **VALIDATE**: `npm run build` - should complete without errors

#### Task 1.5: HUMAN REVIEW - Setup Stage

- **ACTION**: Request human review of Stage 1 content
- **PRESENT**: Summary of changes made to 3 files
- **ASK**: "Stage 1 (Setup) is complete. Please review the content for accuracy and completeness. Should I proceed to Stage 2?"

---

### STAGE 2: PLANNING LAYER 1

#### Task 2.1: READ Planning L1 Transcripts

- **ACTION**: Read Module 5 transcripts (5.1-5.4) and relevant Module 2 sections
- **FILES**:
  - `transcripts/5.1 - Important Overview of the Next Few Modules.md`
  - `transcripts/5.2 - The Start of Our Planning System (Project Scope, Layer One Planning).md`
  - `transcripts/5.3 - Implementing Our AI Coding Optimized Template.md`
  - `transcripts/5.4 - Perfecting Our Layer One Planning.md`
  - `transcripts/2.2 - Planning - The Two Layers.md` (Layer 1 sections only)
- **EXTRACT**: Project scope principles, template patterns, PRD guidance

#### Task 2.2: UPDATE src/content/docs/02-planning-layer-1/index.md

- **ACTION**: Enhance stage index with Layer 1 overview
- **CONTENT REQUIREMENTS**:
  - What Layer 1 planning is (done once per project)
  - Difference from Layer 2 planning
  - Topics list with descriptions
  - Key principles summary
  - Brief PIV Loop connection with link to Implementation stage
- **VALIDATE**: `npm run build`

#### Task 2.3: UPDATE src/content/docs/02-planning-layer-1/project-scope.md

- **ACTION**: Populate with content from 5.2
- **CONTENT REQUIREMENTS**:
  - Overview: What is project scope, when to create it
  - 4-6 Principles with examples:
    - PRD creation and structure
    - Defining project goals and constraints
    - Target users and their needs
    - Success criteria
    - Tech stack documentation
  - Example: Sample PRD sections
  - Quick Reference: Project scope checklist
- **VALIDATE**: `npm run build`

#### Task 2.4: UPDATE src/content/docs/02-planning-layer-1/ai-optimized-templates.md

- **ACTION**: Populate with content from 5.3
- **CONTENT REQUIREMENTS**:
  - Overview: What makes templates AI-optimized
  - 3-5 Principles with examples:
    - Clear naming conventions
    - Inline documentation patterns
    - Example implementations for AI to follow
    - Directory structure guidance
    - Documenting the "why"
  - Code examples: Template snippets
  - Quick Reference: Template optimization checklist
- **VALIDATE**: `npm run build`

#### Task 2.5: HUMAN REVIEW - Planning L1 Stage

- **ACTION**: Request human review of Stage 2 content
- **PRESENT**: Summary of changes made to 3 files
- **ASK**: "Stage 2 (Planning Layer 1) is complete. Please review. Should I proceed to Stage 3?"

---

### STAGE 3: PLANNING LAYER 2

#### Task 3.1: READ Planning L2 Transcripts

- **ACTION**: Read relevant transcripts for Layer 2 planning
- **FILES**:
  - `transcripts/2.2 - Planning - The Two Layers.md` (Layer 2 sections)
  - `transcripts/4.1 - The Fundamentals of Commands.md`
  - `transcripts/4.2 - The Optimal Structure for Commands.md`
  - `transcripts/4.3 - Universal Command Patterns.md`
  - `transcripts/4.5 - Command Chaining.md`
  - `transcripts/5.5 - Build Our AI Agent (PIV Loop, Layer Two Planning).md`
  - `transcripts/5.6 - Connecting Our Agents to Obsidian (PIV Loop 2).md`
  - `transcripts/5.7 - Exercise - Creating Your Planning Command.md`
- **EXTRACT**: Task breakdown principles, command structure patterns, planning commands

#### Task 3.2: UPDATE src/content/docs/03-planning-layer-2/index.md

- **ACTION**: Enhance stage index with Layer 2 overview
- **CONTENT REQUIREMENTS**:
  - What Layer 2 planning is (done for every feature)
  - Difference from Layer 1 planning
  - Context engineering introduction (4 pillars)
  - Topics list with descriptions
  - PIV Loop connection with link
- **VALIDATE**: `npm run build`

#### Task 3.3: UPDATE src/content/docs/03-planning-layer-2/task-breakdown.md

- **ACTION**: Populate with content from 2.2, 5.5, 5.6
- **CONTENT REQUIREMENTS**:
  - Overview: What is task breakdown, why it matters
  - 4-6 Principles with examples:
    - Vibe planning vs. structured planning
    - Context Engineering (4 pillars) - PRIMARY location
    - Creating atomic, testable tasks
    - Ordering by dependency
    - Validation criteria per task
  - Example: Structured plan format
  - Quick Reference: Task breakdown checklist
  - Use `:::note` for Context Engineering definition
- **VALIDATE**: `npm run build`

#### Task 3.4: UPDATE src/content/docs/03-planning-layer-2/planning-commands.md

- **ACTION**: Populate with content from 4.1, 4.2, 4.3, 4.5
- **CONTENT REQUIREMENTS**:
  - Overview: What are planning commands
  - 4-6 Principles with examples:
    - Input/Process/Output structure - PRIMARY location
    - Universal command patterns
    - /prime command pattern
    - /plan command pattern
    - Command chaining
  - Code examples: Full command templates (copyable)
  - Quick Reference: Command creation checklist
  - Use `:::tip` for command best practices
- **VALIDATE**: `npm run build`

#### Task 3.5: HUMAN REVIEW - Planning L2 Stage

- **ACTION**: Request human review of Stage 3 content
- **PRESENT**: Summary of changes made to 3 files
- **ASK**: "Stage 3 (Planning Layer 2) is complete. Please review. Should I proceed to Stage 4?"

---

### STAGE 4: IMPLEMENTATION

#### Task 4.1: READ Implementation Transcripts

- **ACTION**: Read Module 2 and 6 transcripts
- **FILES**:
  - `transcripts/2.1 - The PIV Loop (Plan -> Implement -> Validate).md`
  - `transcripts/2.3 - Implementation - Structured Plan Execution.md`
  - `transcripts/6.1 - The Execute Command.md`
  - `transcripts/6.2 - Implementing with Multiple PIV Loops & Evolving Our System.md`
- **EXTRACT**: PIV Loop details, execute command patterns, nested loop concepts

#### Task 4.2: UPDATE src/content/docs/04-implementation/index.md

- **ACTION**: Enhance stage index with Implementation overview
- **CONTENT REQUIREMENTS**:
  - What implementation phase is
  - Role of trust during implementation
  - Topics list with descriptions
  - Key principles summary
- **VALIDATE**: `npm run build`

#### Task 4.3: CONVERT AND UPDATE src/content/docs/04-implementation/piv-loops.md to .mdx

- **ACTION**: Convert to MDX and populate with PIV Loop content - PRIMARY LOCATION
- **RENAME**: `piv-loops.md` → `piv-loops.mdx`
- **CONTENT REQUIREMENTS**:
  - Import Steps component
  - Overview: The core mental model (2-4 sentences)
  - The PIV Loop explained with `<Steps>` component:
    1. Plan - Create structured plan
    2. Implement - Execute task by task
    3. Validate - Review and verify
  - 4-6 Principles with examples:
    - When to use nested loops
    - Multiple PIV loops for complex features
    - Returning to planning when validation fails
    - Human oversight during the loop
  - Visual: ASCII diagram of the loop (if helpful)
  - Quick Reference: PIV Loop checklist
- **GOTCHA**: Update sidebar order in frontmatter if needed
- **VALIDATE**: `npm run build`

#### Task 4.4: UPDATE src/content/docs/04-implementation/execute-command.md

- **ACTION**: Populate with execute command content
- **CONTENT REQUIREMENTS**:
  - Overview: What the execute command does
  - 4-5 Principles with examples:
    - Pointing execute at a structured plan
    - Trust but verify approach
    - When to intervene
    - Task-by-task validation
    - Multiple PIV loops in practice
  - Code example: Execute command template
  - Link to command structure in Planning L2
  - Quick Reference: Execute command checklist
- **VALIDATE**: `npm run build`

#### Task 4.5: HUMAN REVIEW - Implementation Stage

- **ACTION**: Request human review of Stage 4 content
- **PRESENT**: Summary of changes made to 3 files (including .mdx conversion)
- **ASK**: "Stage 4 (Implementation) is complete. Please review. Should I proceed to Stage 5?"

---

### STAGE 5: VALIDATION

#### Task 5.1: READ Validation Transcripts

- **ACTION**: Read Module 7 transcripts
- **FILES**:
  - `transcripts/2.4 - Validation - An AI + Human Effort.md`
  - `transcripts/7.1 - The Validation Pyramid.md`
  - `transcripts/7.2 - Exercise - Create Your Code Review Command.md`
  - `transcripts/7.3 - The Core Validation System Commands.md`
  - `transcripts/7.4 - Exercise - Create Your System Review Command.md`
- **EXTRACT**: Validation pyramid levels, code review patterns, system review patterns

#### Task 5.2: UPDATE src/content/docs/05-validation/index.md

- **ACTION**: Enhance stage index with Validation overview
- **CONTENT REQUIREMENTS**:
  - What validation phase is
  - Human + AI shared responsibility
  - Topics list with descriptions
  - PIV Loop connection (completing the loop)
  - Key principles summary
- **VALIDATE**: `npm run build`

#### Task 5.3: UPDATE src/content/docs/05-validation/validation-pyramid.md

- **ACTION**: Populate with validation pyramid content
- **CONTENT REQUIREMENTS**:
  - Overview: What is the validation pyramid
  - The 5 Levels as principles:
    1. Syntax and linting (automated)
    2. Type checking (automated)
    3. Unit tests (automated)
    4. Integration tests (automated)
    5. Manual testing (human)
  - Each level: What it catches, who does it
  - Use `:::tip` for automation recommendations
  - Quick Reference: Validation pyramid checklist
- **VALIDATE**: `npm run build`

#### Task 5.4: UPDATE src/content/docs/05-validation/code-review.md

- **ACTION**: Populate with code review content
- **CONTENT REQUIREMENTS**:
  - Overview: Why review AI-generated code
  - 4-5 Principles with examples:
    - Understanding what changed and why
    - Checking for security vulnerabilities
    - Verifying pattern consistency
    - Using AI to explain unfamiliar code
  - Code example: Code review command template
  - Reference command structure from Planning L2
  - Quick Reference: Code review checklist
- **VALIDATE**: `npm run build`

#### Task 5.5: UPDATE src/content/docs/05-validation/system-review.md

- **ACTION**: Populate with system review content
- **CONTENT REQUIREMENTS**:
  - Overview: What is system review (reviewing your workflow)
  - 4-5 Principles with examples:
    - Tracking patterns in bugs
    - Identifying friction points
    - Updating global rules when patterns emerge
    - Improving commands based on usage
  - Code example: System review command template
  - Connection to Iteration stage
  - Quick Reference: System review checklist
- **VALIDATE**: `npm run build`

#### Task 5.6: HUMAN REVIEW - Validation Stage

- **ACTION**: Request human review of Stage 5 content
- **PRESENT**: Summary of changes made to 4 files
- **ASK**: "Stage 5 (Validation) is complete. Please review. Should I proceed to Stage 6?"

---

### STAGE 6: ITERATION

#### Task 6.1: READ Iteration Transcripts

- **ACTION**: Read relevant transcript sections
- **FILES**:
  - `transcripts/6.2 - Implementing with Multiple PIV Loops & Evolving Our System.md` (iteration sections)
  - `transcripts/7.3 - The Core Validation System Commands.md` (feedback loop sections)
  - `transcripts/7.4 - Exercise - Create Your System Review Command.md` (system improvement)
- **EXTRACT**: System evolution principles, feedback loop patterns

#### Task 6.2: UPDATE src/content/docs/06-iteration/index.md

- **ACTION**: Enhance stage index with Iteration overview
- **CONTENT REQUIREMENTS**:
  - What iteration phase is
  - Fix the system, not just the bug
  - Topics list with descriptions
  - Key principles summary
- **VALIDATE**: `npm run build`

#### Task 6.3: UPDATE src/content/docs/06-iteration/evolving-your-system.md

- **ACTION**: Populate with system evolution content
- **CONTENT REQUIREMENTS**:
  - Overview: What is system evolution
  - 4-5 Principles with examples:
    - When bugs repeat, update global rules
    - When planning feels incomplete, improve templates
    - When validation misses issues, add to checklist
    - Documenting system changes
    - Periodic system review
  - Examples: Before/after improvements
  - Connection to all previous stages
  - Quick Reference: System evolution checklist
- **VALIDATE**: `npm run build`

#### Task 6.4: HUMAN REVIEW - Iteration Stage

- **ACTION**: Request human review of Stage 6 content
- **PRESENT**: Summary of changes made to 2 files
- **ASK**: "Stage 6 (Iteration) is complete. Please review. Should I proceed to cross-reference verification?"

---

### STAGE 7: CROSS-REFERENCE VERIFICATION

#### Task 7.1: VERIFY PIV Loop Cross-References

- **ACTION**: Check all PIV Loop mentions link to primary location
- **CHECK FILES**:
  - `02-planning-layer-1/index.md`
  - `03-planning-layer-2/index.md`
  - `05-validation/index.md`
- **VERIFY**: Each has `:::note` aside with link to `/agentic-coding-companion/04-implementation/piv-loops/`
- **FIX**: Add missing references if needed

#### Task 7.2: VERIFY Context Engineering Cross-References

- **ACTION**: Check Context Engineering mentions link to primary location
- **PRIMARY**: `03-planning-layer-2/task-breakdown.md`
- **CHECK FILES**:
  - `01-setup/context-loading.md`
  - `04-implementation/execute-command.md`
- **VERIFY**: References link to primary or mention is appropriate for context

#### Task 7.3: VERIFY Command Structure Cross-References

- **ACTION**: Check command structure references
- **PRIMARY**: `03-planning-layer-2/planning-commands.md`
- **CHECK FILES**:
  - `05-validation/code-review.md`
  - `05-validation/system-review.md`
- **VERIFY**: Command templates reference the Input/Process/Output structure

#### Task 7.4: VERIFY All Internal Links

- **ACTION**: Build site and check for broken links
- **COMMAND**: `npm run build 2>&1 | grep -i "error\|warning"`
- **FIX**: Any broken internal links
- **VALIDATE**: Clean build with no link warnings

#### Task 7.5: FINAL HUMAN REVIEW

- **ACTION**: Request final review of all content
- **PRESENT**:
  - Summary of all 20 pages updated
  - Cross-reference verification results
  - Build status
- **ASK**: "Phase 2 Content Distillation is complete. All 20 pages have been populated. Please review the site at `npm run dev`. Any final changes needed?"

---

## TESTING STRATEGY

### Build Verification

After each page update:
```bash
npm run build
```
Must complete without errors.

### Local Preview

After each stage:
```bash
npm run dev
```
- Verify page renders correctly
- Verify navigation works
- Verify code blocks are copyable
- Verify asides render with correct styling

### Content Verification

For each page, verify:
- [ ] Overview is 2-4 sentences
- [ ] Each principle has a summary
- [ ] Each principle has at least one example
- [ ] Quick Reference section exists
- [ ] No placeholder text remains
- [ ] Links resolve correctly

---

## VALIDATION COMMANDS

Execute after each stage completion:

### Level 1: Build Check

```bash
npm run build
```
Expected: Clean build, no errors

### Level 2: Content Structure Check

```bash
# Count principle headers per page
grep -c "^### " src/content/docs/01-setup/global-rules.md
# Expected: 4-6 principles per topic page
```

### Level 3: Placeholder Removal Check

```bash
# Should return empty (no placeholders remaining)
grep -r "Coming soon" src/content/docs/
grep -r "Placeholder content" src/content/docs/
```

### Level 4: Link Validation

```bash
# Build and check for link issues
npm run build 2>&1 | grep -E "(broken|404|not found)"
# Expected: No output
```

### Level 5: Local Preview

```bash
npm run dev
# Open http://localhost:4321/agentic-coding-companion/
# Manually verify each updated page
```

---

## ACCEPTANCE CRITERIA

- [ ] All 6 stage index pages enhanced with overview content
- [ ] All 14 topic pages populated with principles and examples
- [ ] Each principle has 2-4 sentence summary
- [ ] Each principle has at least one concrete example
- [ ] All Quick Reference sections have actionable bullet points
- [ ] No placeholder text ("Coming soon", "Placeholder") remains
- [ ] All code blocks have titles and are copyable
- [ ] Asides (tip, caution, note) used appropriately
- [ ] PIV Loop uses Steps component in primary location
- [ ] Cross-cutting concepts properly linked
- [ ] All internal links resolve correctly
- [ ] Build completes without errors
- [ ] Site renders correctly in local preview
- [ ] Human review approved after each stage

---

## COMPLETION CHECKLIST

### Stage Completion
- [ ] Stage 1: Setup (3 pages) - Human reviewed
- [ ] Stage 2: Planning Layer 1 (3 pages) - Human reviewed
- [ ] Stage 3: Planning Layer 2 (3 pages) - Human reviewed
- [ ] Stage 4: Implementation (3 pages, 1 MDX conversion) - Human reviewed
- [ ] Stage 5: Validation (4 pages) - Human reviewed
- [ ] Stage 6: Iteration (2 pages) - Human reviewed
- [ ] Stage 7: Cross-reference verification - Complete

### Quality Checks
- [ ] All validation commands pass
- [ ] No placeholder text remains
- [ ] All links work
- [ ] Build succeeds
- [ ] Local preview looks correct
- [ ] Final human review approved

---

## NOTES

### Design Decisions

1. **Stage-by-stage processing**: Ensures consistency within stages and allows for incremental human review
2. **MDX for Steps component**: Only `piv-loops.md` needs MDX conversion for the Steps component; other pages use Markdown aside syntax
3. **Primary/secondary concept locations**: Prevents duplication while maintaining context in each page
4. **Human review checkpoints**: After each stage to catch issues early

### Content Guidelines

1. **Voice**: Active, imperative for checklists ("Do this", "Avoid that")
2. **Length**: Summaries 2-4 sentences, Quick Reference bullets under 15 words each
3. **Examples**: Prefer actual command/code examples over abstract descriptions
4. **Cross-references**: Use relative paths with base URL prefix: `/agentic-coding-companion/...`

### Risks

1. **Transcript Quality**: Some transcripts may have less extractable content - supplement with related transcripts
2. **Content Overlap**: Cross-cutting concepts may feel repetitive - use linking strategy to reduce
3. **Human Review Time**: Budget adequate time for review after each stage

### Post-Implementation

After Phase 2:
1. Deploy to GitHub Pages via push to main
2. Verify live site at https://joseph-fajen.github.io/agentic-coding-companion
3. Test search functionality with actual content
4. Consider Phase 3: Polish & Launch items from PRD
