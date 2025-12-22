const items = [
  { key: 'sklearn', label: 'scikit-learn', color: 'from-amber-400 to-orange-500' },
  { key: 'pytorch', label: 'PyTorch', color: 'from-red-500 to-orange-500' },
  { key: 'tensorflow', label: 'TensorFlow', color: 'from-orange-500 to-yellow-500' },
  { key: 'keras', label: 'Keras', color: 'from-rose-500 to-pink-500' },
]

export function LogoCloud() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((i) => (
        <div
          key={i.key}
          className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
        >
          <div className={`absolute -top-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-br ${i.color} blur-xl opacity-40 group-hover:opacity-70 transition-opacity`} />
          <div className="relative flex flex-col items-center justify-center p-4">
            <div className="mb-2 h-10 w-10 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform" />
            <span className="font-semibold text-slate-800">{i.label}</span>
            <span className="text-xs text-slate-500">Framework</span>
          </div>
        </div>
      ))}
    </div>
  )
}
