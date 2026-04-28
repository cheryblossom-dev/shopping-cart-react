function Header() {
  return (
    <header className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Shopping Cart
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Your Cart</h1>
      </div>
      <p className="text-sm text-slate-500">Review items before checkout</p>
    </header>
  )
}

export default Header
