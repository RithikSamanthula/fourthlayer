"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/neon-button"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { cn } from "@/lib/utils"
import { RetroGrid } from "@/components/ui/retro-grid"

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section className="relative">
          {/* New Retro Grid Background */}
          <div className="absolute top-0 z-[0] h-screen w-screen bg-blue-950/10 dark:bg-blue-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]" />
          <RetroGrid angle={65} opacity={0.4} cellSize={50} lightLineColor="#4a4a4a" darkLineColor="#2a2a2a" />

          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="absolute inset-x-0 top-56 -z-20 lg:top-32 w-full h-full bg-gradient-to-b from-transparent via-black/60 to-black" />
            </AnimatedGroup>
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,rgb(0_0_0)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#early-access"
                    className="hover:bg-slate-900/50 bg-slate-900/30 border-glow group mx-auto flex w-fit items-center gap-4 rounded-full p-1 pl-4 shadow-md transition-all duration-300"
                  >
                    <span className="text-slate-200 text-sm">Revolutionary AI Health Monitoring</span>
                    <span className="block h-4 w-0.5 border-l border-blue-600/50 bg-blue-600/30"></span>
                    <div className="bg-slate-900/50 group-hover:bg-slate-800/50 size-6 overflow-hidden rounded-full duration-500 glow-blue">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-blue-400" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-blue-400" />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Made the main heading bigger with proper line-height to prevent cutoff */}
                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-5xl tracking-tighter font-geist md:text-7xl lg:mt-16 xl:text-7xl font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-tight py-2">
                    Your Health,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      Decoded
                    </span>{" "}
                    Daily
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-300">
                    FourthLayer AI analyzes the subtle signs your body shows every day through your phone's camera and
                    microphone. Advanced AI reads your skin tone, facial features, voice patterns, and breathing to
                    provide personalized health insights.
                  </p>
                </AnimatedGroup>
                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
                >
                  <Button key={1} variant="solid" size="lg" className="text-base px-8 py-3 h-12" asChild>
                    <Link href="#early-access">
                      <span className="text-nowrap">Join Waitlist</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    variant="ghost"
                    size="lg"
                    className="h-12 px-8 py-3 text-base text-slate-300 hover:text-slate-100"
                    asChild
                  >
                    <Link href="#demo">
                      <span className="text-nowrap">Watch Demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b from-transparent to-black absolute inset-0 z-10 from-35%"
                />
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-blue-600/20 p-4 shadow-lg bg-slate-900/30 glow-blue">
                  <img
                    className="aspect-15/8 relative rounded-2xl bg-slate-900/50 border border-blue-600/10 object-cover"
                    src="/images/fourthlayer-app-hero-final.jpeg"
                    alt="FourthLayer AI app interface displayed on smartphone against dramatic rocky landscape, showing health monitoring dashboard with overall health score of 92 and comprehensive health analysis metrics"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  )
}

const menuItems = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Science", href: "#science" },
  { name: "About", href: "#about" },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setMenuState(!menuState)
    // Immediately blur the button to prevent focus outline
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.blur()
    }
  }

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-white/10 max-w-4xl rounded-2xl border border-white/20 backdrop-blur-xl lg:px-5 shadow-2xl shadow-white/5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                {/* Made FourthLayer AI text wider and smaller */}
                <span className="text-lg font-bold bg-gradient-to-r from-slate-100 to-blue-200 bg-clip-text text-transparent tracking-wider">
                  FourthLayer AI
                </span>
              </Link>
              <button
                onClick={handleMenuToggle}
                onMouseDown={(e) => e.preventDefault()}
                onFocus={(e) => e.currentTarget.blur()}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-slate-400 hover:text-blue-400 focus:outline-none focus:ring-0 focus:border-0"
                style={{ outline: "none", boxShadow: "none" }}
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-blue-400 block duration-150 transition-colors focus:outline-none focus:ring-0"
                      style={{ outline: "none", boxShadow: "none" }}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/50 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-blue-600/20 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-slate-500 hover:text-blue-400 block duration-150 transition-colors focus:outline-none focus:ring-0"
                        style={{ outline: "none", boxShadow: "none" }}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(isScrolled && "lg:hidden", "text-slate-300 hover:text-slate-100")}
                  asChild
                >
                  <Link href="#login" style={{ outline: "none", boxShadow: "none" }}>
                    <span>Login</span>
                  </Link>
                </Button>
                <Button variant="solid" size="sm" className={cn(isScrolled && "lg:hidden")} asChild>
                  <Link href="#early-access" style={{ outline: "none", boxShadow: "none" }}>
                    <span>Get Early Access</span>
                  </Link>
                </Button>
                <Button variant="solid" size="sm" className={cn(isScrolled ? "lg:inline-flex" : "hidden")} asChild>
                  <Link href="#early-access" style={{ outline: "none", boxShadow: "none" }}>
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
