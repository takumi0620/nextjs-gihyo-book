import ProductForm, { ProductFormData } from "components/organisms/ProductForm"
import { useAuthContext } from "contexts/AuthContext"
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext"
import addProduct from "services/products/add-product"
import { ApiContext, Product } from "types"

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy"
}

interface ProductFormContainerProps {
  onSave?: (error?: Error, product?: Product) => void
}

const ProductFormContainer = ({
  onSave,
}: ProductFormContainerProps) => {
  const { authUser } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  const handleSave = async (data: ProductFormData) => {
    if (!authUser) return

    const product = {
      image: data.image,
      title: data.title,
      description: data.description,
      category: data.category,
      condition: data.condition,
      price: Number(data.price),
      imageUrl: "/products/shoes/feet-1840619_1920.jpeg",
      blurDataUrl: "",
      owner: authUser,
    }

    try {
      setGlobalSpinner(true)
      const ret = await addProduct(context, { product })
      onSave && onSave(undefined, ret)
    } catch (error: unknown) {
      if (error instanceof Error) {
        window.alert(error.message)
        onSave && onSave(error)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return <ProductForm onProductSave={handleSave} />
}

export default ProductFormContainer