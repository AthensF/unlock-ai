import { Fragment, type CSSProperties, type ReactNode, useState } from 'react';

type ProjectCard = {
  title: string;
  description: string;
  status: 'Live' | 'Building' | 'Planning';
  accent: 'coral' | 'green' | 'navy' | 'purple';
  mockup?: string;
  tags: string[];
};

type ProjectGroup = {
  number: string;
  title: string;
  summary: string;
  cards: ProjectCard[];
};

type Campaign = {
  title: string;
  status: 'Live' | 'Coming Soon';
  description: string;
  date: string;
};

type PostTemplate = {
  id: string;
  tone: string;
  title: string;
  body: string;
  recommended?: boolean;
};

type BillboardAsset = {
  label: string;
  badge: 'REAL' | 'AI';
  scene: 'cover' | 'spread' | 'lobby' | 'suite' | 'column' | 'feature';
};

const projectGroups: ProjectGroup[] = [
  {
    number: '02',
    title: 'Account-Based Marketing',
    summary: 'Campaigns and tools to improve ABM efficiency — from account selection to activation.',
    cards: [
      {
        title: 'Events × ABM Matchrate',
        description: 'Upload event lists and identify how many ABM target accounts are represented.',
        status: 'Live',
        accent: 'purple',
        mockup: 'Matchrate',
        tags: ['events', 'matching', 'ICP'],
      },
      {
        title: 'ABM Geo Location Intelligence',
        description: 'Map account concentration to inform event targeting and regional campaign bets.',
        status: 'Live',
        accent: 'green',
        mockup: 'Geo Intel',
        tags: ['map', 'territory', 'planning'],
      },
      {
        title: 'ABM Intent Scoring',
        description: 'Track intent signals over time and surface top accounts for weekly GTM focus.',
        status: 'Live',
        accent: 'coral',
        mockup: 'Intent Score',
        tags: ['signals', 'scoring', 'ABM'],
      },
    ],
  },
  {
    number: '03',
    title: 'Project: Gravity Lab',
    summary: 'Increase top-of-funnel website conversion — right traffic in, more conversions out.',
    cards: [
      {
        title: 'Competitor LP Conversion Report',
        description: 'Analyse competitor landing pages, messaging, offers, and conversion patterns.',
        status: 'Live',
        accent: 'coral',
        mockup: 'Competitor LP Review',
        tags: ['performance', 'landing pages', 'copy'],
      },
      {
        title: 'LP Scoreboard',
        description: 'Score page strength and surface the highest-impact changes to improve conversion.',
        status: 'Building',
        accent: 'green',
        mockup: 'LP Scoreboard',
        tags: ['scoring', 'CRO', 'testing'],
      },
      {
        title: 'Fan Page Experiment Brief',
        description: 'Create a brief for fan-page style messaging, channel tests, and social proof loops.',
        status: 'Live',
        accent: 'navy',
        mockup: 'Fan Page Messaging',
        tags: ['brief', 'messaging', 'experiment'],
      },
      {
        title: 'Paid Social Mockups',
        description: 'Generate visual mockups for paid social variants across LinkedIn and display.',
        status: 'Live',
        accent: 'purple',
        mockup: 'Paid Social Mockup',
        tags: ['paid social', 'mockups', 'creative'],
      },
    ],
  },
  {
    number: '04',
    title: 'Project: Purple Cow',
    summary: 'Creative campaign experiments designed to be noticed, shared, and remembered.',
    cards: [
      {
        title: 'AaaS Experiment Pilot Results',
        description: 'Review campaign learnings, traction, and qualitative reactions from early pilots.',
        status: 'Live',
        accent: 'navy',
        mockup: 'Pilot Results',
        tags: ['results', 'campaign', 'learning'],
      },
      {
        title: 'Design Planning — Creative Brief',
        description: 'Shape the creative direction, hook, format, and asset requirements for launch.',
        status: 'Planning',
        accent: 'green',
        mockup: 'Creative Brief',
        tags: ['design', 'brief', 'planning'],
      },
      {
        title: 'AaaS Billboard Builder',
        description: 'Assemble billboard concepts with approved copy, layout, and campaign visuals.',
        status: 'Live',
        accent: 'coral',
        mockup: 'Billboard Builder',
        tags: ['billboard', 'AaaS', 'creative'],
      },
      {
        title: 'Purple Cow Idea Pitch',
        description: 'Package unusual ideas into a crisp pitch that explains why they will travel.',
        status: 'Live',
        accent: 'purple',
        mockup: 'Idea Pitch',
        tags: ['pitch', 'strategy', 'viral'],
      },
    ],
  },
];

const harperCards: ProjectCard[] = [
  {
    title: 'Harper Optimization Hub',
    description: 'Review inbound prompts, routing, conversion paths, and channel-specific agent behaviour.',
    status: 'Live',
    accent: 'purple',
    mockup: 'Optimization Hub',
    tags: ['agent', 'conversion', 'prompting'],
  },
  {
    title: 'Harper Preview Testing',
    description: 'Test Harper against landing page previews before campaigns go live.',
    status: 'Live',
    accent: 'purple',
    mockup: 'Preview Testing',
    tags: ['preview', 'QA', 'campaigns'],
  },
];

