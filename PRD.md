# Agentic Coding Companion - Product Requirements Document

## 1. Executive Summary

The Agentic Coding Companion is an interactive reference website designed to serve as a distilled, navigable guide for applying agentic coding methodologies. Rather than a chatbot or AI assistant, it functions as a structured "cheat sheet" that developers can reference while working on projects to ensure they haven't forgotten essential considerations at each stage of the agentic coding workflow.

The website organizes content sequentially by workflow stages—from project setup through validation and iteration—mirroring how developers actually progress through projects. Each stage contains topics, principles, and examples distilled from the Dynamous Agentic Coding course (Modules 1-7), condensed from ~40,000 lines of video transcripts into scannable, actionable summaries.

**MVP Goal:** Deliver a functional, navigable reference site covering the essential agentic coding workflow stages, built with Astro and Starlight, deployed to GitHub Pages, enabling users to quickly verify they're applying agentic coding methods correctly and thoroughly.

---

## 2. Mission

**Mission Statement:** Provide agentic coding practitioners with immediate, scannable access to essential principles and practices so they can confidently apply the methodology without missing critical considerations.

### Core Principles

1. **Sequential Workflow Alignment** - Content organization mirrors the natural progression of agentic coding projects
2. **Scannable Over Comprehensive** - Prioritize quick verification over exhaustive explanation
3. **Principle → Example Structure** - Every principle is grounded with practical examples
4. **Low Friction Access** - Fast navigation, full-text search, collapsible sections
5. **Shareable Knowledge** - Designed for personal use but structured for community sharing

---

## 3. Target Users

### Primary Persona: Agentic Coding Practitioner

- **Background:** Developer who has completed or is taking the Dynamous Agentic Coding course
- **Technical Comfort:** Comfortable with development workflows, CLI tools, AI coding assistants
- **Context of Use:** Actively working on projects using agentic coding methods
- **Primary Need:** Quick verification that they haven't forgotten essential considerations at each workflow stage

### Key User Needs

| Need | Description |
|------|-------------|
| **Verification** | "Am I forgetting anything at this stage?" |
| **Quick Reference** | Rapidly locate specific principles or command patterns |
| **Workflow Guidance** | Understand what comes next in the agentic coding process |
| **Reinforcement** | Internalize concepts through repeated, scannable exposure |

### Pain Points Addressed

- Course transcripts are too long to reference quickly during active work
- Easy to forget key principles when focused on implementation
- No centralized, scannable reference for the methodology exists

---

## 4. MVP Scope

### In Scope

**Core Functionality**
- ✅ Six-stage sequential navigation (Setup → Planning L1 → Planning L2 → Implementation → Validation → Iteration)
- ✅ Four-level content hierarchy: Stage → Topic → Principle → Example
- ✅ Collapsible sections for drill-down navigation
- ✅ Full-text search across all content
- ✅ Copy-to-clipboard for command snippets

**Content**
- ✅ Distilled content from Modules 1-7 (27 lessons)
- ✅ 2-4 sentence summaries at each hierarchy level
- ✅ Bullet lists for scannable principles
- ✅ Command examples with copyable code blocks

**Technical**
- ✅ Astro framework with Starlight documentation theme
- ✅ GitHub Pages deployment
- ✅ Mobile-responsive design
- ✅ Dark/light mode support (Starlight built-in)

### Out of Scope (Future Phases)

**Content**
- ❌ Module 8+ content (GitHub integration, advanced topics)
- ❌ Video embeds or multimedia content
- ❌ Interactive exercises or quizzes

**Features**
- ❌ Progress tracking (which sections reviewed)
- ❌ User accounts or personalization
- ❌ Comments or annotations
- ❌ PDF/print export

**Technical**
- ❌ Custom domain
- ❌ Analytics beyond basic GitHub Pages stats
- ❌ Backend/database

---

## 5. User Stories

### Primary User Stories

**US-1: Stage Verification**
> As an agentic coding practitioner starting a new project phase, I want to scan the relevant stage's checklist so that I don't miss any essential considerations.

*Example: Before writing a PRD, I open the "Planning - Layer 1" stage and scan the topics to ensure I'm addressing project scope, context loading, and AI-optimized templates.*

**US-2: Principle Lookup**
> As a practitioner implementing a feature, I want to quickly search for a specific principle so that I can apply it correctly.

*Example: I search for "command chaining" and immediately find the principle with examples of how to chain commands effectively.*

**US-3: Command Reference**
> As a practitioner writing a slash command, I want to copy a command template so that I follow the optimal structure.

*Example: I navigate to the Commands topic, expand the "Optimal Structure" principle, and copy the command template code block.*

**US-4: Sequential Guidance**
> As a practitioner unsure what comes next, I want to see the workflow stages in order so that I understand the proper sequence.

