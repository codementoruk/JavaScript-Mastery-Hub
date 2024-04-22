import React from 'react';
import PostcodeLookup from './components/PostcodeLookup';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Header />
      <div className="flex justify-center p-4">
        <PostcodeLookup />
      </div>
    </div>
  );
}

export default App;
