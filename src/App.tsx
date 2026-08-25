/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Compass, Sparkles, Menu, X, ShieldCheck, Globe, Cpu, LineChart } from 'lucide-react';
import { motion } from 'motion/react';
import ScrollAnimationBackground from './ScrollAnimationBackground';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Solutions', 'Projects', 'About us', 'Contact'];

  return (
    <div className="w-full bg-transparent text-white selection:bg-white/20">
      <ScrollAnimationBackground />
      {/* Section 1: Hero Banner */}
      <div
        id="paris-banner-container"
        className="h-screen min-h-[640px] max-h-[900px] w-full bg-transparent text-white flex flex-col justify-between relative px-6 sm:px-10 md:px-14 lg:px-16 py-6 md:py-8 overflow-hidden select-none"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
      {/* Top Navigation Bar */}
      <header
        id="navbar-header"
        className="w-full relative flex items-center justify-between z-20 shrink-0"
      >
        {/* Brand Logo */}
        <div id="brand-logo" className="flex items-center z-10">
          <a
            href="#home"
            id="brand-name-link"
            className="text-white font-extrabold text-xl sm:text-2xl tracking-[0.08em] hover:opacity-90 transition-opacity uppercase"
          >
            SUNROCK
          </a>
        </div>

        {/* Center Pill Navigation (Single line, strictly centered) */}
        <nav
          id="desktop-nav-bar"
          className="hidden md:flex items-center flex-nowrap whitespace-nowrap absolute left-1/2 -translate-x-1/2 bg-white/[0.07] backdrop-blur-xl border border-white/20 rounded-full p-1 shadow-lg z-10"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                id={`nav-item-${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/90 hover:text-white hover:bg-white/10 font-normal'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Open Menu button */}
        <div id="header-right-actions" className="flex items-center z-10">
          <button
            id="open-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-white/[0.07] hover:bg-white/[0.12] text-white backdrop-blur-xl border border-white/20 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-sm font-normal whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="md:hidden">
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden fixed top-20 left-4 right-4 bg-[#121212]/95 border border-white/20 rounded-2xl p-4 z-30 shadow-2xl backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                id={`mobile-nav-${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setActiveNav(item);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-base transition-colors ${
                  activeNav === item
                    ? 'bg-white text-black font-semibold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Center Hero Section - Centered absolutely */}
      <main
        id="hero-main-content"
        className="text-center max-w-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 w-full px-4"
      >
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="hero-headline"
          className="text-3xl sm:text-4xl md:text-[54px] font-medium leading-[1.12] tracking-tight text-white max-w-3xl"
        >
          Experience<br />Paris<br />Differently
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="hero-subtext"
          className="mt-3.5 text-sm sm:text-base text-white/85 font-normal max-w-2xl leading-relaxed"
        >
          Discover the culture, cuisine, and hidden gems of Paris through thoughtfully designed journeys made around you.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          id="cta-container"
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            id="cta-plan-trip-btn"
            className="group bg-white hover:bg-white/95 text-black pl-5 pr-1.5 py-1.5 rounded-full font-medium text-sm flex items-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
          >
            <span className="font-semibold text-black tracking-normal text-sm sm:text-[15px]">
              Plan Your Paris Trip
            </span>
            <div
              id="cta-arrow-circle"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45"
            >
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        </motion.div>
      </main>

      {/* Bottom Floating Information Cards */}
      <footer
        id="bottom-cards-section"
        className="w-full flex flex-col md:flex-row items-stretch md:items-end justify-between gap-4 pt-2 pb-1 z-10 shrink-0"
      >
        {/* Bottom Left Card: Explore the Best of Paris */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          id="card-explore-paris"
          className="w-full md:w-[310px] lg:w-[320px] bg-white/[0.07] hover:bg-white/[0.1] backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300"
        >
          {/* Compass Icon Badge */}
          <div
            id="badge-explore-icon"
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm"
          >
            <Compass size={17} className="text-[#0066FF]" />
          </div>

          <h2
            id="heading-explore-paris"
            className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight"
          >
            Explore the Best of Paris
          </h2>

          <p
            id="text-explore-description"
            className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal"
          >
            See world-famous landmarks, historic streets, and unforgettable city views.
          </p>
        </motion.div>

        {/* Bottom Right Card: Find the Hidden Gems */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          id="card-hidden-gems"
          className="w-full md:w-[310px] lg:w-[320px] bg-white/[0.07] hover:bg-white/[0.1] backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 flex flex-col justify-end"
        >
          {/* Sparkles Icon Badge */}
          <div
            id="badge-gems-icon"
            className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm"
          >
            <Sparkles size={17} className="text-[#0066FF] fill-[#0066FF]" />
          </div>

          <h2
            id="heading-hidden-gems"
            className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight"
          >
            Find the Hidden Gems
          </h2>

          <p
            id="text-gems-description"
            className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal"
          >
            Discover local cafés, charming neighborhoods, markets, and places beyond the usual tourist path.
          </p>
        </motion.div>
      </footer>
    </div>

    {/* Section 2: Proudly Trusted By Leading Brands Across Industries */}
    <section
      id="trusted-brands-section"
      className="w-full bg-transparent text-white flex flex-col justify-between items-center relative px-6 sm:px-10 md:px-14 lg:px-16 pt-20 md:pt-32 pb-16 md:pb-20 overflow-hidden border-t border-white/5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ambient Bokeh Glow behind Headline */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[280px] sm:h-[360px] bg-gradient-to-r from-amber-600/20 via-rose-600/15 to-orange-500/15 blur-[120px] pointer-events-none rounded-full z-0"
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        {/* Headline */}
        <h2
          id="trusted-brands-headline"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] tracking-tight text-white max-w-4xl select-none"
        >
          <span
            className="italic block font-normal text-white"
            style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif" }}
          >
            Proudly Trusted
          </span>
          <span
            className="italic block font-normal text-white mt-1"
            style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif" }}
          >
            by Leading Brands
          </span>
          <span
            className="italic inline-flex items-baseline justify-center font-normal text-white mt-1"
            style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif" }}
          >
            Across Industries
            <span
              className="text-[#E11D48] not-italic text-2xl sm:text-3xl md:text-4xl font-semibold ml-1.5 leading-none inline-block transform -translate-y-2 sm:-translate-y-3"
              title="Registered Trademark"
            >
              ®
            </span>
          </span>
        </h2>

        {/* Subtext */}
        <div
          id="trusted-brands-subtext"
          className="mt-8 text-center text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-xl mx-auto"
        >
          <p
            className="italic text-sm sm:text-[15px] text-white/90"
            style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif" }}
          >
            We've partnered with leading
          </p>
          <p className="text-sm sm:text-[15px] text-white/80 mt-0.5">
            brands to deliver innovative and impactful architectural solutions
          </p>
        </div>
      </motion.div>

      {/* Brand Logos Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        id="trusted-brand-logos-row"
        className="w-full max-w-6xl mx-auto mt-20 md:mt-28 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12 z-10 px-4"
      >
        {/* Logo 1: City Architecture */}
        <div
          id="partner-logo-1"
          className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer group"
          title="Apex Construction"
        >
          <svg className="w-8 h-8 text-white" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="16" width="7" height="20" rx="1" fill="currentColor" />
            <rect x="15" y="8" width="8" height="28" rx="1" fill="currentColor" />
            <rect x="27" y="12" width="7" height="24" rx="1" fill="currentColor" />
            <line x1="2" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-[0.2em] text-white uppercase leading-none">CITY</span>
            <span className="text-[9px] font-medium tracking-[0.15em] text-white/70 uppercase mt-0.5 leading-none">CONSTRUCT</span>
          </div>
        </div>

        {/* Logo 2: CONDOON CONSTRUCTION */}
        <div
          id="partner-logo-2"
          className="flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer group"
          title="Condoon Construction"
        >
          <svg className="w-7 h-7 text-white mb-1.5" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4L30 11V25L18 32L6 25V11L18 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M12 15L18 11.5L24 15V21L18 24.5L12 21V15Z" fill="currentColor" />
          </svg>
          <span className="text-[12px] font-extrabold tracking-[0.22em] text-white uppercase leading-none">CONDOON</span>
          <span className="text-[8px] font-semibold tracking-[0.25em] text-white/70 uppercase mt-1 leading-none">CONSTRUCTION</span>
        </div>

        {/* Logo 3: Morrison Construction */}
        <div
          id="partner-logo-3"
          className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer group"
          title="Morrison Construction"
        >
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1">
              <span className="text-[15px] font-bold tracking-tight text-white leading-tight">Morrison</span>
              <svg className="w-3.5 h-3.5 text-[#E11D48]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2C6 6 4 10 6 15C11 17 16 14 18 10C18 6 14 3 10 2Z" />
              </svg>
            </div>
            <span className="text-[12px] font-medium tracking-tight text-white/80 leading-tight">Construction</span>
          </div>
        </div>

        {/* Logo 4: Crest & Tower Architectural */}
        <div
          id="partner-logo-4"
          className="flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity cursor-pointer group"
          title="Summit Real Estate"
        >
          <svg className="w-8 h-8 text-white mb-1" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L8 14H32L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <rect x="13" y="14" width="14" height="18" stroke="currentColor" strokeWidth="2" />
            <line x1="17" y1="18" x2="17" y2="28" stroke="currentColor" strokeWidth="1.5" />
            <line x1="23" y1="18" x2="23" y2="28" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 34C14 30 26 30 36 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70 uppercase">ARCHITECTS</span>
        </div>

        {/* Logo 5: Skyline Modern Facade */}
        <div
          id="partner-logo-5"
          className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer group"
          title="Skyline Developments"
        >
          <svg className="w-9 h-8 text-white" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 32V14L16 6V32" stroke="currentColor" strokeWidth="2" />
            <path d="M16 6L28 10V32" stroke="currentColor" strokeWidth="2" />
            <path d="M28 10L40 18V32" stroke="currentColor" strokeWidth="2" />
            <line x1="2" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold tracking-[0.18em] text-white uppercase leading-none">STRUCTURA</span>
            <span className="text-[8px] font-medium tracking-[0.15em] text-white/60 uppercase mt-0.5 leading-none">DEVELOPMENT</span>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Section 3: Kinetic Studio Showcase */}
    <section
      id="kinetic-studio-section"
      className="w-full bg-transparent text-white flex flex-col items-center relative px-6 sm:px-10 md:px-14 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden border-t border-white/5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top Header & Headline Area */}
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        {/* Eyebrow Label */}
        <span
          id="kinetic-studio-eyebrow"
          className="text-xs sm:text-sm font-medium tracking-wide text-[#FF5A36] uppercase mb-4"
        >
          About studio
        </span>

        {/* Main Section Headline */}
        <div className="relative flex items-start justify-center max-w-4xl mx-auto">
          {/* Orange Star Motif */}
          <div className="mr-3 mt-2 shrink-0 hidden sm:block">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF4D00]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>

          <h2
            id="kinetic-studio-headline"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal leading-[1.15] tracking-tight text-white select-none"
            style={{ fontFamily: "'Instrument Serif', 'Playfair Display', serif" }}
          >
            <span className="italic">
              Kinetic Studio – is an SMM agency of bold creators that delivers the power of social media with cutting-edge strategy
            </span>
          </h2>
        </div>

        {/* Subtext */}
        <p
          id="kinetic-studio-subtext"
          className="mt-6 sm:mt-8 text-sm sm:text-base text-white/70 font-normal max-w-xl text-center leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Transforming brand presence through agile storytelling, precision content strategy, and high-impact social execution.
        </p>
      </motion.div>

      {/* Four Cards Grid Layout */}
      <div
        id="kinetic-cards-grid"
        className="w-full max-w-7xl mx-auto mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 z-10"
      >
        {/* Card 1: Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          id="kinetic-card-strategy"
          className="min-h-[360px] sm:min-h-[400px] bg-gradient-to-b from-[#003B95]/30 via-[#001D47]/50 to-black/90 hover:from-[#003B95]/40 hover:via-[#001D47]/60 hover:to-black backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
          {/* Visual Background */}
          <div className="absolute inset-x-0 top-0 h-[65%] z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
            <img src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800" alt="Strategy Visual" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
          </div>
          
          <div className="flex items-center justify-between relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/15 backdrop-blur-md">
              Strategy
            </span>
          </div>
          <div className="mt-auto pt-8 relative z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] mb-3 shadow-[0_0_8px_#FF4D00]" />
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug tracking-tight">
              Bold strategies that shape identities
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-normal">
              We craft narratives that define modern presence and market positioning.
            </p>
            <div className="flex items-center gap-2 text-white font-medium text-sm pt-3 border-t border-white/10 group-hover:text-[#FF4D00] transition-colors">
              <span>Visit site</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Growth */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id="kinetic-card-growth"
          className="min-h-[360px] sm:min-h-[400px] lg:mt-6 bg-gradient-to-b from-[#003B95]/30 via-[#001D47]/50 to-black/90 hover:from-[#003B95]/40 hover:via-[#001D47]/60 hover:to-black backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
          {/* Visual Background */}
          <div className="absolute inset-x-0 top-0 h-[65%] z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Growth Visual" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
          </div>
          
          <div className="flex items-center justify-between relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/15 backdrop-blur-md">
              Growth
            </span>
          </div>
          <div className="mt-auto pt-8 relative z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] mb-3 shadow-[0_0_8px_#FF4D00]" />
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug tracking-tight">
              Driving measurable growth through impact
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Focused on reach, engagement, and real sales — not empty noise.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Creative */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="kinetic-card-creative"
          className="min-h-[360px] sm:min-h-[400px] bg-gradient-to-b from-[#003B95]/30 via-[#001D47]/50 to-black/90 hover:from-[#003B95]/40 hover:via-[#001D47]/60 hover:to-black backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
        >
          {/* Visual Background */}
          <div className="absolute inset-x-0 top-0 h-[65%] z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
            <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800" alt="Creative Visual" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
          </div>
          
          <div className="flex items-center justify-between relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/15 backdrop-blur-md">
              Creative
            </span>
          </div>
          <div className="mt-auto pt-8 relative z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] mb-3 shadow-[0_0_8px_#FF4D00]" />
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug tracking-tight">
              Creative processes with rapid delivery
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Ideas turn into results fast, without losing quality or relevance.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Powerful */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          id="kinetic-card-powerful"
          className="min-h-[360px] sm:min-h-[400px] lg:mt-6 bg-gradient-to-b from-[#003B95]/30 via-[#001D47]/50 to-black/90 hover:from-[#003B95]/40 hover:via-[#001D47]/60 hover:to-black backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 relative group cursor-pointer overflow-hidden"
        >
          {/* Visual Background */}
          <div className="absolute inset-x-0 top-0 h-[65%] z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Powerful Visual" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
          </div>

          <div className="flex items-center justify-between relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/15 backdrop-blur-md">
              Powerful
            </span>
          </div>
          <div className="mt-auto pt-8 relative z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D00] mb-3 shadow-[0_0_8px_#FF4D00]" />
            <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 leading-snug tracking-tight">
              A dedicated team behind success
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Our experts guide every step, from launch to scale.
            </p>
          </div>
          {/* Floating Action Badge */}
          <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-white/[0.12] backdrop-blur-xl border border-white/25 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform z-10">
            <Sparkles size={20} className="text-white" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 4: Client Case Study & Testimonial */}
    <section
      id="testimonial-case-study-section"
      className="w-full bg-transparent text-white flex flex-col items-center relative px-6 sm:px-10 md:px-14 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden border-t border-white/5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Ambient Blue Background Glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[380px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full z-0"
        aria-hidden="true"
      />

      <div
        id="case-study-container"
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 z-10"
      >
        {/* Left Card: Portrait Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          id="testimonial-portrait-card"
          className="w-full lg:w-[380px] h-[380px] sm:h-[460px] lg:h-auto rounded-[28px] sm:rounded-3xl overflow-hidden border border-white/20 bg-white/[0.05] shadow-2xl relative shrink-0 group"
        >
          <img
            src="https://res.cloudinary.com/aufuaj90/image/upload/v1787313620/ChatGPT_Image_Aug_21_2026_05_30_03_PM.png"
            alt="Bernice Tay - Bright Culture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Card: Testimonial & Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="testimonial-metrics-card"
          className="flex-1 rounded-[28px] sm:rounded-3xl p-7 sm:p-10 md:p-12 flex flex-col justify-between bg-gradient-to-br from-[#003B95]/60 via-[#001D47]/45 to-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Inner ambient blue sheen */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/20 blur-[90px] rounded-full pointer-events-none" />

          {/* Top: Bold Uppercase Quote */}
          <div className="z-10">
            <p
              id="testimonial-quote-text"
              className="text-lg sm:text-2xl md:text-[27px] font-semibold text-white leading-snug tracking-tight max-w-3xl uppercase"
            >
              «I WASTED MY TIME WITH OTHER AGENCIES, BUT WITH OMNI, WE INCREASED OUR REVENUE AND GOT MORE STUDENTS WITH LOW CPL AND HIGH ROAS»
            </p>
          </div>

          {/* Middle: 3 Key Metrics Row */}
          <div
            id="testimonial-stats-row"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 my-10 sm:my-12 pt-8 sm:pt-10 border-t border-white/15 z-10"
          >
            <div id="stat-cpl" className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-none">
                $15-25
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-normal tracking-wide uppercase mt-2.5">
                CPL
              </span>
            </div>
            <div id="stat-attendees" className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-none">
                263
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-normal tracking-wide uppercase mt-2.5">
                Webinar attendees
              </span>
            </div>
            <div id="stat-roas" className="flex flex-col">
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-none">
                11.11X
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-normal tracking-wide uppercase mt-2.5">
                ROAS for Crash Course
              </span>
            </div>
          </div>

          {/* Bottom: Author & Company */}
          <div id="testimonial-author-block" className="z-10 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-base font-light">—</span>
              <span className="text-sm sm:text-base font-semibold tracking-wider text-white uppercase">
                BERNICE TAY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 font-normal tracking-wide mt-1 pl-4">
              Bright Culture
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Section 5: Feature Cards Grid with Center Visual Space */}
    <section
      id="features-split-section"
      className="w-full bg-transparent text-white flex flex-col items-center justify-center relative px-6 sm:px-10 md:px-14 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden border-t border-white/5"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        id="features-split-container"
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 z-10"
      >
        {/* Left Column: 2 Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          id="features-left-column"
          className="w-full lg:w-[320px] flex flex-col gap-6 sm:gap-8 shrink-0"
        >
          {/* Card 1: Intelligent Optimization */}
          <div
            id="split-card-1"
            className="w-full bg-black/40 hover:bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div
              id="split-card-1-icon-badge"
              className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm"
            >
              <Cpu size={17} className="text-[#0066FF]" />
            </div>
            <h3
              id="split-card-1-heading"
              className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight"
            >
              Intelligent Optimization
            </h3>
            <p
              id="split-card-1-description"
              className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal"
            >
              Automated workflows and adaptive systems fine-tuned to maximize operational efficiency and output.
            </p>
          </div>

          {/* Card 2: Global Infrastructure */}
          <div
            id="split-card-2"
            className="w-full bg-black/40 hover:bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div
              id="split-card-2-icon-badge"
              className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm"
            >
              <Globe size={17} className="text-[#0066FF]" />
            </div>
            <h3
              id="split-card-2-heading"
              className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight"
            >
              Global Infrastructure
            </h3>
            <p
              id="split-card-2-description"
              className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal"
            >
              Resilient networks and multi-region deployment built for seamless scale and zero interruptions.
            </p>
          </div>
        </motion.div>

        {/* Center Column: Empty Visual Space */}
        <div
          id="center-visual-space"
          className="flex-1 w-full min-h-[260px] sm:min-h-[340px] lg:min-h-[460px] flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          {/* Reserved empty space for user's future visual graphic */}
        </div>

        {/* Right Column: 2 Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="features-right-column"
          className="w-full lg:w-[320px] flex flex-col gap-6 sm:gap-8 shrink-0"
        >
          {/* Card 3: Enterprise Security */}
          <div
            id="split-card-3"
            className="w-full bg-black/40 hover:bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div
              id="split-card-3-icon-badge"
              className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm"
            >
              <ShieldCheck size={17} className="text-[#0066FF]" />
            </div>
            <h3
              id="split-card-3-heading"
              className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight"
            >
              Enterprise Security
            </h3>
            <p
              id="split-card-3-description"
              className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal"
            >
              End-to-end encryption protocols and rigorous privacy standards safeguarding critical assets 24/7.
            </p>
          </div>

          {/* Card 4: Scalable Performance */}
          <div
            id="split-card-4"
            className="w-full bg-black/40 hover:bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div
              id="split-card-4-icon-badge"
              className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm"
            >
              <LineChart size={17} className="text-[#0066FF]" />
            </div>
            <h3
              id="split-card-4-heading"
              className="text-base sm:text-lg font-medium text-white mb-1.5 tracking-tight"
            >
              Scalable Performance
            </h3>
            <p
              id="split-card-4-description"
              className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal"
            >
              Predictive analytics and real-time tracking that translate complex metrics into strategic clarity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}
