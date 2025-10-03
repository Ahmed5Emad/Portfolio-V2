import { TypewriterText } from './TypewriterText';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, MapPin, Github, Linkedin, Mail } from 'lucide-react';

export function AboutSection() {
  const handleDownloadCV = () => {
    const cvUrl = 'src/components/Files/ahmed-emad-cv.pdf'; // Place your CV file in the public folder
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Ahmed_Emad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div
        className="absolute inset-0 
          bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)] 
          bg-[size:4rem_4rem] 
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] 
          opacity-20"
      />

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Available for freelance work</span>
          </div>
          <h2 className="text-orange-500 mb-4 text-2xl">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden bg-[#1e1e1e] p-6">
              <ImageWithFallback
                src="public/images/me.jpg"
                alt="Ahmed Emad"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-white mb-3 text-4xl">Ahmed Emad</h1>
              <div className="min-h-[50px] text-2xl ">
                <TypewriterText
                  texts={['UI/UX Designer', 'Front-End Engineer', 'Creative Developer']}
                />
              </div>
            </div>

            <p className="text-white/90 leading-relaxed">
              Hi, I'm <strong className="text-white">Ahmed Emad</strong>. UI/UX Designer & Front-End
              Developer passionate about building invisible, seamless digital experiences. I
              translate complex user needs into elegant designs, backed by an engineering mindset and
              a relentless focus on user feedback. From wireframes and prototypes to polished,
              performant code, I deliver solutions that are both beautiful and functional, ultimately
              driving user satisfaction and business success.
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Download CV
                </button>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1e1e1e] text-white border border-orange-500/30 rounded-xl hover:border-orange-500 transition-all duration-300 hover:scale-105"
                >
                  Let's Talk
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/Ahmed5Emad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1e1e1e] text-white rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-emad-258356353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1e1e1e] text-white rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ahmed2077emad@gmail.com"
                  className="p-3 bg-[#1e1e1e] text-white rounded-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
