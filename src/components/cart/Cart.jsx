import CartItem from './CartItem.jsx'
import CartSummary from './CartSummary.jsx'

function Cart() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <CartItem />
      </div>
      <CartSummary />
    </section>
  )
}

export default Cart
