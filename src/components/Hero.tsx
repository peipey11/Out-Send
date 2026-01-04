import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-secondary text-muted-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 border border-border">
            <span>Fast, secure, and simple output sharing</span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            Share Outputs in a Snap.
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Save your code and screenshots from lab experiments, auto-generate
            PDFs, and transfer them to your phone instantly. No more manual work
            – just download and print!
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up-delay-3">
            <a
              href="#download"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Download App
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