const campaigns: Campaign[] = [
  {
    title: 'UniFocus Magazine Ad Kit',
    status: 'Live',
    description: 'Amplify the UniFocus hospitality AI magazine campaign across LinkedIn.',
    date: 'May 7, 2026',
  },
  {
    title: 'Hotel Ops AI Launch Kit',
    status: 'Live',
    description: 'Share approved hotel operations messaging for workforce, scheduling, and service teams.',
    date: 'May 3, 2026',
  },
  {
    title: "How I AI — John's Episode",
    status: 'Coming Soon',
    description: 'Something exciting is coming up — watch this space.',
    date: 'Launching soon',
  },
];

function createPostTemplates(slogan: string): PostTemplate[] {
  return [
    {
      id: 'playful',
      tone: 'Playful',
      title: 'Hotel ops waits for no one.',
      body: `${slogan}\n\nHotels do not get to pause while teams catch up. Guests arrive, shifts change, rooms turn over, and service expectations keep climbing.\n\nThat is why UniFocus is putting AI to work where hospitality moves fastest.\n\n#HospitalityAI #HotelOperations #UniFocus`,
    },
    {
      id: 'spotted',
      tone: 'Spotted',
      title: 'Seen this one yet?',
      recommended: true,
      body: `Seen this campaign?\n\n“${slogan}”\n\nA neat little reminder that hotel operations need technology that can keep up with the pace of the floor, the desk, and the guest.\n\nUniFocus helps hospitality teams move faster with smarter workforce and operations intelligence.\n\n#HospitalityTech #HotelAI #WorkforceManagement`,
    },
    {
      id: 'bold',
      tone: 'Bold',
      title: 'The pace of hospitality changed.',
      body: `${slogan}\n\nThe best hotel teams already move quickly. The opportunity now is giving them AI that moves with them — across labour planning, forecasting, service execution, and daily operational decisions.\n\nThat is the campaign. That is the point.\n\n#Hotels #HospitalityAI #UniFocus`,
    },
  ];
}

const assets: BillboardAsset[] = [
  { label: 'Trade cover', badge: 'REAL', scene: 'cover' },
  { label: 'Hotelier spread', badge: 'REAL', scene: 'spread' },
  { label: 'Lobby feature', badge: 'REAL', scene: 'lobby' },
  { label: 'Suite insert', badge: 'REAL', scene: 'suite' },
  { label: 'Column ad', badge: 'AI', scene: 'column' },
  { label: 'Feature page', badge: 'AI', scene: 'feature' },
];
const pastCampaigns = ['Hospitality Staffing Trends', 'Forecasting Playbook Drop', 'Operations AI Teaser', 'Guest Service Readiness 101'];
const sloganIdeas = ['Hotels Move Fast. Our AI Moves Faster.', 'Smarter Shifts. Happier Guests.', 'Forecast Demand Before It Hits the Lobby.'];

type ProductPage = 'quests' | 'quest-detail' | 'skills' | 'skill-detail' | 'guides' | 'tiers' | 'usage';

