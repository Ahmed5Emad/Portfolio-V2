export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-700" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e1e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
    </div>
  );
}
