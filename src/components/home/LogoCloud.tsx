import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src?: string;
  name?: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <section className="relative py-10 sm:py-12 overflow-hidden bg-gradient-to-b from-[#0f2419] via-[#132e1f] to-[#0f2419]">
      {/* Gold accent borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Subtle texture */}
      <div className="absolute inset-0 texture-paper opacity-10" />
      
      {/* Label */}
      <div className="relative z-10 text-center mb-6">
        <p className="text-sm sm:text-base uppercase tracking-widest text-snow-white/70 font-heading font-semibold">
          Trusted By Colorado's Best
        </p>
      </div>

      {/* Logo Slider */}
      <div className="relative z-10">
        <ProgressiveBlur direction="left" bgColor="rgb(15, 36, 25)" className="z-20" />

        <InfiniteSlider duration={35} durationOnHover={80} gap={48} className="py-2">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center px-4"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 sm:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 brightness-0 invert"
                />
              ) : (
                <span className="text-xl sm:text-2xl font-heading font-bold text-snow-white/50 whitespace-nowrap tracking-tight">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur direction="right" bgColor="rgb(15, 36, 25)" className="z-20" />
      </div>
    </section>
  );
}
