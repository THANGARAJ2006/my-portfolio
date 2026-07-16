"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full animate-aurora"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.04), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full animate-aurora-2"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.03), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-[40%] left-[50%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full animate-aurora"
        style={{
          background: "radial-gradient(ellipse at center, rgba(200, 200, 200, 0.02), transparent 70%)",
          filter: "blur(100px)",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute top-[20%] right-[15%] w-64 h-64 animate-morph"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(200, 200, 200, 0.02))",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[30%] left-[10%] w-48 h-48 animate-morph"
        style={{
          background: "linear-gradient(135deg, rgba(200, 200, 200, 0.02), rgba(255, 255, 255, 0.02))",
          filter: "blur(40px)",
          animationDelay: "3s",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-full w-[1px] opacity-0"
            style={{
              left: `${20 + i * 30}%`,
              background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.04), transparent)",
              animation: `light-ray ${8 + i * 2}s ${i * 3}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}