import Hero from './Hero.jsx';
import Partners from './Partners.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-semibold">Clear, high-yield franchise plans</h3>
              <p className="mt-3 text-white/70">
                Choose from multiple partnership models tailored for different locations, footfall, and cash volumes.
                Get transparent payout structures, uptime-linked incentives, and proactive risk controls.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTA to="/franchise/eps" label="EPS Plans" />
                <CTA to="/franchise/india1" label="India1 Plans" variant="secondary" />
                <CTA to="/franchise/findi" label="Findi Plans" variant="secondary" />
                <CTA to="/franchise/hitachi" label="Hitachi Plans" variant="secondary" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <Feature title="99%+ Uptime" desc="Monitored 24/7 with automated alerts" />
                  <Feature title="T+1 Payouts" desc="Fast, predictable settlements" />
                  <Feature title="SLA-bound" desc="Signed with cash logistics" />
                  <Feature title="Pan-India" desc="Tier 1–6 coverage" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">Ready to start?</h3>
            <p className="mt-3 text-white/70">Book a free consultation and ROI projection for your location.</p>
            <Link
              to="/blog"
              className="inline-flex mt-6 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95"
            >
              Learn from our Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-4">
      <div className="font-medium">{title}</div>
      <div className="text-white/70 text-sm mt-1">{desc}</div>
    </div>
  );
}

function CTA({ to, label, variant = 'primary' }) {
  const classes =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
      : 'bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15';
  return (
    <Link className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm ${classes}`} to={to}>
      {label}
    </Link>
  );
}
