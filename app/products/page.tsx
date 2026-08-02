import type { Metadata } from "next";
import { supabase, type Product } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "제품안내 | 아스트로케미칼",
  description: "아스트로케미칼 취급 제품 - 페인트, 잉크, 플라스틱, 고무 산업용 화학원료.",
};

export const revalidate = 60;

const productCategories = [
  { id: "paint", title: "페인트" },
  { id: "ink", title: "잉크" },
  { id: "plastic", title: "플라스틱" },
  { id: "rubber", title: "고무" },
];

async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("name");

  if (error) {
    console.error("Failed to load products:", error.message);
    return [];
  }
  return data ?? [];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="bg-brand-navy px-6 py-15 text-center text-white">
        <h1 className="text-3xl font-extrabold">제품안내</h1>
      </div>

      {productCategories.map((category) => {
        const items = products.filter((p) => p.category === category.id);
        return (
          <section
            key={category.id}
            id={category.id}
            className="border-b border-brand-border px-6 py-20 last:border-b-0"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-10 text-center text-3xl font-extrabold text-brand-navy">
                {category.title}
              </h2>
              {items.length === 0 ? (
                <div className="rounded-lg border border-dashed border-brand-border p-6 text-center text-brand-text-light">
                  {category.title} 관련 제품 목록은 준비 중입니다.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((product) => (
                    <div
                      key={product.id}
                      className="rounded-lg border border-brand-border p-6"
                    >
                      <h3 className="mb-2 text-lg font-bold text-brand-navy">
                        {product.name}
                      </h3>
                      {product.spec && (
                        <p className="mb-1 text-sm text-brand-text-light">
                          규격: {product.spec}
                        </p>
                      )}
                      {product.cas_no && (
                        <p className="mb-1 text-sm text-brand-text-light">
                          CAS No: {product.cas_no}
                        </p>
                      )}
                      {product.description && (
                        <p className="mt-2 text-sm text-brand-text-light">
                          {product.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
