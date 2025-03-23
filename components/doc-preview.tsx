"use client"

import { Search, Frame, FileText, Globe, Box, Terminal, ChevronDown, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type ExpandedSections = 'guide' | 'setup';

export function DocPreview() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [expandedItems, setExpandedItems] = useState({
    guide: true,
    setup: false,
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

 
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggleSection = (section: string) => {
    setActiveSection(section)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const toggleExpanded = (section: ExpandedSections) => {
    setExpandedItems((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const sidebarItemVariants = {
    initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
    hover: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
    active: { backgroundColor: "rgba(255, 255, 255, 0.15)" },
  }

  const cardVariants = {
    initial: { scale: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      className="flex flex-col md:flex-row h-[500px] md:h-[500px] overflow-hidden rounded-lg border shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
   
      {isMobile && (
        <div className="bg-black text-white p-4 flex items-center justify-between border-b border-neutral-800 z-10">
          <div className="flex items-center gap-2">
            <Frame className="h-5 w-5" />
            <span className="font-medium">C++ Documentation</span>
          </div>
          <motion.button
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      )}

   
      <div className={cn(
        "w-full md:w-64 bg-black text-white flex flex-col",
        "transition-all duration-300 ease-in-out",
        isMobile ? (sidebarOpen ? "fixed inset-0 z-50 h-full" : "hidden") : "relative"
      )}>
        {!isMobile && (
          <div className="p-4 border-b border-neutral-800 flex items-center gap-2">
            <Frame className="h-5 w-5" />
            <span className="font-medium">C++ Documentation</span>
          </div>
        )}
        <div className="p-4 border-b border-neutral-800">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">C++ Programming</span>
          </div>
          <p className="text-xs text-neutral-400">Complete guide to C++</p>
        </div>
        <div className="p-2">
          <motion.div
            className="flex items-center gap-2 rounded-md bg-neutral-800 px-3 py-1.5 text-sm"
            whileHover={{ backgroundColor: "rgba(38, 38, 38, 1)" }}
            transition={{ duration: 0.2 }}
          >
            <Search className="h-4 w-4" />
            <span>Search</span>
            <div className="ml-auto flex items-center gap-1 text-xs">
              <kbd className="rounded bg-neutral-700 px-1.5">⌘</kbd>
              <kbd className="rounded bg-neutral-700 px-1.5">K</kbd>
            </div>
          </motion.div>
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between text-sm font-medium px-2 py-1">
            <span>Tutorials</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleExpanded("guide")}
              className="cursor-pointer"
            >
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  expandedItems.guide ? "transform rotate-180" : "",
                )}
              />
            </motion.div>
          </div>
          {expandedItems.guide && (
            <div className="mt-1 space-y-1">
              <motion.div
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm cursor-pointer"
                variants={sidebarItemVariants}
                initial="initial"
                animate={activeSection === "introduction" ? "active" : "initial"}
                whileHover="hover"
                onClick={() => toggleSection("introduction")}
                transition={{ duration: 0.2 }}
              >
                <span className={activeSection === "introduction" ? "text-white" : "text-neutral-400"}>
                  Introduction
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm cursor-pointer"
                variants={sidebarItemVariants}
                initial="initial"
                animate={activeSection === "variables" ? "active" : "initial"}
                whileHover="hover"
                onClick={() => toggleSection("variables")}
                transition={{ duration: 0.2 }}
              >
                <span className={activeSection === "variables" ? "text-white" : "text-neutral-400"}>Variables</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm cursor-pointer"
                variants={sidebarItemVariants}
                initial="initial"
                animate={activeSection === "functions" ? "active" : "initial"}
                whileHover="hover"
                onClick={() => toggleSection("functions")}
                transition={{ duration: 0.2 }}
              >
                <span className={activeSection === "functions" ? "text-white" : "text-neutral-400"}>Functions</span>
              </motion.div>
            </div>
          )}
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between text-sm font-medium px-2 py-1">
            <span>Reference</span>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleExpanded("setup")}
              className="cursor-pointer"
            >
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  expandedItems.setup ? "transform rotate-180" : "",
                )}
              />
            </motion.div>
          </div>
          {expandedItems.setup && (
            <div className="mt-1 space-y-1">
              <motion.div
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm cursor-pointer"
                variants={sidebarItemVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                <span className="text-neutral-400">Standard Library</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-md px-2 py-1 text-sm cursor-pointer"
                variants={sidebarItemVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                <span className="text-neutral-400">Language Features</span>
              </motion.div>
            </div>
          )}
        </div>
        {isMobile && (
          <div className="mt-auto p-4 border-t border-neutral-800">
            <button 
              className="w-full py-2 text-center text-sm bg-neutral-800 rounded-md hover:bg-neutral-700"
              onClick={() => setSidebarOpen(false)}
            >
              Close Menu
            </button>
          </div>
        )}
      </div>

   
      <div className="flex-1 overflow-auto p-4 md:p-8 bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-3xl">
          <motion.h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6" variants={itemVariants}>
            Introduction to C++
          </motion.h1>
          <motion.h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" variants={itemVariants}>
            Getting Started with C++
          </motion.h2>

          <motion.div className="mt-4 md:mt-6" variants={itemVariants}>
            <motion.h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" variants={itemVariants}>
              What is C++?
            </motion.h2>
            <motion.p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4" variants={itemVariants}>
              C++ is a powerful general-purpose programming language. It can be used to develop operating systems,
              browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented,
              functional, and so on.
            </motion.p>
            <motion.p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4" variants={itemVariants}>
              C++ is a superset of C, and that virtually any legal C program is a legal C++ program.
            </motion.p>

            <div className="grid grid-cols-1 gap-4 mt-4 md:mt-6">
              <motion.div
                className="rounded-lg border p-3 md:p-4"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Box className="h-4 md:h-5 w-4 md:w-5" />
                  <h3 className="font-semibold text-sm md:text-base">Object-Oriented</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  C++ supports the four pillars of object-oriented programming: encapsulation, inheritance,
                  polymorphism, and abstraction.
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-3 md:p-4"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Globe className="h-4 md:h-5 w-4 md:w-5" />
                  <h3 className="font-semibold text-sm md:text-base">Multi-paradigm</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  C++ supports procedural, object-oriented, functional, and generic programming paradigms.
                </p>
              </motion.div>
              <motion.div
                className="rounded-lg border p-3 md:p-4"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Terminal className="h-4 md:h-5 w-4 md:w-5" />
                  <h3 className="font-semibold text-sm md:text-base">Performance</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  C++ is designed for performance and efficiency, with direct access to hardware resources and memory.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
