import { ProductDetailCard } from "@/components/card/card";
import { productData } from "@/lib/featuredProducts";

export default async function Page({ params }) {
  const data = await productData(params.id);
  console.log(data);
  return (
    <div className="bg-white w-full min-h-screen flex justify-center py-32">
      <ProductDetailCard
        title={data.title}
        rating={data.rating}
        price={data.price * 80}
        images={data.images}
      ></ProductDetailCard>
    </div>
  );
}
