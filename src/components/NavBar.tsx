type Item = { id: string; label: string }

export function NavBar({ items, className }: { items: Item[]; className?: string }) {
  return (
    <nav className={`sticky top-0 z-50 bg-slate-900 ${className || ''}`}>
      <div className="mx-auto max-w-[1200px] px-8 py-4 flex justify-between items-center">
        <a href="#top" className="text-xl font-bold text-cyan-400 tracking-tight  hover:text-sky-400 hover:scale-110 transition-all duration-200">
          Lounas IDJOURDIKENE <span className="text-purple-500">•</span>
        </a>
        <ul className="flex items-center list-none m-0 p-0 cursor-pointer" style={{ gap: '2rem' }}>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-gray-300 hover:text-white hover:underline font-medium transition-colors no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
