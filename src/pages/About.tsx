import { Layout } from "@/components/layout/Layout";
import { Award, Users, Heart, Target, Mountain } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const values = [
  { icon: Award, title: "Quality Craftsmanship", description: "Every surface, every detail, every finish meets our exacting standards." },
  { icon: Users, title: "Honest Communication", description: "Clear updates, transparent pricing, and no surprises along the way." },
  { icon: Heart, title: "Colorado Community Pride", description: "We live here, we paint here, and we care about our neighbors." },
  { icon: Target, title: "Customer Satisfaction", description: "Your vision is our mission. We're not done until you're thrilled." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute inset-0 topo-lines opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">About Us</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Painting Colorado Homes <span className="text-primary">Since 2017</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A local team dedicated to quality, community, and flawless finishes.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={teamImage} alt="Emerald Paints team" className="w-full" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-warm">
                <Mountain className="h-8 w-8 mb-2" />
                <p className="text-2xl font-bold">8+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Emerald Paints was founded with a simple mission: deliver professional-grade painting services with the personal attention Colorado homeowners deserve.</p>
                <p>We chose the name "Emerald" to reflect the lush beauty of the Colorado landscape — and the premium finishes we bring to every home. From a first accent wall to a full exterior transformation, we approach every project with precision and pride.</p>
                <p>For over 8 years, we've served homeowners across Denver, Aurora, Lakewood, Arvada, Westminster, and Thornton. We're licensed, insured, and committed to delivering flawless results using top-tier paints from Sherwin-Williams and Benjamin Moore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">Our Values</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
