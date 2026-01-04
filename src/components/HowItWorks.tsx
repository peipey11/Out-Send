import { Upload, QrCode, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "1",
    title: "Upload from Desktop App",
    description:
      "Enter your lab code and output screenshots to the OutSend application on your computer.",
  },
  {
    icon: QrCode,
    step: "2",
    title: "Get QR & Session Code",
    description:
      "Receive a unique QR code and a 4-character session code that's easy to share.",
  },
  {
    icon: Download,
    step: "3",
    title: "Download Instantly",
    description:
      "Recipients scan the QR code or enter the session code on the website to download the PDF.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">How It Works</h2>
          <p className="section-subheading">
            Share output in three simple steps. It's that easy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={item.title} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-border -translate-y-1/2 z-0" />
                )}

                <div className="card-elevated p-8 text-center relative z-10 h-full">
                  <div className="relative inline-block mb-6">
                    <div className="feature-icon mx-auto">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="step-number absolute -top-2 -right-2">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
