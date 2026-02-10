import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";

const faqs = [
  {
    question: "How long does a typical interior paint job take?",
    answer: "Most single-room projects take 1-2 days, while a full home interior typically takes 3-5 days depending on size, prep work needed, and the number of coats required. We always provide a clear timeline in your estimate so there are no surprises.",
  },
  {
    question: "Do I need to move my furniture before you start?",
    answer: "No — we handle all furniture moving and protection. We carefully shift furniture to the center of each room and cover everything with clean drop cloths and plastic sheeting. Your belongings are treated as if they were our own.",
  },
  {
    question: "What kind of paint do you use?",
    answer: "We use premium paints from Sherwin-Williams and Benjamin Moore — the same brands trusted by professional painters nationwide. We'll recommend the right product for each surface, whether it's a high-traffic hallway that needs durable semi-gloss or a bedroom that calls for a smooth eggshell finish.",
  },
  {
    question: "How much does it cost to paint the exterior of a house?",
    answer: "Exterior painting costs vary based on your home's size, condition, number of stories, and the extent of prep work needed. We provide free, detailed estimates with no hidden fees. On average, most Colorado homes range from $3,500 to $8,000+ for a full exterior repaint.",
  },
  {
    question: "Why is prep work so important?",
    answer: "Prep work is what separates a paint job that lasts 2 years from one that lasts 10+. We sand rough surfaces, patch holes and cracks, caulk gaps, prime bare wood, and apply painter's tape to every edge. Skipping prep is the #1 reason cheap paint jobs fail early — and we never cut corners.",
  },
  {
    question: "Do you offer color consultation?",
    answer: "Yes! Choosing the right color can feel overwhelming with thousands of options. Our team can help you narrow down choices based on your home's lighting, architecture, and personal style. We can also provide sample swatches so you can see how colors look in your specific space before committing.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Emerald Paints is fully licensed and insured in the state of Colorado. This protects you and your property throughout the entire project. We're happy to provide proof of insurance upon request.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Denver metro area including Denver, Lakewood, Aurora, Arvada, Westminster, Thornton, Boulder, Centennial, Littleton, and surrounding communities. If you're unsure whether we cover your area, just give us a call!",
  },
];

const leftFaqs = faqs.slice(0, 4);
const rightFaqs = faqs.slice(4);

export function FAQSection() {
  return (
    <section className="relative py-16 md:py-24 bg-sand overflow-hidden">
      <div className="absolute inset-0 texture-paper opacity-30" />

      <div className="container relative z-10 px-4 md:px-6">
        <AnimatedSection className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 uppercase tracking-wide">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-mountain-slate max-w-2xl mx-auto">
            Everything you need to know about working with Emerald Paints
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-6xl mx-auto">
          {/* Two-column on desktop, single on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            <Accordion type="single" collapsible className="space-y-3">
              {leftFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-left-${index}`}
                  className="bg-white rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-charcoal hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mountain-slate text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-3">
              {rightFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-right-${index}`}
                  className="bg-white rounded-xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-charcoal hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mountain-slate text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
