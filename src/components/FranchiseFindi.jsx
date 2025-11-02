import { motion } from 'framer-motion';

const plans = [
  { name: 'Digital Start', capex: '₹3–4L', roi: '18–22% p.a.', features: ['Smart telemetry', 'SMS alerts', 'Basic uptime bonus'] },
  { name: 'Digital Plus', capex: '₹5–6L', roi: '22–26% p.a.', features: ['Advanced analytics', 'Priority support', 'Cash cycle optimization'] },
  { name: 'Omni Pro', capex: '₹7L+', roi: '26–30% p.a.', features: ['Omni-channel services', 'Extended SLA', 'Dedicated RM'] },
];

export default function FranchiseFindi() {
  return (
    <Section title="Findi ATM Franchise" subtitle="Tech-forward operations with modern CX and efficient cash usage.">
      <PlanGrid plans={plans} partner="Findi" />
      <Inclusions />
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

function Inclusions() {
  const items = [
    'End-to-end installation coordination',
    'Quarterly performance reviews',
    'Brand compliance and security audits',
    'Marketing assets for local outreach',
  ];
  return (
    <div className="mt-12 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6">
      <div className="font-medium text-lg">What’s included</div>
      <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}
