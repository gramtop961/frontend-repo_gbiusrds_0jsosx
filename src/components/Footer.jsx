export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 ring-1 ring-white/20 mb-3" />
          <p className="text-sm text-white/60 max-w-sm">
            We help entrepreneurs launch profitable ATM franchises powered by trusted partners like EPS, India1, Findi, and Hitachi.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white/80 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>EPS ATM Franchise</li>
            <li>India1 ATM Franchise</li>
            <li>Findi ATM Franchise</li>
            <li>Hitachi Money Spot</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white/80 mb-3">Contact</h4>
          <p className="text-sm text-white/60">contact@atmfranchisepro.com</p>
          <p className="text-sm text-white/60">Mon–Sat, 9:30 AM – 6:00 PM</p>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ATM Franchise Pro. All rights reserved.
      </div>
    </footer>
  );
}
