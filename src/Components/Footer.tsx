import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Kaisen UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}