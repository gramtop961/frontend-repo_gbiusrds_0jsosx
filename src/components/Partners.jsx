import { motion } from 'framer-motion';
import { Shield, LineChart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerData = [
  {
    name: 'EPS',
    description: 'A leading White Label ATM operator with pan-India presence and strong uptime metrics.',
    to: '/franchise/eps',
  },
  {
    name: 'India1',
    description: 'High-availability ATMs focused on semi-urban and rural growth corridors.',
    to: '/franchise/india1',
  },
  {
    name: 'Findi',
    description: 'Tech-first ATM network emphasizing digital CX and operational efficiency.',
    to: '/franchise/findi',
  },
  {
    name: 'Hitachi',
    description: 'Hitachi Money Spot with robust hardware and reliable cash management.',
    to: '/franchise/hitachi',
  },
];

export default function Partners() {
  return (
    <section className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.3),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Why partner through us?</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              We streamline onboarding, site selection, cash logistics, and SLA tracking. Backed by top OEMs and respected WLAs.
            </p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-white/80">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-400" size={18}/> Verified partners</li>
              <li className="flex items-center gap-2"><Shield className="text-cyan-400" size={18}/> Transparent terms</li>
              <li className="flex items-center gap-2"><LineChart className="text-cyan-400" size={18}/> ROI-focused plans</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {partnerData.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5 hover:bg-white/[0.05]"
              >
                <div className="text-sm uppercase tracking-wider text-white/60">Partner</div>
                <div className="mt-1 font-semibold text-lg">{p.name}</div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <Link
                  to={p.to}
                  className="mt-4 inline-flex text-cyan-300 hover:text-cyan-200 text-sm"
                >
                  View details →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
