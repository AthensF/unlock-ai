# Website Replication Spec: unlock.ai

## 1. Overview

### Replicated Product

unlock.ai

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

The `19:06-20:46` GTM Growth Command Center and Buzzboard segment is intentionally out of scope for this spec.

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

## 5. Product Requirements

## 5.1 Quest Board

### Observed Frame

The quest board is visible around `8:29`. It is a card-grid page inside the shared app shell.

### Layout and Controls

- Page title presents the quest board as the main destination.
- A filter row appears above the grid.
- Filters include visible segmented or dropdown-style controls for:
  - active/open quests
  - completed quests
  - tier or difficulty
  - status
- A language toggle is visible near the top controls.
- Quest cards are arranged in a multi-column grid with rounded borders, compact metadata, and status/tier badges.

### Active Quest Cards

Visible active cards include:

- **Salesforce Opps & Files Quick-Links per Customer on CSM Dashboard**
- **Self-Serve Staging Environment for Harper AI SDR Testing**
- **Campaign Asset Accelerator**
- **Reliable LinkedIn Recruiter Profile Collection Beyond the 25-Profile Cap**
- **AI-Powered Daily Prioritization Engine for AEs**
- **Sales Rep Performance Scorecard — Reliable Salesforce Data Pipeline**
- **Deal Desk Opportunity Audit Agent — Auto-Review & Triage Contracts in SFDC + Google Drive**
- **Sales QBR Consolidated Dashboard — Salesforce, Gong & Salesloft**
- **AI-Powered Deal Room Generator for Sales**

### Card Requirements

Each quest card should show only the observed card-level fields needed to recreate the board:

- quest title
- short description or summary excerpt
- tier badge
- status badge
- compact metadata row where visible
- click target to open the quest detail page

### Completed View

The board also supports a completed-quest view in a later frame. The completed view should reuse the same grid/card pattern, with the selected filter changed to completed and card statuses visually marked as complete.

## 5.2 Quest Detail and PRD View

### Observed Quest

The quest detail page should be based on the observed Salesforce CSM dashboard quest:

**Salesforce Opps & Files Quick-Links per Customer on CSM Dashboard**

### Page Structure

- Header area with the quest title.
- Compact status and tier badges near the title.
- Prominent `Edit PRD` button.
- Main document panel containing the Product Requirements Doc.
- Content is formatted like a readable internal markdown document, with section headings and body copy.

### Observed PRD Content

Preserve the visible PRD sections:

- **Summary**
  - The quest concerns quick links to Salesforce opportunities and customer files from a CSM dashboard.
- **Context**
  - CSMs need faster access to customer-specific Salesforce opportunities and related file resources.
  - The dashboard should reduce manual lookup and context switching.
- **Users**
  - Customer Success Managers.
  - Account or revenue teammates who need customer-specific account context.
- **Success Criteria**
  - CSMs can access the right opportunities and files from the customer dashboard.
  - Links are reliable and customer-specific.
  - The workflow saves lookup time during account review or customer preparation.

### Requirements

- Do not expand this page into a generic PRD editor.
- Include only the observed document panel, badges, title, and `Edit PRD` affordance.
- The page should feel like opening one quest card into its source requirements document.

## 5.3 Skills Marketplace

### Observed Page

The Skills page is an internal marketplace for installable plugins and skills.

### Top Actions

The page header includes action buttons:

- `My Skills`
- `Trash`
- `New Skill`
- `New Plugin`

### Marketplace Controls

- Search input for filtering marketplace content.
- Sort dropdown.
- Visible tag pills for filtering by category or topic.

### Plugin Cards

Cards represent plugins or skill collections. Each card should include:

- plugin or collection name
- short description
- plugin/category badge
- visible tag pills
- compact metadata where visible
- click target to open skill or plugin detail

### Visible Seed Content

The marketplace should include cards for observed categories and plugins, including:

- Sales
- Developer
- Recruiting
- Customer Success
- Forward-Deployed
- Design
- Demand Generation
- Product Marketing

### Requirements

- Keep the page focused on browsing and creating skills/plugins.
- Do not invent install analytics, reviews, or governance workflows unless visible.
- Preserve the top-action layout and the searchable card-grid marketplace pattern.

## 5.4 Skill Detail Page

### Observed Skill

The skill detail page should be based on the observed `meddpicc advisor` skill.

### Page Structure

- Skill title: `meddpicc advisor`.
- Description panel explaining the skill.
- Sidebar or metadata panel with:
  - install action
  - author information
  - plugin/category badge
- Main content panel showing `SKILL.md`.

### Observed Capability

The skill helps with MEDDPICC-style deal qualification. Preserve the visible sales-advisor intent:

