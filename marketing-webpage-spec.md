# Marketing Webpage Spec: GTM Growth Command Center and Buzzboard

## 1. Overview

### Product Name
Marketing Webpage Suite

### Working Description
A standalone marketing operations website that combines a GTM Growth Command Center for campaign planning and growth tools with Buzzboard, an employee amplification site for curated LinkedIn campaign promotion.

### Source Inspiration
This spec is derived from visual analysis of the YouTube video `uH39OZ-KnkY`, specifically:

- `19:06-20:46`: GTM Growth Command Center, project/tool hub, integrated marketing calendar, and Buzzboard employee amplification campaign site.

This is an original product specification based on the observed product patterns, not a verbatim reproduction of the slides.

## 2. Product Goals

- Give GTM teams a command centre for campaign planning, experiments, ABM intelligence, and launch assets.
- Let employees amplify approved campaigns on LinkedIn using curated assets, templates, and AI-generated copy.
- Turn marketing workflows into polished, browsable internal web pages rather than scattered docs and ad hoc links.
- Connect campaign planning, campaign assets, employee participation, and impact tracking in one coherent experience.

## 3. Core Concepts

### GTM Growth Command Center
A campaign and project hub that turns marketing plans, ABM tools, creative experiments, and AI-agent utilities into a browsable internal website.

### Buzzboard Campaign
An employee amplification kit with campaign assets, ready-made posts, AI-generated copy controls, LinkedIn posting actions, and impact tracking.

### Campaign Asset
A reusable visual or written asset attached to a campaign, such as a billboard photo, social post template, creative brief, scorecard, or launch plan.

## 4. GTM Growth Command Center

### Summary
The `19:06-20:46` segment shows a polished GTM operating dashboard called **GTM Growth Command Center**. It combines an integrated marketing calendar, active growth projects, ABM tools, experiment hubs, and campaign activation utilities into one internal website.

### Visual Structure

- Full-page desktop web app presented inside a large rounded browser frame.
- White top navigation bar with a small brand mark on the left and horizontal nav links:
  - Integrated Marketing Plan
  - Projects
  - Mini Tools
  - Status
- Hero section with large headline:
  - `GTM Growth Command Center. 🚀`
- The word `Command Center.` is emphasised in red.
- Supporting copy reads approximately:
  - `Experiments, ABM intelligence, and growth infrastructure in one dashboard.`
- Primary CTA is a black pill button:
  - `Explore projects →`
- The site alternates between white content sections and high-contrast black showcase sections.
- Project cards use large coloured thumbnails, small status labels, concise descriptions, and bottom metadata tags.
- Section numbering appears in muted grey, such as `01`, `02`, `05`, and `06`.

### Integrated Marketing Plan

The first featured module is an embedded calendar called **Integrated Marketing Plan**.

#### Functional Requirements

- Show a featured section for the organisation-wide marketing calendar.
- Include short explanatory copy describing the calendar as a tracker for campaigns across channels.
- Provide an `Open full plan ↗` button.
- Embed a calendar/table view with:
  - month columns from approximately March through July
  - programme rows grouped by campaign or workstream
  - coloured timeline bars for campaign duration
  - milestone markers along the timeline
  - top controls for switching views
  - buttons for adding programme and campaign records
- Support visible campaign types such as:
  - AI Readiness 101
  - Summer Campaigns
  - Network or CX reporting campaigns
  - delight Spark or event-related campaigns

#### Acceptance Criteria

- A user can understand current and upcoming marketing work from the embedded timeline without leaving the dashboard.
- A user can open the full calendar view from the featured module.
- Timeline items must preserve campaign names, date ranges, and colour-coded status/category.

### Active Projects Directory

The page contains a scrolling project directory organised by numbered project groups.

#### Functional Requirements

- Display project groups as sections with:
  - section number
  - project title
  - one-sentence description
  - completion count such as `3 live / 4 total`
  - card grid of tools or assets
- Each tool card must include:
  - large thumbnail
  - status badge such as `Live`, `Building`, or `Planning`
  - title
  - short description
  - metadata tags
  - subtle affordance indicating it can be opened
- Support at least the following observed project groups:
  - **Account-Based Marketing**
  - **Project: Gravity Lab**
  - **Project: Purple Cow**
  - **Harper — Inbound AI Agent**
  - **Activation Campaigns**

### Account-Based Marketing Project

#### Observed Cards

- **Events × ABM Matchrate**
  - Purpose: upload event attendance lists and identify which accounts appear in ABM target accounts.
  - Output: match-rate insight and evidence for event selection.
- **ABM Geo Location Intelligence**
  - Purpose: show geographic concentration of account activity or market opportunity.
  - Output: map-based territory or event-targeting intelligence.
