# Computer Use Agent Trace Viewer

A web-based visualization tool for Computer Use Agent traces, displaying the agent's thought process, screenshots, and corresponding videos.

![Computer Use Agent Trace Viewer](https://i.imgur.com/example.png)

## 📋 Features

- Interactive timeline of agent activities with screenshots and thoughts
- Synchronized video playback
- Adjustable split view (drag to resize)
- Time-synchronized scrolling
- Multiple trace instances on a single page

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v16.x or newer)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- Basic knowledge of React and Next.js

## 🚀 Getting Started

Follow these steps to set up and run the Computer Use Agent Trace Viewer from scratch:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cua-trace-viewer.git
cd cua-trace-viewer
```

Alternatively, create a new project directory and initialize from scratch:

```bash
mkdir cua-trace-viewer
cd cua-trace-viewer
```

### 2. Initialize a New Next.js Project (if starting from scratch)

```bash
npx create-next-app@latest . --typescript --tailwind --eslint
```

When prompted, select Yes for all options.

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Project Structure

Create the required directories:

```bash
mkdir -p public/screenshots public/videos src/types src/components
```

### 5. Place Your Media Files

Add your screenshot images and videos to the public directories:

```bash
# Example: Copy your files to the appropriate directories
cp path/to/your/screenshots/* public/screenshots/
cp path/to/your/videos/* public/videos/
```

### 6. Create Core Files

Create the following files with the content provided in our project:

#### src/types/trace.ts

```typescript
export interface TraceItem {
  timestamp: string;
  screenshot: string;
  thought: string;
  video: string;
  timeRange: {
    start: number; // Video start time (seconds)
    end: number;   // Video end time (seconds)
  };
}

export interface TraceData {
  items: TraceItem[];
}
```

#### src/components/Timeline.tsx, VideoPlayer.tsx, and TraceViewer.tsx

Create these component files as provided in our project.

#### app/page.tsx and app/layout.tsx

Create these files to set up the main page and layout.

### 7. Configure Next.js and Tailwind

Ensure you have the correct configurations in:
- next.config.js
- tailwind.config.js
- postcss.config.js

### 8. Update Sample Data

Edit the `sampleData` object in `app/page.tsx` to include your own trace data:

```typescript
const sampleData = {
  items: [
    {
      timestamp: '2024-03-20T10:00:00Z',
      screenshot: '/screenshots/your-screenshot1.png',
      thought: 'Description of what the agent is doing...',
      video: '/videos/your-video.mp4',
      timeRange: {
        start: 0,  // Start time in seconds
        end: 10    // End time in seconds
      }
    },
    // Add more items as needed
  ],
};
```

### 9. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your trace viewer in action!

## ✨ Customization

### Modifying the Layout

- Adjust the default split ratio (currently 3:7) in the `TraceViewer` component by changing the `splitPosition` initial state
- Customize the styling using Tailwind classes in the component files

### Adding More Trace Viewers

To add more trace viewers, duplicate the viewer section in `app/page.tsx` and provide different data:

```tsx
{/* Additional Trace Viewer */}
<div className="mb-16">
  <div className="bg-white rounded-t-lg shadow-md p-4 border-b border-gray-200">
    <h2 className="text-xl font-semibold text-gray-700">Trace Viewer 3</h2>
    <p className="text-sm text-gray-500">Another trace example</p>
  </div>
  <div className="h-[80vh] bg-white rounded-b-lg shadow-lg overflow-hidden">
    <TraceViewer data={yourNewData} id="viewer3" />
  </div>
</div>
```

### Loading Data from API

To load data from an API instead of hardcoding it:

```tsx
'use client';

import { useState, useEffect } from 'react';
import TraceViewer from '../src/components/TraceViewer';
import { TraceData } from '../src/types/trace';

export default function Home() {
  const [data1, setData1] = useState<TraceData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/traces/1');
        const data = await response.json();
        setData1(data);
      } catch (error) {
        console.error('Error fetching trace data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading traces...</div>;
  
  return (
    <main>
      {data1 && <TraceViewer data={data1} id="viewer1" />}
    </main>
  );
}
```

## 📝 Configuration Options

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configuration:

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## 🔧 Troubleshooting

### Images or Videos Not Loading

- Ensure the paths in your data match the actual file paths in the `public` directory
- Paths should be relative to the `public` directory (e.g., `/screenshots/image.png`, not `public/screenshots/image.png`)
- Check browser console for any 404 errors

### Build Errors

If you encounter build errors, make sure all dependencies are properly installed:

```bash
npm install
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 