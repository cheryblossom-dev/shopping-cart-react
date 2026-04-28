import ProductCard from './ProductCard.jsx'

function ProductList() {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Recommended Products</h2>
        <span className="text-sm text-slate-500">1 item</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ProductCard />
      </div>
    </section>
  )
}

export default ProductList
