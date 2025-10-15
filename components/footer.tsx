export function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <div className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">
        United States
      </div>
      <div className="border-t px-6 py-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
        <a href="/about" className="hover:underline">About</a>
        <a href="/advertising" className="hover:underline">Advertising</a>
        <a href="/business" className="hover:underline">Business</a>
        <a href="/how-search-works" className="hover:underline">How Search works</a>
        <div className="flex-1" />
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/settings" className="hover:underline">Settings</a>
      </div>
    </footer>
  )
}