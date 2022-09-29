import styled from "styled-components"
import ScaleImage from "components/atoms/ScaleImage"
import Text from "components/atoms/Text"
import Box from "components/layout/Box"

interface ProductCardProps {
  title: string
  price: number
  imageUrl: string
  blurDataUrl?: string
  variant?: "listing" | "small" | "detail"
}

const ProductCardContainer = styled.div`
  position: relative;
`

const ProductCardImageContainer = styled.div`
  z-index: 99;
`

const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`

const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = "listing",
}: ProductCardProps) => {
  const { size, imageSize }  = (() => {
    switch (variant) {
      case "detail":
        return { size: { base: "320px", md: "540px" }, imageSize: 540 }
      case "listing":
        return { size: { base: "160px", md: "240px" }, imageSize: 240 }
      default:
        return { size: { base: "160px" }, imageSize: 160 }
    }
  })

  return (
    <ProductCardContainer>
      {variant !== "small" && (
        <ProductCardInfo>
          <Box>
            <Text
              as="h2"
              fontSize={{ base: "medium", md: "mediumLarge" }}
              letterSpacing={{ base: 2, md: 3 }}
              lineHeight={{ base: "32px", md: "48px" }}
              backgroundColor="white"
              margin={0}
              paddingRight={2}
              paddingLeft={2}
              paddingTop={0}
              paddingBottom={0}
            >
              {title}
            </Text>
            <Text
              as="span"
              fontWeight="bold"
              display="inline-block"
              backgroundColor="white"
              fontSize={{ base: "small", md: "medium" }}
              lineHeight={{ base: "8px", md: "12px" }}
              letterSpacing={{ base: 2, md: 4 }}
              margin={0}
              padding={{ base: 1, md: 2 }}
            >
              {price}円
            </Text>
          </Box>
        </ProductCardInfo>
      )}
      <ProductCardImageContainer>
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imageSize ?? 240}
            height={imageSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imageSize ?? 240}
            height={imageSize ?? 240}
            containerWidth={size}
            containerHeight={size}
            objectFit="cover"
          />
        )}
      </ProductCardImageContainer>
      {variant === "small" && (
        <Box marginTop={1}>
          <Text as="h2" variant="medium" margin={0} padding={0}>
            {title}
          </Text>
          <Text as="span" variant="medium">
            {price}円
          </Text>
        </Box>
      )}
    </ProductCardContainer>
  )
}

export default ProductCard