- explain or apply MEDDPICC qualification thinking
- identify missing deal information
- highlight qualification risk
- guide next-step thinking

### Requirements

- Do not expand into unsupported CRM automation.
- The central artefact is the readable `SKILL.md` panel.
- The page should look like a marketplace item opened into an install/detail view.

## 5.5 Guides

### Observed Page

The Guides section is shown through a `Git & GitHub Settings` guide page.

### Guide Browser and Detail Pattern

- Guide area uses the shared app shell.
- The guide detail is presented as a documentation page with headings, paragraphs, and code blocks.
- A guide browser or list sits alongside or before the detail content, depending on viewport.

### Git & GitHub Settings Content

The observed guide should include:

- setup commands
- GitHub CLI instructions
- GitHub MCP section
- terminal-style code blocks
- clear heading hierarchy

### Requirements

- Keep the Guides section as a documentation reader, not a full knowledge-base platform.
- Do not add ratings, ownership workflows, or broad content-management features unless visible.
- Code blocks should preserve command formatting.

## 5.6 AI Tiers and Maturity Tracking

### Observed Page

The AI Tiers page is a detailed extraction from `26:21-28:51`. It should be structured into three observed tabs:

- The Five Tiers
- Organisational Arc
- By Team

### Tab: The Five Tiers

| Tier | Name | Description | Example Behaviour | Suggested Daily Token Band |
|---|---|---|---|---|
| 01 | Beginner — The Adopter | Types a question, reads the answer, and returns to working the way they already worked. | Uses AI for isolated summaries, rewrites, explanations, and one-off help. | `<1M` |
| 02 | Intermediate — The Accelerator | AI lives inside the work. Context goes in first; something the team actually uses comes out. | Drafts memos, researches across systems, creates reusable outputs, shares useful prompts, and starts completing automation quests. | `1-10M` |
| 03 | Expert — The Architect | Builds agents that run while the user is in other meetings. Teammates rely on the things they ship. | Creates repeatable agents, workflows, dashboards, and bots that other people use. | `10-50M` |
| 04 | Catalyst — Custom Tool Builder | Software is cheap. The user ships the tool their team needs this week, in production by Thursday. | Turns recurring team pain into production-ready internal tools and automation apps. | `50-100M` |
| 05 | AI God — The Multiplier | Stops building tools and starts building systems. The company moves differently because of what they ship. | Creates organisation-level leverage through reusable AI systems that alter how entire functions operate. | `100M+` |

#### Expanded Tier 02 Detail

The video expands the second tier in the most detail. This level represents the shift from asking AI for help to embedding AI directly into real work.

##### Mindset

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

##### What They Produce

- A board memo in thirty minutes instead of an afternoon.
- Research that spans Gong, Notion, and the corporate brain in one pass.
- Pull requests that arrive with tests and docs already drafted.
- The weekly note nobody explicitly asked for but everybody reads.

##### Next Step to Level Up

- Chain two tools together without the person remaining in the middle.
- Ship a Slackbot the team reaches for without thinking.
- Pick up a first Automators quest.

### Tab: By Team

The video also shows a team-by-team maturity matrix. Each row describes what the same maturity level looks like in a different function.

