import { Fragment, type CSSProperties, type ReactNode, useState } from 'react';

type ProductPage = 'quests' | 'quest-detail' | 'skills' | 'plugin-detail' | 'skill-detail' | 'guides' | 'tiers' | 'usage';

type QuestKind = 'Quick' | 'Solid' | 'Epic';
type QuestState = 'Open' | 'In Progress' | 'Completed';

type QuestCard = {
  title: string;
  description: string;
  kind: QuestKind;
  state: QuestState;
  stripe: 'amber' | 'green' | 'yellow' | 'coral' | 'violet';
  author: string;
  posted: string;
  builders: number;
  verified?: boolean;
  hrsSaved?: string;
  team?: string;
  risk?: 'LOW' | 'MEDIUM' | 'HIGH';
  questGiver?: { initial: string; mask: string; color: string };
  buildersList?: { initial: string; mask: string; color: string }[];
  completedBy?: { initial: string; mask: string; color: string };
  hero?: 'demo' | 'plain';
  body?: string[];
};

type SkillCard = {
  name: string;
  description: string;
  category: string;
  tags: string[];
};

const navItems: { id: ProductPage; label: string }[] = [
  { id: 'quests', label: 'Quest Board' },
  { id: 'usage', label: 'AI Usage' },
  { id: 'skills', label: 'Skills' },
  { id: 'guides', label: 'Guides' },
  { id: 'tiers', label: 'AI Tiers' },
];

const appItems = ['Delight Store', 'GTM', 'External Buzzboard', 'CSM', 'Recruiting', 'PMM'];

const tierFilters: ('All' | QuestKind)[] = ['All', 'Quick', 'Solid', 'Epic'];
const statusFilters: ('All' | QuestState)[] = ['All', 'Open', 'In Progress', 'Completed'];

const activeQuests: QuestCard[] = [
  {
    title: 'Salesforce Opps & Files Quick-Links per Customer on CSM Dashboard',
    description: 'Customer Success Managers (CSMs) use a shared dashboard (https://csm-reach-...',
    kind: 'Solid',
    state: 'In Progress',
    stripe: 'amber',
    author: 'L***',
    posted: '18h ago',
    builders: 1,
    hrsSaved: '9.3 hrs/wk saved',
    team: 'Customer Success (CSM)',
    risk: 'LOW',
    questGiver: { initial: 'L', mask: 'L***', color: '#e89b3a' },
    body: [
      'Customer Success Managers (CSMs) use a shared dashboard (https://csm-reach-dashboard.vercel.app/) as their central hub for managing customer accounts. Currently, when a CSM needs to reference a Salesforce Opportunity or an uploaded file for a customer, they must manually log into Salesforce, navigate to the account, browse the list of Opportunities, identify the most recent Closed Won deal, and then search through file attachments — which may be buried in older Opportunities rather than the most recent one. This multi-step process is repeated daily across all 8 CSMs (3 US, 1 EMEA, 4 APAC/SACA) and takes between 5-15 minutes per lookup.',
      'The goal of this quest is to surface per-customer Salesforce Opportunity and File links directly on the CSM dashboard, so that CSMs can click through to the right Salesforce record instantly without leaving the hub. The dashboard already integrates with external APIs (e.g. Gmail, Gong), and Salesforce connectivity will need to be added via API. The builder will need to investigate the existing API architecture and extend it to support Salesforce data.',
      '**Follow-up Quests:**',
      'The following ideas were captured from the original brain dump and are strong candidates for future quests:',
      '- **Gainsight C360 quick-links** — per-customer links to Gainsight Customer 360 profiles',
      '- **Slack channel links** — surfacing the relevant Slack channel(s) per customer',
      '- **Recurring calendar meeting links** — linking to recurring meetings associated with each customer',
      '- **Insight links** — per-customer links to Insight',
      '- **Recent Gong calls** — surfacing recent Gong call recordings with click-through access to clips and insights',
      '## Success Criteria',
      'A CSM can open the dashboard, navigate to any customer, and click directly into the relevant Salesforce Opportunity and any associated files — without logging into Salesforce separately or manually searching. Time to access Salesforce files drops from 5-15 minutes to under 30 seconds.',
    ],
  },
  {
    title: 'Self-Serve Staging Environment for Harper AI SDR Testing',
    description: 'The Delight product team uses an AI-powered chat agent called Harper, built on Delight.ai\'s platform...',
    kind: 'Quick',
    state: 'Open',
    stripe: 'green',
    author: 'A***',
    posted: '13h ago',
    builders: 1,
  },
  {
    title: 'Campaign Asset Accelerator',
    description: 'The Campaign Asset Accelerator is a self-serve platform for Demand Gen and PMM (20–30 users) t...',
    kind: 'Epic',
    state: 'In Progress',
    stripe: 'yellow',
    author: 'A***',
    posted: '14h ago',
    builders: 1,
  },
  {
    title: 'Reliable LinkedIn Recruiter Profile Collection Beyond the 25-Profile Cap',
    description: 'Who uses it: A recruiter at Delight.ai (with potential applicability to Sales Navigator users) who sources...',
    kind: 'Solid',
    state: 'Open',
    stripe: 'green',
    author: 'P***',
    posted: '17h ago',
    builders: 1,
  },
  {
    title: 'AI-Powered Daily Prioritization Engine for AEs',
    description: 'The Sales team (20 AEs and managers) currently has no consistent process for prioritizing their daily...',
    kind: 'Solid',
    state: 'Open',
    stripe: 'amber',
    author: 'H***',
    posted: '20h ago',
    builders: 1,
  },
  {
    title: 'Sales Rep Performance Scorecard — Reliable Salesforce Data Pipeline',
    description: 'The Sales team relies on a daily Google Sheets scorecard to track rep effectiveness across four ke...',
    kind: 'Solid',
    state: 'In Progress',
    stripe: 'amber',
    author: 'H***',
    posted: '20h ago',
    builders: 1,
  },
  {
    title: 'Deal Desk Opportunity Audit Agent — Auto-Review & Triage Contracts in SFDC + Google Drive',
    description: 'The Deal Desk team manually audits deals before...',
    kind: 'Epic',
    state: 'In Progress',
    stripe: 'yellow',
    author: 'M***',
    posted: '22h ago',
    builders: 1,
  },
  {
    title: 'Sales QBR Consolidated Dashboard — Salesforce, Gong & Salesloft',
    description: 'The Sales team (15 reps) currently prepares for...',
    kind: 'Epic',
    state: 'In Progress',
    stripe: 'yellow',
    author: 'R***',
    posted: '22h ago',
    builders: 1,
  },
  {
    title: 'AI-Powered Deal Room Generator for Sales',
    description: 'Sales reps at a 15-person sales team currently have no centralized, personalized way to engage buyers...',
    kind: 'Epic',
    state: 'Open',
    stripe: 'yellow',
    author: 'R***',
    posted: '23h ago',
    builders: 1,
  },
];

