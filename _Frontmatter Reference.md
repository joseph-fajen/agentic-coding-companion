---
course: Dynamous Agentic Coding
module: 0
lesson: "0.0"
title: "Frontmatter Reference Guide"
type: reference
status: n/a
date_added: 2026-02-18
date_modified: 2026-02-18
tags:
  - dynamous
  - reference
  - metadata
key_concepts: []
prerequisites: []
related_lessons: []
---

# Frontmatter Reference Guide

This document describes the frontmatter schema used for all transcript notes in this folder. The frontmatter supports your workflow from raw transcripts to a distilled interactive website.

## Schema Overview

```yaml
---
course: Dynamous Agentic Coding
module: 2
lesson: "2.1"
title: "The PIV Loop (Plan -> Implement -> Validate)"
type: lecture
status: raw
date_added: 2026-02-18
date_modified: 2026-02-18
tags:
  - dynamous
  - agentic-coding
  - module-2-piv-loop
key_concepts: []
prerequisites: ["1.5"]
related_lessons: ["2.2", "2.3", "2.4"]
---
```

## Field Definitions

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `course` | string | Always "Dynamous Agentic Coding" |
| `module` | integer | Module number (1-8) |
| `lesson` | string | Lesson identifier in "X.Y" format (quoted to preserve decimals) |
| `title` | string | Full lesson title |
| `type` | enum | Content type: `lecture`, `exercise`, or `overview` |
| `status` | enum | Processing status (see Workflow States below) |
| `date_added` | date | Date frontmatter was added (YYYY-MM-DD) |
| `date_modified` | date | Last modification date (YYYY-MM-DD) |
| `tags` | list | Searchable tags for categorization |

### Extraction Fields (Populated During Distillation)

| Field | Type | Description |
|-------|------|-------------|
| `key_concepts` | list | Core ideas extracted during distillation - **powers your website reminders** |
| `prerequisites` | list | Lesson IDs that should be completed first |
| `related_lessons` | list | Cross-references to related content |

## Workflow States

The `status` field tracks your distillation progress:

```
raw → cleaned → distilled → extracted
```

| Status | Meaning |
|--------|---------|
| `raw` | Original transcript with timestamps, unprocessed |
| `cleaned` | Timestamps removed, text cleaned up |
| `distilled` | Content condensed to essential points |
| `extracted` | Key concepts extracted and ready for website |

**Update `date_modified` whenever you change the status.**

## Type Classifications

| Type | Description | Count |
|------|-------------|-------|
| `overview` | High-level introductions and course guides | 4 |
| `lecture` | Core instructional content | 22 |
| `exercise` | Hands-on practice activities | 5 |

## Tag Conventions

### Universal Tags (all notes)
- `dynamous` - Course identifier
- `agentic-coding` - Course topic

### Module Tags
Each module has a dedicated tag:
- `module-1-introduction`
- `module-2-piv-loop`
- `module-3-global-rules`
- `module-4-commands`
- `module-5-planning-system`
- `module-6-execute`
- `module-7-validation`
- `module-8-github`

### Concept Tags (add as relevant)
- `piv-loop` - PIV Loop methodology
- `planning`, `layer-1-planning`, `layer-2-planning` - Planning concepts
- `vibe-planning`, `structured-plan` - Planning approaches
- `global-rules`, `claude-md` - Rules configuration
- `slash-commands`, `command-patterns` - Command system
- `prime`, `plan`, `execute`, `commit` - Core commands
- `validation`, `code-review`, `testing` - Validation concepts
- `exercise` - Hands-on activities

## Using Key Concepts

The `key_concepts` field is your primary extraction target for the interactive website. During distillation, populate this with actionable reminders.

### Format
```yaml
key_concepts:
  - "PIV Loop: Plan → Implement → Validate, then iterate"
  - "Layer 1 planning = project-level (do once)"
  - "Layer 2 planning = task-level (every feature)"
  - "Vibe planning first, then structure the plan"
```

### Guidelines
- Keep each concept to one line
- Start with the concept name/category
- Make them actionable reminders, not explanations
- Aim for 5-15 key concepts per lesson

## Prerequisites and Related Lessons

These fields create the learning path for your website.

### Prerequisites
Lessons that must be understood before this one:
```yaml
prerequisites: ["2.1", "2.2"]  # Must understand PIV Loop basics first
```

### Related Lessons
Content that complements or expands on this lesson:
```yaml
related_lessons: ["5.5", "6.1"]  # Also covers planning/execution
```

## Dataview Queries

Use these queries in Obsidian to explore your transcripts:

### All Lessons by Module
```dataview
TABLE lesson, title, type, status
FROM "Dynamous Agentic Coding Transcripts"
WHERE lesson != "0.0"
SORT module, lesson
```

### Unprocessed Transcripts
```dataview
LIST
FROM "Dynamous Agentic Coding Transcripts"
WHERE status = "raw"
SORT lesson
```

### Exercises Only
```dataview
TABLE lesson, title, status
FROM "Dynamous Agentic Coding Transcripts"
WHERE type = "exercise"
SORT lesson
```

### Lessons with Key Concepts Extracted
```dataview
TABLE lesson, title, length(key_concepts) as "Concepts"
FROM "Dynamous Agentic Coding Transcripts"
WHERE length(key_concepts) > 0
SORT module, lesson
```

## Module Structure

| Module | Topic | Lessons |
|--------|-------|---------|
| 1 | Introduction | 1.1, 1.2, 1.3, 1.5 |
| 2 | PIV Loop | 2.1, 2.2, 2.3, 2.4 |
| 3 | Global Rules | 3.1, 3.2, 3.3, 3.4 |
| 4 | Commands | 4.1, 4.2, 4.3, 4.4, 4.5 |
| 5 | Planning System | 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7 |
| 6 | Execute | 6.1, 6.2 |
| 7 | Validation | 7.1, 7.2, 7.3, 7.4 |
| 8 | GitHub | 8.1 |

## Website Export Strategy

When ready to build your interactive website:

1. **Filter by status**: Export only `status: extracted` notes
2. **Primary content**: Use `key_concepts` array as reminder cards
3. **Navigation**: Build from `module` + `lesson` hierarchy
4. **Learning path**: Use `prerequisites` for suggested order
5. **Discovery**: Use `related_lessons` for "See also" links
6. **Search**: Index `tags` and `key_concepts` for search functionality

## Maintenance

- Update `date_modified` when changing any field
- Review `prerequisites` after completing all extractions
- Add new concept tags as patterns emerge during distillation
