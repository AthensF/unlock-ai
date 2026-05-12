# Website Replication Spec: AI Adoption Operating System

## 1. Overview

### Replicated Product

AI Adoption Operating System

### Replication Scope

This document specifies the observed internal web application shown in the source video. The goal is to recreate the visible website page by page, not to define a new product strategy or infer unshown enterprise requirements.

The replicated app includes:

- **Quest Board**: curated automation challenges with product requirements, status, difficulty, and ownership.
- **Skills Marketplace**: reusable AI workflows, prompts, agents, and automations packaged as installable skills.
- **Guides**: operational documentation for tool setup, internal practices, and repeatable workflows.
- **AI Tiers**: a progression model that measures individual and team AI maturity.
- **AI Usage**: visible sidebar destination only, with no detailed dashboard observed in this source segment.

Each page spec should describe only visible structure, text, controls, cards, tables, and states from the observed website. Any invented strategy, governance, analytics, or implementation behaviour should be removed unless it is needed to reproduce a visible screen.

### Source Frames

This spec is derived from visual analysis of the YouTube video `uH39OZ-KnkY`, specifically these in-scope product-app segments:

- `08:16-18:56`: Quest Board, individual quest PRD pages, Guides, Skills Marketplace, skill detail pages.
- `26:21-28:51`: AI-first maturity tiers and organisational progress tracking.

The `19:06-20:46` GTM Growth Command Center and Buzzboard segment is intentionally excluded from this file and belongs in `marketing-webpage-spec.md`.

## 2. Exclusions

This file should not specify:

- The GTM Growth Command Center marketing website.
- Buzzboard campaign pages.
- A full implementation architecture.
- Broad business goals, maturity programmes, leadership reports, or governance systems not visible in the app.
- Analytics dashboards for AI Usage beyond the observed sidebar item.

## 3. Global App Shell

### Layout

The observed application uses a persistent left sidebar with a main content canvas to the right.

- **Sidebar**: vertical navigation rail containing the product areas.
- **Main canvas**: page-specific content with a top header area, controls, and page body.
- **Cards and panels**: rounded rectangular containers with light borders and generous internal spacing.
- **Badges and pills**: compact labels for status, tier, category, plugin type, and filters.
- **Document panes**: long-form content appears in bordered white panels with markdown-like headings.

### Primary Navigation

The sidebar contains these observed product destinations:

- Quest Board
- AI Usage
- Skills
- Guides
- AI Tiers

The visual treatment should make the active page obvious through selected navigation styling. Page-specific pass documents may define exact labels, tabs, filters, and actions visible for that page.

### Visual System

The website should be recreated with:

- A clean internal-tool aesthetic.
- Light background surfaces.
- Rounded cards, panels, badges, and inputs.
- Muted grey supporting text.
- Dark primary text.
- Simple page headers with action buttons where observed.
- Grid layouts for marketplace and quest cards.
- Tabbed or segmented controls where visible in the source frames.

## 4. Page Families

The remaining sections should be treated as page-family specs for website replication:

- Quest Board.
- Quest Detail and PRD View.
- Skills Marketplace.
- Skill Detail Page.
- Guides.
- AI Tiers.
- AI Usage placeholder.

### Quest
A quest is an internal AI automation challenge. It defines a problem, context, users, success criteria, and expected output.

Observed examples include:

- Salesforce account quick-links for CSM dashboards.
- Customer account lookup using GPT and workflow automation.
- Internal skill publishing and discovery marketplace.
- LinkedIn post generation for employee advocacy.
- ABM field event planner.
- Match-rate dashboard for sponsored events.
- Monthly operating metrics automation.
- AI-powered content writing.
- Figma-to-CMS landing page assembly.

### Skill
A skill is a reusable AI capability, workflow, prompt, slash command, agent, or automation package that can be browsed, installed, reused, and improved.

Observed categories include:

- Sales skills.
- Developer skills.
- Recruiting skills.
- Customer success skills.
- Forward-deployed implementation skills.
- Design skills.
- Demand generation skills.
- Product marketing skills.

### Guide
A guide is internal documentation that helps users configure tools, follow workflows, or understand best practices.

Observed guide examples include:

- Git and GitHub settings.
- GitHub CLI setup.
- MCP server setup for AI coding tools.
- Tool-specific onboarding instructions.

### AI Tier
An AI tier is a maturity level that describes how deeply a person or team uses AI in their work.

The observed model has five levels:

1. **Beginner — The Adopter**
2. **Intermediate — The Accelerator**
3. **Expert — The Architect**
4. **Catalyst — Custom Tool Builder**
5. **AI-Native Multiplier**

## 7. Product Requirements

## 7.1 Quest Board

### Summary
Users need a central board where they can browse AI automation opportunities, filter by status and difficulty, and open detailed requirements for each quest.

### Functional Requirements

- Display quests in a card grid.
- Each quest card must show:
  - title
  - short description
  - tier or difficulty
  - status
  - owner or submitter
  - date metadata
- Support filters for:
  - tier or difficulty
  - status
  - team or function
  - completion state
- Support quest states:
  - open
  - in progress
  - completed
  - pending review
- Allow users to open a detailed quest page.
- Allow authorised users to create and edit quests.
- Allow users to submit completion evidence.

### Acceptance Criteria

- A user can find an open quest for their team in under 30 seconds.
- A user can filter to completed quests and see prior examples.
- A quest detail page loads from every quest card.
- Status updates are visible on both card and detail views.

## 7.2 Quest Detail and PRD View

### Summary
Each quest should contain a lightweight product requirements document so builders understand the problem, context, users, constraints, and success criteria before implementation.

### Functional Requirements

Each quest detail page must include:

- Quest title.
- Short subtitle or mission statement.
- Status and metadata badges.
- Product Requirements Doc section.
- Editable PRD fields:
  - summary
  - context
  - users
  - success criteria
  - requirements
  - constraints
  - out-of-scope items
  - dependencies
  - implementation notes
- Optional links to related guides, skills, repos, dashboards, or Slack channels.

### Example PRD Structure

```markdown
# Quest PRD

## Summary
What problem does this quest solve?

## Context
What system, workflow, or user pain created this opportunity?

## Users
Who benefits from the automation?

## Requirements
What must the solution do?

## Success Criteria
How will we know this worked?

## Constraints
What systems, permissions, or data limitations matter?

## Review Checklist
What must be checked before marking complete?
```

### Acceptance Criteria

- Every quest has a PRD before it can be moved to `in progress`.
- Users can edit PRD content if they have permission.
- Users can copy the PRD into external tools when needed.
- Completed quests retain their original requirements and final outcome notes.

## 7.3 Skills Marketplace

### Summary
Users need a searchable internal marketplace for reusable AI skills so successful automations compound across the organisation.

### Functional Requirements

- Display skill collections as plugin/category cards.
- Each collection card must show:
  - name
  - description
  - number of skills
  - owner/team
  - visibility or lock status
- Support filters and search by:
  - keyword
  - tag
  - team
  - newest
  - most installed
  - most used
- Allow users to open a skill detail page.
- Allow authorised users to publish new skills.
- Allow users to view their own skills.
- Allow skills to be archived or moved to trash.

### Marketplace Categories

Initial categories should include:

- Sales
- Developer tooling
- Recruiting
- Customer success
- Forward-deployed implementation
- Design
- Demand generation
- Product marketing

### Acceptance Criteria

- A user can search for a skill by tag and open its detail page.
- A user can browse skills grouped by function.
- A skill can be published with description, install instructions, and usage documentation.
- Marketplace cards show the number of skills in each category.

## 7.4 Skill Detail Page

### Summary
Each reusable skill needs an installation page containing description, setup, author, usage documentation, and the underlying skill instructions.

### Functional Requirements

A skill detail page must include:

- Skill name.
- Description.
- Installation instructions.
- Author metadata.
- Usage count or install count.
- Tags.
- Skill documentation.
- Raw instruction file or `SKILL.md` equivalent.
- Permission or visibility status.

### Example Skill: Deal Qualification Advisor

A skill might help sales teams analyse deal qualification by:

- Explaining a qualification framework.
- Validating whether a deal meets required criteria.
- Highlighting risks or missing information.
- Scoring deal quality.
- Suggesting next steps.

### Acceptance Criteria

- A user can understand what a skill does from the detail page alone.
- A user can install or copy the setup instructions.
- A user can see who authored the skill.
- A user can inspect the exact prompt, workflow, or agent instructions before use.

## 7.5 Guides

### Summary
Users need a central documentation area for tool setup and repeatable AI workflows.

### Functional Requirements

- Display a guide index.
- Support guide categories and search.
- Support rich Markdown content.
- Support code blocks and setup commands.
- Link guides to related quests and skills.
- Track guide owner and last updated date.

### Example Guide Types