const completedQuests: QuestCard[] = [
  {
    title: 'Customer Account Lookup — GPT + n8n Workflow Pulling Live Salesforce Data',
    description: 'Sales, AE, CSM, and RM teams (15 people total) frequently need to look up customer account...',
    kind: 'Solid',
    state: 'Completed',
    stripe: 'amber',
    author: 'G***',
    posted: '4/7/2026',
    builders: 2,
    hero: 'demo',
    hrsSaved: '12.5 hrs/wk saved',
    team: 'Sales, AE, CSM, RM',
    risk: 'MEDIUM',
    questGiver: { initial: 'G', mask: 'G***', color: '#e89b3a' },
    buildersList: [
      { initial: 'I', mask: 'I***', color: '#e0533f' },
      { initial: 'G', mask: 'G***', color: '#e89b3a' },
    ],
    completedBy: { initial: 'I', mask: 'I***', color: '#e0533f' },
    body: [
      'Sales, AE, CSM, and RM teams (15 people total) frequently need to look up customer account information before calls, renewals, or internal reviews. Today, pulling together a full account picture requires jumping across multiple platforms — Salesforce, Insight, Gmail, and Slack — and takes an average of 10 minutes per lookup, happening 5-10 times per week per person.',
      'The goal of Version 1 is to create a seamless workflow where any employee types a customer name into a GPT interface, which triggers an n8n workflow that queries Salesforce and returns a structured account summary including: account name, ARR, renewal date, Insight link, open opportunities, and contracts — all in one response.',
      'The n8n-to-Salesforce API connection already exists, so the build focuses on wiring the GPT interface to n8n and mapping the correct Salesforce fields into a clean, readable output. https://chatgpt.com/g/g-69c43472681c8191a2814fbe736df9fc-customer-lookup-salesforce',
      '**Follow-up Quests:**',
      '- Version 2: Add Big query for usage data',
      '- Version 3: Expand the lookup to parse contracts stored in Google Drive and surface out-of-box features enabled for the account',
      '- Version 4: Flag waivers granted to customers by scanning contracts, Gmail threads, and Slack channels tied to the account',
      '## Success Criteria',
      'Any of the 10 users can type a customer name into the GPT, and within seconds receive an accurate, complete account summary (account name, ARR, renewal date, Insight link, opps, contracts) pulled live from Salesforce — with no manual platform-hopping required.',
    ],
  },
  {
    title: 'Internal Skill Publishing & Discovery Marketplace for Sendbird',
    description: 'Currently, ~20 Sendbird employees are building skills on the Automators platform, but there is no...',
    kind: 'Epic',
    state: 'Completed',
    stripe: 'yellow',
    author: 'I***',
    posted: '3/10/2026',
    builders: 1,
    verified: true,
    hero: 'plain',
    hrsSaved: '1.0 hrs/wk saved',
    team: 'All Sendbird Employees',
    risk: 'LOW',
    questGiver: { initial: 'I', mask: 'I***', color: '#e0533f' },
    buildersList: [{ initial: 'I', mask: 'I***', color: '#e0533f' }],
    body: [
      "Currently, ~20 Sendbird employees are building skills on the Automators platform, but there is no centralized way to share, discover, or reuse them. Skills are siloed to the individual who built them, and the only way to share a skill today is informally — taking roughly 3 minutes per share and happening about once a week per person. There is no process, no catalog, and no visibility into what's already been built.",
      "The goal of this quest is to build an internal skill marketplace on the Automators platform where any Sendbird employee can publish a skill they've built and any other employee can browse, discover, and use those skills — all authenticated via SSO. This removes the silo problem entirely and unlocks reuse across the company.",
      '**Follow-up Quests:**',
      '- Usage analytics dashboard showing how often each skill is being used',
      '- In-marketplace chat interface to interact with skills directly',
      '## Success Criteria',
      "Any Sendbird employee can find and deploy a published skill in under 5 minutes, with no manual coordination with the skill's original author.",
      '## Follow-up Quests',
      '- Usage Analytics Quest — build a dashboard showing skill usage frequency, top skills, and adoption trends across the company',
      '- In-Marketplace Chat Quest — add a chat interface so employees can interact with and test skills before installing',
    ],
  },
  {
    title: 'Buzz Board: LLM-Powered LinkedIn Post Creation for Employee Advocacy',
    description: 'Buzz Board is an internal employee advocacy app designed to drive organic LinkedIn engagement...',
    kind: 'Epic',
    state: 'Completed',
    stripe: 'yellow',
    author: 'A***',
    posted: '14h ago',
    builders: 1,
  },
  {
    title: 'ABM Field Event Planner — Interactive Contact Density Map',
    description: 'The PMM, Demand Gen, and Marketing Leadership teams (8-10 people) need a way to visually identify...',
    kind: 'Solid',
    state: 'Completed',
    stripe: 'amber',
    author: 'A***',
    posted: '14h ago',
    builders: 1,
  },
  {
    title: 'ABM Match Rate Dashboard for Event Sponsorship Evaluation',
    description: 'The Demand Gen, Field Events, and PMM teams (3-5 people) need to evaluate whether conferences an...',
    kind: 'Solid',
    state: 'Completed',
    stripe: 'green',
    author: 'A***',
    posted: '14h ago',
    builders: 1,
  },
  {
    title: 'Full Automation of Monthly Operating Metrics Google Sheet Update',
    description: "Each month, 3 people spend approximately 1 hour each updating Sendbird's Monthly Operating...",
    kind: 'Solid',
    state: 'Completed',
    stripe: 'amber',
    author: 'J***',
    posted: '20h ago',
    builders: 1,
  },
  {
    title: 'Delight AI Agent Feature Flag 자동 수집 · 메모리 시스템 구축',
    description: '배경 및 문제: Delight AI Agent 팀(QE, FDT, PM, Client, Server 등 약 20-30명)은 feature flag의 현재 상태를 파...',
    kind: 'Epic',
    state: 'Completed',
    stripe: 'yellow',
    author: 'A***',
    posted: '1d ago',
    builders: 1,
  },
  {
    title: 'AI Content Wizard - Blog and page writing',
    description: 'Who uses it: Content/SEO, PMM, Web Strategy, and Web/Dev teams producing blog and article content...',
    kind: 'Epic',
    state: 'Completed',
    stripe: 'yellow',
    author: 'M***',
    posted: '1d ago',
    builders: 1,
  },
  {
    title: 'Figma-to-CMS Automation: AI-Powered Landing Page Assembly & Publish Pipeline',
    description: 'Who uses it: Design, Web, PMM, and Demand Gen teams (10+ people) involved in the end-to-end...',
    kind: 'Epic',
    state: 'Completed',
    stripe: 'yellow',
    author: 'D***',
    posted: '2d ago',
    builders: 1,
  },
];

type PluginCard = { name: string; description: string; badgeLetter: string; badgeColor: 'coral' | 'green' | 'violet' | 'amber'; skillCount: number };

const pluginCards: PluginCard[] = [
  { name: 'sales-skills', description: 'AI-powered sales skills for the Sendbird sales team', badgeLetter: 'S', badgeColor: 'coral', skillCount: 12 },
  { name: 'vercel-dev-skills', description: 'AI-powered development skills for Vercel app teams — project setup, spec drafting, Linear tickets, PR shipping, and...', badgeLetter: 'V', badgeColor: 'coral', skillCount: 5 },
  { name: 'recruiting', description: 'AI-powered recruiting tools for sourcing, screening, and scheduling candidates', badgeLetter: 'R', badgeColor: 'green', skillCount: 8 },
  { name: 'customer-success', description: 'Customer health scoring, QBR prep, and renewal automation for CS teams', badgeLetter: 'C', badgeColor: 'green', skillCount: 12 },
  { name: 'forward-deployed', description: 'Implementation and onboarding tools for forward-deployed engineers', badgeLetter: 'F', badgeColor: 'amber', skillCount: 6 },
  { name: 'design', description: 'Design workflow automation for Figma handoffs, asset management, and feedback loops', badgeLetter: 'D', badgeColor: 'violet', skillCount: 5 },
  { name: 'demand-gen', description: 'Demand generation automation for campaigns, lead scoring, and pipeline reports', badgeLetter: 'D', badgeColor: 'violet', skillCount: 9 },
  { name: 'product-marketing', description: 'Product positioning, competitive intel, and launch playbook automation', badgeLetter: 'P', badgeColor: 'green', skillCount: 7 },
];

const skillTags = ['linkedin', 'outbound', 'web-design', 'landing-page', 'design-system', 'slide', 'design', 'deck', 'tse', 'internal guide', 'documentation', 'support'];

type SalesSkill = { name: string; desc: string; up: number; down: number };
const salesSkills: SalesSkill[] = [
  { name: 'cold email', desc: 'When the user wants to write a cold outreach email or prospecting email to a...', up: 4, down: 72 },
  { name: 'rooster open call kit', desc: 'When the user wants to prepare for a cold call, generate a cold call script, practice...', up: 12, down: 67 },
  { name: 'discovery questions', desc: 'When the user wants help preparing discovery questions for a prospect call or...', up: 9, down: 64 },
  { name: 'abm cadence drafter', desc: 'When the user wants to build an ABM outbound cadence, draft a Salesloft...', up: 17, down: 15 },
  { name: 'call summary', desc: 'When the user wants to summarize a sales call, discovery call, or customer meeting...', up: 8, down: 70 },
  { name: 'signal scout', desc: 'When the user pastes an account list, uploads a CSV, or asks to scan accounts...', up: 1, down: 20 },
  { name: 'owl intel scout', desc: 'When the user wants to research a company before a sales call, generate a...', up: 10, down: 40 },
  { name: 'falcon follow up', desc: 'When the user pastes a meeting transcript, call notes, or call summary and asks for a...', up: 18, down: 19 },
  { name: 'follow up email', desc: 'When the user wants to write a follow-up email after a sales call, demo, or meeting...', up: 6, down: 34 },
  { name: 'harrier discovery coach', desc: 'When the user pastes a Gong call transcript or call notes and asks for a call...', up: 5, down: 55 },
  { name: 'meddpicc advisor', desc: 'When the user asks about MEDDPICC — including how it works, how to apply it to...', up: 1, down: 60 },
  { name: 'objection handler', desc: 'When the user shares a sales objection they received from a prospect and wants...', up: 6, down: 22 },
];

