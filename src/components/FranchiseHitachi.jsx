import { motion } from 'framer-motion';

const plans = [
  { name: 'Money Spot Lite', capex: '₹3.5–4.5L', roi: '18–22% p.a.', features: ['Hitachi hardware', 'Standard SLA', 'Base uptime incentives'] },
  { name: 'Money Spot Plus', capex: '₹5–6.5L', roi: '22–26% p.a.', features: ['Enhanced cash mgmt', 'Priority service', 'Brand assets'] },
  { name: 'Enterprise', capex: '₹8L+', roi: '26–30% p.a.', features: ['Multi-site deployment', 'Custom SLAs', 'Dedicated ops team'] },
];

export default function FranchiseHitachi() {
  return (
    <Section title="Hitachi Money Spot" subtitle="Reliable hardware, strong SLAs, and proven cash logistics network.">
      <PlanGrid plans={plans} partner="Hitachi" />
      <Requirements />
    </Section>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="mt-2 text-white/70 max-w-3xl">{subtitle}</p>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function PlanGrid({ plans, partner }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6"
        >
          <div className="text-sm text-white/60">{partner} Plan</div>
          <div className="mt-1 text-xl font-semibold">{p.name}</div>
          <div className="mt-4 text-sm text-white/60">Estimated CAPEX</div>
          <div className="text-2xl font-bold">{p.capex}</div>
          <div className="mt-3 text-sm text-white/60">Projected ROI</div>
          <div className="text-lg font-semibold text-cyan-300">{p.roi}</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {p.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-medium">Request Proposal</button>
        </motion.div>
      ))}
    </div>
  );
}

function Requirements() {
  const items = [
    'Strong visibility and signage permissions',
    'Dedicated 1 kW power with backup',
    'CCTV placement as per guidelines',
    '24/7 access with security measures',
  ];
  return (
    <div className="mt-12 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
      <div className="font-medium text-lg">Site requirements</div>
      <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}
