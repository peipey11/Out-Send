import { Shield, Zap, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Upload and share files in seconds. No account required, no waiting.",
  },
  {
    icon: Shield,
    title: "Secure Transfer",
    description: "Your files are encrypted ensuring your files stay private.",
  },
  {
    icon: Clock,
    title: "Temporary Sessions",
    description:
      "Session code expires after 15 minutes and your files get automatically deleted.",
  },
  {
    icon: Globe,
    title: "Access Anywhere",
    description:
      "Share with anyone, anywhere. Works on any device with a web browser.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Why Choose OutSend?</h2>
          <p className="section-subheading">
            Simple, secure, and incredibly fast. Everything you need for quick
            file sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card-elevated p-6 group">
              <div className="feature-icon mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
