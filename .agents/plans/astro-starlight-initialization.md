# Feature: Astro/Starlight Project Initialization (Phase 1: Foundation)

The following plan should be complete, but validate documentation and codebase patterns before implementing.

Pay special attention to file paths and directory structure. This is a greenfield initialization that must preserve existing transcript files.

## Feature Description

Initialize the Agentic Coding Companion documentation website using Astro with the Starlight theme. This establishes the project foundation with proper directory structure, sidebar navigation for six workflow stages, placeholder content pages, and GitHub Pages deployment via GitHub Actions. The existing 27 course transcript files will be preserved in a `transcripts/` subdirectory.

## User Story

As an agentic coding course student
I want a navigable documentation website with placeholder content
So that I can see the site structure and prepare for content population

## Problem Statement

The project currently contains only raw transcript markdown files and a PRD. There is no web framework, build system, or deployment pipeline. Users cannot access the content via a website.

## Solution Statement

Create a complete Astro/Starlight project with:
- Six-stage sidebar navigation matching the agentic coding workflow
- Placeholder pages for each stage and topic
- GitHub Actions workflow for automated deployment
- GitHub Pages hosting configuration

## Feature Metadata

**Feature Type**: New Capability
**Estimated Complexity**: Low-Medium
**Primary Systems Affected**: New project (no existing systems)
**Dependencies**: Astro ^4.x, @astrojs/starlight, Node.js ^18.x

---

## CONTEXT REFERENCES

### Relevant Codebase Files

- `PRD.md` (lines 169-205) - Target directory structure specification
- `PRD.md` (lines 355-381) - Astro configuration example with sidebar
- `PRD.md` (lines 385-389) - GitHub Actions deployment requirements
- `_Frontmatter Reference.md` - Existing frontmatter schema (for reference, not used in website)

### New Files to Create

**Project Configuration:**
- `package.json` - Node.js project configuration
- `astro.config.mjs` - Astro and Starlight configuration
- `tsconfig.json` - TypeScript configuration
- `.gitignore` - Git ignore patterns for Node.js/Astro

**GitHub Actions:**
- `.github/workflows/deploy.yml` - Deployment workflow

**Content Structure:**
- `src/content/docs/index.mdx` - Homepage
- `src/content/docs/01-setup/index.md` - Setup stage overview
- `src/content/docs/01-setup/global-rules.md` - Topic placeholder
- `src/content/docs/01-setup/context-loading.md` - Topic placeholder
- `src/content/docs/02-planning-layer-1/index.md` - Planning L1 stage overview
- `src/content/docs/02-planning-layer-1/project-scope.md` - Topic placeholder
- `src/content/docs/02-planning-layer-1/ai-optimized-templates.md` - Topic placeholder
- `src/content/docs/03-planning-layer-2/index.md` - Planning L2 stage overview
- `src/content/docs/03-planning-layer-2/task-breakdown.md` - Topic placeholder
- `src/content/docs/03-planning-layer-2/planning-commands.md` - Topic placeholder
- `src/content/docs/04-implementation/index.md` - Implementation stage overview
- `src/content/docs/04-implementation/execute-command.md` - Topic placeholder
- `src/content/docs/04-implementation/piv-loops.md` - Topic placeholder
- `src/content/docs/05-validation/index.md` - Validation stage overview
- `src/content/docs/05-validation/validation-pyramid.md` - Topic placeholder
- `src/content/docs/05-validation/code-review.md` - Topic placeholder
- `src/content/docs/05-validation/system-review.md` - Topic placeholder
- `src/content/docs/06-iteration/index.md` - Iteration stage overview
- `src/content/docs/06-iteration/evolving-your-system.md` - Topic placeholder

**Assets:**
- `src/assets/` - Directory for images (empty initially)
- `public/` - Static assets directory

**Transcript Archive:**
- `transcripts/` - Directory containing moved transcript files

### Relevant Documentation - READ BEFORE IMPLEMENTING

