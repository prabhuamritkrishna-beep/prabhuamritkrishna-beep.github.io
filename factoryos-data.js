// Status changes reflect verified local implementation, not elapsed calendar days.
window.factoryOSData = {
  "name": "FactoryOS AI",
  "status": "In Progress",
  "start": "2026-10-30",
  "sprintEnd": "2026-11-05",
  "roadmapEnd": "2026-11-28",
  "subtitle": "First five milestones complete · Local manufacturing operations prototype",
  "description": "Built and verified the dashboard, backend APIs, SQLite database, factory disruption simulator, and deterministic production scheduler, plus five independent engineering mini-projects. The local application uses simulated factory records and a clearly labeled mock copilot.",
  "technologies": [
    "React",
    "TypeScript",
    "CSS / SVG",
    "Python",
    "FastAPI",
    "Pydantic",
    "SQLAlchemy",
    "SQLite",
    "Alembic",
    "Server-Sent Events",
    "Pytest"
  ],
  "milestones": [
    {
      "day": 1,
      "date": "2026-10-30",
      "title": "Industrial Operations Dashboard",
      "technologies": [
        "React",
        "TypeScript",
        "CSS",
        "SVG"
      ],
      "description": "Create the operations interface around coherent simulated factory data.",
      "features": [
        "Application layout",
        "Sidebar and navigation",
        "Machine monitoring cards",
        "Production metrics",
        "Factory event feed",
        "Interactive charts",
        "Machine status filters",
        "Simulated data generator",
        "Responsive interface"
      ],
      "objectives": [
        "React components",
        "JSX",
        "TypeScript types",
        "React state and effects",
        "Component props",
        "Arrays and objects",
        "Git workflow"
      ],
      "criteria": "The dashboard loads locally, shows coherent simulated data, supports filtering, and handles empty and invalid states.",
      "status": "Completed",
      "commit": null,
      "demo": null,
      "screenshot": "https://amritkrishnaprabhu.me/factoryos-dashboard.png",
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Responsive dashboard with machine monitoring, production totals, workload chart, event feed, filters, loading, empty and error states. These are milestone completions, not five separate days of independent learning.",
      "problemsSolved": [
        "Desktop and 320px / 390px mobile layouts checked; machine filter empty state verified."
      ],
      "completedOn": "2026-10-31"
    },
    {
      "day": 2,
      "date": "2026-10-31",
      "title": "Backend APIs and Frontend Integration",
      "technologies": [
        "Python",
        "FastAPI",
        "Pydantic",
        "HTTP"
      ],
      "description": "Connect the interface to validated manufacturing APIs.",
      "features": [
        "Backend directory structure",
        "Machine API",
        "Inventory API",
        "Production order API",
        "Event API",
        "Input validation",
        "API error responses",
        "Automated endpoint tests",
        "Frontend API client"
      ],
      "objectives": [
        "Python functions and modules",
        "REST APIs",
        "HTTP methods",
        "JSON serialization",
        "Request validation",
        "Error handling",
        "Asynchronous programming fundamentals"
      ],
      "criteria": "The frontend retrieves operational data from the backend, and API tests pass.",
      "status": "Completed",
      "commit": null,
      "demo": null,
      "screenshot": "https://amritkrishnaprabhu.me/factoryos-dashboard.png",
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. FastAPI machine, inventory, production-order and event APIs connected to the React client. Validated reservations, material receipts and error responses. These are milestone completions, not five separate days of independent learning.",
      "problemsSolved": [
        "Invalid quantities and over-reservations are rejected; API health monitor returned HTTP 200 for 3/3 local checks."
      ],
      "completedOn": "2026-10-31"
    },
    {
      "day": 3,
      "date": "2026-11-01",
      "title": "Database and Production Dependencies",
      "technologies": [
        "SQLite",
        "SQLAlchemy",
        "Alembic"
      ],
      "description": "Persist factory records and validate production dependencies.",
      "features": [
        "Machine table",
        "Production order table",
        "Inventory table",
        "Operation dependency table",
        "Factory event table",
        "Database relationships",
        "Database migrations",
        "Inventory reservation validation",
        "Persistent activity history"
      ],
      "objectives": [
        "SQL",
        "Primary and foreign keys",
        "Database relationships",
        "Transactions",
        "Data consistency",
        "Database normalization",
        "Migration workflows"
      ],
      "criteria": "Factory records persist after restarting the application and invalid database operations are rejected.",
      "status": "Completed",
      "commit": null,
      "demo": null,
      "screenshot": "https://amritkrishnaprabhu.me/factoryos-dashboard.png",
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. SQLAlchemy with SQLite persistence, relational records, atomic inventory updates, audit history and Alembic initial migration. PostgreSQL remains future work. These are milestone completions, not five separate days of independent learning.",
      "problemsSolved": [
        "The initial migration was verified against a fresh database and applied to the local project database; saved records survive backend restarts."
      ],
      "completedOn": "2026-10-31"
    },
    {
      "day": 4,
      "date": "2026-11-02",
      "title": "Real-Time Digital Factory Simulation",
      "technologies": [
        "Python",
        "React",
        "Server-Sent Events"
      ],
      "description": "Make factory disruptions observable through live event updates.",
      "features": [
        "Simulation clock",
        "Machine breakdown events",
        "Machine recovery events",
        "Material shortage scenarios",
        "Production delay propagation",
        "Live operational updates",
        "Event history",
        "Replayable simulated scenarios"
      ],
      "objectives": [
        "Event-driven architecture",
        "Event streaming",
        "State transitions",
        "Simulation logic",
        "Deterministic test scenarios",
        "Frontend/backend synchronization"
      ],
      "criteria": "Users can trigger and observe simulated manufacturing disruptions while the dashboard updates.",
      "status": "Completed",
      "commit": null,
      "demo": null,
      "screenshot": "https://amritkrishnaprabhu.me/factoryos-dashboard.png",
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Manual simulation clock, machine failures and recovery, shortages, supplier delays, rush orders, backlog, material consumption and SSE updates. Resetting the seeded factory and repeating scenario parameters reproduces the base behavior. These are milestone completions, not five separate days of independent learning.",
      "problemsSolved": [
        "Disruptions invalidate outdated active schedules; completed orders consume materials only once. This prototype does not model partial task progress."
      ],
      "completedOn": "2026-10-31"
    },
    {
      "day": 5,
      "date": "2026-11-03",
      "title": "Production Scheduling and Recovery Algorithms",
      "technologies": [
        "Python",
        "graph algorithms",
        "scheduling heuristics"
      ],
      "description": "Generate and compare deterministic production recovery schedules.",
      "features": [
        "Task dependency graph",
        "Dependency validation",
        "Cycle detection",
        "Machine availability constraints",
        "Job priority handling",
        "Baseline schedule generation",
        "Recovery schedule comparison",
        "Schedule metrics visualization"
      ],
      "objectives": [
        "Directed graphs",
        "Topological sorting",
        "Scheduling algorithms",
        "Constraints",
        "Time complexity",
        "Optimization tradeoffs"
      ],
      "criteria": "The system generates valid schedules for predefined scenarios and shows measurable differences between baseline and recovery schedules.",
      "status": "Completed",
      "commit": null,
      "demo": null,
      "screenshot": "https://amritkrishnaprabhu.me/factoryos-dashboard.png",
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Dependency validation, cycle detection, compatible machine assignment, material constraints, two deterministic scheduling heuristics, timeline and schedule comparison. These are milestone completions, not five separate days of independent learning.",
      "problemsSolved": [
        "52 automated checks passed across API, scheduling, mock copilot and engineering calculations; production frontend build passed. Stale or blocked proposals cannot be applied; human approval is required."
      ],
      "completedOn": "2026-10-31"
    },
    {
      "day": 6,
      "date": "2026-11-04",
      "title": "AI Agents and Manufacturing Copilot",
      "technologies": [
        "Python",
        "LLM API",
        "tool calling",
        "MCP"
      ],
      "description": "Answer operational questions with authorized tools and reviewed actions.",
      "features": [
        "AI chat interface",
        "Read-only operational tools",
        "Machine status retrieval",
        "Inventory retrieval",
        "Production order analysis",
        "Scheduling recommendation tool",
        "Structured outputs",
        "AI execution trace",
        "Proposed-action approval interface"
      ],
      "objectives": [
        "LLM APIs",
        "Tool calling",
        "MCP concepts",
        "Agent orchestration",
        "Prompt injection risks",
        "Model hallucinations",
        "Structured output validation",
        "Human oversight"
      ],
      "criteria": "The assistant can answer test questions using simulated factory records and propose actions without independently executing restricted changes.",
      "status": "Planned",
      "commit": null,
      "demo": null,
      "screenshot": null,
      "notes": "",
      "problemsSolved": []
    },
    {
      "day": 7,
      "date": "2026-11-05",
      "title": "Integration, Reliability, Testing and Deployment",
      "technologies": [
        "Docker",
        "Pytest",
        "GitHub Actions"
      ],
      "description": "Verify the complete local demonstration and prepare deployment.",
      "features": [
        "Integrated frontend and backend",
        "Critical-path integration tests",
        "Agent scenario evaluation tests",
        "Docker configuration",
        "GitHub Actions testing workflow",
        "Improved error handling",
        "Environment configuration",
        "Setup instructions",
        "Architecture documentation",
        "Project screenshots",
        "Public demonstration if feasible"
      ],
      "objectives": [
        "Testing strategies",
        "Docker fundamentals",
        "CI/CD",
        "Reliability",
        "Application deployment",
        "System monitoring",
        "Technical documentation"
      ],
      "criteria": "A developer can follow the README to run the complete project, the critical tests pass, and a working demonstration is available locally or publicly.",
      "status": "Planned",
      "commit": null,
      "demo": null,
      "screenshot": null,
      "notes": "",
      "problemsSolved": []
    }
  ],
  "miniProjects": [
    {
      "title": "Engineering Tolerance Calculator",
      "date": "2026-10-30",
      "category": "Mechanical Engineering",
      "technologies": [
        "HTML",
        "JavaScript"
      ],
      "description": "Calculate the effects of dimensional tolerances in mechanical assemblies.",
      "features": [
        "Enter component dimensions.",
        "Enter positive and negative tolerances.",
        "Calculate minimum assembly dimension.",
        "Calculate maximum assembly dimension.",
        "Display worst-case tolerance stack-up.",
        "Visualize tolerance ranges.",
        "Validate numerical inputs."
      ],
      "objectives": "Engineering calculations, functions, arrays, frontend forms, TypeScript.",
      "status": "Completed",
      "github": null,
      "demo": null,
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Standalone HTML/JavaScript calculator: asymmetric additive tolerance stack-up, minimum/maximum and input validation. Verified example: nominal 45; minimum 44.75; maximum 45.35.",
      "completedOn": "2026-10-31"
    },
    {
      "title": "API Health Monitor",
      "date": "2026-10-31",
      "category": "Backend Engineering",
      "technologies": [
        "Python",
        "Standard library"
      ],
      "description": "Monitor API availability and response performance.",
      "features": [
        "Check an endpoint's HTTP status.",
        "Measure request duration.",
        "Identify failed requests.",
        "Run repeated checks.",
        "Calculate average response time.",
        "Export results to CSV.",
        "Display a command-line summary."
      ],
      "objectives": "HTTP, network requests, Python scripts, error handling, measurement.",
      "status": "Completed",
      "github": null,
      "demo": null,
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Python standard-library monitor with repeated checks, bounded timeout, average duration and CSV export. Verified 3/3 HTTP 200 checks against the local backend.",
      "completedOn": "2026-10-31"
    },
    {
      "title": "Smart BOM Validator",
      "date": "2026-11-01",
      "category": "Manufacturing Software",
      "technologies": [
        "Python",
        "Standard library"
      ],
      "description": "Validate bill-of-materials data used in mechanical product assemblies.",
      "features": [
        "Import a BOM CSV.",
        "Check required fields.",
        "Detect duplicate part identifiers.",
        "Identify missing quantities.",
        "Reject invalid numerical values.",
        "Check parent-child part references.",
        "Detect circular assembly dependencies.",
        "Export a validation report."
      ],
      "objectives": "Data validation, CSV processing, recursion, graphs, manufacturing data.",
      "status": "Completed",
      "github": null,
      "demo": null,
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Python CSV validator detects missing fields, duplicate IDs, invalid quantities, unknown parents and circular assemblies; JSON report export. Valid sample: three parts.",
      "completedOn": "2026-10-31"
    },
    {
      "title": "Monte Carlo Downtime Simulator",
      "date": "2026-11-02",
      "category": "Engineering Simulation",
      "technologies": [
        "Python",
        "Standard library"
      ],
      "description": "Estimate the possible impact of equipment downtime through repeated simulation.",
      "features": [
        "Configure machine failure probability.",
        "Configure repair duration assumptions.",
        "Simulate 1,000 factory shifts.",
        "Calculate downtime distributions.",
        "Estimate possible production losses.",
        "Display histograms.",
        "Compare alternative operating assumptions."
      ],
      "objectives": "Probability, statistical simulation, numerical computing, engineering analysis.",
      "status": "Completed",
      "github": null,
      "demo": null,
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Seeded Python Monte Carlo simulation over 1,000 shifts; CSV and SVG output. Illustrative default model returned mean downtime 25.67 minutes and p95 113.3 minutes. These are simulated outcomes, not measured factory performance.",
      "completedOn": "2026-10-31"
    },
    {
      "title": "Critical Path Analyzer",
      "date": "2026-11-03",
      "category": "Algorithms and Optimization",
      "technologies": [
        "Python",
        "Standard library"
      ],
      "description": "Determine project dependencies, total project duration, and critical tasks.",
      "features": [
        "Add tasks.",
        "Enter task duration.",
        "Define dependencies.",
        "Detect circular dependencies.",
        "Calculate earliest start and finish times.",
        "Calculate latest start and finish times.",
        "Determine task slack.",
        "Identify the critical path.",
        "Visualize the dependency graph."
      ],
      "objectives": "Graph algorithms, scheduling, optimization, problem-solving.",
      "status": "Completed",
      "github": null,
      "demo": null,
      "notes": "Implemented and verified on October 31, 2026 with Codex assistance. Python critical-path method with dependency validation, earliest/latest times, slack, critical tasks and SVG timeline. Example duration 12 time units; Source task slack 2.",
      "completedOn": "2026-10-31"
    },
    {
      "title": "AI Agent Evaluation Lab",
      "date": "2026-11-04",
      "category": "AI Engineering",
      "technologies": [
        "Python",
        "Pytest",
        "LLM tool calling  "
      ],
      "description": "Test whether an AI agent selects correct tools and follows action restrictions.",
      "features": [
        "Define 20 test scenarios.",
        "Define expected tool selections.",
        "Execute agent tests.",
        "Verify structured tool arguments.",
        "Reject unauthorized actions.",
        "Identify incorrect tool selections.",
        "Calculate test pass rates.",
        "Generate evaluation reports."
      ],
      "objectives": "AI evaluation, testing, tool calling, structured outputs, reliability.",
      "status": "Planned",
      "github": null,
      "demo": null,
      "notes": ""
    },
    {
      "title": "System Performance Visualizer",
      "date": "2026-11-05",
      "category": "Software Reliability",
      "technologies": [
        "Python",
        "React",
        "CSV  "
      ],
      "description": "Visualize backend performance measurements.",
      "features": [
        "Import API performance data.",
        "Display average response times.",
        "Calculate latency percentiles.",
        "Display error rates.",
        "Show request throughput.",
        "Compare performance runs.",
        "Export charts or reports."
      ],
      "objectives": "Performance measurement, visualization, data analysis, software reliability.",
      "status": "Planned",
      "github": null,
      "demo": null,
      "notes": ""
    }
  ],
  "roadmap": [
    {
      "label": "Week 1",
      "dates": "October 30 to November 5",
      "theme": "Build FactoryOS AI and its seven mini-projects.",
      "topics": [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "SQL",
        "Factory simulations",
        "Graph algorithms",
        "AI agents",
        "Testing"
      ],
      "deliverables": [
        "FactoryOS seven-day sprint",
        "Seven mini-project implementations",
        "Daily development notes",
        "GitHub commits",
        "Working demonstrations"
      ],
      "status": "In Progress",
      "completedDates": [],
      "notes": "Five application milestones and five mini-projects implemented with Codex on October 31. Personal learning reflections and independently completed learning days have not been recorded.",
      "resources": [
        {
          "label": "React Quick Start",
          "url": "https://react.dev/learn"
        },
        {
          "label": "FastAPI tutorial",
          "url": "https://fastapi.tiangolo.com/tutorial/"
        }
      ]
    },
    {
      "label": "Week 2",
      "dates": "November 6 to November 12",
      "theme": "Strengthen full-stack fundamentals.",
      "topics": [
        "React hooks and component architecture",
        "TypeScript fundamentals",
        "Advanced Python basics",
        "FastAPI architecture",
        "PostgreSQL queries",
        "Authentication fundamentals",
        "Docker basics",
        "Unit testing"
      ],
      "deliverables": [
        "Refactor selected FactoryOS components.",
        "Improve error handling.",
        "Increase meaningful automated test coverage.",
        "Reimplement key functionality independently."
      ],
      "status": "Planned",
      "completedDates": [],
      "notes": "",
      "resources": [
        {
          "label": "React Quick Start",
          "url": "https://react.dev/learn"
        },
        {
          "label": "FastAPI tutorial",
          "url": "https://fastapi.tiangolo.com/tutorial/"
        }
      ]
    },
    {
      "label": "Week 3",
      "dates": "November 13 to November 19",
      "theme": "Agentic AI engineering.",
      "topics": [
        "LLM APIs",
        "Tool calling",
        "MCP",
        "Agent execution workflows",
        "Structured outputs",
        "Prompt injection defenses",
        "AI evaluations",
        "Human approval workflows",
        "Agent observability"
      ],
      "deliverables": [
        "Improved manufacturing agent.",
        "Expanded evaluation scenarios.",
        "Documented tool interfaces.",
        "Stronger error handling and approval checks."
      ],
      "status": "Planned",
      "completedDates": [],
      "notes": "",
      "resources": [
        {
          "label": "Model Context Protocol introduction",
          "url": "https://modelcontextprotocol.io/docs/getting-started/intro"
        }
      ]
    },
    {
      "label": "Week 4",
      "dates": "November 20 to November 26",
      "theme": "Production software engineering.",
      "topics": [
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Backend deployment",
        "Database migrations",
        "API security fundamentals",
        "System logging",
        "Performance testing",
        "Software architecture"
      ],
      "deliverables": [
        "Improved deployment process.",
        "Automated testing workflow.",
        "Performance measurements.",
        "Architecture documentation."
      ],
      "status": "Planned",
      "completedDates": [],
      "notes": "",
      "resources": [
        {
          "label": "Docker getting started",
          "url": "https://docs.docker.com/get-started/"
        }
      ]
    },
    {
      "label": "Days 29–30",
      "dates": "November 27–28",
      "theme": "Portfolio and interview preparation.",
      "topics": [
        "Portfolio presentation",
        "Interview explanations"
      ],
      "deliverables": [
        "Final project documentation.",
        "Architecture diagram.",
        "Technical blog post or build retrospective.",
        "GitHub repository cleanup.",
        "Portfolio updates with verified results.",
        "Interview explanations for key engineering decisions."
      ],
      "status": "Planned",
      "completedDates": [],
      "notes": "",
      "resources": [
        {
          "label": "GitHub Pages documentation",
          "url": "https://docs.github.com/en/pages"
        }
      ]
    }
  ],
  "buildLog": [
    {
      "date": "2026-10-31",
      "title": "First five FactoryOS milestones completed locally",
      "technologies": [
        "React",
        "TypeScript",
        "CSS / SVG",
        "Python",
        "FastAPI",
        "Pydantic",
        "SQLAlchemy",
        "SQLite",
        "Alembic",
        "Server-Sent Events",
        "Pytest"
      ],
      "explanation": "Built the React dashboard, validated FastAPI APIs, persistent SQLite database, six disruption scenarios, simulation clock, and deterministic dependency-aware scheduling. Added inventory receipts/reservations, human-reviewed recovery proposals and an audit trail. Five engineering mini-projects are independently runnable. Verification: 52 automated tests passed, TypeScript production build passed, SQLite migration passed, and browser desktop/mobile checks passed. The app is running locally; there is no public app deployment. The copilot is a deterministic mock, not a live LLM.",
      "bugsAndSolutions": [
        "Outdated plans are invalidated after machine or stock changes; stale approvals are rejected.",
        "Inventory cannot be over-reserved, scheduling prevents pooled stock overcommit, and completed orders consume materials once.",
        "Opening the correct VS Code project closed the original frontend terminal; the local servers were restarted from the project folder."
      ],
      "retrospective": "This implementation was generated and tested with Codex assistance on October 31. It does not represent five calendar days of independent work or completed mastery of the 30-day curriculum. PostgreSQL, real LLM/MCP integration, public deployment and the final two mini-projects remain future work.",
      "commit": null,
      "screenshot": "https://amritkrishnaprabhu.me/factoryos-dashboard.png"
    }
  ]
};
