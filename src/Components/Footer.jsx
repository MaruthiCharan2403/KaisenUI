import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600 mb-4">
                Kaisen UI
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Beautiful UI components built with Tailwind CSS that you can copy and paste into your apps.
              </p>

            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-3">
                
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Components
                  </Link>
                </li>
                
              </ul>
            </div>
            </div> */}
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Kaisen UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}