- Git and GitHub setup.
- CLI installation.
- MCP server configuration.
- AI coding tool onboarding.
- Team-specific automation playbooks.

### Acceptance Criteria

- A user can find setup documentation for a required tool.
- Guides can include terminal commands and configuration snippets.
- Guides can be linked directly from quests and skills.

## 7.6 AI Tiers and Maturity Tracking

### Summary
The platform should define and track progression from basic AI use to AI-native system building.

### Tier Model

| Tier | Name | Description | Example Behaviour | Suggested Daily Token Band |
|---|---|---|---|---|
| 01 | Beginner — The Adopter | Types a question, reads the answer, and returns to working the way they already worked. | Uses AI for isolated summaries, rewrites, explanations, and one-off help. | `<1M` |
| 02 | Intermediate — The Accelerator | AI lives inside the work. Context goes in first; something the team actually uses comes out. | Drafts memos, researches across systems, creates reusable outputs, shares useful prompts, and starts completing automation quests. | `1-10M` |
| 03 | Expert — The Architect | Builds agents that run while the user is in other meetings. Teammates rely on the things they ship. | Creates repeatable agents, workflows, dashboards, and bots that other people use. | `10-50M` |
| 04 | Catalyst — Custom Tool Builder | Software is cheap. The user ships the tool their team needs this week, in production by Thursday. | Turns recurring team pain into production-ready internal tools and automation apps. | `50-100M` |
| 05 | AI God — The Multiplier | Stops building tools and starts building systems. The company moves differently because of what they ship. | Creates organisation-level leverage through reusable AI systems that alter how entire functions operate. | `100M+` |

### Tier Detail: 02 Intermediate — The Accelerator

The video expands the second tier in the most detail. This level represents the shift from asking AI for help to embedding AI directly into real work.

#### Mindset

- Loads company context before asking:
  - Cowork or equivalent workspace.
  - The right MCP or tool connector.
  - Relevant internal docs.
- Works inside the IDE, Cowork, or internal workspace rather than bouncing to a browser.
- Keeps a short list of tuned prompts.
- Shares the best prompts in Slack or another team channel.
- Chooses tools deliberately:
  - Claude for writing.
  - Codex for code.
  - A connector for a specific job.

#### What They Produce

- A board memo in thirty minutes instead of an afternoon.
- Research that spans Gong, Notion, and the corporate brain in one pass.
- Pull requests that arrive with tests and docs already drafted.
- The weekly note nobody explicitly asked for but everybody reads.

#### Next Step to Level Up

- Chain two tools together without the person remaining in the middle.
- Ship a Slackbot the team reaches for without thinking.
- Pick up a first Automators quest.

### Tier Expectations by Team

The video also shows a team-by-team maturity matrix. Each row describes what the same maturity level looks like in a different function.

| Team | 01 Beginner — Adopter | 02 Intermediate — Today | 03 Expert — Architect | 04 Catalyst | 05 AI God — Multiplier |
|---|---|---|---|---|---|
| Sales / GTM | Opens Claude after a Gong call for a summary and uses it to paraphrase an outreach email. Account plans still start from a blank doc. | Briefs AI with the last three calls, the Cowork workspace, and the CRM snapshot before drafting. Can explain which prompt works best for MEDDPICC. | A nightly agent scores inbound leads and books the good ones. A Slack shortcut turns any Gong call into a deal-risk read. | Deal-room dashboards appear for major opportunities before QBR. An AE Slackbot nags on stale pipeline fields. | Outbound books its own meetings. Deal risk surfaces before the rep notices. The motion one builder shipped becomes the motion GTM runs. |
| Marketing | AI drafts the headline; the second pass still happens in Google Docs the old way. | Briefs start from a tuned prompt with SEO, CAC, and competitor context pulled from the corporate brain. | Content pipelines draft, edit, schedule, and track. Competitor pages rescrape themselves nightly; the marketer reviews on Monday. | A campaign orchestration app reallocates spend based on pipeline signal. Budget moves in hours, not at the next retro. | Every prospect gets a campaign variant tied to their industry and Gong history. The team sets strategy; agents run the calendar. |
| Engineering | AI autocompletes a line or explains a stack trace. Ship cadence and review cycles look the same as six months ago. | Claude or Codex is used in the IDE by default. Tests and docs are drafted before the PR opens. The engineer can explain why a specific model fits a specific file. | Agents triage bugs into Linear, draft the PR, and write regression tests. Humans approve more often than they author. | Claude Code ships bespoke internal tools to Level and Supabase between meetings. The tool nobody rebuilds is the one that runs forever. | Tickets turn into merged PRs without a human on the happy path. Services inherit ownership conventions from the last three services shipped. |
| Product | AI summarises a user call and drafts a bullet. The real PRD still happens in the same doc the team has always used. | User research becomes re-queryable. AI pulls signal across hundreds of calls nobody could hold in their head. Specs ship to design in a day. | A feedback agent aggregates what customers ask for across Gong, Intercom, and Slack. Internal Q&A bots answer product questions before someone has to. | Sprint reports, feature-flag dashboards, and roadmap views become bespoke apps the PM shipped last month, not items waiting in the engineering backlog. | PMs merge PRs. Roadmap recommendations come from an agent watching usage. The product role becomes fundamentally different from the same role at peer companies. |
| Ops / CoS | AI drafts the executive update summary. Meeting prep is still a manual pass through a template unchanged for a year. | Board memos and weekly digests start from a template that sharpens each cycle. Context flows from Cowork rather than copy-paste. | Metrics compile overnight. Inbox and calendar triage happen before standup. The Monday deck is generated; the CoS writes the commentary. | Executive dashboards are rebuilt for every leadership transition. OKR tracking flags risk the week before quarter-end, not after. | An always-on CoS layer surfaces signals, coordinates launches, and drafts quarterly reviews. The function runs even when the human is on vacation. |

