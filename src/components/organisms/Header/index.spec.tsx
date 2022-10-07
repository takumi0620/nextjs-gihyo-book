import { ThemeProvider } from "styled-components"
import { render, screen, act, fireEvent, RenderResult } from "@testing-library/react"
import { theme } from "themes"
import { AuthContextProvider } from "contexts/AuthContext"
import type { User, Product } from "types"
import Header from "./index"

jest.mock("contexts/ShoppingCartContext")
import { useShoppingCartContext } from "contexts/ShoppingCartContext"
const { ShoppingCartContextProvider } = jest.requireActual(
  "contexts/ShoppingCartContext"
)

const authUser: User = {
  id: 1,
  username: "dummy",
  displayName: "Taketo Yoshida",
  email: "test@example.com",
  profileImageUrl: "/images/sample/1.jpeg",
  description: ""
}

const product: Product = {
  id: 1,
  category: "book",
  title: "Product",
  description: "",
  imageUrl: "/images/sample/1.jpeg",
  blurDataUrl: "",
  price: 1000,
  condition: "used",
  owner: authUser,
}

describe("Header", () => {
  let renderResult: RenderResult
  const useShoppingCartContextMock =
    useShoppingCartContext as jest.MockedFunction<typeof useShoppingCartContext>

    it("カートに商品が存在する", async () => {
      useShoppingCartContextMock.mockReturnValue({
        cart: [product],
        addProductToCart: () => {},
        removeProductFromCart: () => {}
      })

      renderResult = render(
        <ThemeProvider theme={theme}>
          <ShoppingCartContextProvider>
            <AuthContextProvider
              authUser={authUser}
              context={{ apiRootUrl: "https://dummy" }}
            >
              <Header />
            </AuthContextProvider>
          </ShoppingCartContextProvider>
        </ThemeProvider>
      )
      expect(screen.getAllByTestId("badge-wrapper").length).toBeGreaterThan(0)

      renderResult.unmount()
      useShoppingCartContextMock.mockReset()
    })

    it("みサインイン", async () => {
      useShoppingCartContextMock.mockReturnValue({
        cart: [],
        addProductToCart: () => {},
        removeProductFromCart: () => {}
      })

      renderResult = render(
        <ThemeProvider theme={theme}>
          <ShoppingCartContextProvider>
            <AuthContextProvider context={{ apiRootUrl: "https://dummy" }}>
              <Header />
            </AuthContextProvider>
          </ShoppingCartContextProvider>
        </ThemeProvider>
      )

      expect(screen.queryByTestId("profile-shape-image")).toBeNull()
      renderResult.unmount()
      useShoppingCartContextMock.mockReset()
    })
})