- **ABM Intent Scoring**
  - Purpose: track account intent signals over time.
  - Output: ranked accounts or scoring guidance for GTM prioritisation.

#### Requirements

- Users must be able to launch ABM mini-tools from project cards.
- ABM tools must support data-upload or data-query workflows where relevant.
- Match-rate and intent outputs must be presented in a form usable for campaign planning.
- Geo intelligence must include a visual map or location-based summary.

### Project: Gravity Lab

#### Observed Cards

- **Competitor LP Review**
  - Thumbnail colour: coral/red.
  - Purpose: analyse competitor landing pages and capture messaging, design, and offer patterns.
- **LP Scoreboard**
  - Thumbnail colour: green.
  - Purpose: score landing pages and surface improvement opportunities.
- **Fan Page Experiment Brief**
  - Thumbnail colour: dark navy.
  - Purpose: create a brief for an experiment involving fan-page style messaging.
- **Paid Social Mockups**
  - Thumbnail colour: purple.
  - Purpose: generate or preview paid social ad mockups.

#### Requirements

- Display experiment tools as a four-card grid.
- Mark currently available tools as `Live`.
- Each tool must connect to an underlying workflow that produces a concrete artefact:
  - report
  - scorecard
  - experiment brief
  - mockup
- Cards must support quick scanning by pairing bold thumbnail labels with short explanatory copy.

### Project: Purple Cow

#### Observed Cards

- **AaaS Experiment Pilot Results**
- **Design Planning — Creative Brief**
- **AaaS Billboard Builder**
- **Purple Cow Idea Pitch**

#### Requirements

- Support project sections centred on a named campaign or creative concept.
- Include a mix of live and planning-stage assets.
- Represent experimental campaign artefacts as reusable cards.
- Allow users to move from planning assets into creative production assets.

### Harper — Inbound AI Agent

The **Harper — Inbound AI Agent** section appears on a black background and presents agent-related tools in larger two-column cards.

#### Observed Cards

- **Harper Optimization Hub**
  - Large purple thumbnail labelled `Optimization Hub`.
  - Purpose: manage or improve inbound-agent prompts, routing, and conversion behaviour.
- **Harper Preview Testing**
  - Large purple thumbnail labelled `Preview Testing`.
  - Purpose: test the Harper agent against preview pages or campaign experiences.

#### Requirements

- Support dark showcase sections for high-priority projects.
- Use larger cards for major tools.
- Provide status badges on each tool card.
- Tool descriptions must explain what the tool optimises, previews, or tests.
- Preview-testing tools must support realistic page or campaign previews before public launch.

### Activation Campaigns

#### Requirements

- Provide a section for campaign-specific playbooks, activation plans, and LinkedIn ad scripts.
- Activation campaign assets must be connected to campaign launch workflows rather than treated as static documents.
- Users should be able to open each activation asset from the command centre.

### GTM Growth Command Center Acceptance Criteria

- A user can navigate from the hero CTA to project sections.
- A user can open the integrated marketing calendar from the featured plan.
- A user can browse at least five project groups and distinguish live, building, and planning tools.
- A user can open individual tools from cards.
- The dashboard visually separates strategic planning, active experiments, ABM intelligence, AI-agent tooling, and activation campaigns.

## 5. Buzzboard Employee Amplification Site

### Summary
The segment also shows a standalone web app called **Buzzboard**. Buzzboard is an employee amplification and LinkedIn posting tool that lets users pick a curated campaign, choose a billboard/photo asset, select or generate a LinkedIn post, and post it directly to LinkedIn.

### Top-Level Navigation

- Brand mark on the left:
  - `Buzzboard`
- Navigation links on the right:
  - Live Campaigns
  - Past Campaigns
  - Scoreboard
- Campaign detail pages include a breadcrumb-style campaign name in the header.
- Campaign pages include an `All Campaigns` link in the upper-right corner.

### Buzzboard Landing Page

#### Visual Structure

- Dark hero header with centred content.
- Small pill label:
  - `BUZZBOARD`
- Main headline:
  - `Grab a post and get loud on LinkedIn`
- The word `LinkedIn` is highlighted with a blue-tinted underline or glow.
- Three small value-pill badges appear below the headline:
  - `Pick from curated campaigns`
  - `AI-generated or ready-made posts`
  - `Track your team's impact`
- Live campaign cards appear below the hero in a white content area.
- Past campaigns appear as compact rows beneath live campaigns.

#### Live Campaign Cards

Observed live or upcoming campaign cards include:

- **Billboard Promotions Phase I**
  - Status: `Live`
  - Description: amplify the Delight Spark billboard campaign across LinkedIn.
  - CTA: `Open kit →`
- **Spark Attendee Logos**
  - Status: `Live`
  - Description: share the logo chart for attendees or partners.
  - CTA: `Open kit →`
