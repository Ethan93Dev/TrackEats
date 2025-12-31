🥗 CalorieFlow
A high-performance, minimalist nutrition tracker built with Next.js.

CalorieFlow strips away the clutter of traditional fitness apps, providing an editorial-style interface for tracking daily intake and weekly trends. Built for speed and visual clarity.

✨ Features
Editorial Interface: A "no-background" design focusing on bold typography and whitespace.

Real-time Analytics: Dynamic 7-day activity chart using Recharts.

Intuitive Logging: High-contrast, minimalist input forms for rapid entry.

Contextual Feedback: Adaptive color states (Rose for over-goal, Indigo for under-goal).

Hydration Guarded: Robust render logic to prevent hydration mismatches and cascading render errors.

🚀 Tech Stack
Framework: Next.js 15 (App Router)

Styling: Tailwind CSS

Visualization: Recharts

Icons: Lucide React

HTTP Client: Axios

🛠️ Getting Started
1. Clone the repository
Bash

git clone https://github.com/your-username/calorie-flow.git
cd calorie-flow
2. Install dependencies
Bash

npm install
# or
yarn install
3. Setup Environment Variables
Create a .env.local file in the root directory and add your API endpoints:

Code snippet

NEXT_PUBLIC_API_URL=your_api_gateway_url
4. Run the development server
Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.

📊 Data Architecture
The app uses a Derived State pattern to ensure high performance and zero "cascading render" errors.

Raw Data: Fetched via Axios from the /api/meal/getMeals endpoint.

Normalization: Meals are grouped by date-string using useMemo to prevent unnecessary recalculations.

Hydration: Recharts components are guarded by a mounted state to ensure stable client-side rendering.