const meddpiccDescription = "When the user asks about MEDDPICC — including how it works, how to apply it to a deal, what questions to ask, whether a deal is qualified, how to find a champion, or how to validate any MEDDPICC element. Also triggers when the user pastes call notes or a transcript and asks for MEDDPICC analysis, or says 'review my deal', 'score my deal', or 'what am I missing in this deal'.";

const meddpiccSkillMd = `You are SBSales MEDDPICC Master Advisor — Sendbird's deal qualification coach. You teach MEDDPICC, help reps apply it to live deals, validate whether criteria have been met, extract MEDDPICC elements from call transcripts, and guide reps on what to do next in each deal stage.

**Only give guidance based on MEDDPICC (the full 8-element version).** Do not reference MEDDIC or MEDDICC variants.

---

## What You Can Do

1. **Teach MEDDPICC** — explain any element, its definition, and why it matters
2. **Give discovery questions** — per letter, per stage, per persona
3. **Validate deal qualification** — assess whether a rep has met criteria for any element or stage
4. **Extract MEDDPICC from calls** — when a rep pastes a transcript or call notes, fill in what's been discovered and flag what's missing
5. **Score deals** — tell the rep where they stand and what's the highest-priority gap
6. **Coach on next steps** — specific actions to advance the deal for each letter

---

## How to Respond`;

const marketplaceSkills: SkillCard[] = [
  { name: 'meddpicc advisor', description: 'Sales qualification advisor for MEDDPICC deal thinking and risk review.', category: 'Sales', tags: ['sales', 'qualification', 'plugin'] },
  { name: 'developer pr reviewer', description: 'Checklist-driven review helper for pull requests, tests, and docs.', category: 'Developer', tags: ['code', 'review', 'agent'] },
  { name: 'recruiting sourcer', description: 'Structured recruiting prompts for profile review and candidate summaries.', category: 'Recruiting', tags: ['recruiting', 'profiles'] },
  { name: 'csm account brief', description: 'Customer-success account briefing template for preparing account reviews.', category: 'Customer Success', tags: ['csm', 'accounts'] },
  { name: 'fd implementation planner', description: 'Forward-deployed implementation planning workflow for customer rollouts.', category: 'Forward-Deployed', tags: ['implementation'] },
  { name: 'design critique pass', description: 'Product-design critique helper for hierarchy, spacing, and visual consistency.', category: 'Design', tags: ['design', 'qa'] },
];

const tierRows = [
  {
    id: '01',
    title: 'Beginner',
    subtitle: 'the Adopter',
    summary: 'Types a question, reads the answer, and returns to working the way they already worked.',
    tokens: '<1M',
  },
  {
    id: '02',
    title: 'Intermediate',
    subtitle: 'the Accelerator',
    summary: 'AI lives inside the work. Context goes in first; something the team actually uses comes out.',
    tokens: '1-10M',
  },
  {
    id: '03',
    title: 'Expert',
    subtitle: 'the Architect',
    summary: 'Builds agents that run while you’re in other meetings. Teammates rely on the things you ship.',
    tokens: '10-50M',
  },
  {
    id: '04',
    title: 'Catalyst',
    subtitle: 'custom tool builder',
    summary: 'Software is cheap. You ship the tool your team needs this week — in production by Thursday.',
    tokens: '50-100M',
  },
  {
    id: '05',
    title: 'AI God',
    subtitle: 'the Multiplier',
    summary: 'Stopped building tools. Started building systems. The company moves differently because of what you ship.',
    tokens: '100M+',
  },
];

type TopBuilder = { mask: string; cc: number; codex: number };
const topBuilders: TopBuilder[] = [
  { mask: 'H**** ***', cc: 8.5, codex: 25.0 },
  { mask: 'E*** ***', cc: 16.7, codex: 0.3 },
  { mask: 'J** **', cc: 6.0, codex: 10.2 },
  { mask: 'N***** ***', cc: 9.8, codex: 5.1 },
  { mask: 'D***** ***', cc: 11.4, codex: 2.2 },
  { mask: 'G**** *****', cc: 11.0, codex: 2.2 },
  { mask: 'L**** ***', cc: 7.6, codex: 3.6 },
  { mask: 'I**** ***', cc: 3.5, codex: 5.9 },
  { mask: 'M*** ****', cc: 6.0, codex: 2.3 },
  { mask: 'M****** ***', cc: 6.2, codex: 1.9 },
  { mask: 'A****** ***', cc: 4.8, codex: 3.2 },
  { mask: 'J***** ***', cc: 3.5, codex: 3.7 },
  { mask: 'A**** ***', cc: 3.0, codex: 3.6 },
];

type DirectReport = { mask: string; tokens: string; activeDays: number };
const directReports: DirectReport[] = [
  { mask: 'H**** ***', tokens: '33.5B', activeDays: 28 },
  { mask: 'E*** ***', tokens: '17.0B', activeDays: 25 },
  { mask: 'J** **', tokens: '16.2B', activeDays: 31 },
  { mask: 'N***** ***', tokens: '14.9B', activeDays: 28 },
  { mask: 'D***** ***', tokens: '13.6B', activeDays: 29 },
  { mask: 'G**** *****', tokens: '13.2B', activeDays: 29 },
  { mask: 'L**** ***', tokens: '11.2B', activeDays: 29 },
  { mask: 'I**** ***', tokens: '9.4B', activeDays: 27 },
  { mask: 'M*** ****', tokens: '8.3B', activeDays: 27 },
  { mask: 'M****** ***', tokens: '8.1B', activeDays: 24 },
  { mask: 'A****** ***', tokens: '8.0B', activeDays: 29 },
];

type LeaderRow = { rank: number; mask: string; tier: string; tokens: string; barFill: number };
const ccLeaders: LeaderRow[] = [
  { rank: 4, mask: 'N**** ***', tier: 'AI God', tokens: '14.1B', barFill: 88 },
  { rank: 5, mask: 'D***** ***', tier: 'AI God', tokens: '13.6B', barFill: 80 },
  { rank: 6, mask: 'G**** *****', tier: 'AI God', tokens: '13.2B', barFill: 77 },
  { rank: 7, mask: 'L**** ***', tier: 'AI God', tokens: '11.2B', barFill: 66 },
  { rank: 8, mask: 'I**** ***', tier: 'AI God', tokens: '9.4B', barFill: 56 },
  { rank: 9, mask: 'M*** ****', tier: 'AI God', tokens: '8.3B', barFill: 49 },
  { rank: 10, mask: 'M****** ***', tier: 'AI God', tokens: '8.1B', barFill: 48 },
  { rank: 11, mask: 'A****** ***', tier: 'AI God', tokens: '8.0B', barFill: 47 },
  { rank: 12, mask: 'J***** ***', tier: 'AI God', tokens: '6.9B', barFill: 42 },
];
const codexLeaders: LeaderRow[] = [
  { rank: 4, mask: 'L**** ***', tier: 'AI God', tokens: '10.8B', barFill: 90 },
  { rank: 5, mask: 'N***** ***', tier: 'AI God', tokens: '10.7B', barFill: 89 },
  { rank: 6, mask: 'M*** ****', tier: 'AI God', tokens: '7.8B', barFill: 65 },
  { rank: 7, mask: 'J**** ****', tier: 'AI God', tokens: '5.7B', barFill: 47 },
  { rank: 8, mask: 'D**** *****', tier: 'AI God', tokens: '5.4B', barFill: 45 },
  { rank: 9, mask: 'A**** ***', tier: 'AI God', tokens: '5.0B', barFill: 42 },
  { rank: 10, mask: 'D**** ***', tier: 'AI God', tokens: '4.4B', barFill: 37 },
  { rank: 11, mask: 'I***** ******', tier: 'AI God', tokens: '4.1B', barFill: 34 },
  { rank: 12, mask: 'J*** ****', tier: 'AI God', tokens: '4.0B', barFill: 33 },
];

