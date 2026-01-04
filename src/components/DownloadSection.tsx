import { Download, Monitor, Terminal } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="feature-icon mx-auto mb-6 w-16 h-16">
                <Download className="w-8 h-8" />
              </div>

              <h2 className="section-heading mb-4">Download OutSend</h2>

              <p className="section-subheading mb-8">
                Get the desktop app to start sharing files instantly. Available
                for Windows and Linux.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://github.com/peipey11/OutSend/releases/download/alpha/OutSend.exe"
                  className="btn-primary flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
                >
                  <Monitor className="w-5 h-5" />
                  Windows
                </a>
                <a
                  href="/download"
                  className="btn-secondary flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
                >
                  <Terminal className="w-5 h-5" />
                  Linux
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No account needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Lightweight app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
