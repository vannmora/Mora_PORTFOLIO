import { useEffect, useState } from "react";

function Hero() {
  const fullName = "Hi, I'm Van Gonzales Mora";
  const role = "Aspiring Full Stack Developer";

  const [nameText, setNameText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    let nameIndex = 0;

    const nameInterval = setInterval(() => {
      nameIndex++;
      setNameText(fullName.slice(0, nameIndex));

      if (nameIndex === fullName.length) {
        clearInterval(nameInterval);
        setTimeout(() => setStep(1), 500);
      }
    }, 50);

    return () => clearInterval(nameInterval);
  }, []);

  useEffect(() => {
    if (step !== 1) return;

    let roleIndex = 0;

    const roleInterval = setInterval(() => {
      roleIndex++;
      setRoleText(role.slice(0, roleIndex));

      if (roleIndex === role.length) {
        clearInterval(roleInterval);
        setTimeout(() => setStep(2), 500);
      }
    }, 50);

    return () => clearInterval(roleInterval);
  }, [step]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="text-center max-w-4xl">

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {nameText}
          <span className="animate-pulse text-blue-400">|</span>
        </h1>

        {/* Role */}
        {step >= 1 && (
          <h2 className="text-xl md:text-2xl text-gray-400 mt-4">
            {roleText}
          </h2>
        )}

        {/* Button */}
        {step === 2 && (
          <div className="mt-12">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-xl 
                         bg-gray-900 border border-gray-800 
                         hover:border-blue-400/50 
                         transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        )}

      </div>
    </section>
  );
}

export default Hero;