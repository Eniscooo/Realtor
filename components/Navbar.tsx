"use client"

import React from "react"
import { useRouter } from "next/navigation"

const Navbar: React.FC = () => {
  const router = useRouter()

  return (
    <nav className="sticky top-0 z-50 bg-transparent w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
              <span className="material-icons text-white">logo</span>
            </div>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
              className="text-2xl font-bold tracking-tight text-primary font-heading"
            >
              PARADISO
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            {/* LOGIN */}
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 font-medium text-white hover:text-forest transition-colors"
            >
              Login
            </button>

            {/* GET STARTED */}
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-2.5 bg-forest text-white rounded-lg font-semibold hover:bg-forest/90 transition-all shadow-lg shadow-forest/25"
            >
              Get Started
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
