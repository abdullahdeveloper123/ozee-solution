import React, { useState } from 'react';
import { Search, ChevronRight, Share2, Clipboard, ArrowRight, ShieldAlert } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface BlogPost {
  title: string;
  category: string;
  date: string;
  author: string;
  img: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      title: 'Adapting Estimating Protocols to USA Volatile Structural Steels in 2026',
      category: 'Cost Analysis',
      date: 'June 20, 2026',
      author: 'A. Harrison, Snr Estimator',
      img: '/assets/blog4.jpeg',
      readTime: '6 min read',
      excerpt: 'How current tariffs and localized regional logistics constraints impact Class 1 preconstruction budgets.',
      content: 'Under current 2026 economic conditions, global tariffs and localized raw material shipping disruptions continue to put stress on domestic steel and concrete pricing indexes. For preconstruction developers, static estimates drawn during preliminary sketch-phases can trigger major cost discrepancies down the road.\n\nTo safeguard project margins, our estimating desk implements dynamic multi-zip indexing averages. This process relies on actual historical supply chain logs to anticipate material price indexes on a quarterly timeline. By utilizing this forward-pricing approach, contractors can lock in reliable supplier bids well in advance of site excavation.'
    },
    {
      title: 'BIM 5D: Visualizing Real-time Concrete Cost Variations Across Revit Platforms',
      category: 'BIM Engineering',
      date: 'June 12, 2026',
      author: 'E. Sterling, BIM Coordinator',
      img: '/assets/blog5.jpg',
      readTime: '8 min read',
      excerpt: 'A comprehensive integration review detailing design coordination adjustments inside mechanical layouts.',
      content: 'Integrating cost tags directly into native 3D physical coordinate meshes is reshaping preconstruction planning. Using Autodesk Revit in tandem with in-house databases, we can dynamically link individual structural components—such as concrete columns or mechanical conduit pipes—to instant unit cost multipliers.\n\nWhen architects decide to scale height elements or modify structural thickness parameters, those geometric changes update material volumes automatically in the background. The 5D cost dashboard immediately computes the price difference, permitting developers to visualize design-to-cost deviations live during key layout sessions.'
    },
    {
      title: 'CSI Division Masterclass: Restructuring Quantity takeoffs for Fast Bid Submittals',
      category: 'Tips & Tricks',
      date: 'May 28, 2026',
      author: 'J. Miller, Civil structural Eng.',
      img: '/assets/blog6.jpg',
      readTime: '5 min read',
      excerpt: 'Advanced blueprint auditing tactics to optimize sheet volumes prior to certification reviews.',
      content: 'Filing certified bids with municipal authorities requires extreme structured precision. If materials do not map directly to standardized divisions, review boards can flag potential bid folders for compliance audit delays.\n\nOrganizing takeoff worksheets strictly within the 50 standardized divisions of the CSI MasterFormat ensures immediate clarity. This framework makes it easy for local subcontractors to locate and estimate specific scopes—from drywall packages to heavy civil sewage hookups.'
    }
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] text-slate-800 py-12 md:py-20" id="blog-page">
      <div className="w-full px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Banner Block */}
        <ScrollReveal variant="fadeUp" duration={0.8} className="text-center max-w-2xl  sm:max-w-4xl mx-auto space-y-4">
          <span className="text-yellow-600 font-mono text-xs uppercase tracking-widest font-bold">INSIGHT PORTAL</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            OZ Solution Preconstruction Blueprints
          </h1>
          <p className="text-sm text-slate-500 font-sans leading-relaxed">
            Stay updated with real-time industry updates, CSI standard unit-pricing tutorials, and architectural modeling guides.
          </p>
        </ScrollReveal>

        {/* Search Bar matching Pic layout */}
        <ScrollReveal variant="fadeUp" duration={0.8} delay={0.1} className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search cost guides, BIM tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-yellow-500 shadow-sm font-sans"
          />
          <Search className="absolute right-4 top-3.5 w-5 h-5 text-slate-400" />
        </ScrollReveal>

        {/* Blog layout split */}
        {selectedPost ? (
          /* Reader View */
          <ScrollReveal variant="fadeUp" duration={0.6} className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-lg space-y-6 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-xs font-mono font-bold text-yellow-600 hover:text-yellow-700 flex items-center gap-1 cursor-pointer mb-4"
            >
              ← Back to all preconstruction cost insights
            </button>
            
            <img 
              src={selectedPost.img} 
              alt={selectedPost.title} 
              className="w-full h-80 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{selectedPost.category}</span>
              <span>{selectedPost.date}</span>
              <span>• {selectedPost.readTime}</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
              {selectedPost.title}
            </h2>

            <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              BY: {selectedPost.author}
            </p>

            <div className="border-t border-slate-150 border-slate-100 pt-6 text-sm text-slate-650 leading-relaxed font-sans space-y-4 whitespace-pre-line">
              {selectedPost.content}
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-slate-400 text-xs font-sans">© 2026 OZ Solution. All rights reserved.</span>
              <button 
                onClick={() => alert('Link copied to clipboard!')}
                className="text-xs font-mono text-slate-500 hover:text-yellow-600 flex items-center gap-1 cursor-pointer"
              >
                <Share2 className="w-4 h-4" /> Share Cost Guide
              </button>
            </div>
          </ScrollReveal>
        ) : (
          /* Card lists grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <ScrollReveal 
                key={idx}
                variant="fadeUp"
                duration={0.6}
                delay={idx * 0.05}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="h-48 w-full bg-slate-100 overflow-hidden">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-yellow-600">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-base leading-snug hover:text-yellow-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto border-t border-slate-50/50 flex items-center justify-between">
                  <span className="text-[10px] font-sans text-slate-400">{post.date}</span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-mono font-extrabold text-yellow-600 hover:text-yellow-700 flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </ScrollReveal>
            ))}

            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-12 space-y-2">
                <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="font-display font-bold text-slate-805 text-slate-900">No matching preconstruction cost guides found</h3>
                <p className="text-xs text-slate-500">Refine search query to match steel tariffs or CSI categories.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
