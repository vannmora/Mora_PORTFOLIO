import { useEffect } from "react";

function Certificates() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const badges = [
    "c53319d7-b85f-4a3d-b64c-69832f91ac9a",
    "4b3c4854-415f-47a3-befe-63f457f6ad1d",
    "e79b5428-6244-4a1e-acfe-71bc7bb9817a",
    "1b163434-786b-463d-a29b-3b1f9ea044a7",
    "9bcfdaab-5373-4225-a43f-592c28ee01ab",
  ];

  return (
    <section
      id="certificates"
      className="relative py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Professional certifications and technical achievements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

          {badges.map((id) => (
            <div
              key={id}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 
                         hover:border-blue-400/40 
                         transition-all duration-300"
            >
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id={id}
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;