*Example: After completing validation, I see "Iteration" is the next stage and review what that entails.*

**US-5: Deep Dive**
> As a practitioner wanting more detail on a topic, I want to expand a section to see principles and examples so that I understand the nuances.

*Example: I click on "The Two Layers of Planning" topic to expand it and see the detailed principles for Layer 1 vs Layer 2 planning.*

**US-6: Mobile Reference**
> As a practitioner working across devices, I want the site to work on mobile so that I can reference it from my phone or tablet.

*Example: While away from my desk, I pull up the site on my phone to review the validation pyramid before a code review.*

**US-7: Community Sharing**
> As a course community member, I want to share the reference with fellow students so that we can all benefit from the distilled content.

*Example: I share the GitHub Pages URL in the course Discord for others taking the course.*

---

## 6. Core Architecture & Patterns

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Pages                         │
│                   (Static Hosting)                      │
└─────────────────────────────────────────────────────────┘
                          ▲
                          │ Deploy
                          │
┌─────────────────────────────────────────────────────────┐
│                   Astro + Starlight                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │   Sidebar   │  │   Search    │  │  Content Pages  │ │
│  │ Navigation  │  │ (Pagefind)  │  │   (Markdown)    │ │
│  └─────────────┘  └─────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ▲
                          │ Build
                          │
┌─────────────────────────────────────────────────────────┐
│                  Content (Markdown)                     │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Stage → Topic → Principle → Example Structure  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Directory Structure

```
agentic-coding-companion/
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── index.md                    # Homepage
│   │       ├── 01-setup/
│   │       │   ├── index.md                # Stage overview
│   │       │   ├── global-rules.md         # Topic
│   │       │   └── context-loading.md      # Topic
│   │       ├── 02-planning-layer-1/
│   │       │   ├── index.md
│   │       │   ├── project-scope.md
│   │       │   └── ai-optimized-templates.md
│   │       ├── 03-planning-layer-2/
│   │       │   ├── index.md
│   │       │   ├── task-breakdown.md
│   │       │   └── planning-commands.md
│   │       ├── 04-implementation/
│   │       │   ├── index.md
│   │       │   ├── execute-command.md
│   │       │   └── piv-loops.md
│   │       ├── 05-validation/
│   │       │   ├── index.md
│   │       │   ├── validation-pyramid.md
│   │       │   ├── code-review.md
│   │       │   └── system-review.md
│   │       └── 06-iteration/
│   │           ├── index.md
│   │           └── evolving-your-system.md
│   └── assets/                             # Images, diagrams
├── astro.config.mjs                        # Astro configuration
├── package.json
├── transcripts/                            # Source transcripts (reference)
│   └── [original course transcripts]
└── README.md
```

### Content Structure Pattern

Each topic page follows this structure:

```markdown
---
title: [Topic Name]
description: [2-4 sentence summary]
---

## Overview
[2-4 sentence topic summary]

## Principles

### [Principle 1 Name]
[2-4 sentence principle summary]

**Example:**
[Concrete example with code if applicable]

### [Principle 2 Name]
[2-4 sentence principle summary]

**Example:**
[Concrete example]

## Quick Reference
- Bullet point checklist items
- Key reminders
- Common pitfalls to avoid
```

### Key Design Patterns

1. **Progressive Disclosure** - Stage overview → Topic detail → Principle → Example
2. **Consistent Structure** - Every topic follows the same template
3. **Scannable First** - Bullet points and short paragraphs over prose
4. **Code-Ready** - Command examples in copyable code blocks

---

## 7. Features

### 7.1 Navigation System

**Purpose:** Enable sequential workflow navigation with drill-down capability

**Key Features:**
- Sidebar with six top-level stages
- Collapsible stage sections revealing topics
- Breadcrumb navigation showing current location
- Previous/Next page navigation at bottom of each page

### 7.2 Search

**Purpose:** Enable rapid lookup of specific principles, commands, or concepts

**Key Features:**
- Full-text search across all content (Starlight built-in via Pagefind)
- Keyboard shortcut (Ctrl/Cmd + K)
- Search results with context preview
- Highlights matching terms

### 7.3 Content Display

**Purpose:** Present distilled content in scannable, actionable format

**Key Features:**
- Collapsible sections for principles and examples
- Syntax-highlighted code blocks
- Copy-to-clipboard button on code blocks
- Responsive typography optimized for reading

### 7.4 Mobile Support

**Purpose:** Enable reference access on any device

**Key Features:**
- Responsive layout (Starlight built-in)
- Mobile-friendly navigation (hamburger menu)
- Touch-optimized interactions
- Readable typography at all screen sizes

### 7.5 Theme Support