- **How I AI — John's Episode**
  - Status: `Coming Soon`
  - Description: promote an upcoming episode.

#### Past Campaign Rows

Observed past campaign rows include:

- Spark Speaker Announcement
- Music Video Full Drop
- Spark Music Video Teaser
- AI Readiness 101

Each past campaign row includes a `View archive ↗` link.

#### Requirements

- Users must be able to browse live, upcoming, and past campaigns.
- Live campaigns must show campaign title, status, description, date metadata, and CTA.
- Past campaigns must remain accessible as archives.
- Upcoming campaigns must be visually distinct and not offer the same posting CTA as live campaigns.
- The Scoreboard navigation must lead to campaign impact or leaderboard analytics.

### Campaign Detail: Billboard Promotions Phase I

The observed campaign detail page is an employee amplification kit for the message:

`Our support agent is a smart AaaS. 🍑`

#### Hero Requirements

- Display a dark hero with:
  - campaign category pills such as `BUZZBOARD` and `EMPLOYEE AMPLIFICATION KIT`
  - large headline
  - supporting instruction copy:
    - `Pick your billboard shot, write your take, and help us own AaaS.`
  - campaign card showing:
    - `Billboard Promotions`
    - `Phase I`
    - metadata such as `AaaS = Agent as a Service`
- Use large serif-style headline typography for the campaign message.

### Billboard Shot Selection

The campaign detail page includes a media-selection grid for billboard shots.

#### Requirements

- Display a section labelled approximately:
  - `Billboard shots: real & AI generated`
- Separate or label real billboard images using small `REAL` badges.
- Show image thumbnails in a responsive grid.
- Allow one image to be selected.
- Indicate the selected image using a visible checkmark or selected border.
- Use the selected image in the post composition preview.

### Step 1: Write Your Post

#### Visual Structure

- Section label:
  - `Step 1: Write your post`
- Left side shows the selected billboard image.
- Right side shows a `Your post` composition panel.
- A `Change asset` control appears in the composition panel.
- Primary CTA:
  - `Post on LinkedIn`
- CTA uses LinkedIn blue and includes a LinkedIn icon.

#### Ready-Made Post Options

Below the composer, the page shows ready-to-post templates under a section like:

`Ready to post: grab and go`

Observed template cards include:

- **Playful**
  - Opening: `SaaS is out. AaaS is in. 🍑`
  - Includes billboard explanation, support-agent line, and campaign hashtags.
- **Spotted**
  - Opening: `Spot the 🍑?`
  - Includes:
    - `Our support agent is a smart AaaS. — We put this on a billboard. For real.`
    - `AaaS = Agent as a Service. And yes, we're owning it.`
    - `Tag us if you see it. 👀`
    - hashtags such as `#AaaS`, `#DelightSpark`, `#AgentAsAService`
  - Marked as recommended.
- **Bold**
  - Opening: `We rented a billboard to make a point. 🍑`
  - Explains that SaaS had its run and AaaS is the next era.
  - Mentions that the support agent should be genuinely smart.

#### Requirements

- Users must be able to choose a ready-made post template.
- Selecting a template must populate the composer.
- The selected template must have a clear selected state.
- Users must be able to copy the selected post.
- Users must be able to publish directly to LinkedIn.
- Posting should not happen automatically; the user must explicitly click the LinkedIn CTA.

### Selected Post and LinkedIn Posting

#### Requirements

- Show a `Selected post` section after template selection.
- Include a `Copy` action.
- Preserve line breaks, emojis, and hashtags in copied or posted content.
- Display helper text indicating the post opens in LinkedIn after button click.
- The LinkedIn posting flow must include:
  - selected image
  - selected or generated text
  - campaign attribution or tracking metadata

### AI-Generated Custom Post

The page includes an optional section:

`Or generate something custom`

#### Controls

- **Length**
  - Slider with visible current value, such as `Medium`.
- **Detail**
  - Slider with visible current value, such as `Moderate`.
- **Energy**
  - Slider with visible current value, such as `Upbeat`.
- **Custom Direction**
  - Freeform instruction field for extra guidance.

#### Generated Post Panel

- Right-side panel titled `Generated Post`.
- Empty state text invites the user to adjust sliders and generate a post.
- Includes a `Copy` action.
- Includes a `Post on LinkedIn` CTA.

#### Requirements

- Users must be able to tune AI-generated post style before generation.
- Slider values must affect generated copy.
- Custom direction must be included in the generation prompt.
- Generated posts must use the selected campaign asset and campaign messaging.
- Generated posts must be editable or copyable before posting.
- Generated content must not overwrite selected ready-made content unless the user chooses it.

### Scoreboard and Impact Tracking

The Buzzboard landing page includes a `Scoreboard` nav item and briefly shows an `All-Time Leaderboard`.

