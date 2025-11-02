import { Link } from 'react-router-dom';
import { posts } from './blogData';

export default function Blog() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold">ATM Franchise Blog</h1>
        <p className="mt-2 text-white/70 max-w-2xl">
          Actionable guides, comparisons, and ROI insights for entrepreneurs.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05]">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-white/70 text-sm mt-2">{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="inline-block mt-4 text-cyan-300 hover:text-cyan-200 text-sm">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
