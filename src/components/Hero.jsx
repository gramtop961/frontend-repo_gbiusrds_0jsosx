import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
        >
          Launch a trusted ATM franchise with leading partners
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-white/70 max-w-2xl"
        >
          We simplify setup, compliance, and operations so you can focus on ROI. Work with EPS, India1, Findi, and Hitachi under one professional platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <Link
            to="/franchise/eps"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95"
          >
            Explore EPS Franchise
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 px-5 py-3 font-medium text-white hover:bg-white/15"
          >
            Read Guides & ROI Tips
          </Link>
        </motion.div>

        <div className="mt-10 flex items-center gap-6 text-white/60">
          <span className="text-xs uppercase tracking-widest">Trusted by</span>
          <LogoTag name="EPS" />
          <LogoTag name="India1" />
          <LogoTag name="Findi" />
          <LogoTag name="Hitachi" />
        </div>
      </div>
    </section>
  );
}

function LogoTag({ name }) {
  return (
    <div className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/80">
      {name}
    </div>
  );
}