**Purpose:** Comfortable reading in any lighting condition

**Key Features:**
- Dark mode (default)
- Light mode option
- System preference detection
- Persistent preference storage

---

## 8. Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | ^4.x | Static site generator |
| **Starlight** | ^0.x | Documentation theme for Astro |
| **Node.js** | ^18.x | Build environment |

### Built-in Dependencies (via Starlight)

| Dependency | Purpose |
|------------|---------|
| **Pagefind** | Client-side full-text search |
| **Shiki** | Syntax highlighting |
| **Expressive Code** | Enhanced code blocks with copy button |

### Development Dependencies

| Dependency | Purpose |
|------------|---------|
| **TypeScript** | Type safety (optional, Starlight default) |
| **Sharp** | Image optimization |

### Deployment

| Service | Purpose |
|---------|---------|
| **GitHub Pages** | Static hosting |
| **GitHub Actions** | Automated build and deploy |

---

## 9. Security & Configuration

### Security Scope

**In Scope:**
- ✅ No user data collection
- ✅ No authentication required
- ✅ Static content only (no server-side processing)
- ✅ HTTPS via GitHub Pages

**Out of Scope:**
- ❌ User accounts
- ❌ Form submissions
- ❌ API endpoints
- ❌ Database connections

### Configuration

**Build Configuration (astro.config.mjs):**
```javascript
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://[username].github.io',
  base: '/agentic-coding-companion',
  integrations: [
    starlight({
      title: 'Agentic Coding Companion',
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: '1. Setup',
          autogenerate: { directory: '01-setup' },
        },
        {
          label: '2. Planning (Layer 1)',
          autogenerate: { directory: '02-planning-layer-1' },
        },
        // ... remaining stages
      ],
    }),
  ],
});
```

### Deployment Configuration

**GitHub Actions Workflow (.github/workflows/deploy.yml):**
- Triggered on push to main branch
- Builds Astro site
- Deploys to GitHub Pages

---

## 10. Content Workflow

### Phase 1: Distillation

**Input:** 27 raw lesson transcripts (~40,000 lines)

**Process:**
1. AI-assisted distillation of each lesson
2. Extract key principles and examples
3. Condense to 2-4 sentence summaries per concept
4. Human review and refinement

**Output:** Distilled content per lesson with:
- Lesson summary
- Key principles (2-4 sentences each)
- Concrete examples
- Command patterns (where applicable)

### Phase 2: Mapping

**Input:** Distilled lesson content

**Process:**
1. Map each lesson's content to appropriate website stage(s)
2. Group related principles into topics
3. Handle cross-cutting concepts (e.g., PIV Loop appears in multiple stages)
4. Create stage overview summaries

**Output:** Content organized by Stage → Topic → Principle → Example

### Lesson-to-Stage Mapping (Preliminary)

| Course Module | Primary Website Stage |
|---------------|----------------------|
| Module 1: Introduction | Setup (context) |
| Module 2: PIV Loop | Cross-cutting (all stages) |
| Module 3: Global Rules | Setup |
| Module 4: Commands | Planning Layer 2, Implementation |
| Module 5: Planning System | Planning Layer 1, Planning Layer 2 |
| Module 6: Execute | Implementation |
| Module 7: Validation | Validation |

---

## 11. Success Criteria

### MVP Definition of Done

The MVP is complete when:

**Functional Requirements:**
- ✅ All six workflow stages have content pages
- ✅ Each stage contains at least 2 topics with principles and examples
- ✅ Sidebar navigation works with collapsible sections
- ✅ Full-text search returns relevant results
- ✅ Code blocks have copy-to-clipboard functionality
- ✅ Site is deployed and accessible on GitHub Pages
- ✅ Site is responsive on mobile devices

**Content Requirements:**
- ✅ Modules 1-7 content is distilled and mapped to stages
- ✅ Each principle has 2-4 sentence summary
- ✅ Each principle has at least one example
- ✅ Command patterns are documented with copyable snippets

**Quality Indicators:**
- ✅ Page load time < 3 seconds
- ✅ Search returns results in < 1 second
- ✅ No broken internal links
- ✅ Consistent formatting across all pages

### User Experience Goals

| Goal | Measure |
|------|---------|
| Quick verification | User can scan a stage's content in < 2 minutes |
| Fast lookup | User can find a specific principle via search in < 30 seconds |
| Clear navigation | User always knows where they are in the workflow |
| Actionable content | Every principle has a concrete example |

---

## 12. Implementation Phases

### Phase 1: Foundation

**Goal:** Establish project structure and deploy placeholder site

**Deliverables:**
- ✅ Initialize Astro project with Starlight
- ✅ Configure sidebar with six workflow stages
- ✅ Create placeholder pages for all stages
- ✅ Set up GitHub Actions deployment
- ✅ Deploy to GitHub Pages

