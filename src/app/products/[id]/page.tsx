import { Banner } from "@/components/shared/banner";
import ProductDetails from "@/components/products/product-details";
import Breadcrumb from "@/components/shared/breadcrumb";
import { Container } from "@/components/layout/section/container";
import { Section } from "@/components/layout/section/section";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Banner title="Product Details" />
      <Section spacing="none" className="my-2">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Our Category", href: "" },
              { label: "Product Details", href: `/products/${id}` },
            ]}
            className="mb-8"
          />
          <ProductDetails id={id} />
        </Container>
      </Section>
    </>
  );
}
