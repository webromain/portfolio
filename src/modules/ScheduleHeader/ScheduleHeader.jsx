function ScheduleHeader() {
  return (
    <header className="px-6 py-4 border-b border-white/10 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            React-Schedule
          </h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            Semaine-51
          </span>
          <span className="px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
            Décembre-2025
          </span>
        </div>
      </div>
    </header>
  );
}

export default ScheduleHeader;