**Validation:**
- Site is accessible at GitHub Pages URL
- Navigation between stages works
- Search functionality is active

---

### Phase 2: Content Distillation

**Goal:** Distill course transcripts into structured content

**Deliverables:**
- ✅ Distill Module 1 (Introduction) - 4 lessons
- ✅ Distill Module 2 (PIV Loop) - 4 lessons
- ✅ Distill Module 3 (Global Rules) - 4 lessons
- ✅ Distill Module 4 (Commands) - 5 lessons
- ✅ Distill Module 5 (Planning System) - 7 lessons
- ✅ Distill Module 6 (Execute) - 2 lessons
- ✅ Distill Module 7 (Validation) - 4 lessons

**Validation:**
- Each lesson has distilled summary, principles, and examples
- Content reviewed and refined by human

---

### Phase 3: Content Mapping & Integration

**Goal:** Organize distilled content into website structure

**Deliverables:**
- ✅ Map lessons to website stages
- ✅ Create topic pages with principles and examples
- ✅ Write stage overview pages
- ✅ Handle cross-cutting concepts (PIV Loop)
- ✅ Add command code blocks with copy functionality

**Validation:**
- All six stages have complete content
- Navigation hierarchy makes sense
- No orphaned or duplicate content

---

### Phase 4: Polish & Launch

**Goal:** Refine UX and prepare for sharing

**Deliverables:**
- ✅ Review and refine all content
- ✅ Test mobile responsiveness
- ✅ Verify all internal links
- ✅ Add homepage with site overview
- ✅ Test search functionality thoroughly
- ✅ Final deployment

**Validation:**
- Meets all success criteria
- Usable for real project reference
- Ready to share with course community

---

## 13. Future Considerations

### Post-MVP Content

- Module 8+ content (GitHub integration, advanced workflows)
- Additional examples from real project usage
- Community-contributed tips and patterns

### Feature Enhancements

- Progress tracking (localStorage-based)
- Print-friendly / PDF export view
- Diagram visualizations (PIV Loop, Validation Pyramid)
- Quick reference cards / summary pages

### Technical Enhancements

- Custom domain
- Analytics integration
- Performance optimization
- Accessibility audit and improvements

---

## 14. Risks & Mitigations

### Risk 1: Distillation Quality

**Risk:** AI-assisted distillation may miss nuances or misrepresent concepts

**Mitigation:**
- Human review of all distilled content
- Cross-reference with original transcripts
- Iterative refinement based on usage

### Risk 2: Content Organization Complexity

**Risk:** Mapping course content to workflow stages may reveal gaps or overlaps

**Mitigation:**
- Accept some cross-referencing between stages
- Create "cross-cutting concepts" section if needed
- Iterate on structure during mapping phase

### Risk 3: Scope Creep

**Risk:** Temptation to add features beyond MVP

**Mitigation:**
- Strict adherence to MVP scope
- Document future ideas in backlog
- Focus on content quality over feature quantity

### Risk 4: Content Maintenance

**Risk:** Content becomes stale as course or methodology evolves

**Mitigation:**
- Structure allows incremental updates
- Clear mapping from course modules to website sections
- Git history tracks all changes

---

## 15. Appendix

### A. Source Content

| Module | Lessons | Status |
|--------|---------|--------|
| Module 1: Introduction | 4 | Raw transcripts available |
| Module 2: PIV Loop | 4 | Raw transcripts available |
| Module 3: Global Rules | 4 | Raw transcripts available |
| Module 4: Commands | 5 | Raw transcripts available |
| Module 5: Planning System | 7 | Raw transcripts available |
| Module 6: Execute | 2 | Raw transcripts available |
| Module 7: Validation | 4 | Raw transcripts available |
| **Total** | **27** | **Ready for distillation** |

### B. Website Stages Detailed

1. **Setup** - Global rules, context loading strategies, environment preparation
2. **Planning (Layer 1)** - PRD creation, project scope, AI-optimized templates
3. **Planning (Layer 2)** - Task breakdown, planning commands, detailed specifications
4. **Implementation** - Execute command, PIV loops, structured execution
5. **Validation** - Validation pyramid, code review, system review
6. **Iteration** - Evolving your system, continuous improvement

### C. Design Reference

**Primary Reference:** [Starlight Documentation](https://starlight.astro.build/)
- Sidebar navigation pattern
- Collapsible sections
- Search implementation
- Dark/light mode
- Mobile responsive layout

### D. Repository Structure

**Current:** `/Users/josephfajen/git/agentic-coding-companion`
- Contains 27 raw lesson transcripts
- Frontmatter structure already defined
- Ready for distillation and site development
