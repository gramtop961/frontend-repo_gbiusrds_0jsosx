import { useParams, Link } from 'react-router-dom';
import { posts } from './blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-white/70">Post not found.</p>
          <Link to="/blog" className="text-cyan-300">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'ATM Franchise Pro' },
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Link to="/blog" className="text-cyan-300">← Back to Blog</Link>
        <h1 className="mt-4 text-3xl font-semibold">{post.title}</h1>
        <div className="prose prose-invert prose-headings:scroll-mt-20 max-w-none mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </section>
  );
}
