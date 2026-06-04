export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden  -z-10">
      <div className="absolute inset-0 bg-black  -z-10" />

      <div
        className="
        absolute
        top-[-250px]
        left-[-250px]
        w-[800px]
        h-[800px]
        rounded-full
        bg-purple-500/30
        blur-[150px]
        -z-10
        "
      />

      <div
        className="
        absolute
        bottom-[-250px]
        right-[-250px]
        w-[800px]
        h-[800px]
        rounded-full
        bg-cyan-500/30
        blur-[150px]
        -z-10
        "
      />

      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-indigo-500/20
        blur-[120px]
         -z-10
        "
      />
    </div>
  );
}