### Organisational Arc

The maturity model also appears at an organisational level, moving from individual AI usage to company-wide AI-native operations.

| Stage | Name | Description | Status |
|---|---|---|---|
| Stage 01 | One-Off AI | People copy-paste between tools and lean on AI to move their own work along. Gains are real but individual; nothing builds on itself. | Completed |
| Stage 02 | Connected AI | AI plugs into the company brain. No more copy-paste; it pulls facts across systems and aggregates context better than any one person could. | Current stage |
| Stage 03 | Autonomous AI | Agents act on their own, making decisions and taking steps that advance the goals set, without a human prompting each move. | Target |
| Stage 04 | AI Native | Agents run critical workflows across all teams. Automation is the company operating system because employees are compounding at scale. | Horizon |

### Functional Requirements

- Show the five-tier model in a clear progression view.
- Allow users to expand each tier and view:
  - mindset
  - behaviours
  - expected outputs
  - examples
  - next steps to level up
- Show individual maturity status.
- Show team-level maturity status.
- Show organisational maturity progress over time.
- Compare realised progress with projected progress.

### Acceptance Criteria

- A user can understand their current tier and next step.
- A manager can view maturity by team.
- Leadership can view organisation-level maturity trend.
- Tier definitions are editable by admins.

## 7.7 AI Usage Analytics

### Summary
The system should measure AI adoption using quantitative and qualitative signals.

### Functional Requirements

- Track token usage by user, team, and organisation.
- Track quest completions.
- Track skills published.
- Track skill installs and usage.
- Track guide views.
- Track progression through AI tiers.
- Provide dashboards for:
  - individual usage
  - team usage
  - organisational progress
  - realised vs projected maturity

### Metrics

- Tokens per user per day.
- Quest completion rate.
- Skills published per team.
- Skill reuse rate.
- Active AI users per week.
- Percentage of users at each AI tier.
- Time from quest creation to completion.
- Number of automations promoted into reusable skills.

### Acceptance Criteria

- Admins can view team-level adoption metrics.
- Users can view personal progress.
- Dashboards distinguish activity from maturity.
- Metrics can be exported for leadership reporting.

## 8. Navigation Model

The app shell uses a persistent left sidebar. The observed primary navigation contains:

- Quest Board
- AI Usage
- Skills
- Guides
- AI Tiers

The main content area changes by route while retaining the same sidebar. Each page should specify only its observed header, controls, cards, panels, tabs, and document content.

No secondary app or team navigation should be added unless it appears in the source frames.

## 9. Permissions and Governance

### Roles

| Role | Capabilities |
|---|---|
| Viewer | Browse quests, skills, guides, and tiers. |
| Contributor | Submit quests, complete quests, publish draft skills. |
| Reviewer | Approve quest completion and skill publication. |
| Admin | Manage categories, permissions, integrations, and tier definitions. |

### Governance Requirements

- Private or locked skills must be visible only to authorised users.
- Skills that interact with sensitive systems must require review.
- Quest completion should require evidence or reviewer approval.
- Admins should be able to archive unsafe, stale, or duplicated skills.
- All published skills should include an owner.

