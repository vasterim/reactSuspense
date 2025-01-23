import React, {Suspense} from "react"

const Products = React.lazy(() => import('./components/Products'))
const Contact = React.lazy(() => import('./components/Contact'))
function App() {

  return (
    <>
    <Suspense fallback={<div>yükleniyor</div>}>
      <Products/>
      <Contact/>
    </Suspense>
    </>
  )
}

export default App
