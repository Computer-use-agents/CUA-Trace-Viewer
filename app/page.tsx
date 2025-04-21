'use client';

import React, { useState } from 'react';
import TraceViewer from '../src/components/TraceViewer';
import trace1Data from '../src/data/trace1.json';
import trace2Data from '../src/data/trace2.json';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={darkMode 
      ? "min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100" 
      : "min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800"
    }>
      <div className="container mx-auto py-12 px-4 max-w-6xl relative">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className={`absolute top-4 right-4 rounded-full p-2 transition-all duration-300 z-10 ${
            darkMode 
              ? "bg-white/10 hover:bg-white/20 text-yellow-300" 
              : "bg-gray-200 hover:bg-gray-300 text-indigo-700"
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <header className="mb-16 text-center">
          <h1 className={`text-4xl font-bold mb-2 ${
            darkMode 
              ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500" 
              : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          }`}>
            Computer Use Agent - macOS Agent
          </h1>
          <p className={`text-xl font-light ${
            darkMode ? "text-blue-100 opacity-80" : "text-blue-700 opacity-90"
          }`}>
            Intelligent Desktop Automation
          </p>
        </header>
        
        {/* 介绍部分 */}
        <section className={`mb-20 ${
          darkMode 
            ? "backdrop-blur-sm bg-white/5 border border-white/10" 
            : "backdrop-blur-sm bg-blue-50/30 border border-blue-100/50"
          } rounded-2xl p-8 shadow-xl`}
        >
          <div className="flex items-center mb-6">
            <div className={`h-2 w-2 rounded-full ${darkMode ? "bg-blue-400" : "bg-blue-500"} mr-2 animate-pulse`}></div>
            <div className={`h-2 w-2 rounded-full ${darkMode ? "bg-purple-400" : "bg-purple-500"} mr-2 animate-pulse delay-150`}></div>
            <div className={`h-2 w-2 rounded-full ${darkMode ? "bg-teal-400" : "bg-teal-500"} animate-pulse delay-300`}></div>
            <h2 className={`text-2xl font-bold ml-4 ${
              darkMode 
                ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" 
                : "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            }`}>
              Meet the Future of Desktop Automation
            </h2>
          </div>
          
          <div className={`prose max-w-none mb-8 ${darkMode ? "prose-invert" : ""}`}>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              <span className="font-medium">Computer Use Agent</span> redefines how you interact with macOS through 
              <span className={`${
                darkMode 
                  ? "bg-gradient-to-r from-blue-900/60 to-purple-900/60" 
                  : "bg-gradient-to-r from-blue-100 to-purple-100"
                } px-2 py-0.5 mx-1 rounded`}
              >
                intelligent observation and execution
              </span> 
              of complex tasks across all your applications.
            </p>
          </div>
            
          <div className="grid md:grid-cols-3 gap-8 my-10">
            <div className={`rounded-xl p-6 shadow-lg transition-all duration-300 group ${
              darkMode 
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-400/40" 
                : "bg-white border border-blue-200 hover:border-blue-300"
            }`}>
              <div className={`${darkMode ? "text-blue-400" : "text-blue-600"} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>👁️</div>
              <h3 className={`font-medium text-lg mb-2 ${darkMode ? "text-blue-300" : "text-blue-700"}`}>Computer Vision</h3>
              <p className={`text-sm ${darkMode ? "text-blue-100/80" : "text-blue-900/80"}`}>Observes your screen in real-time, performing human-like interactions based on deep visual understanding.</p>
            </div>
              
            <div className={`rounded-xl p-6 shadow-lg transition-all duration-300 group ${
              darkMode 
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 hover:border-purple-400/40" 
                : "bg-white border border-purple-200 hover:border-purple-300"
            }`}>
              <div className={`${darkMode ? "text-purple-400" : "text-purple-600"} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>🔄</div>
              <h3 className={`font-medium text-lg mb-2 ${darkMode ? "text-purple-300" : "text-purple-700"}`}>Cross-App Workflows</h3>
              <p className={`text-sm ${darkMode ? "text-purple-100/80" : "text-purple-900/80"}`}>Navigates seamlessly between applications, orchestrating multi-step processes with remarkable adaptability.</p>
            </div>
              
            <div className={`rounded-xl p-6 shadow-lg transition-all duration-300 group ${
              darkMode 
                ? "bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-500/20 hover:border-teal-400/40" 
                : "bg-white border border-teal-200 hover:border-teal-300"
            }`}>
              <div className={`${darkMode ? "text-teal-400" : "text-teal-600"} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>🧠</div>
              <h3 className={`font-medium text-lg mb-2 ${darkMode ? "text-teal-300" : "text-teal-700"}`}>Reasoning Engine</h3>
              <p className={`text-sm ${darkMode ? "text-teal-100/80" : "text-teal-900/80"}`}>Makes intelligent decisions based on visual context, dynamically adapting to unfamiliar interfaces.</p>
            </div>
          </div>
            
          <div className={`${
            darkMode 
              ? "backdrop-blur-md bg-white/5 border border-white/10" 
              : "backdrop-blur-md bg-white border border-blue-100/50"
            } rounded-xl p-6`}
          >
            <p className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Built as a fully open-source platform, giving you complete freedom to choose preferred APIs or deploy 
              open-source models via vllm. Customize all system prompts for both appagent and macosagent to 
              create your perfect workflow assistant.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6 mb-4">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                darkMode 
                  ? "bg-gradient-to-r from-green-900/40 to-green-800/40 border border-green-500/30 text-green-400" 
                  : "bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-700"
              }`}>
                <span className={`w-2 h-2 ${darkMode ? "bg-green-400" : "bg-green-600"} rounded-full mr-2`}></span>100% Open Source
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                darkMode 
                  ? "bg-gradient-to-r from-purple-900/40 to-purple-800/40 border border-purple-500/30 text-purple-400" 
                  : "bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 text-purple-700"
              }`}>
                <span className={`w-2 h-2 ${darkMode ? "bg-purple-400" : "bg-purple-600"} rounded-full mr-2`}></span>Research-Friendly
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                darkMode 
                  ? "bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-500/30 text-blue-400" 
                  : "bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700"
              }`}>
                <span className={`w-2 h-2 ${darkMode ? "bg-blue-400" : "bg-blue-600"} rounded-full mr-2`}></span>macOS Compatible
              </span>
            </div>
          </div>
        </section>
        
        {/* Trace Viewer 容器 */}
        <div className="space-y-16">
          {/* 第一个Trace Viewer */}
          <section>
            <div className={`rounded-t-2xl p-4 flex justify-between items-center ${
              darkMode 
                ? "backdrop-blur-sm bg-white/5 border border-white/10" 
                : "backdrop-blur-sm bg-blue-50/30 border border-blue-100/50"
            }`}>
              <div>
                <h2 className={`text-xl font-medium ${darkMode ? "text-gray-100" : "text-gray-800"}`}>Agent Activity Trace</h2>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Session 1: Document Navigation Analysis</p>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className={`text-xs ${darkMode ? "text-green-400" : "text-green-600"}`}>Live Monitoring</span>
              </div>
            </div>
            <div className={`h-[75vh] overflow-hidden rounded-b-2xl border-x border-b ${
              darkMode 
                ? "backdrop-blur-sm bg-black/30 border-white/10 shadow-2xl" 
                : "backdrop-blur-sm bg-white/90 border-blue-100/50 shadow-lg"
            }`}>
              <TraceViewer data={trace1Data} id="viewer1" />
            </div>
          </section>
          
          {/* 第二个Trace Viewer */}
          <section>
            <div className={`rounded-t-2xl p-4 flex justify-between items-center ${
              darkMode 
                ? "backdrop-blur-sm bg-white/5 border border-white/10" 
                : "backdrop-blur-sm bg-blue-50/30 border border-blue-100/50"
            }`}>
              <div>
                <h2 className={`text-xl font-medium ${darkMode ? "text-gray-100" : "text-gray-800"}`}>Agent Activity Trace</h2>
                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Session 2: Content Search Pattern Analysis</p>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span className={`text-xs ${darkMode ? "text-green-400" : "text-green-600"}`}>Live Monitoring</span>
              </div>
            </div>
            <div className={`h-[75vh] overflow-hidden rounded-b-2xl border-x border-b ${
              darkMode 
                ? "backdrop-blur-sm bg-black/30 border-white/10 shadow-2xl" 
                : "backdrop-blur-sm bg-white/90 border-blue-100/50 shadow-lg"
            }`}>
              <TraceViewer data={trace2Data} id="viewer2" />
            </div>
          </section>
        </div>
        
        <footer className={`mt-20 text-center text-sm ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
          <p>Computer Use Agent - macOS Agent | The Next Generation of Intelligent Desktop Automation</p>
          <p className="mt-2">Developed by <span className="font-semibold">BIGAI-ML</span></p>
        </footer>
      </div>
    </main>
  );
}