## 10. Integrations

Potential integrations include:

- GitHub for repositories, PRs, and code-based skills.
- Slack for notifications and sharing.
- Salesforce for sales and customer workflows.
- Google Drive or Docs for source documents.
- Figma for design-to-build workflows.
- Internal workflow tools such as n8n.
- AI coding tools and MCP servers.
- Analytics warehouse for usage data.

## 11. User Stories

### Quest Discovery
As an employee, I want to browse available AI quests so that I can find useful automation work to contribute to.

### Quest Execution
As a builder, I want each quest to include a PRD so that I can solve the right problem without guessing requirements.

### Skill Reuse
As an employee, I want to search reusable skills so that I can avoid rebuilding workflows someone else has already solved.

### Skill Publishing
As an AI champion, I want to publish a useful workflow as a skill so that others can install, inspect, and improve it.

### Maturity Tracking
As a team lead, I want to see my team’s AI maturity so that I can coach people toward higher-leverage behaviours.

### Leadership Reporting
As an executive, I want to see organisational AI adoption trends so that I can understand whether AI usage is producing operational leverage.

## 12. MVP Scope

### Must Have

- Quest Board with filters.
- Quest detail page with PRD content.
- Skills Marketplace with categories.
- Skill detail page with install instructions and documentation.
- Guides index with Markdown guide pages.
- AI Tiers page with five-tier progression model.
- Basic usage and completion metrics.

### Should Have

- Skill publishing workflow.
- Quest completion workflow.
- Team-level dashboards.
- Search across quests, skills, and guides.
- Role-based permissions.

### Could Have

- Automated recommendations for next quests.
- AI-generated PRD drafts from rough ideas.
- Leaderboards for teams or contributors.
- Skill quality scoring.
- Automated promotion of completed quests into skill drafts.

## 13. Success Metrics

### Adoption Metrics

- 70% of employees visit the platform monthly.
- 50% of employees complete at least one quest within the first quarter.
- 30% of completed quests become reusable skills.
- 80% of teams have at least one published skill.

### Efficiency Metrics

- Reduce duplicated automation work by 40%.
- Reduce time to discover reusable workflows to under 2 minutes.
- Reduce time from automation idea to PRD to under 15 minutes.

### Maturity Metrics

- Increase percentage of users at Tier 2 or above month over month.
- Increase number of Tier 3+ users by team.
- Show measurable growth in realised organisational maturity against projected targets.

## 14. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Token usage becomes a vanity metric | Users optimise for volume, not value | Pair usage with quest completion, skill reuse, and business impact. |
| Marketplace fills with low-quality skills | Users lose trust | Require owners, reviews, install docs, and usage metadata. |
| Sensitive automations are shared too broadly | Security and compliance risk | Add permissions, review workflow, and integration scopes. |
| Employees find tiers performative | Adoption stalls | Frame tiers around behaviours and outputs, not status theatre. |
| Quests become stale | Board loses usefulness | Add ownership, due dates, archive rules, and freshness checks. |

## 15. Open Questions

- Should token usage be visible to individual users, managers, or only admins?
- Should AI tiers be automatically calculated, manually assigned, or hybrid?
- What qualifies a completed quest for promotion into a reusable skill?
- Should leaderboards be individual, team-based, or avoided to prevent performative usage?
- Which integrations are required for MVP?
- What review process is needed for skills that access customer or revenue data?

## 16. Recommended Build Sequence

1. Build the information architecture: Quest Board, Skills, Guides, AI Tiers.
2. Implement quest cards and quest detail PRD pages.
3. Implement Skills Marketplace and skill detail pages.
4. Add Markdown-backed guide pages.
5. Add basic user/team analytics.
6. Add permissions and publication workflows.
7. Add maturity dashboards and realised vs projected progress.

## 17. Appendix: Observed Product Patterns

### Quest Board Pattern
A card-based challenge board with filters for tier/status and visible completion state.

### PRD-in-Quest Pattern
Each quest can open into a product requirements document, allowing automation work to start from structured context rather than vague enthusiasm.

### Marketplace Pattern
Reusable automations are grouped into functional plugin collections with tags, authorship, installability, and documentation.

### Skill Detail Pattern
A skill has a description, install instructions, author metadata, and raw reusable instructions.

### AI-First Progression Pattern
Adoption is framed as a journey from one-off AI use to AI-native system building, measured across people, teams, and organisation-wide maturity.
