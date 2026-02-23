import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

const featuredContent = [
  "Former Abia governorship candidate and founder of the OAU foundation, Hon Onyekwere Akym Uche (OAU), has reaffirmed that his political ambition is firmly rooted in a desire to serve the people rather than pursue personal gain, stressing that leadership must be guided by humility, accountability, and a strong sense of responsibility to the public.",
  "Speaking, Akym noted that politics should not be seen as a platform for self enrichment or personal advancement but as a sacred trust placed in the hands of leaders by the people. He emphasised that true leadership requires sincerity of purpose and a willingness to place the collective good above individual interests.",
  '"My ambition has always been about service, not self," OAU said. "Leadership is not a privilege to be exploited but a responsibility that demands sacrifice, integrity, and genuine concern for the wellbeing of the people."',
  "He further explained that humility remains a core value in his approach to leadership, noting that leaders must be accessible and willing to listen to the concerns of ordinary citizens.",
  '"A leader must lead with humility and a deep sense of responsibility," he stated. "When leaders remember that they are servants of the people, governance becomes more compassionate, inclusive, and effective."',
  "Onyekwere Akym Uche also criticised leadership styles driven by personal ambition and material interests, warning that such approaches often lead to poor governance and public distrust. He urged aspiring leaders to examine their motives and commit themselves to ethical conduct and transparent service.",
];

const otherNews = [
  {
    title: "Breaking the Chains of Bad Governance: A Call for Ethical Political Reform — Onyekwere Akym Uche (OAU)",
    excerpt: "Nigeria stands at a defining moment in its national journey. Rich in culture, blessed with abundant natural resources, and ...",
  },
  {
    title: "YOUR PVC IS YOUR BRAGGING RIGHT, GET YOURS TODAY",
    excerpt: "Continuous Voter Registration (CVR) Is Ongoing Nationwide. The ongoing Continuous Voter Registration exercise provide...",
  },
  {
    title: "Will Nigeria Choose Transparency or Repeat 2023's Electoral Criminality? — By Onyekwere Akym Uche (OAU)",
    excerpt: "As Nigeria gradually approaches the 2027 general elections, the nation stands at a defining crossroads. The memories of the...",
  },
  {
    title: "Onyekwere Akym Uche Slams Airlines Over Rising Flight Costs, Says Nigerians Facing Undue Hardship",
    excerpt: "Former Abia State governorship candidate and founder of the OAU foundation, Hon Onyekwere Akym Uche (OAU), has strongly con...",
  },
  {
    title: "Put Nigerians First, OAU Advises Leaders, Emphasising Compassion and Inclusion",
    excerpt: "In a strong call for ethical and people-centered governance, Former Abia State governorship candidate and founder of the OA...",
  },
  {
    title: "SENATORIAL AMBITION OF AKYM ONYEKWERE GAINS MORE MOMENTUM AS SOME GROUP VISITED HIS RESIDENCE FOR ENDORSEMENT.",
    excerpt: "The senatorial ambition of Onyekwere Akym Uche has continued to gather remarkable momentum as various groups across Abia No...",
  },
];

const News = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-8 gradient-navy text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gold-light mb-4">News</h1>
          <p className="text-gold-light/70 font-body text-lg">Stay updated with the latest from OAU.</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          {/* Featured */}
          <div className="bg-card rounded-lg shadow-lg border-t-4 border-gold p-8 mb-12">
            <div className="flex items-center gap-2 text-warm-gray font-body text-sm mb-3">
              <Calendar size={14} />
              <span>Featured Article</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy mb-4">
              My Ambition Has Always Been About Service, Not Self — Onyekwere Akym Uche Declares
            </h2>
            <div className="text-warm-gray font-body leading-relaxed space-y-4">
              {(expanded ? featuredContent : featuredContent.slice(0, 2)).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 text-gold font-body font-semibold hover:underline flex items-center gap-1"
            >
              {expanded ? "Show Less" : "Read More"} <ArrowRight size={14} />
            </button>
          </div>

          {/* Other News */}
          <h3 className="text-2xl font-display font-bold text-navy mb-6">Other News</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((article, i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-md border-l-4 border-gold hover:shadow-xl transition-shadow">
                <h4 className="font-display font-semibold text-navy text-lg mb-2 line-clamp-2">{article.title}</h4>
                <p className="text-warm-gray font-body text-sm leading-relaxed mb-3">{article.excerpt}</p>
                <button className="text-gold font-body font-semibold text-sm hover:underline flex items-center gap-1">
                  Read more <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