| Team | 01 Beginner — Adopter | 02 Intermediate — Today | 03 Expert — Architect | 04 Catalyst | 05 AI God — Multiplier |
|---|---|---|---|---|---|
| Sales / GTM | Opens Claude after a Gong call for a summary and uses it to paraphrase an outreach email. Account plans still start from a blank doc. | Briefs AI with the last three calls, the Cowork workspace, and the CRM snapshot before drafting. Can explain which prompt works best for MEDDPICC. | A nightly agent scores inbound leads and books the good ones. A Slack shortcut turns any Gong call into a deal-risk read. | Deal-room dashboards appear for major opportunities before QBR. An AE Slackbot nags on stale pipeline fields. | Outbound books its own meetings. Deal risk surfaces before the rep notices. The motion one builder shipped becomes the motion GTM runs. |
| Marketing | AI drafts the headline; the second pass still happens in Google Docs the old way. | Briefs start from a tuned prompt with SEO, CAC, and competitor context pulled from the corporate brain. | Content pipelines draft, edit, schedule, and track. Competitor pages rescrape themselves nightly; the marketer reviews on Monday. | A campaign orchestration app reallocates spend based on pipeline signal. Budget moves in hours, not at the next retro. | Every prospect gets a campaign variant tied to their industry and Gong history. The team sets strategy; agents run the calendar. |
| Engineering | AI autocompletes a line or explains a stack trace. Ship cadence and review cycles look the same as six months ago. | Claude or Codex is used in the IDE by default. Tests and docs are drafted before the PR opens. The engineer can explain why a specific model fits a specific file. | Agents triage bugs into Linear, draft the PR, and write regression tests. Humans approve more often than they author. | Claude Code ships bespoke internal tools to Level and Supabase between meetings. The tool nobody rebuilds is the one that runs forever. | Tickets turn into merged PRs without a human on the happy path. Services inherit ownership conventions from the last three services shipped. |
| Product | AI summarises a user call and drafts a bullet. The real PRD still happens in the same doc the team has always used. | User research becomes re-queryable. AI pulls signal across hundreds of calls nobody could hold in their head. Specs ship to design in a day. | A feedback agent aggregates what customers ask for across Gong, Intercom, and Slack. Internal Q&A bots answer product questions before someone has to. | Sprint reports, feature-flag dashboards, and roadmap views become bespoke apps the PM shipped last month, not items waiting in the engineering backlog. | PMs merge PRs. Roadmap recommendations come from an agent watching usage. The product role becomes fundamentally different from the same role at peer companies. |
| Ops / CoS | AI drafts the executive update summary. Meeting prep is still a manual pass through a template unchanged for a year. | Board memos and weekly digests start from a template that sharpens each cycle. Context flows from Cowork rather than copy-paste. | Metrics compile overnight. Inbox and calendar triage happen before standup. The Monday deck is generated; the CoS writes the commentary. | Executive dashboards are rebuilt for every leadership transition. OKR tracking flags risk the week before quarter-end, not after. | An always-on CoS layer surfaces signals, coordinates launches, and drafts quarterly reviews. The function runs even when the human is on vacation. |

### Tab: Organisational Arc

The maturity model also appears at an organisational level, moving from individual AI usage to company-wide AI-native operations.

| Stage | Name | Description | Status |
|---|---|---|---|
| Stage 01 | One-Off AI | People copy-paste between tools and lean on AI to move their own work along. Gains are real but individual; nothing builds on itself. | Completed |
| Stage 02 | Connected AI | AI plugs into the company brain. No more copy-paste; it pulls facts across systems and aggregates context better than any one person could. | Current stage |
| Stage 03 | Autonomous AI | Agents act on their own, making decisions and taking steps that advance the goals set, without a human prompting each move. | Target |
| Stage 04 | AI Native | Agents run critical workflows across all teams. Automation is the company operating system because employees are compounding at scale. | Horizon |

### Requirements

- Implement the page as a tabbed content view.
- Preserve the expanded Tier 02 detail.
- Preserve the team matrix and organisational arc tables.
- Do not add unrelated leadership reporting or editable maturity metrics unless visible.

## 5.7 AI Usage Dashboard

The `24:25-25:40` source segment shows the token tracking dashboard for AI adoption measurement.

### Requirements

- Include the sidebar navigation item.
- Show donut-style tier distribution cards for token usage bands.
- Show graph panels for adoption curve smoothness and team-level usage.
- Include a leadership board because visible leadership usage is the key adoption signal.
- Emphasise that smoothness of the curve matters more than the total token count.
- Keep the page focused on token tracking, tier movement, team usage, and leadership visibility.

## 6. Navigation Model

The app shell uses a persistent left sidebar. The observed primary navigation contains:

- Quest Board
- AI Usage
- Skills
- Guides
- AI Tiers

The main content area changes by route while retaining the same sidebar. Each page should specify only its observed header, controls, cards, panels, tabs, and document content.

No secondary app or team navigation should be added unless it appears in the source frames.

## 7. Data Model

Only model the data needed to recreate the observed pages.

### Quest

- id
- title
- summary
- status
- tier
- metadata labels
- prd sections

### Skill or Plugin

- id
- name
- description
- category
- tags
- author
- install action label
- skill markdown content

### Guide

- id
- title
- body markdown
- code blocks
- section headings

### AI Tier Content

- tier id
- tier name
- description
- example behaviour
- token band
- expanded detail
- team matrix rows
- organisational arc rows

## 8. Implementation Checklist

- Build the shared sidebar shell with the observed navigation items.
- Build the Quest Board card grid, filters, language toggle, active cards, and completed state.
- Build the Salesforce CSM quest detail page with PRD panel and `Edit PRD` action.
- Build the Skills Marketplace with top actions, search, sort, tag pills, and plugin cards.
- Build the `meddpicc advisor` detail page with description, install metadata, and `SKILL.md` panel.
- Build the Guides reader around `Git & GitHub Settings`.
- Build AI Tiers as three tabs: The Five Tiers, Organisational Arc, and By Team.
- Keep AI Usage as a placeholder route only.

## 9. Appendix: Observed Product Patterns

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