// Daily token trend — 31 daily points Mar 24 (Wed) → Apr 23 (Fri).
// Weekends (Sat/Sun) intentionally dip to highlight that AI usage still
// tracks human office hours rather than running continuously through agents.
const trendDisplayLabels = ['Mar 24', 'Mar 27', 'Mar 30', 'Apr 2', 'Apr 5', 'Apr 8', 'Apr 11', 'Apr 14', 'Apr 17', 'Apr 20', 'Apr 23'];
const ccTrend = [
  9.0, 10.5, 11.0,  5.5,  4.8, 10.0, 11.5,    // Mar 24-30
  12.0, 12.5, 12.0,  5.8,  5.0, 11.5, 12.5,    // Mar 31-Apr 6
  13.0, 13.5, 13.0,  6.5,  5.5, 12.5, 13.5,    // Apr 7-13
  14.0, 14.5, 14.0,  7.0,  6.0, 13.5, 15.0,    // Apr 14-20
  16.0, 16.5, 15.0,                            // Apr 21-23
];
const codexTrend = [
  4.5,  5.5,  6.0,  2.5,  2.0,  5.5,  6.5,
  7.0,  7.5,  8.0,  3.0,  2.5,  7.5,  8.5,
  9.0,  9.5, 10.0,  4.0,  3.5,  9.5, 10.5,
 11.0, 11.5, 11.0,  4.5,  4.0, 11.0, 12.5,
 13.0, 13.5, 12.0,
];

type QuestRef = { list: 'active' | 'completed'; idx: number };

function UnlockProductApp() {
  const [activePage, setActivePage] = useState<ProductPage>('quests');
  const [questFilter, setQuestFilter] = useState<'active' | 'completed'>('active');
  const [tierTab, setTierTab] = useState<'tiers' | 'arc' | 'team'>('tiers');
  const [selectedQuest, setSelectedQuest] = useState<QuestRef>({ list: 'active', idx: 0 });

  return (
    <main className="unlock-root">
      <div className="unlock-shell">
        <aside className="unlock-sidebar">
          <div className="unlock-brand">
            <span>u</span>
            <strong>unlock.ai</strong>
          </div>
          <p className="unlock-side-section">Navigation</p>
          <nav>
            {navItems.map((item) => (
              <button key={item.id} className={activePage === item.id ? 'active' : ''} onClick={() => setActivePage(item.id)}>
                <i className="unlock-nav-dot" />
                {item.label}
              </button>
            ))}
          </nav>
          <p className="unlock-side-section">Apps</p>
          <nav className="unlock-app-list">
            {appItems.map((label) => (
              <button key={label} disabled><i className="unlock-nav-dot" />{label}</button>
            ))}
          </nav>
          <div className="unlock-user-chip">
            <span>JK</span>
            <strong>John</strong>
          </div>
        </aside>
        <section className="unlock-canvas">
          {activePage === 'quests' && <QuestBoard filter={questFilter} setFilter={setQuestFilter} openDetail={(ref) => { setSelectedQuest(ref); setActivePage('quest-detail'); }} />}
          {activePage === 'quest-detail' && <QuestDetail questRef={selectedQuest} backToBoard={() => setActivePage('quests')} />}
          {activePage === 'skills' && <SkillsMarketplace openPlugin={() => setActivePage('plugin-detail')} />}
          {activePage === 'plugin-detail' && <PluginDetail backToSkills={() => setActivePage('skills')} openSkill={() => setActivePage('skill-detail')} />}
          {activePage === 'skill-detail' && <SkillDetail backToPlugin={() => setActivePage('plugin-detail')} />}
          {activePage === 'guides' && <GuidesPage />}
          {activePage === 'tiers' && <AiTiersPage activeTab={tierTab} setActiveTab={setTierTab} />}
          {activePage === 'usage' && <AiUsagePlaceholder />}
        </section>
      </div>
    </main>
  );
}

function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <header className="unlock-page-header">
      <div>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {children}
    </header>
  );
}