type QuestCard = {
  title: string;
  description: string;
  status: 'Active' | 'Completed' | 'In Review';
  tier: 'Tier 01' | 'Tier 02' | 'Tier 03' | 'Tier 04';
  meta: string;
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

const activeQuests: QuestCard[] = [
  {
    title: 'Salesforce Opps & Files Quick-Links per Customer on CSM Dashboard',
    description: 'Give CSMs customer-specific Salesforce opportunities and file links directly from their dashboard.',
    status: 'Active',
    tier: 'Tier 02',
    meta: 'Customer Success · SFDC',
  },
  {
    title: 'Self-Serve Staging Environment for Harper AI SDR Testing',
    description: 'Let teams test Harper SDR behaviour safely against realistic preview experiences.',
    status: 'Active',
    tier: 'Tier 03',
    meta: 'Sales · Harper',
  },
  {
    title: 'Campaign Asset Accelerator',
    description: 'Generate reusable campaign assets from approved messaging, templates, and creative direction.',
    status: 'Active',
    tier: 'Tier 02',
    meta: 'Marketing · Assets',
  },
  {
    title: 'Reliable LinkedIn Recruiter Profile Collection Beyond the 25-Profile Cap',
    description: 'Collect recruiting profile data reliably beyond manual list limits and brittle scraping.',
    status: 'In Review',
    tier: 'Tier 03',
    meta: 'Recruiting · LinkedIn',
  },
  {
    title: 'AI-Powered Daily Prioritization Engine for AEs',
    description: 'Rank accounts, opportunities, and next actions so reps start the day with focus.',
    status: 'Active',
    tier: 'Tier 02',
    meta: 'Sales · Prioritisation',
  },
  {
    title: 'Sales Rep Performance Scorecard — Reliable Salesforce Data Pipeline',
    description: 'Build a dependable SFDC-backed scorecard for rep performance and coaching conversations.',
    status: 'Active',
    tier: 'Tier 03',
    meta: 'Sales Ops · Data',
  },
  {
    title: 'Deal Desk Opportunity Audit Agent — Auto-Review & Triage Contracts in SFDC + Google Drive',
    description: 'Review deal desk opportunities and related contract files before escalation.',
    status: 'Active',
    tier: 'Tier 04',
    meta: 'Deal Desk · Audit',
  },
  {
    title: 'Sales QBR Consolidated Dashboard — Salesforce, Gong & Salesloft',
    description: 'Combine core GTM systems into one QBR-ready view for sales leadership.',
    status: 'Active',
    tier: 'Tier 03',
    meta: 'Sales · QBR',
  },
  {
    title: 'AI-Powered Deal Room Generator for Sales',
    description: 'Create deal-room pages that pull together context, files, risks, and next steps.',
    status: 'Active',
    tier: 'Tier 03',
    meta: 'Sales · Deal Room',
  },
];

const completedQuests: QuestCard[] = [
  {
    title: 'Customer Account Lookup Using GPT Workflow Automation',
    description: 'A completed workflow for retrieving customer account context from internal systems.',
    status: 'Completed',
    tier: 'Tier 02',
    meta: 'Completed · Customer Success',
  },
  {
    title: 'Monthly Operating Metrics Automation',
    description: 'Automated monthly operating metrics preparation for repeatable leadership updates.',
    status: 'Completed',
    tier: 'Tier 03',
    meta: 'Completed · Ops',
  },
  {
    title: 'AI-Powered Content Writing Workflow',
    description: 'Reusable writing workflow for content briefs, drafts, and review-ready outputs.',
    status: 'Completed',
    tier: 'Tier 02',
    meta: 'Completed · Marketing',
  },
];

const marketplaceSkills: SkillCard[] = [
  { name: 'meddpicc advisor', description: 'Sales qualification advisor for MEDDPICC deal thinking and risk review.', category: 'Sales', tags: ['sales', 'qualification', 'plugin'] },
  { name: 'developer pr reviewer', description: 'Checklist-driven review helper for pull requests, tests, and docs.', category: 'Developer', tags: ['code', 'review', 'agent'] },
  { name: 'recruiting sourcer', description: 'Structured recruiting prompts for profile review and candidate summaries.', category: 'Recruiting', tags: ['recruiting', 'profiles'] },
  { name: 'csm account brief', description: 'Customer-success account briefing template for preparing account reviews.', category: 'Customer Success', tags: ['csm', 'accounts'] },
  { name: 'fd implementation planner', description: 'Forward-deployed implementation planning workflow for customer rollouts.', category: 'Forward-Deployed', tags: ['implementation'] },
  { name: 'design critique pass', description: 'Product-design critique helper for hierarchy, spacing, and visual consistency.', category: 'Design', tags: ['design', 'qa'] },
  { name: 'demand gen brief', description: 'Campaign brief generator for demand generation assets and launch plans.', category: 'Demand Generation', tags: ['campaigns'] },
  { name: 'pm messaging sharpener', description: 'Product-marketing prompt set for positioning, messaging, and launch copy.', category: 'Product Marketing', tags: ['messaging'] },
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

const usageDonuts = [
  { label: 'Beginner', value: 18, colour: '#d9ff72', caption: '<1M tokens/day' },
  { label: 'Intermediate', value: 46, colour: '#111111', caption: '1-10M tokens/day' },
  { label: 'Expert+', value: 36, colour: '#8f7cf6', caption: '10M+ tokens/day' },
];

const usageLeaders = [
  ['John Kim', 'CEO', '128M', 'AI God'],
  ['Claire Vo', 'Product', '86M', 'Catalyst'],
  ['Maya Patel', 'Marketing', '54M', 'Architect'],
  ['Avery Chen', 'Engineering', '42M', 'Architect'],
  ['Jordan Lee', 'Sales', '31M', 'Accelerator'],
];

const teamUsage: [string, number][] = [
  ['Engineering', 88],
  ['Product', 73],
  ['Marketing', 61],
  ['Sales / GTM', 54],
  ['Ops / CoS', 42],
];

function App() {
  return <UnlockProductApp />;
}

function UnlockProductApp() {
  const [activePage, setActivePage] = useState<ProductPage>('quests');
  const [questFilter, setQuestFilter] = useState<'active' | 'completed'>('active');
  const [tierTab, setTierTab] = useState<'tiers' | 'arc' | 'team'>('tiers');

  return (
    <main className="unlock-root">
      <aside className="unlock-sidebar">
        <div className="unlock-brand">
          <span>u</span>
          <strong>unlock.ai</strong>
        </div>
        <nav>
          {navItems.map((item) => (
            <button key={item.id} className={activePage === item.id ? 'active' : ''} onClick={() => setActivePage(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <section className="unlock-canvas">
        {activePage === 'quests' && <QuestBoard filter={questFilter} setFilter={setQuestFilter} openDetail={() => setActivePage('quest-detail')} />}
        {activePage === 'quest-detail' && <QuestDetail backToBoard={() => setActivePage('quests')} />}
        {activePage === 'skills' && <SkillsMarketplace openSkill={() => setActivePage('skill-detail')} />}
        {activePage === 'skill-detail' && <SkillDetail backToSkills={() => setActivePage('skills')} />}
        {activePage === 'guides' && <GuidesPage />}
        {activePage === 'tiers' && <AiTiersPage activeTab={tierTab} setActiveTab={setTierTab} />}
        {activePage === 'usage' && <AiUsagePlaceholder />}
      </section>
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

function QuestBoard({ filter, setFilter, openDetail }: { filter: 'active' | 'completed'; setFilter: (filter: 'active' | 'completed') => void; openDetail: () => void }) {
  const quests = filter === 'active' ? activeQuests : completedQuests;

  return (
    <div className="unlock-page">
      <PageHeader eyebrow="Quest Board" title="Automators Quest Board">
        <div className="unlock-language-toggle"><span>EN</span><span>JP</span></div>
      </PageHeader>
      <div className="unlock-filter-bar">
        <button className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active quests</button>
        <button className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</button>
        <select aria-label="Tier filter"><option>All tiers</option><option>Tier 02</option><option>Tier 03</option></select>
        <select aria-label="Status filter"><option>All statuses</option><option>Active</option><option>In Review</option></select>
      </div>
      <div className="unlock-quest-grid">
        {quests.map((quest, index) => (
          <button key={quest.title} className="unlock-quest-card" onClick={index === 0 ? openDetail : undefined}>
            <div className="unlock-card-topline">
              <span>{quest.tier}</span>
              <em className={`unlock-status ${quest.status.toLowerCase().replace(' ', '-')}`}>{quest.status}</em>
            </div>
            <h2>{quest.title}</h2>
            <p>{quest.description}</p>
            <small>{quest.meta}</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function QuestDetail({ backToBoard }: { backToBoard: () => void }) {
  return (
    <div className="unlock-page">
      <PageHeader eyebrow="Quest Detail" title="Salesforce Opps & Files Quick-Links per Customer on CSM Dashboard">
        <button className="unlock-primary-button">Edit PRD</button>
      </PageHeader>
      <button className="unlock-back-button" onClick={backToBoard}>← Back to Quest Board</button>
      <div className="unlock-badge-row"><span>Tier 02</span><span>Active</span><span>Customer Success</span></div>
      <article className="unlock-document-panel">
        <h2>Product Requirements Doc</h2>
        <h3>Summary</h3>
        <p>The quest concerns quick links to Salesforce opportunities and customer files from a CSM dashboard.</p>
        <h3>Context</h3>
        <p>CSMs need faster access to customer-specific Salesforce opportunities and related file resources. The dashboard should reduce manual lookup and context switching.</p>
        <h3>Users</h3>
        <ul><li>Customer Success Managers.</li><li>Account or revenue teammates who need customer-specific account context.</li></ul>
        <h3>Success Criteria</h3>
        <ul><li>CSMs can access the right opportunities and files from the customer dashboard.</li><li>Links are reliable and customer-specific.</li><li>The workflow saves lookup time during account review or customer preparation.</li></ul>
      </article>
    </div>
  );
}

function SkillsMarketplace({ openSkill }: { openSkill: () => void }) {
  return (
    <div className="unlock-page">
      <PageHeader eyebrow="Skills" title="Skills Marketplace">
        <div className="unlock-action-row"><button>My Skills</button><button>Trash</button><button>New Skill</button><button className="unlock-primary-button">New Plugin</button></div>
      </PageHeader>
      <div className="unlock-market-controls">
        <input placeholder="Search skills and plugins" />
        <select aria-label="Sort skills"><option>Newest</option><option>Most relevant</option></select>
      </div>
      <div className="unlock-tag-pills">{['Sales', 'Developer', 'Recruiting', 'Customer Success', 'Forward-Deployed', 'Design', 'Demand Generation', 'Product Marketing'].map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="unlock-skill-grid">
        {marketplaceSkills.map((skill, index) => (
          <button key={skill.name} className="unlock-skill-card" onClick={index === 0 ? openSkill : undefined}>
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

function SkillDetail({ backToSkills }: { backToSkills: () => void }) {
  return (
    <div className="unlock-page">
      <PageHeader eyebrow="Skill Detail" title="meddpicc advisor">
        <button className="unlock-primary-button">Install</button>
      </PageHeader>
      <button className="unlock-back-button" onClick={backToSkills}>← Back to Skills</button>
      <div className="unlock-detail-layout">
        <aside className="unlock-side-panel">
          <span>Plugin · Sales</span>
          <h3>MEDDPICC deal qualification advisor</h3>
          <p>Author: Revenue Enablement</p>
          <button className="unlock-primary-button">Install Skill</button>
        </aside>
        <article className="unlock-document-panel">
          <h2>SKILL.md</h2>
          <h3>Purpose</h3>
          <p>Help sales teams apply MEDDPICC qualification thinking to active deals.</p>
          <h3>Capabilities</h3>
          <ul><li>Explain or apply MEDDPICC qualification thinking.</li><li>Identify missing deal information.</li><li>Highlight qualification risk.</li><li>Guide next-step thinking.</li></ul>
        </article>
      </div>
    </div>
  );
}

function GuidesPage() {
  return (
    <div className="unlock-page">
      <PageHeader eyebrow="Guides" title="Git & GitHub Settings" />
      <div className="unlock-detail-layout">
        <aside className="unlock-guide-list"><button className="active">Git & GitHub Settings</button><button>GitHub CLI</button><button>GitHub MCP</button></aside>
        <article className="unlock-document-panel">
          <h2>Git & GitHub Settings</h2>
          <p>Use this guide to configure Git, GitHub CLI, and the GitHub MCP connection for AI coding tools.</p>
          <h3>Setup Commands</h3>
          <pre>git config --global user.name "Your Name"{'\n'}git config --global user.email "you@example.com"</pre>
          <h3>GitHub CLI</h3>
          <pre>brew install gh{'\n'}gh auth login</pre>
          <h3>GitHub MCP</h3>
          <p>Connect the GitHub MCP server after CLI authentication so coding agents can inspect repository context.</p>
        </article>
      </div>
    </div>
  );
}

function AiTiersPage({ activeTab, setActiveTab }: { activeTab: 'tiers' | 'arc' | 'team'; setActiveTab: (tab: 'tiers' | 'arc' | 'team') => void }) {
  return (
    <div className="unlock-page unlock-tiers-page">
      <div className="unlock-tabs unlock-tier-tabs">
        <button className={activeTab === 'tiers' ? 'active' : ''} onClick={() => setActiveTab('tiers')}><span>01</span> The Five Tiers</button>
        <button className={activeTab === 'arc' ? 'active' : ''} onClick={() => setActiveTab('arc')}><span>02</span> Organisational Arc</button>
        <button className={activeTab === 'team' ? 'active' : ''} onClick={() => setActiveTab('team')}><span>03</span> By Team</button>
      </div>
      {activeTab === 'tiers' && <TierTable />}
      {activeTab === 'arc' && <ArcView />}
      {activeTab === 'team' && <TeamMatrix />}
    </div>
  );
}

function TierTable() {
  const [expandedTier, setExpandedTier] = useState('02');

  return (
    <div className="unlock-five-tiers">
      {tierRows.map((tier) => {
        const isExpanded = expandedTier === tier.id;

        return (
          <article className={isExpanded ? 'unlock-tier-row expanded' : 'unlock-tier-row'} key={tier.id}>
            <button className="unlock-tier-summary" onClick={() => setExpandedTier(isExpanded ? '' : tier.id)}>
              <div className="unlock-tier-title">
                <span>{tier.id}</span>
                <h2>{tier.title} <em>— {tier.subtitle}</em></h2>
              </div>
              <p>{tier.summary}</p>
              <div className="unlock-token-band">
                <strong>{tier.tokens}</strong>
                <small>tokens / day</small>
              </div>
              <i>{isExpanded ? '×' : '+'}</i>
            </button>

            {isExpanded && tier.id === '02' && (
              <div className="unlock-tier-expanded">
                <section>
                  <h3>Mindset</h3>
                  <ul>
                    <li>Loads the company context before the ask — Cowork, the right MCP, the relevant docs.</li>
                    <li>Works inside the IDE or Cowork rather than bouncing to a browser.</li>
                    <li>Keeps a short list of tuned prompts — and posts the best ones in Slack.</li>
                    <li>Picks Claude for writing, Codex for code, a connector for a specific job — on purpose.</li>
                  </ul>
                </section>
                <section>
                  <h3>What you produce</h3>
                  <ul>
                    <li>A board memo in thirty minutes instead of an afternoon.</li>
                    <li>Research that spans Gong, Notion, and the Corporate Brain in one pass.</li>
                    <li>PRs that arrive with tests and docs already drafted.</li>
                    <li>The weekly note nobody asked for but everybody reads.</li>
                  </ul>
                </section>
                <section>
                  <h3>Next step to level up</h3>
                  <ul>
                    <li>Chain two tools together without you in the middle.</li>
                    <li>Ship a Slackbot your team reaches for without thinking.</li>
                    <li>Pick up your first Automators quest.</li>
                  </ul>
                  <p>→ Stage 2 Connected AI — we are here</p>
                </section>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function ArcView() {
  return (
    <div className="unlock-arc-grid">
      {['One-Off AI', 'Connected AI', 'Autonomous AI', 'AI Native'].map((stage, index) => (
        <article key={stage}><span>Stage 0{index + 1}</span><h2>{stage}</h2><p>{index === 1 ? 'Current stage' : index < 1 ? 'Completed' : 'Target'}</p></article>
      ))}
    </div>
  );
}

function TeamMatrix() {
  const columns = [
    ['01', 'Beginner · Adopter'],
    ['02', 'Intermediate · Today'],
    ['03', 'Expert · Architect'],
    ['04', 'Catalyst'],
    ['05', 'AI God · Multiplier'],
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
      <div className="unlock-team-corner" />
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

function AiUsagePlaceholder() {
  return (
    <div className="unlock-page unlock-usage-page">
      <PageHeader eyebrow="AI Usage" title="Token tracking dashboard">
        <span className="unlock-usage-date">24:25–25:40 source segment</span>
      </PageHeader>

      <section className="unlock-usage-hero">
        <div>
          <p className="eyebrow">Company-wide AI adoption</p>
          <h2>Are more people moving into the higher AI tiers?</h2>
          <p>Track token usage by tier, the smoothness of the adoption curve, and whether leaders are visibly using AI themselves.</p>
        </div>
        <div className="unlock-usage-kpi">
          <strong>42.8M</strong>
          <span>tokens / day</span>
        </div>
      </section>

      <section className="unlock-usage-grid">
        {usageDonuts.map((donut) => (
          <article className="unlock-donut-card" key={donut.label}>
            <div className="unlock-donut" style={{ '--donut-value': `${donut.value}%`, '--donut-colour': donut.colour } as CSSProperties}>
              <span>{donut.value}%</span>
            </div>
            <h3>{donut.label}</h3>
            <p>{donut.caption}</p>
          </article>
        ))}
      </section>

      <section className="unlock-usage-panels">
        <article className="unlock-curve-panel">
          <div>
            <p className="eyebrow">Smoothness of the curve</p>
            <h3>Usage distribution should slope upward, not spike once.</h3>
          </div>
          <div className="unlock-line-chart">
            <i /><i /><i /><i /><i /><i />
          </div>
        </article>

        <article className="unlock-team-bars">
          <p className="eyebrow">Team usage graph</p>
          {teamUsage.map(([team, value]) => (
            <div className="unlock-bar-row" key={team}>
              <span>{team}</span>
              <div><i style={{ width: `${value}%` }} /></div>
              <em>{value}%</em>
            </div>
          ))}
        </article>
      </section>

      <section className="unlock-leadership-board">
        <div>
          <p className="eyebrow">Leadership board</p>
          <h3>Visible leadership usage</h3>
          <p>Leadership usage is treated as the adoption signal: people believe the change when executives show up on the board.</p>
        </div>
        <ol>
          {usageLeaders.map(([name, role, tokens, tier], index) => (
            <li key={name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{name}</strong>
              <small>{role}</small>
              <em>{tokens}</em>
              <b>{tier}</b>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

function HeroShell() {
  return (
    <section className="page-shell intro-shell">
      <nav className="top-nav glass-nav">
        <div className="brand-mark">✦ delight.ai</div>
        <a href="#gtm">GTM Growth</a>
        <a href="#buzzboard">Buzzboard</a>
        <a href="#campaign-kit">Campaign Kit</a>
        <a href="#scoreboard">Scoreboard</a>
      </nav>
      <div className="intro-grid">
        <div>
          <p className="eyebrow">Marketing Webpage Suite</p>
          <h1>Campaign systems that look as sharp as the work they ship.</h1>
          <p className="lede">A local prototype for the GTM Growth Command Center and Buzzboard employee amplification site, styled from the observed screenshots.</p>
        </div>
        <div className="mini-browser-card">
          <div className="browser-dots"><span /><span /><span /></div>
          <div className="mini-browser-line wide" />
          <div className="mini-browser-line" />
          <div className="mini-browser-tiles"><span /><span /><span /></div>
        </div>
      </div>
    </section>
  );
}

function GtmCommandCenter() {
  return (
    <section className="browser-frame" id="gtm">
      <nav className="top-nav product-nav">
        <div className="brand-mark">✦ delight.ai</div>
        <a href="#calendar">Integrated Marketing Plan</a>
        <a href="#projects">Projects</a>
        <a href="#mini-tools">Mini Tools</a>
        <a href="#status">Status</a>
      </nav>

      <section className="gtm-hero">
        <div>
          <span className="soft-pill">AI Growth Projects</span>
          <h2>GTM Growth <span>Command Center.</span> 🚀</h2>
          <p>Experiments, ABM intelligence, and growth infrastructure in one dashboard.</p>
        </div>
        <a className="black-button" href="#projects">Explore projects →</a>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="section-heading inverted">
          <span>Featured</span>
          <div>
            <h3>Integrated Marketing Plan</h3>
            <p>The main project calendar tracking every integrated campaign across channels — podcast, direct mail, paid social, case study, and webinar.</p>
          </div>
          <button className="light-button">Open full plan ↗</button>
        </div>
        <MarketingTimeline />
      </section>

      <section className="projects-section" id="projects">
        <p className="eyebrow">All Projects</p>
        {projectGroups.map((group) => (
          <ProjectGroupView key={group.title} group={group} />
        ))}
      </section>

      <section className="harper-section" id="mini-tools">
        <div className="section-heading inverted compact">
          <span>05</span>
          <div>
            <h3>Harper — Inbound AI Agent</h3>
            <p>Tools to optimise inbound agent behaviour, conversion analysis, widget performance, and business matching.</p>
          </div>
        </div>
        <div className="harper-grid">
          {harperCards.map((card) => <ProjectCardView key={card.title} card={card} large />)}
        </div>
      </section>

      <section className="activation-strip" id="status">
        <span>06</span>
        <div>
          <h3>Activation Campaigns</h3>
          <p>Campaign-specific playbooks, activation plans, and LinkedIn ad scripts tied to live GTM launches.</p>
        </div>
        <button className="black-button">View launch assets →</button>
      </section>
    </section>
  );
}

function MarketingTimeline() {
  const rows = [
    { name: 'AI Readiness 101', start: '8%', width: '28%', colour: 'slate' },
    { name: 'T&H Summer Campaigns', start: '25%', width: '68%', colour: 'blue' },
    { name: 'CX Network — Sponsored Webinar', start: '25%', width: '22%', colour: 'amber' },
    { name: 'State of CX Report', start: '15%', width: '51%', colour: 'purple' },
  ];

  return (
    <div className="timeline-card">
      <div className="timeline-toolbar">
        <strong>Integrated Marketing Plan</strong>
        <div><span>Calendar</span><span>List</span><span>Message Map</span><span>Email Calendar</span></div>
      </div>
      <div className="timeline-months"><span>Mar 2026</span><span>Apr 2026</span><span>May 2026</span><span>Jun 2026</span><span>Jul 2026</span></div>
      {rows.map((row) => (
        <div className="timeline-row" key={row.name}>
          <span>{row.name}</span>
          <div className="timeline-track"><i className={`timeline-bar ${row.colour}`} style={{ left: row.start, width: row.width }} /></div>
        </div>
      ))}
    </div>
  );
}

function ProjectGroupView({ group }: { group: ProjectGroup }) {
  return (
    <section className="project-group">
      <div className="project-title-row">
        <span>{group.number}</span>
        <div>
          <h3>{group.title}</h3>
          <p>{group.summary}</p>
        </div>
        <small>{group.cards.filter((card) => card.status === 'Live').length} live / {group.cards.length} total</small>
      </div>
      <div className="project-card-grid">
        {group.cards.map((card) => <ProjectCardView key={card.title} card={card} />)}
      </div>
    </section>
  );
}

function ProjectCardView({ card, large = false }: { card: ProjectCard; large?: boolean }) {
  return (
    <article className={`project-card ${large ? 'large' : ''}`}>
      <div className={`project-thumb ${card.accent}`}>
        <strong>{card.mockup}</strong>
        <span className="mock-screen" />
      </div>
      <div className="card-body">
        <span className={`status-pill ${card.status.toLowerCase()}`}>● {card.status}</span>
        <h4>{card.title}</h4>
        <p>{card.description}</p>
        <div className="tag-row">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}

function Buzzboard({
  selectedAsset,
  setSelectedAsset,
  selectedPost,
  postTemplates,
  setSelectedTemplate,
  billboardSlogan,
  setBillboardSlogan,
  length,
  setLength,
  detail,
  setDetail,
  energy,
  setEnergy,
  customDirection,
  setCustomDirection,
  generatedPost,
}: {
  selectedAsset: number;
  setSelectedAsset: (asset: number) => void;
  selectedPost: PostTemplate;
  postTemplates: PostTemplate[];
  setSelectedTemplate: (template: string) => void;
  billboardSlogan: string;
  setBillboardSlogan: (value: string) => void;
  length: number;
  setLength: (value: number) => void;
  detail: number;
  setDetail: (value: number) => void;
  energy: number;
  setEnergy: (value: number) => void;
  customDirection: string;
  setCustomDirection: (value: string) => void;
  generatedPost: string;
}) {
  return (
    <section className="browser-frame buzzboard-frame" id="buzzboard">
      <nav className="top-nav product-nav buzz-nav">
        <div className="brand-mark">● Buzzboard</div>
        <a href="#live-campaigns">Live Campaigns</a>
        <a href="#past-campaigns">Past Campaigns</a>
        <a href="#scoreboard">Scoreboard</a>
      </nav>

      <section className="buzz-hero">
        <span className="soft-pill dark">BUZZBOARD</span>
        <h2>Grab a post and get loud<br />on <span>LinkedIn</span></h2>
        <div className="value-pills"><span>✓ Pick from curated campaigns</span><span>✓ AI-generated or ready-made posts</span><span>✓ Track your team's impact</span></div>
      </section>

      <section className="campaign-list" id="live-campaigns">
        <p className="eyebrow">Live Campaigns</p>
        <div className="campaign-grid">
          {campaigns.map((campaign) => <CampaignCard key={campaign.title} campaign={campaign} />)}
        </div>
        <div className="past-campaigns" id="past-campaigns">
          <p className="eyebrow">Past Campaigns</p>
          {pastCampaigns.map((campaign) => <div key={campaign}><strong>{campaign}</strong><span>View archive ↗</span></div>)}
        </div>
      </section>

      <section className="campaign-kit" id="campaign-kit">
        <div className="kit-hero">
          <span className="soft-pill dark">BUZZBOARD · EMPLOYEE AMPLIFICATION KIT</span>
          <h2>{billboardSlogan}</h2>
          <p>Pick your UniFocus magazine ad, tune the campaign line, and help hospitality teams see what faster operations can feel like.</p>
          <button>UniFocus Magazine Ads <em>Phase I</em></button>
        </div>

        <section className="billboard-generator">
          <div>
            <p className="eyebrow">Magazine ad copy generator</p>
            <h3>Make every portrait ad update from one campaign line.</h3>
          </div>
          <label>
            Campaign headline
            <input value={billboardSlogan} onChange={(event) => setBillboardSlogan(event.target.value)} />
          </label>
          <div className="slogan-chip-row">
            {sloganIdeas.map((idea) => (
              <button key={idea} onClick={() => setBillboardSlogan(idea)}>{idea}</button>
            ))}
          </div>
        </section>

        <section className="asset-section">
          <p className="eyebrow">Magazine ads · portrait concepts</p>
          <div className="asset-grid">
            {assets.map((asset, index) => (
              <button className={`asset-card ${selectedAsset === index ? 'selected' : ''}`} key={asset.label} onClick={() => setSelectedAsset(index)}>
                <span className="real-badge">{asset.badge}</span>
                <MagazineAd asset={asset} slogan={billboardSlogan} compact />
                <small>{asset.label}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="composer-section">
          <p className="eyebrow">Step 1 · Write your post</p>
          <div className="composer-card">
            <div className="selected-asset-preview"><MagazineAd asset={assets[selectedAsset]} slogan={billboardSlogan} /></div>
            <div className="post-preview">
              <div><p className="eyebrow">Your Post</p><button className="ghost-button">Change asset</button></div>
              <pre>{selectedPost.body}</pre>
              <button className="linkedin-button">in Post on LinkedIn</button>
            </div>
          </div>
        </section>

        <section className="template-section">
          <p className="eyebrow">Ready to post · grab and go</p>
          <div className="template-grid">
            {postTemplates.map((template) => (
              <button key={template.id} className={`template-card ${selectedPost.id === template.id ? 'selected' : ''}`} onClick={() => setSelectedTemplate(template.id)}>
                <span>{template.tone}</span>
                {template.recommended && <em>Recommended</em>}
                <h4>{template.title}</h4>
                <p>{template.body.slice(0, 146)}...</p>
              </button>
            ))}
          </div>
          <div className="selected-post-block">
            <div><p className="eyebrow">Selected Post</p><button className="ghost-button">Copy</button></div>
            <pre>{selectedPost.body}</pre>
          </div>
        </section>

        <section className="generator-section">
          <div className="tuning-panel">
            <h3>Tune your post</h3>
            <Slider label="Length" value={length} setValue={setLength} />
            <Slider label="Detail" value={detail} setValue={setDetail} />
            <Slider label="Energy" value={energy} setValue={setEnergy} />
            <label className="direction-field">Custom direction<textarea value={customDirection} onChange={(event) => setCustomDirection(event.target.value)} /></label>
          </div>
          <div className="generated-panel">
            <div><p className="eyebrow">Generated Post</p><button className="ghost-button">Copy</button></div>
            <pre>{generatedPost}</pre>
            <button className="linkedin-button">in Post on LinkedIn</button>
          </div>
        </section>
      </section>

      <section className="scoreboard" id="scoreboard">
        <div>
          <p className="eyebrow">Scoreboard</p>
          <h3>All-Time Leaderboard</h3>
          <p>Track your team's impact across campaigns, posts, and engagement.</p>
        </div>
        <ol>
          <li><span>01</span><strong>Avery Chen</strong><em>208 pts</em></li>
          <li><span>02</span><strong>Maya Patel</strong><em>130 pts</em></li>
          <li><span>03</span><strong>Jordan Lee</strong><em>120 pts</em></li>
        </ol>
      </section>
    </section>
  );
}

function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <article className={`campaign-card ${campaign.status === 'Coming Soon' ? 'coming-soon' : ''}`}>
      <span className={`status-pill ${campaign.status === 'Live' ? 'live' : 'planning'}`}>● {campaign.status}</span>
      <h4>{campaign.title}</h4>
      <p>{campaign.description}</p>
      <small>{campaign.date}</small>
      {campaign.status === 'Live' && <a href="#campaign-kit">Open kit →</a>}
    </article>
  );
}

function MagazineAd({
  asset,
  slogan,
  compact = false,
}: {
  asset: BillboardAsset;
  slogan: string;
  compact?: boolean;
}) {
  const sceneClass = `magazine-ad ad-${asset.scene} ${compact ? 'compact' : 'hero-magazine-ad'}`;

  return (
    <div className={sceneClass} aria-label={`${asset.label} magazine ad preview`}>
      <div className="magazine-photo">
        <span className="window one" />
        <span className="window two" />
        <span className="window three" />
        <span className="lobby-line" />
      </div>
      <div className="magazine-copy">
        <div className="unifocus-mark">UniFocus</div>
        <strong>{slogan}</strong>
        <p>AI-powered workforce and operations intelligence for hotels that cannot afford to slow down.</p>
        <em>Hospitality operations, accelerated.</em>
      </div>
      <div className="magazine-footer"><span>WORKFORCE</span><span>FORECASTING</span><span>OPERATIONS</span></div>
    </div>
  );
}

function Slider({ label, value, setValue }: { label: string; value: number; setValue: (value: number) => void }) {
  return (
    <label className="slider-field">
      <span>{label}</span>
      <input type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} />
      <em>{value > 66 ? 'High' : value < 34 ? 'Low' : 'Medium'}</em>
    </label>
  );
}

export default App;