#### Requirements

- Track employee amplification activity by campaign.
- Show all-time leaderboard rankings.
- Include contribution metrics such as post count, engagement, or points.
- Attribute posts to employees or teams.
- Campaign cards must be able to display aggregate impact such as reach, clicks, comments, reactions, or team participation.

### Buzzboard Data Requirements

- Campaign:
  - id
  - title
  - phase
  - status
  - description
  - start date
  - archive date
  - campaign tags
- Campaign asset:
  - id
  - campaign id
  - image URL
  - source type: real or AI-generated
  - selected state
  - alt text
- Post template:
  - id
  - campaign id
  - tone label
  - title
  - body text
  - recommended flag
  - hashtags
- Generated post:
  - campaign id
  - asset id
  - length setting
  - detail setting
  - energy setting
  - custom direction
  - generated body
- Post activity:
  - user id
  - campaign id
  - post text
  - asset id
  - LinkedIn share URL or confirmation state
  - timestamp
  - engagement metrics

### Buzzboard Acceptance Criteria

- A user can open Buzzboard and identify live campaigns within 10 seconds.
- A user can open `Billboard Promotions Phase I`.
- A user can select a billboard image and see it reflected in the composer.
- A user can choose a ready-made post and post it to LinkedIn.
- A user can generate a custom post using length, detail, energy, and custom-direction controls.
- A user can copy either selected or generated post text.
- Past campaigns remain archived and viewable.
- Campaign activity contributes to the scoreboard.

## 6. Navigation Model

Primary navigation should include:

- GTM Growth Command Center
- Integrated Marketing Plan
- Projects
- Mini Tools
- Status
- Buzzboard
- Live Campaigns
- Past Campaigns
- Scoreboard

Secondary navigation may include:

- Go-to-market
- Product marketing
- Campaign activation
- ABM intelligence

## 7. Integrations

Potential integrations include:

- LinkedIn for employee amplification posting and attribution.
- Marketing calendar or project-management systems for integrated campaign timelines.
- Ad, event, and CRM data sources for ABM match-rate, geo-intelligence, and intent-scoring tools.
- Analytics warehouse for campaign performance and leaderboard data.
- Asset storage for billboard images, campaign media, post templates, and generated content.

## 8. MVP Scope

### Must Have

- GTM Growth Command Center with project sections and integrated marketing plan.
- Buzzboard campaign listing and one campaign kit with ready-made post templates.
- Campaign asset grid with selected image state.
- Copy action for approved post templates.
- Manual LinkedIn posting CTA.

### Should Have

- Buzzboard AI-generated custom post controls.
- Campaign scoreboard and leaderboard tracking.
- Archive views for past campaigns.
- Project-card launch links for GTM tools.

### Could Have

- ABM mini-tools for match-rate, geo-intelligence, and intent scoring.
- Direct LinkedIn posting integration with attribution.
- Engagement import from LinkedIn.
- Admin publishing workflow for campaigns and templates.

## 9. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Employee amplification creates off-brand posts | Brand risk | Provide approved templates, campaign assets, and constrained AI generation controls. |
| GTM command centre becomes another static portal | Low adoption | Connect every card to live tools, calendars, artefacts, or launch workflows. |
| LinkedIn posting attribution is unreliable | Incomplete scoreboard | Track outbound share intents and allow manual confirmation or URL submission. |
| OCR-derived text is imperfect | Wrong copy in implementation | Treat uncertain text as approximate and validate final marketing copy before launch. |

## 10. Open Questions

- Should Buzzboard posts require approval before publishing, or are approved templates sufficient?
- Which system owns GTM project status: the command centre, a marketing calendar, or an external project-management tool?
- Should LinkedIn posting be direct API-based, prefilled share-link based, or copy-and-paste assisted?
- Who can create and archive campaigns?
- What metrics should determine leaderboard ranking: posts, reach, engagement, or weighted points?

## 11. Recommended Build Sequence

1. Build the standalone information architecture for GTM Growth and Buzzboard.
2. Implement the GTM Growth hero, integrated marketing plan module, and project sections.
3. Implement Buzzboard campaign listing and campaign detail page.
4. Add billboard asset selection and ready-made post templates.
5. Add copy and LinkedIn posting actions.
6. Add AI-generated custom post controls.
7. Add scoreboard, archive views, and campaign analytics.

## 12. Appendix: Observed Product Patterns

### GTM Command Center Pattern
Campaign planning, active experiments, ABM intelligence, and AI-agent tools are presented as one polished internal website with project-group sections and launchable tool cards.

### Employee Amplification Kit Pattern
Campaign promotion is packaged into a self-serve kit with approved assets, ready-made posts, AI-tuned custom copy, LinkedIn posting actions, archives, and scoreboards.
