🥗 TrackEats
A high-performance, minimalist nutrition tracker built with Next.js.

TrackEats strips away the clutter of traditional fitness apps, providing a sleek, editorial-style interface for monitoring daily intake and weekly trends. Built for speed, typography, and visual clarity.

🌐 View Live Demo

✨ Features
Editorial Interface: A "no-background" design that prioritizes whitespace and bold typography over heavy cards and borders.

Real-time Analytics: Dynamic 7-day activity tracking powered by Recharts.

Minimalist Logging: High-contrast, rapid-entry forms designed for the modern web.

Contextual Feedback: Visual cues through adaptive color states (Rose for exceeding goals, Indigo for staying on track).

Stability First: Built with robust hydration guards to eliminate cascading render errors and hydration mismatches.

🚀 Tech Stack
Framework: Next.js 15 (App Router)

Deployment: Vercel

Styling: Tailwind CSS

Visualization: Recharts

Icons: Lucide React

HTTP Client: Axios

🛠️ Getting Started
TrackEats is designed to work immediately without complex configuration.

1. Clone & Enter

Bash
git clone https://github.com/Ethan93Dev/TrackEats.git
cd TrackEats
2. Install Dependencies

Bash
npm install
3. Launch Development Server

Bash
npm run dev
Visit http://localhost:3000 to start tracking locally.

📊 Data Architecture
TrackEats utilizes a Derived State pattern to ensure the UI remains snappy even as your meal history grows.

Fetch: Raw meal data is pulled via Axios from the internal API.

Transform: Using useMemo, data is grouped by date-string and reduced into daily totals. This prevents expensive re-calculations on every keystroke.

Render: Charts are wrapped in a hydration guard (mounted state) to ensure perfect synchronization between the server and client-side visualization.