function QuestBoard({ filter, setFilter, openDetail }: { filter: 'active' | 'completed'; setFilter: (filter: 'active' | 'completed') => void; openDetail: (ref: QuestRef) => void }) {
  const [tierFilter, setTierFilter] = useState<'All' | QuestKind>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | QuestState>('All');

  const pool = filter === 'completed' ? completedQuests : activeQuests;
  const quests = pool.filter((q) => (tierFilter === 'All' || q.kind === tierFilter) && (statusFilter === 'All' || q.state === statusFilter));

  return (
    <div className="unlock-page unlock-quest-page">
      <header className="unlock-quest-header">
        <div>
          <h1>Quest Board</h1>
          <p>Active automation challenges</p>
        </div>
        <div className="unlock-language-toggle"><span className="active">EN</span><span>KO</span></div>
      </header>
      <div className="unlock-filter-row">
        <span className="unlock-filter-label">Tier:</span>
        {tierFilters.map((t) => (
          <button key={t} className={`unlock-pill ${tierFilter === t ? 'selected' : ''}`} onClick={() => setTierFilter(t)}>{t}</button>
        ))}
        <span className="unlock-filter-label">Status:</span>
        {statusFilters.map((s) => (
          <button
            key={s}
            className={`unlock-pill ${statusFilter === s ? 'selected' : ''}`}
            onClick={() => {
              setStatusFilter(s);
              if (s === 'Completed') setFilter('completed');
              else if (filter === 'completed') setFilter('active');
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="unlock-quest-grid">
        {quests.map((quest) => {
          const hasBody = !!quest.body;
          return (
            <button
              key={quest.title}
              className={`unlock-quest-card stripe-${quest.stripe}`}
              onClick={hasBody ? () => openDetail({ list: filter === 'completed' ? 'completed' : 'active', idx: pool.indexOf(quest) }) : undefined}
            >
              <div className="unlock-card-topline">
                <em className={`unlock-kind kind-${quest.kind.toLowerCase()}`}>{quest.kind === 'Quick' ? '⚡' : quest.kind === 'Solid' ? '✦' : '◆'} {quest.kind}</em>
                <em className={`unlock-state state-${quest.state.toLowerCase().replace(' ', '-')}`}>{quest.state}</em>
              </div>
              <h2>{quest.title}</h2>
              <p>{quest.description}</p>
              <footer className="unlock-card-foot">
                <span className="unlock-avatar">{quest.author.charAt(0)}</span>
                <small>{quest.author}</small>
                <small className="unlock-posted">⌚ {quest.posted}</small>
                {quest.verified
                  ? <small className="unlock-verified">✓ Verified</small>
                  : <small className="unlock-builders">👤 {quest.builders} builder</small>}
              </footer>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuestDetail({ questRef, backToBoard }: { questRef: QuestRef; backToBoard: () => void }) {
  const pool = questRef.list === 'completed' ? completedQuests : activeQuests;
  const quest = pool[questRef.idx] ?? activeQuests[0];
  const isActive = quest.state === 'In Progress' || quest.state === 'Open';
  const builders = quest.buildersList ?? [{ initial: 'I', mask: 'I***', color: '#e0533f' }];

  return (
    <div className="unlock-page unlock-quest-detail-page">
      <button className="unlock-back-link" onClick={backToBoard}>← Quest Board</button>

      {quest.hero && (
        <div className={`unlock-qd-hero ${quest.hero === 'demo' ? 'has-demo' : ''}`}>
          {quest.hero === 'demo' && (
            <div className="unlock-qd-demo-play"><span>▶</span><small>Demo walkthrough</small></div>
          )}
        </div>
      )}

      <div className="unlock-qd-layout">
        <article className="unlock-qd-main">
          <div className="unlock-qd-pills">
            <em className={`unlock-kind kind-${quest.kind.toLowerCase()}`}>{quest.kind === 'Quick' ? '⚡' : quest.kind === 'Solid' ? '✦' : '◆'} {quest.kind}</em>
            <em className={`unlock-state state-${quest.state.toLowerCase().replace(' ', '-')}`}>{quest.state}</em>
            {quest.verified && <em className="unlock-verified-pill">✓ Verified</em>}
            <small className="unlock-qd-time">⌚ {quest.posted}</small>
          </div>
          <h1 className="unlock-qd-title">{quest.title}</h1>
          <div className="unlock-qd-body">
            {quest.body?.map((para, i) => <QuestBodyBlock key={i} text={para} />)}
          </div>

          {isActive && (
            <footer className="unlock-qd-cta">
              <div>
                <strong>🐝 Adam Flayman <span>— CSM coder bee</span></strong>
                <p>Drafts PRD, TDD, and diagrams, then ships a PR on <code>sendbird-ai/csm-workspace</code>. You approve each step.</p>
              </div>
              <button className="unlock-primary-button unlock-build-with"><span>🐝</span> Build with Adam Flayman <em>→</em></button>
            </footer>
          )}
        </article>

        <aside className="unlock-qd-side">
          <section>
            <p className="unlock-qd-side-label">Quest Info</p>
            <ul>
              {quest.hrsSaved && <li>⚡ {quest.hrsSaved}</li>}
              {quest.team && <li>🏢 {quest.team}</li>}
              {quest.risk && <li>🛡 Risk: {quest.risk}</li>}
            </ul>
          </section>
          {quest.questGiver && (
            <section>
              <p className="unlock-qd-side-label">Quest Giver</p>
              <div className="unlock-qd-person">
                <span style={{ background: quest.questGiver.color }}>{quest.questGiver.initial}</span>
                <strong>{quest.questGiver.mask}</strong>
              </div>
            </section>
          )}
          <section>
            <p className="unlock-qd-side-label">Builders ({builders.length})</p>
            {builders.map((b, i) => (
              <div className="unlock-qd-person" key={i}>
                <span style={{ background: b.color }}>{b.initial}</span>
                <strong>{b.mask}</strong>
              </div>
            ))}
          </section>
          {quest.completedBy && (
            <section>
              <p className="unlock-qd-side-label">Completed By</p>
              <div className="unlock-qd-person">
                <span style={{ background: quest.completedBy.color }}>{quest.completedBy.initial}</span>
                <strong>{quest.completedBy.mask}</strong>
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}

function QuestBodyBlock({ text }: { text: string }) {
  if (text.startsWith('## ')) {
    return <h2 className="unlock-qd-h2">{text.slice(3)}</h2>;
  }
  if (text.startsWith('- ')) {
    return <p className="unlock-qd-li">{renderMd(text.slice(2))}</p>;
  }
  if (text.startsWith('**') && text.endsWith(':**')) {
    return <p className="unlock-qd-strong">{text.replace(/\*\*/g, '')}</p>;
  }
  return <p>{renderMd(text)}</p>;
}

function renderMd(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => part.startsWith('**') && part.endsWith('**')
    ? <strong key={i}>{part.slice(2, -2)}</strong>
    : <Fragment key={i}>{part}</Fragment>);
}

function SkillsMarketplace({ openPlugin }: { openPlugin: () => void }) {
  return (
    <div className="unlock-page unlock-skills-page">
      <header className="unlock-quest-header">
        <div>
          <h1>Skills Marketplace</h1>
          <p>Browse, install, and share reusable automation skills</p>
        </div>
        <div className="unlock-skill-actions">
          <button>📂 My Skills</button>
          <button>🗑 Trash</button>
          <button>+ New Skill</button>
          <button className="unlock-primary-button-soft">+ New Plugin</button>
        </div>
      </header>

      <h3 className="unlock-section-heading">Plugins</h3>
      <div className="unlock-plugin-grid">
        {pluginCards.map((p, i) => (
          <article key={p.name} className="unlock-plugin-card" onClick={i === 0 ? openPlugin : undefined}>
            <header>
              <span className="unlock-plugin-folder">📁 <strong>{p.name}</strong></span>
              <small>@ {p.skillCount} skills</small>
            </header>
            <p>{p.description}</p>
            <footer>
              <span className={`unlock-plugin-badge badge-${p.badgeColor}`}>{p.badgeLetter}</span>
              <em className="unlock-plugin-tag">PLUGIN</em>
              <span className="unlock-plugin-lock">🔒</span>
            </footer>
          </article>
        ))}
      </div>

      <h3 className="unlock-section-heading">Skills</h3>
      <div className="unlock-skill-controls">
        <input placeholder="🔍 Search skills..." />
        <select aria-label="Sort skills"><option>Newest</option><option>Most relevant</option></select>
      </div>
      <div className="unlock-tag-row">
        {skillTags.map((t) => <span key={t} className="unlock-skill-tag">{t}</span>)}
      </div>
      <div className="unlock-skill-grid">
        {marketplaceSkills.map((skill, index) => (
          <button key={skill.name} className="unlock-skill-card" onClick={index === 0 ? openPlugin : undefined}>
            <span>{skill.category}</span>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
            <div>{skill.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PluginDetail({ backToSkills, openSkill }: { backToSkills: () => void; openSkill: () => void }) {
  const [tab, setTab] = useState<'skills' | 'members' | 'history'>('skills');
  return (
    <div className="unlock-page unlock-plugin-page">
      <button className="unlock-back-link" onClick={backToSkills}>← Back to Skills</button>
      <h1 className="unlock-plugin-title">sales-skills</h1>
      <p className="unlock-plugin-sub">AI-powered sales skills for the Sendbird sales team</p>
      <p className="unlock-plugin-path">/sales-skills</p>

      <div className="unlock-plugin-tabs">
        <button className={tab === 'skills' ? 'active' : ''} onClick={() => setTab('skills')}>Skills</button>
        <button className={tab === 'members' ? 'active' : ''} onClick={() => setTab('members')}>Members</button>
        <button className={tab === 'history' ? 'active' : ''} onClick={() => setTab('history')}>History</button>
      </div>

      {tab === 'skills' && (
        <>
          <p className="unlock-plugin-count">Skills ({salesSkills.length})</p>
          <div className="unlock-sales-skill-grid">
            {salesSkills.map((s) => (
              <button
                key={s.name}
                className="unlock-sales-skill-card"
                onClick={s.name === 'meddpicc advisor' ? openSkill : undefined}
              >
                <header>
                  <h4>{s.name}</h4>
                  <em className="unlock-sales-tag">sales-skills</em>
                </header>
                <p>{s.desc}</p>
                <footer>
                  <span className="unlock-sales-avatar">I</span>
                  <small>I***</small>
                  <em>↑ {s.up}</em>
                  <em>↓ {s.down}</em>
                </footer>
              </button>
            ))}
          </div>
        </>
      )}
      {tab === 'members' && <p className="unlock-empty">Members tab</p>}
      {tab === 'history' && <p className="unlock-empty">History tab</p>}
    </div>
  );
}

function SkillDetail({ backToPlugin }: { backToPlugin: () => void }) {
  return (
    <div className="unlock-page unlock-skill-detail-page">
      <button className="unlock-back-link" onClick={backToPlugin}>← Back to Skills</button>

      <div className="unlock-skill-head">
        <h1>meddpicc advisor</h1>
        <em className="unlock-sales-tag">sales-skills</em>
      </div>
      <div className="unlock-skill-meta">
        <span className="unlock-sales-avatar">I</span>
        <small>I***</small>
        <em>⬇ 60 installs</em>
        <em>↑ 1</em>
      </div>

      <div className="unlock-skill-layout">
        <article className="unlock-skill-main">
          <section className="unlock-skill-card-panel">
            <h3>Description</h3>
            <p>{meddpiccDescription}</p>
          </section>
          <section className="unlock-skill-card-panel">
            <h3>SKILL.md</h3>
            <pre className="unlock-skill-md">{meddpiccSkillMd}</pre>
          </section>
        </article>
        <aside className="unlock-skill-side">
          <section>
            <p className="unlock-qd-side-label">Install</p>
            <p className="unlock-install-sub">Add to Claude Code as a slash command</p>
            <code className="unlock-install-cmd">claude plugin add sales-skills/meddpicc-advisor</code>
          </section>
          <section>
            <p className="unlock-qd-side-label">Author</p>
            <div className="unlock-qd-person">
              <span style={{ background: '#e0533f' }}>I</span>
              <strong>I***</strong>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

function GuidesPage() {
  const [view, setView] = useState<'overview' | 'detail'>('overview');
  const categories = [
    { key: 'overview', label: 'Overview' },
    { key: 'team-app', label: 'TEAM APP DEPLOYMENT', section: true, expanded: true },
    { key: 'app-dev', label: 'APP DEVELOPMENT', section: true },
    { key: 'vercel', label: 'VERCEL', section: true },
    { key: 'nbn', label: 'NBN', section: true },
    { key: 'ci-checks', label: 'CI CHECKS', section: true },
    { key: 'automators', label: 'AUTOMATORS PLATFORM', section: true },
  ];

  const teamAppGuides = [
    'Git & GitHub Settings',
    'Monorepo Overview',
    'Slack Bot Provisioning',
    'Configuring a Monorepo',
    'Shared Database with Supabase',
    'Deploying with Vercel',
    'Scaffolding a New App',
    'Migrating with Claude Code',
  ];

  const overviewCards = [
    { title: 'Team App Deployment', desc: "Everything you need to set up, deploy, and manage your team's apps in a monorepo.", count: 8 },
    { title: 'App Development', desc: 'Guides for building apps, automations, and integrations.', count: 6 },
    { title: 'Vercel', desc: 'Guides for deploying, configuring, and sharing apps on the [Vercel platform](https://vercel.com/docs).', count: 6 },
    { title: 'n8n', desc: 'Guides for using n8n workflow automation with our tools and AI assistants.', count: 1 },
    { title: 'CI Checks', desc: "Org-wide CI checks that run automatically on every PR across all `sendbird-ai` repos. No per-repo setup required.", count: 1 },
    { title: 'Automators Platform', desc: "Everything you need to know about using The Automator's Guild — the RPG-style platform where employees post...", count: 3 },
  ];

  return (
    <div className="unlock-page unlock-guides-page">
      <div className="unlock-guides-layout">
        <aside className="unlock-guides-nav">
          <h4>Guides</h4>
          {categories.map((c) => (
            <Fragment key={c.key}>
              <button
                className={`unlock-guides-nav-item ${c.section ? 'section' : ''} ${view === 'overview' && c.key === 'overview' ? 'active' : ''}`}
                onClick={() => { if (c.key === 'overview') setView('overview'); }}
              >
                {c.label}
                {c.section && !c.expanded && <span className="chev">›</span>}
              </button>
              {c.key === 'team-app' && c.expanded && (
                <div className="unlock-guides-sublist">
                  {teamAppGuides.map((g, i) => (
                    <button key={g} className={view === 'detail' && i === 0 ? 'active' : ''} onClick={() => setView('detail')}>{g}</button>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </aside>

        {view === 'overview' ? (
          <section className="unlock-guides-main">
            <h1>Guides</h1>
            <p className="unlock-guides-sub">Everything you need to know about using The Automator's Guild.</p>
            <div className="unlock-guides-overview-grid">
              {overviewCards.map((c) => (
                <article key={c.title} className="unlock-guides-overview-card" onClick={() => setView('detail')}>
                  <span className="unlock-guides-icon">📘</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <small>{c.count} guides →</small>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <>
            <section className="unlock-guides-main">
              <p className="unlock-breadcrumb">Guides › Git & GitHub Settings</p>
              <h1>Git & GitHub Settings</h1>
              <p>This guide documents the Git and GitHub configuration for the Automators repository. These settings ensure clean history, prevent accidental overwrites, and keep the deployment pipeline safe.</p>
              <h2>Prerequisites</h2>
              <h3>GitHub CLI (gh)</h3>
              <p>Install the GitHub CLI — it's required for creating PRs, managing repos, and integrating with AI tools:</p>
              <pre>{'# macOS\nbrew install gh\n\n# Then authenticate\ngh auth login'}</pre>
              <p>Once authenticated, you can create PRs, merge, check CI status, and manage the repo all from the terminal.</p>
              <h3>GitHub MCP Server (for AI tools)</h3>
              <p>If you use Claude Code or other AI coding tools, install the official GitHub MCP server to give your AI agent access to GitHub:</p>
              <pre>npx -y @modelcontextprotocol/server-github</pre>
              <p>This lets your AI tools create issues, PRs, review code, and manage repos through the MCP protocol. See <a href="#">GitHub's MCP server docs</a> for configuration details.</p>
            </section>
            <aside className="unlock-guides-toc">
              <h5>On this page</h5>
              <a className="active" href="#prereq">Prerequisites</a>
              <a href="#cli">GitHub CLI (gh)</a>
              <a href="#mcp">GitHub MCP Server (for AI tools)</a>
              <a href="#branch">Branch Strategy</a>
              <a href="#protect">Branch Protection Rules</a>
              <a href="#merge">Merge Settings</a>
              <a href="#workflow">Recommended Workflow</a>
              <a href="#start">Starting a feature</a>
              <a href="#while">While working</a>
              <a href="#pr">Creating a PR</a>
              <a href="#date">If your PR is out of date</a>
              <a href="#release">Releasing to production</a>
              <a href="#schema">Schema Changes</a>
              <a href="#local">Local Git Config (Recommended)</a>
              <a href="#quick">Quick Reference</a>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}

function AiTiersPage({ activeTab, setActiveTab }: { activeTab: 'tiers' | 'arc' | 'team'; setActiveTab: (tab: 'tiers' | 'arc' | 'team') => void }) {
  return (
    <div className="unlock-page unlock-tiers-page">
      <h1 className="unlock-tier-hero">Becoming <em>AI-First<mark>.</mark></em></h1>
      <p className="unlock-tier-sub">How every person at unlock.ai moves from using AI to becoming AI-first — and how we measure the journey.</p>
      <div className="unlock-tier-tab-row">
        <button className={activeTab === 'tiers' ? 'active' : ''} onClick={() => setActiveTab('tiers')}><sup>01</sup> The Five Tiers</button>
        <button className={activeTab === 'arc' ? 'active' : ''} onClick={() => setActiveTab('arc')}><sup>02</sup> Organisational Arc</button>
        <button className={activeTab === 'team' ? 'active' : ''} onClick={() => setActiveTab('team')}><sup>03</sup> By Team</button>
      </div>
      {activeTab === 'tiers' && <TierTable />}
      {activeTab === 'arc' && <ArcView />}
      {activeTab === 'team' && <TeamMatrix />}
    </div>
  );
}

type TierExpandedContent = {
  mindset: string[];
  produce: string[];
  next: string[];
  stageNote?: string;
};

const tierExpanded: Record<string, TierExpandedContent> = {
  '02': {
    mindset: [
      'Loads the company context before the ask — Cowork, the right MCP, the relevant docs',
      'Works inside the IDE or Cowork rather than bouncing to a browser',
      'Keeps a short list of tuned prompts — and posts the best ones in Slack',
      'Picks Claude for writing, Codex for code, a connector for a specific job — on purpose',
    ],
    produce: [
      'A board memo in thirty minutes instead of an afternoon',
      'Research that spans Gong, Notion, and the Corporate Brain in one pass',
      'PRs that arrive with tests and docs already drafted',
      'The weekly note nobody asked for but everybody reads',
    ],
    next: [
      'Chain two tools together without you in the middle',
      'Ship a Slackbot your team reaches for without thinking',
      'Pick up your first Automators quest',
    ],
    stageNote: '→ Stage 2, Connected AI — we are here',
  },
};

function TierTable() {
  const [expandedTier, setExpandedTier] = useState('02');

  return (
    <div className="unlock-five-tiers">
      {tierRows.map((tier) => {
        const isExpanded = expandedTier === tier.id;
        const content = tierExpanded[tier.id];

        return (
          <article className={`unlock-tier-row ${isExpanded ? 'expanded' : ''} ${isExpanded && tier.id === '02' ? 'accent' : ''}`} key={tier.id}>
            <button className="unlock-tier-summary" onClick={() => setExpandedTier(isExpanded ? '' : tier.id)}>
              <span className="unlock-tier-num">{tier.id}</span>
              <h2 className="unlock-tier-name">{tier.title} <em>— {tier.subtitle}</em></h2>
              <p className="unlock-tier-summary-text">{tier.summary}</p>
              <div className="unlock-token-band">
                <strong>{tier.tokens}</strong>
                <small>TOKENS / DAY</small>
              </div>
              <i className="unlock-tier-expand">{isExpanded ? '×' : '+'}</i>
            </button>

            {isExpanded && content && (
              <div className="unlock-tier-expanded">
                <section>
                  <h3>MINDSET</h3>
                  <ul>{content.mindset.map((b) => <li key={b}>{b}</li>)}</ul>
                </section>
                <section>
                  <h3>WHAT YOU PRODUCE</h3>
                  <ul>{content.produce.map((b) => <li key={b}>{b}</li>)}</ul>
                </section>
                <section>
                  <h3>NEXT STEP TO LEVEL UP</h3>
                  <ul>{content.next.map((b) => <li key={b}>{b}</li>)}</ul>
                  {content.stageNote && <p className="unlock-stage-note">{content.stageNote}</p>}
                </section>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

type ArcStage = {
  id: string;
  title: string;
  italic: string;
  body: string;
  status: 'COMPLETED' | 'WE ARE HERE' | 'TARGET · FY27 H1' | 'HORIZON';
};

const arcStages: ArcStage[] = [
  {
    id: '01',
    title: 'One-Off',
    italic: 'AI',
    body: 'People copy-paste between tools and lean on AI to move their own work along. Gains are real but individual — nothing builds on itself.',
    status: 'COMPLETED',
  },
  {
    id: '02',
    title: 'Connected',
    italic: 'AI',
    body: 'AI plugs into the company brain. No more copy-paste — it pulls data across systems and aggregates context better than any one person could.',
    status: 'WE ARE HERE',
  },
  {
    id: '03',
    title: 'Autonomous',
    italic: 'AI',
    body: 'Agents act on their own — making decisions and taking steps that advance the goals we set, without a human prompting each move.',
    status: 'TARGET · FY27 H1',
  },
  {
    id: '04',
    title: 'AI',
    italic: 'Native',
    body: 'Agents running critical workflows across all teams. Automators per employee compounding at scale.',
    status: 'HORIZON',
  },
];

function ArcView() {
  // Stage x-positions and dot y-positions are percentages of the plot area
  // (left:8% reserves space for the y-axis label, bottom 12% for x-axis labels).
  // The plot area is rendered by SVG; text/labels are HTML overlays so they
  // stay crisp regardless of container width.
  const stages = [
    { id: '01', label: 'STAGE 01', xPct: 14 },
    { id: '02', label: 'STAGE 02', xPct: 38 },
    { id: '03', label: 'STAGE 03', xPct: 64 },
    { id: '04', label: 'STAGE 04', xPct: 90 },
  ];
  // Plot coordinates use 0..100 in both axes. SVG stretches with preserveAspectRatio="none";
  // strokes use non-scaling-stroke to stay 2px regardless of stretch.
  const px = (pct: number) => pct; // x in 0..100
  const py = (pct: number) => 100 - pct; // y flipped (0 = bottom)
  // Realised: flat near origin, slight rise to "we are here" at Stage 02
  const realisedD = `M ${px(14)} ${py(8)} Q ${px(26)} ${py(10)} ${px(38)} ${py(20)}`;
  // Projected from we-are-here, accelerating upward
  const projectedD = `M ${px(38)} ${py(20)} Q ${px(54)} ${py(40)} ${px(64)} ${py(60)} T ${px(90)} ${py(92)}`;
  const fillD = `${projectedD} L ${px(90)} ${py(0)} L ${px(38)} ${py(0)} Z`;
  return (
    <div className="unlock-arc">
      <div className="unlock-arc-chart">
        <div className="unlock-arc-chart-head">
          <h3>Maturity <em>vs.</em> Progress</h3>
          <div className="unlock-arc-legend">
            <span><i className="legend-solid" /> REALISED</span>
            <span><i className="legend-dashed" /> PROJECTED</span>
          </div>
        </div>
        <div className="unlock-arc-plot">
          <span className="arc-y-high">high</span>
          <span className="arc-y-low">low</span>
          <span className="arc-y-rotated">AI MATURITY</span>
          <svg className="unlock-arc-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="arcFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#d9f06b" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#d9f06b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="6" y1="100" x2="100" y2="100" className="arc-axis" />
            <path d={fillD} fill="url(#arcFill)" />
            <path d={realisedD} className="arc-realised" />
            <path d={projectedD} className="arc-projected" />
            <circle cx={px(14)} cy={py(8)} r="0.9" className="arc-dot" />
            <circle cx={px(38)} cy={py(20)} r="1.6" className="arc-dot-here" />
            <circle cx={px(64)} cy={py(60)} r="0.9" className="arc-dot-faded" />
            <circle cx={px(90)} cy={py(92)} r="0.9" className="arc-dot-faded" />
          </svg>
          <span className="arc-anno arc-anno-early" style={{ left: '18%', bottom: '24%' }}>early adoption</span>
          <span className="arc-anno arc-anno-here" style={{ left: '40%', bottom: '32%' }}>we are here</span>
          <span className="arc-anno arc-anno-faded" style={{ left: '52%', bottom: '50%' }}>agents take hold</span>
          <span className="arc-anno arc-anno-faded" style={{ left: '72%', bottom: '78%' }}>compounding leverage</span>
          <div className="unlock-arc-xlabels">
            {stages.map((s) => (
              <span key={s.id} style={{ left: `${s.xPct}%` }}>{s.label}</span>
            ))}
          </div>
          <span className="arc-x-foot">ORGANISATIONAL PROGRESS</span>
        </div>
      </div>

      <div className="unlock-arc-stages">
        {arcStages.map((s) => (
          <article key={s.id} className={`unlock-arc-stage ${s.status === 'WE ARE HERE' ? 'here' : ''}`}>
            <span className="unlock-arc-stage-num">STAGE {s.id}</span>
            <h4>{s.title} <em>{s.italic}</em></h4>
            <p>{s.body}</p>
            <em className={`unlock-arc-status status-${s.status.toLowerCase().replace(/[\s·]+/g, '-')}`}>{s.status}</em>
          </article>
        ))}
      </div>
    </div>
  );
}

function TeamMatrix() {
  const columns = [
    ['01', 'BEGINNER · ADOPTER'],
    ['02', 'INTERMEDIATE · TODAY'],
    ['03', 'EXPERT · ARCHITECT'],
    ['04', 'CATALYST'],
    ['05', 'AI GOD · MULTIPLIER'],
  ];
  const rows = [
    {
      team: 'Sales / GTM',
      cells: [
        'Opens Claude after a Gong call for a summary, uses it to paraphrase an outreach email. Account plans still start from a blank doc.',
        'Briefs AI with the last three calls, the Cowork workspace, and the CRM snapshot before drafting. Can tell you which prompt beats which for MEDDPICC.',
        'A nightly agent scores inbound and books the good ones. A Slack shortcut turns any Gong call into a deal-risk read.',
        'Deal-room dashboards for the big opps the week before QBR. An AE Slackbot nags on stale pipeline fields.',
        'Outbound books its own meetings. Deal risk surfaces before the rep notices. The motion one builder shipped is the motion GTM runs.',
      ],
    },
    {
      team: 'Marketing',
      cells: [
        'AI drafts the headline; the second pass happens in Google Docs the way it always has.',
        'Briefs start from a tuned prompt with SEO, CAC, and competitor context pulled from the Corporate Brain on the way in.',
        'Content pipelines draft, edit, schedule, track. Competitor pages re-scrape themselves nightly. The marketer reviews on Monday.',
        'A campaign orchestration app reallocates spend off pipeline signal. Budget moves in hours, not the next retro.',
        'Every prospect gets a campaign variant tied to their industry and Gong history. The team sets strategy; agents run the calendar.',
      ],
    },
    {
      team: 'Engineering',
      cells: [
        'AI autocompletes a line, explains a stack trace. Ship cadence and review cycles look the same as six months ago.',
        'Claude or Codex in the IDE by default. Tests and docs get drafted before the PR opens. You can explain why this model for this file.',
        'Agents triage bugs into Linear, draft the PR, write the regression test. Humans hit approve more often than author.',
        'Claude Code ships bespoke internal tools to Vercel and Supabase between meetings. The tool nobody will rebuild is the one that runs forever.',
        'Tickets turn into merged PRs without a human on the happy path. Services pick up ownership conventions from the last three services you shipped.',
      ],
    },
    {
      team: 'Product',
      cells: [
        'AI summarises a user call and drafts a bullet. The real PRD still happens in the doc the team has always used.',
        'User research becomes re-queryable — AI pulls signals across hundreds of calls nobody could hold in their head. Specs ship to design in a day.',
        'A feedback agent aggregates what customers ask for across Gong, Intercom, and Slack. Internal Q&A bots answer product questions before someone has to.',
        'Sprint reports, feature-flag dashboards, roadmap views — bespoke apps the PM shipped last month, not things waiting in the backlog.',
        'PMs merge PRs. Roadmap recommendations come from an agent watching usage. The Product role at a peer company looks quaint.',
      ],
    },
  ];

  return (
    <div className="unlock-team-matrix">
      <div className="unlock-team-corner">TEAM</div>
      {columns.map(([number, label]) => (
        <div className="unlock-team-head" key={number}>
          <strong>{number}</strong>
          <span>{label}</span>
        </div>
      ))}
      {rows.map((row) => (
        <Fragment key={row.team}>
          <div className="unlock-team-label" key={`${row.team}-label`}>{row.team}</div>
          {row.cells.map((cell, index) => (
            <div className={index === 1 ? 'unlock-team-cell highlighted' : 'unlock-team-cell'} key={`${row.team}-${index}`}>{cell}</div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

type UsageTab = 'company' | 'team' | 'leaderboard';

function AiUsagePlaceholder() {
  const [tab, setTab] = useState<UsageTab>('company');

  return (
    <div className="unlock-page unlock-usage-page">
      <header className="unlock-usage-header">
        <div>
          <h1>AI Usage</h1>
          <p>Claude Code & Codex — last 30 days</p>
        </div>
        <nav className="unlock-usage-tabs">
          <button className={tab === 'company' ? 'active' : ''} onClick={() => setTab('company')}>Company</button>
          <a className="unlock-usage-tab-link" href="https://ai-token-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">My Usage</a>
          <button className={tab === 'team' ? 'active' : ''} onClick={() => setTab('team')}>My Team</button>
          <button className={tab === 'leaderboard' ? 'active' : ''} onClick={() => setTab('leaderboard')}>Leaderboard</button>
        </nav>
      </header>

      {tab === 'company' && <CompanyUsage />}
      {tab === 'team' && <MyTeamUsage />}
      {tab === 'leaderboard' && <LeaderboardUsage />}
    </div>
  );
}

function CompanyUsage() {
  return (
    <>
      <div className="unlock-kpi-row">
        <article className="unlock-kpi-card">
          <span className="unlock-kpi-label">⚡ Total Tokens (30d)</span>
          <strong>314.7B</strong>
          <small>208.6B CC + 106.2B Codex</small>
        </article>
        <article className="unlock-kpi-card">
          <span className="unlock-kpi-label">👤 Active Builders</span>
          <strong>191</strong>
          <small>unique users with activity</small>
        </article>
        <article className="unlock-kpi-card">
          <span className="unlock-kpi-label">✦ Claude Code Share</span>
          <strong>66%</strong>
          <small>of total token usage</small>
        </article>
      </div>

      <div className="unlock-usage-row">
        <article className="unlock-usage-panel">
          <h3>Claude Code vs Codex</h3>
          <p className="unlock-usage-sub">Token distribution across all builders</p>
          <div className="unlock-donut-large">
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="48" className="donut-bg" />
              <circle cx="60" cy="60" r="48" className="donut-codex" strokeDasharray="100 200" strokeDashoffset="-198" />
              <circle cx="60" cy="60" r="48" className="donut-cc" strokeDasharray="199 200" strokeDashoffset="0" />
            </svg>
            <div className="unlock-donut-center">
              <strong>66%</strong>
              <small>Claude Code</small>
            </div>
          </div>
          <div className="unlock-donut-legend">
            <span><i className="dot-cc" /> Claude Code — 208.6B</span>
            <span><i className="dot-codex" /> Codex — 106.2B</span>
          </div>
        </article>

        <article className="unlock-usage-panel">
          <h3>Daily Token Trend</h3>
          <p className="unlock-usage-sub">Company-wide usage over the last 30 days</p>
          <TrendChart />
          <div className="unlock-donut-legend">
            <span><i className="dot-cc" /> Claude Code</span>
            <span><i className="dot-codex" /> Codex</span>
          </div>
        </article>
      </div>

      <article className="unlock-builders-panel">
        <h3>Top Builders</h3>
        <p className="unlock-usage-sub">Names partially masked — hover bars for CC / Codex breakdown</p>
        <div className="unlock-builders-list">
          {topBuilders.map((b) => {
            const total = b.cc + b.codex;
            const ccPct = (b.cc / 35) * 100;
            const codexPct = (b.codex / 35) * 100;
            return (
              <div className="unlock-builder-row" key={b.mask} title={`Claude Code: ${b.cc}B tokens · Codex: ${b.codex}B tokens`}>
                <span className="unlock-builder-name">{b.mask}</span>
                <div className="unlock-builder-bar">
                  <i className="bar-cc" style={{ width: `${ccPct}%` }} />
                  <i className="bar-codex" style={{ width: `${codexPct}%` }} />
                </div>
                <em className="unlock-builder-total">{total.toFixed(1)}B</em>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}

function TrendChart() {
  const max = 20;
  const w = 100;
  const h = 100;
  const step = w / (ccTrend.length - 1);
  const ccPoints = ccTrend.map((v, i) => `${i * step},${h - (v / max) * h}`).join(' ');
  const codexPoints = codexTrend.map((v, i) => `${i * step},${h - (v / max) * h}`).join(' ');
  const ccArea = `0,${h} ${ccPoints} ${w},${h}`;
  const codexArea = `0,${h} ${codexPoints} ${w},${h}`;

  return (
    <div className="unlock-trend-wrap">
      <div className="unlock-trend-y">
        <span>20.0B</span>
        <span>15.0B</span>
        <span>10.0B</span>
        <span>5.0B</span>
        <span>0</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="unlock-trend-svg">
        <polygon points={codexArea} className="trend-area-codex" />
        <polygon points={ccArea} className="trend-area-cc" />
        <polyline points={codexPoints} className="trend-line-codex" />
        <polyline points={ccPoints} className="trend-line-cc" />
      </svg>
      <div className="unlock-trend-x">
        {trendDisplayLabels.map((d) => <span key={d}>{d}</span>)}
      </div>
    </div>
  );
}

function MyTeamUsage() {
  return (
    <>
      <div className="unlock-section-sub">
        <h2>My Team</h2>
        <p>Usage for direct and indirect reports</p>
      </div>
      <div className="unlock-kpi-row">
        <article className="unlock-kpi-card">
          <span className="unlock-kpi-label">Team Tokens</span>
          <strong>314.7B</strong>
        </article>
        <article className="unlock-kpi-card">
          <span className="unlock-kpi-label">Active Members</span>
          <strong>191<small className="kpi-frac"> / 192</small></strong>
        </article>
        <article className="unlock-kpi-card">
          <span className="unlock-kpi-label">Period Trend</span>
          <strong className="kpi-up">↑ 135%</strong>
          <small>vs prior period</small>
        </article>
      </div>
      <article className="unlock-reports-panel">
        <h3>Direct Reports</h3>
        <div className="unlock-reports-table">
          <header>
            <span>NAME</span>
            <em>TOKENS</em>
            <em>ACTIVITY</em>
          </header>
          {directReports.map((r) => (
            <div className="unlock-report-row" key={r.mask}>
              <span>{r.mask}</span>
              <em>{r.tokens} <small>tokens</small></em>
              <em>{r.activeDays}d active</em>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

function LeaderboardUsage() {
  return (
    <>
      <div className="unlock-section-sub">
        <h2>Leaderboard</h2>
        <p>Top builders ranked by token usage across Claude Code and Codex</p>
      </div>
      <div className="unlock-leaderboard-grid">
        <article className="unlock-leader-col">
          <header><h3>Claude Code</h3></header>
          {ccLeaders.map((r) => (
            <div className="unlock-leader-row" key={`cc-${r.rank}`}>
              <span className="leader-rank">{r.rank}</span>
              <span className="leader-name">{r.mask}</span>
              <em className="leader-tier">{r.tier}</em>
              <div className="leader-bar"><i className="bar-cc" style={{ width: `${r.barFill}%` }} /></div>
              <em className="leader-tokens">{r.tokens} tokens</em>
            </div>
          ))}
        </article>
        <article className="unlock-leader-col">
          <header><h3>Codex</h3></header>
          {codexLeaders.map((r) => (
            <div className="unlock-leader-row" key={`cx-${r.rank}`}>
              <span className="leader-rank">{r.rank}</span>
              <span className="leader-name">{r.mask}</span>
              <em className="leader-tier">{r.tier}</em>
              <div className="leader-bar"><i className="bar-codex" style={{ width: `${r.barFill}%` }} /></div>
              <em className="leader-tokens">{r.tokens} tokens</em>
            </div>
          ))}
        </article>
      </div>
    </>
  );
}

export default UnlockProductApp;
