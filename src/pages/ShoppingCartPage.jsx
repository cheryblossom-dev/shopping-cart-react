import Cart from '../components/cart/Cart.jsx'
import Header from '../components/layout/Header.jsx'
import ProductList from '../components/products/ProductList.jsx'

function ShoppingCartPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Header />
        <ProductList />
        <Cart />
      </div>
    </main>
  )
}

export default ShoppingCartPage
