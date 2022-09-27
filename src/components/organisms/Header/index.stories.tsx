import React, { useEffect } from "react"
import { ComponentMeta } from "@storybook/react"
import Header from "./index"
import { ShoppingCartContextProvider, useShoppingCartContext } from "contexts/ShoppingCartContext"
import { AuthContextProvider } from "contexts/AuthContext"

export default { title: "Organisms/Header" } as ComponentMeta<typeof Header>

export const NoLogin = () => <Header />

export const Login = () => {
  const authUser = {
    id: 1,
    username: "dummy",
    displayName: "Taketo Yoshida",
    email: "test@example.com",
    profileImageUrl: "/images/sample/1.jpeg",
    description: "",
  }
  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext()

    useEffect(() => {
      addProductToCart({
        id: 1,
        category: "book",
        title: "Product",
        description: "",
        imageUrl: "/images/sample/1.jpeg",
        blurDataUrl: "",
        price: 1000,
        condition: "used",
        owner: authUser,
      })
    }, [])

    return <Header />
  }

  return (
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: "https://dummy" }}
        authUser={authUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  )
}