- [Starlight Getting Started](https://starlight.astro.build/getting-started/)
  - Project creation and directory structure
  - Why: Official setup instructions

- [Astro GitHub Pages Deployment](https://docs.astro.build/en/guides/deploy/github/)
  - GitHub Actions workflow configuration
  - Why: Exact workflow YAML and config settings

- [Starlight Sidebar Configuration](https://starlight.astro.build/guides/sidebar/)
  - Autogenerate syntax and ordering
  - Why: Sidebar structure implementation

- [Starlight Frontmatter Reference](https://starlight.astro.build/reference/frontmatter/)
  - Page frontmatter schema
  - Why: Correct frontmatter for content pages

### Patterns to Follow

**Sidebar Autogenerate Pattern:**
```javascript
{
  label: '1. Setup',
  autogenerate: { directory: '01-setup' },
}
```

**Page Frontmatter Pattern:**
```yaml
---
title: Page Title
description: 2-4 sentence description for SEO and search.
sidebar:
  order: 1
---
```

**Stage Index Page Pattern:**
```yaml
---
title: Stage Name
description: Stage overview description.
sidebar:
  order: 0
---

Brief overview of this workflow stage.

## Topics in This Stage

- **Topic 1** - Brief description
- **Topic 2** - Brief description
```

**Topic Page Pattern:**
```yaml
---
title: Topic Name
description: Topic description.
sidebar:
  order: 1
---

## Overview

2-4 sentence topic summary. Content will be added in Phase 2.

## Principles

*Coming soon - content from course transcripts will be distilled here.*

## Quick Reference

- Placeholder checklist item 1
- Placeholder checklist item 2
```

---

## IMPLEMENTATION PLAN

### Phase 1: Project Setup

Move existing transcript files to archive directory, then initialize Astro/Starlight project in the repository root.

**Tasks:**
- Create transcripts directory and move existing .md files
- Initialize Astro project with Starlight template
- Configure for GitHub Pages deployment

### Phase 2: Sidebar & Navigation

Configure the sidebar with six workflow stages using autogenerate for each directory.

**Tasks:**
- Update astro.config.mjs with complete sidebar configuration
- Set site and base URLs for GitHub Pages

### Phase 3: Content Structure

Create placeholder content pages for all stages and topics.

**Tasks:**
- Create homepage with site overview
- Create stage index pages (6 total)
- Create topic placeholder pages (14 total)

### Phase 4: Deployment Setup

Configure GitHub Actions for automated deployment to GitHub Pages.

**Tasks:**
- Create deployment workflow file
- Add GitHub remote to repository
- Push to trigger initial deployment

---

## STEP-BY-STEP TASKS

IMPORTANT: Execute every task in order, top to bottom. Each task is atomic and independently testable.

### Task 1: CREATE transcripts/ directory and move transcript files

- **IMPLEMENT**: Create `transcripts/` directory, move all existing lesson markdown files (*.md except PRD.md and _Frontmatter Reference.md) into it
- **PATTERN**: Preserve original filenames
- **GOTCHA**: Do NOT move PRD.md or _Frontmatter Reference.md - they stay in root
- **VALIDATE**: `ls transcripts/ | wc -l` should return 27

### Task 2: CREATE Astro project files via npm create

- **IMPLEMENT**: Run `npm create astro@latest -- --template starlight --no-git --no-install` in project root, accepting defaults for project name "." (current directory)
- **PATTERN**: Use `--no-git` since git is already initialized, `--no-install` to control when dependencies install
- **GOTCHA**: If prompted about overwriting, allow it - we've preserved transcripts
- **GOTCHA**: The command may fail if directory is not empty. If so, create in temp directory and copy files.
- **VALIDATE**: `ls astro.config.mjs` should exist

### Task 3: UPDATE .gitignore for Node.js/Astro

- **IMPLEMENT**: Ensure .gitignore includes Node.js and Astro patterns
- **PATTERN**: Standard Astro .gitignore entries
- **IMPORTS**: None
- **VALIDATE**: `grep -q "node_modules" .gitignore && echo "OK"`

**Required .gitignore content:**
```
# Dependencies
node_modules/

# Build output
dist/

# Astro
.astro/

# Environment
.env
.env.*
!.env.example

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

### Task 4: UPDATE astro.config.mjs with full configuration

- **IMPLEMENT**: Replace default astro.config.mjs with complete configuration including site URL, base path, and sidebar with all six stages
- **PATTERN**: Use autogenerate for each stage directory
- **IMPORTS**: `import { defineConfig } from 'astro/config'` and `import starlight from '@astrojs/starlight'`
- **GOTCHA**: Base path must match repository name exactly: `/agentic-coding-companion`
- **VALIDATE**: `grep -q "joseph-fajen.github.io" astro.config.mjs && echo "OK"`

**Required astro.config.mjs content:**
```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://joseph-fajen.github.io',
  base: '/agentic-coding-companion',
  integrations: [
    starlight({
      title: 'Agentic Coding Companion',
      description: 'A scannable reference guide for agentic coding methodologies from the Dynamous course.',
      social: {
        github: 'https://github.com/joseph-fajen/agentic-coding-companion',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: '1. Setup',
          autogenerate: { directory: '01-setup' },
        },
        {
          label: '2. Planning (Layer 1)',
          autogenerate: { directory: '02-planning-layer-1' },
        },
        {
          label: '3. Planning (Layer 2)',
          autogenerate: { directory: '03-planning-layer-2' },
        },
        {
          label: '4. Implementation',
          autogenerate: { directory: '04-implementation' },
        },
        {
          label: '5. Validation',
          autogenerate: { directory: '05-validation' },
        },
        {
          label: '6. Iteration',
          autogenerate: { directory: '06-iteration' },
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/joseph-fajen/agentic-coding-companion/edit/main/',
      },
      customCss: [],
    }),
  ],
});
```

### Task 5: CREATE src/content/docs/index.mdx (Homepage)

- **IMPLEMENT**: Create homepage with hero section and overview of the six stages
- **PATTERN**: Use Starlight's `template: splash` for landing page layout
- **IMPORTS**: Starlight Card and CardGrid components
- **VALIDATE**: `test -f src/content/docs/index.mdx && echo "OK"`

**Required content:**
```mdx
---
title: Agentic Coding Companion
description: A scannable reference guide for applying agentic coding methodologies.
template: splash
hero:
  tagline: Your quick-reference guide for the Dynamous Agentic Coding course. Scan principles, copy commands, and verify your workflow at every stage.
  actions:
    - text: Start with Setup
      link: /agentic-coding-companion/01-setup/
      icon: right-arrow
      variant: primary
    - text: View on GitHub
      link: https://github.com/joseph-fajen/agentic-coding-companion
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## The Agentic Coding Workflow

Follow these six stages for reliable, repeatable AI-assisted development.

<CardGrid>
  <Card title="1. Setup" icon="setting">
    Configure global rules and context loading strategies before you start coding.
  </Card>
  <Card title="2. Planning (Layer 1)" icon="document">
    Define project scope, create PRDs, and establish AI-optimized templates.
  </Card>
  <Card title="3. Planning (Layer 2)" icon="list-format">
    Break down tasks, create structured plans, and prepare for implementation.
  </Card>
  <Card title="4. Implementation" icon="rocket">
    Execute your plan using the PIV loop methodology.
  </Card>
  <Card title="5. Validation" icon="approve-check">
    Review code, run tests, and verify against acceptance criteria.
  </Card>
  <Card title="6. Iteration" icon="random">
    Evolve your system based on learnings and fix patterns, not just bugs.
  </Card>
</CardGrid>

## How to Use This Guide

1. **During active work** - Open the relevant stage and scan the checklist
2. **Looking for specifics** - Use search (Ctrl/Cmd + K) to find principles or commands
3. **Learning the workflow** - Read through stages sequentially

---

*Content distilled from the [Dynamous Agentic Coding Course](https://dynamous.com).*
```

### Task 6: CREATE src/content/docs/01-setup/ directory and pages

- **IMPLEMENT**: Create directory with index.md, global-rules.md, and context-loading.md
- **PATTERN**: Use stage index pattern for index.md, topic pattern for others
- **VALIDATE**: `ls src/content/docs/01-setup/*.md | wc -l` should return 3

**src/content/docs/01-setup/index.md:**
```markdown
---
title: Setup
description: Configure your AI coding environment with global rules and context loading strategies before starting any project.
sidebar:
  order: 0
---

The Setup stage establishes the foundation for reliable AI-assisted development. Before writing any code, configure your environment to guide your AI coding assistant effectively.

## Topics in This Stage

- **[Global Rules](/agentic-coding-companion/01-setup/global-rules/)** - Define persistent rules that apply to every interaction
- **[Context Loading](/agentic-coding-companion/01-setup/context-loading/)** - Strategies for providing relevant context to your AI assistant

## Key Principles

- Configure rules once, benefit throughout the project
- Load context strategically - not everything at once
- Establish patterns your AI assistant will follow consistently

---

*This is a placeholder page. Content will be distilled from course Modules 1 and 3.*
```

**src/content/docs/01-setup/global-rules.md:**
```markdown
---
title: Global Rules
description: Define persistent rules in CLAUDE.md or similar files that guide your AI coding assistant across all interactions.
sidebar:
  order: 1
---

## Overview

Global rules are persistent instructions stored in configuration files (like `CLAUDE.md`) that your AI coding assistant reads at the start of every session. They establish coding conventions, architectural patterns, and behavioral guidelines.

## Principles

*Coming soon - content from Module 3: The Fundamentals of Global Rules*

## Quick Reference

- [ ] Create CLAUDE.md in project root
- [ ] Define coding conventions and style
- [ ] Specify architectural patterns to follow
- [ ] Set behavioral guidelines for the AI assistant
- [ ] Keep rules concise and actionable

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

**src/content/docs/01-setup/context-loading.md:**
```markdown
---
title: Context Loading
description: Strategies for providing relevant context to your AI coding assistant - what to load, when to load it, and how much.
sidebar:
  order: 2
---

## Overview

Context loading determines what information your AI coding assistant has access to during a session. Strategic context loading improves response quality while avoiding context window overflow.

## Principles

*Coming soon - content from Module 3: The Two Strategies for Context Loading*

## Quick Reference

- [ ] Identify what context is needed for the current task
- [ ] Load project-level context at session start
- [ ] Load task-specific context on demand
- [ ] Avoid loading everything at once
- [ ] Reference documentation URLs for external libraries

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

### Task 7: CREATE src/content/docs/02-planning-layer-1/ directory and pages

- **IMPLEMENT**: Create directory with index.md, project-scope.md, and ai-optimized-templates.md
- **PATTERN**: Same patterns as Task 6
- **VALIDATE**: `ls src/content/docs/02-planning-layer-1/*.md | wc -l` should return 3

**src/content/docs/02-planning-layer-1/index.md:**
```markdown
---
title: Planning (Layer 1)
description: Project-level planning that you do once per project - defining scope, creating PRDs, and establishing AI-optimized templates.
sidebar:
  order: 0
---

Layer 1 planning happens once per project. This is where you establish the high-level scope, create your PRD, and set up templates that will guide all subsequent development.

## Topics in This Stage

- **[Project Scope](/agentic-coding-companion/02-planning-layer-1/project-scope/)** - Define what you're building and why
- **[AI-Optimized Templates](/agentic-coding-companion/02-planning-layer-1/ai-optimized-templates/)** - Create project foundations optimized for AI assistance

## Key Principles

- Do this once per project, update rarely
- Create comprehensive PRD before implementation
- Establish templates that reduce AI assumptions

---

*This is a placeholder page. Content will be distilled from Module 5.*
```

**src/content/docs/02-planning-layer-1/project-scope.md:**
```markdown
---
title: Project Scope
description: Define the high-level goals, constraints, and success criteria for your project before diving into implementation.
sidebar:
  order: 1
---

## Overview

Project scope establishes the boundaries and goals of what you're building. A clear scope prevents feature creep and gives your AI coding assistant a north star to reference throughout development.

## Principles

*Coming soon - content from Module 5: The Start of Our Planning System*

## Quick Reference

- [ ] Define clear project goals
- [ ] Identify target users and their needs
- [ ] List constraints (time, tech stack, resources)
- [ ] Establish success criteria
- [ ] Create or update PRD document

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

**src/content/docs/02-planning-layer-1/ai-optimized-templates.md:**
```markdown
---
title: AI-Optimized Templates
description: Create project foundations and templates that are optimized for AI coding assistants to understand and build upon.
sidebar:
  order: 2
---

## Overview

AI-optimized templates establish project foundations that AI coding assistants can easily understand and extend. Good templates reduce the assumptions your AI needs to make during implementation.

## Principles

*Coming soon - content from Module 5: Implementing Our AI Coding Optimized Template*

## Quick Reference

- [ ] Use clear, consistent naming conventions
- [ ] Include inline documentation for patterns
- [ ] Create example implementations for AI to follow
- [ ] Structure directories logically
- [ ] Document the "why" not just the "what"

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

### Task 8: CREATE src/content/docs/03-planning-layer-2/ directory and pages

- **IMPLEMENT**: Create directory with index.md, task-breakdown.md, and planning-commands.md
- **PATTERN**: Same patterns as previous tasks
- **VALIDATE**: `ls src/content/docs/03-planning-layer-2/*.md | wc -l` should return 3

**src/content/docs/03-planning-layer-2/index.md:**
```markdown
---
title: Planning (Layer 2)
description: Task-level planning that you do for every feature - breaking down work, creating structured plans, and preparing for implementation.
sidebar:
  order: 0
---

Layer 2 planning happens for every feature or task. This is where you break down the work, create a structured plan with the four pillars of context engineering, and prepare for implementation.

## Topics in This Stage

- **[Task Breakdown](/agentic-coding-companion/03-planning-layer-2/task-breakdown/)** - Decompose features into implementable tasks
- **[Planning Commands](/agentic-coding-companion/03-planning-layer-2/planning-commands/)** - Reusable commands for the planning phase

## Key Principles

- Do this for every feature, not just once
- Start with vibe planning, then structure
- Create plans that minimize AI assumptions

---

*This is a placeholder page. Content will be distilled from Modules 4 and 5.*
```

**src/content/docs/03-planning-layer-2/task-breakdown.md:**
```markdown
---
title: Task Breakdown
description: Decompose features into small, implementable tasks that your AI coding assistant can execute one at a time.
sidebar:
  order: 1
---

## Overview

Task breakdown is the process of decomposing a feature into atomic, implementable tasks. Good task breakdown enables your AI coding assistant to work systematically through implementation without losing context.

## Principles

*Coming soon - content from Module 5: Build Our AI Agent (PIV Loop, Layer Two Planning)*

## Quick Reference

- [ ] Start with vibe planning to explore the approach
- [ ] Create structured plan with clear task list
- [ ] Each task should be atomic and testable
- [ ] Include validation criteria for each task
- [ ] Order tasks by dependency

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

**src/content/docs/03-planning-layer-2/planning-commands.md:**
```markdown
---
title: Planning Commands
description: Reusable slash commands for the planning phase - prime, plan, and related workflows.
sidebar:
  order: 2
---

## Overview

Planning commands are reusable prompts that standardize your planning workflow. Commands like `/prime` and `/plan` ensure consistent, high-quality planning across all features.

## Principles

*Coming soon - content from Module 4: Universal Command Patterns*

## Quick Reference

- [ ] Use `/prime` to load project context
- [ ] Use `/plan` to create structured implementation plans
- [ ] Chain commands for complex workflows
- [ ] Customize commands for your specific needs

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

### Task 9: CREATE src/content/docs/04-implementation/ directory and pages

- **IMPLEMENT**: Create directory with index.md, execute-command.md, and piv-loops.md
- **PATTERN**: Same patterns as previous tasks
- **VALIDATE**: `ls src/content/docs/04-implementation/*.md | wc -l` should return 3

**src/content/docs/04-implementation/index.md:**
```markdown
---
title: Implementation
description: Execute your structured plan using the PIV loop methodology and the execute command.
sidebar:
  order: 0
---

Implementation is where your structured plan becomes code. Using the PIV loop and execute command, your AI coding assistant works through tasks systematically while you maintain oversight.

## Topics in This Stage

- **[Execute Command](/agentic-coding-companion/04-implementation/execute-command/)** - The command that drives implementation
- **[PIV Loops](/agentic-coding-companion/04-implementation/piv-loops/)** - The Plan → Implement → Validate cycle

## Key Principles

- Trust but verify during implementation
- Let the AI work through the plan task by task
- Intervene only when necessary

---

*This is a placeholder page. Content will be distilled from Module 6.*
```

**src/content/docs/04-implementation/execute-command.md:**
```markdown
---
title: Execute Command
description: The /execute command drives implementation by having your AI coding assistant work through the structured plan task by task.
sidebar:
  order: 1
---

## Overview

The execute command initiates implementation by pointing your AI coding assistant at a structured plan. The AI works through tasks sequentially, validating as it goes.

## Principles

*Coming soon - content from Module 6: The Execute Command*

## Quick Reference

- [ ] Have a structured plan ready before executing
- [ ] Point execute at the plan file
- [ ] Monitor progress loosely - don't micromanage
- [ ] Let the AI validate each task before proceeding

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

**src/content/docs/04-implementation/piv-loops.md:**
```markdown
---
title: PIV Loops
description: The Plan → Implement → Validate loop is the core mental model for all agentic coding work.
sidebar:
  order: 2
---

## Overview

The PIV loop (Plan → Implement → Validate) is the fundamental cycle of agentic coding. Every feature goes through this loop, and complex features may require multiple nested loops.

## Principles

*Coming soon - content from Module 2: The PIV Loop*

## Quick Reference

- [ ] **Plan**: Create structured plan with context engineering
- [ ] **Implement**: Execute the plan task by task
- [ ] **Validate**: Review code, run tests, verify acceptance criteria
- [ ] **Iterate**: Return to planning if issues found

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

### Task 10: CREATE src/content/docs/05-validation/ directory and pages

- **IMPLEMENT**: Create directory with index.md, validation-pyramid.md, code-review.md, and system-review.md
- **PATTERN**: Same patterns as previous tasks
- **VALIDATE**: `ls src/content/docs/05-validation/*.md | wc -l` should return 4

**src/content/docs/05-validation/index.md:**
```markdown
---
title: Validation
description: Verify your implementation through code review, testing, and system review - both AI-assisted and human-led.
sidebar:
  order: 0
---

Validation ensures your implementation meets requirements and maintains code quality. This is a shared responsibility between you and your AI coding assistant.

## Topics in This Stage

- **[Validation Pyramid](/agentic-coding-companion/05-validation/validation-pyramid/)** - The layers of validation from syntax to manual testing
- **[Code Review](/agentic-coding-companion/05-validation/code-review/)** - AI-assisted and human code review practices
- **[System Review](/agentic-coding-companion/05-validation/system-review/)** - Evaluating your agentic coding system itself

## Key Principles

- AI validates syntax, types, and tests automatically
- Humans validate logic, architecture, and user experience
- Use validation findings to improve your system

---

*This is a placeholder page. Content will be distilled from Module 7.*
```

**src/content/docs/05-validation/validation-pyramid.md:**
```markdown
---
title: Validation Pyramid
description: The layers of validation from automated checks at the base to manual testing at the top.
sidebar:
  order: 1
---

## Overview

The validation pyramid organizes validation activities from fast, automated checks at the base to slower, manual verification at the top. Each layer catches different types of issues.

## Principles

*Coming soon - content from Module 7: The Validation Pyramid*

## Quick Reference

- [ ] **Level 1**: Syntax and linting (automated)
- [ ] **Level 2**: Type checking (automated)
- [ ] **Level 3**: Unit tests (automated)
- [ ] **Level 4**: Integration tests (automated)
- [ ] **Level 5**: Manual testing (human)

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

**src/content/docs/05-validation/code-review.md:**
```markdown
---
title: Code Review
description: Review AI-generated code to ensure quality, security, and alignment with project patterns.
sidebar:
  order: 2
---

## Overview

Code review is essential even when AI writes the code. You should understand what changed, why it changed, and verify it aligns with project patterns and security requirements.

## Principles

*Coming soon - content from Module 7: Exercise - Create Your Code Review Command*

## Quick Reference

- [ ] Review all changes, not just the diff
- [ ] Ask AI to explain unfamiliar code
- [ ] Check for security vulnerabilities
- [ ] Verify patterns match project conventions
- [ ] Use AI-assisted review commands

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

**src/content/docs/05-validation/system-review.md:**
```markdown
---
title: System Review
description: Evaluate and improve your agentic coding system based on patterns observed during validation.
sidebar:
  order: 3
---

## Overview

System review examines your agentic coding workflow itself. When you see repeated issues or friction points, the solution is often to improve your system rather than just fix the immediate problem.

## Principles

*Coming soon - content from Module 7: Exercise - Create Your System Review Command*

## Quick Reference

- [ ] Track patterns in bugs and issues
- [ ] Identify friction points in your workflow
- [ ] Update global rules when patterns emerge
- [ ] Improve commands based on usage
- [ ] Document learnings for future reference

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

### Task 11: CREATE src/content/docs/06-iteration/ directory and pages

- **IMPLEMENT**: Create directory with index.md and evolving-your-system.md
- **PATTERN**: Same patterns as previous tasks
- **VALIDATE**: `ls src/content/docs/06-iteration/*.md | wc -l` should return 2

**src/content/docs/06-iteration/index.md:**
```markdown
---
title: Iteration
description: Evolve your agentic coding system based on learnings - fix the system, not just the bugs.
sidebar:
  order: 0
---

Iteration is about continuous improvement of your agentic coding system. When issues arise, the goal is to fix the system that allowed the issue, not just the immediate symptom.

## Topics in This Stage

- **[Evolving Your System](/agentic-coding-companion/06-iteration/evolving-your-system/)** - Systematically improve your AI coding workflow

## Key Principles

- Fix the system, not just the bug
- Every mistake is an opportunity to improve
- Your system should get more reliable over time

---

*This is a placeholder page. Content will be distilled from Module 6.*
```

**src/content/docs/06-iteration/evolving-your-system.md:**
```markdown
---
title: Evolving Your System
description: Systematically improve your agentic coding system based on observed patterns and learnings.
sidebar:
  order: 1
---

## Overview

System evolution is the meta-process of improving your agentic coding workflow. When you encounter bugs or friction repeatedly, the high-leverage move is to update your rules, commands, or templates to prevent recurrence.

## Principles

*Coming soon - content from Module 6: Implementing with Multiple PIV Loops & Evolving Our System*

## Quick Reference

- [ ] When bugs repeat, update global rules
- [ ] When planning feels incomplete, improve plan templates
- [ ] When validation misses issues, add to validation checklist
- [ ] Document system changes and their rationale
- [ ] Review system evolution periodically

---

*Placeholder content - will be populated from course transcripts in Phase 2.*
```

### Task 12: CREATE .github/workflows/deploy.yml

- **IMPLEMENT**: Create GitHub Actions workflow for deploying to GitHub Pages
- **PATTERN**: Use withastro/action@v5 as recommended in Astro docs
- **GOTCHA**: Ensure permissions include pages: write and id-token: write
- **VALIDATE**: `test -f .github/workflows/deploy.yml && echo "OK"`

**Required content:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Install, build, and upload site
        uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Task 13: INSTALL dependencies

- **IMPLEMENT**: Run `npm install` to install all dependencies
- **PATTERN**: Standard npm install
- **GOTCHA**: May take a minute, ensure no errors in output
- **VALIDATE**: `test -d node_modules && echo "OK"`

### Task 14: VERIFY local development server

- **IMPLEMENT**: Run `npm run dev` briefly to verify site builds and serves correctly
- **PATTERN**: Development server should start without errors
- **GOTCHA**: Kill the server after verification (Ctrl+C)
- **VALIDATE**: Site should be accessible at localhost URL shown in terminal

### Task 15: CREATE GitHub repository and push

- **IMPLEMENT**: Create GitHub repo and push all changes
- **PATTERN**: Use `gh repo create` for convenience or manual creation
- **GOTCHA**: Repository must be named `agentic-coding-companion` to match base path
- **VALIDATE**: `gh repo view joseph-fajen/agentic-coding-companion` should succeed

**Commands:**
```bash
# Create repo (if not exists)
gh repo create agentic-coding-companion --public --source=. --push

# Or if repo exists, add remote and push
git remote add origin https://github.com/joseph-fajen/agentic-coding-companion.git
git add -A
git commit -m "feat: Initialize Astro/Starlight documentation site"
git push -u origin main
```

### Task 16: ENABLE GitHub Pages in repository settings

- **IMPLEMENT**: Configure GitHub Pages to use GitHub Actions as source
- **PATTERN**: Settings → Pages → Source: GitHub Actions
- **GOTCHA**: This may need to be done manually in GitHub UI
- **VALIDATE**: Check that GitHub Actions workflow runs successfully

---

## TESTING STRATEGY

### Build Verification

The Astro build process validates:
- All markdown files have valid frontmatter
- All internal links resolve correctly
- All imports are valid

### Local Preview

Run `npm run dev` to verify:
- Homepage renders with hero and cards
- Sidebar shows all six stages
- Navigation between pages works
- Search functionality works (Ctrl/Cmd + K)

### Deployment Verification

After push to main:
- GitHub Actions workflow completes successfully
- Site is accessible at https://joseph-fajen.github.io/agentic-coding-companion
- All pages load without 404 errors

---

## VALIDATION COMMANDS

Execute every command to ensure zero regressions and 100% feature correctness.

### Level 1: Syntax & Style

```bash
# Verify Astro config syntax
npm run build 2>&1 | head -20
```

### Level 2: Build Check

```bash
# Full build
npm run build

# Check build output exists
ls -la dist/
```

### Level 3: Content Verification

```bash
# Verify all content files exist
find src/content/docs -name "*.md" -o -name "*.mdx" | wc -l
# Expected: 20 files (1 index.mdx + 19 .md files)

# Verify directory structure
ls -la src/content/docs/
```

### Level 4: Local Server Test

```bash
# Start dev server (run in background, then kill)
npm run dev &
sleep 5
curl -s http://localhost:4321/agentic-coding-companion/ | head -20
kill %1
```

### Level 5: Manual Validation

1. Open http://localhost:4321/agentic-coding-companion/ in browser
2. Verify homepage hero and cards render
3. Click through each stage in sidebar
4. Verify all 6 stage index pages load
5. Verify all topic pages load
6. Test search (Ctrl/Cmd + K)
7. Test dark/light mode toggle
8. Test on mobile viewport

---

## ACCEPTANCE CRITERIA

- [x] Astro/Starlight project initializes successfully
- [ ] Sidebar displays all six workflow stages
- [ ] Each stage has an index page and topic pages
- [ ] Homepage displays with hero section and stage cards
- [ ] Search functionality works (Ctrl/Cmd + K)
- [ ] Dark/light mode toggle works
- [ ] Local development server runs without errors
- [ ] Build completes without errors
- [ ] GitHub Actions workflow exists
- [ ] Transcript files preserved in transcripts/ directory
- [ ] Site deploys to GitHub Pages successfully
- [ ] Site accessible at https://joseph-fajen.github.io/agentic-coding-companion

---

## COMPLETION CHECKLIST

- [ ] Task 1: Transcripts moved to transcripts/
- [ ] Task 2: Astro project created
- [ ] Task 3: .gitignore configured
- [ ] Task 4: astro.config.mjs configured
- [ ] Task 5: Homepage created
- [ ] Task 6: 01-setup pages created
- [ ] Task 7: 02-planning-layer-1 pages created
- [ ] Task 8: 03-planning-layer-2 pages created
- [ ] Task 9: 04-implementation pages created
- [ ] Task 10: 05-validation pages created
- [ ] Task 11: 06-iteration pages created
- [ ] Task 12: GitHub Actions workflow created
- [ ] Task 13: Dependencies installed
- [ ] Task 14: Local server verified
- [ ] Task 15: Pushed to GitHub
- [ ] Task 16: GitHub Pages enabled
- [ ] All validation commands pass
- [ ] Manual testing complete

---

## NOTES

### Design Decisions

1. **Autogenerate sidebar** - Chose autogenerate over manual entries for easier content management in Phase 2
2. **Numbered directory prefixes** - Using `01-setup/` etc. ensures consistent ordering regardless of alphabetical sort
3. **Minimal placeholder content** - Pages have just enough structure to validate navigation; real content comes in Phase 2
4. **MDX for homepage only** - Homepage uses MDX for Starlight components (Card, CardGrid); topic pages use plain Markdown

### Risks

1. **Astro template in non-empty directory** - May need to create in temp location and merge files
2. **GitHub Pages first deploy** - May require manual enabling in repository settings UI
3. **Search indexing** - Pagefind indexes at build time; placeholder content will have minimal search value until Phase 2

### Post-Implementation

After this phase:
1. Verify site is live at GitHub Pages URL
2. Share URL for early feedback on navigation structure
3. Proceed to Phase 2: Content Distillation

### Alternative Approach (if npm create fails in non-empty directory)

If Task 2 fails due to non-empty directory:
1. Create temp directory: `mkdir /tmp/starlight-init && cd /tmp/starlight-init`
2. Run create command there
3. Copy generated files back to project (excluding .git)
4. Continue with remaining tasks
