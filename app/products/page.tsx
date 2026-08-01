import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품안내 | 아스트로케미칼",
  description: "아스트로케미칼 취급 제품 - 페인트, 잉크, 플라스틱, 고무 산업용 화학원료.",
};

const productCategories = [
  { id: "paint", title: "페인트" },
  { id: "ink", title: "잉크" },
  { id: "plastic", title: "플라스틱" },
  { id: "rubber", title: "고무" },
];

export default function ProductsPage() {
  return (
    <>
      <div className="bg-brand-navy px-6 py-15 text-center text-white">
        <h1 className="text-3xl font-extrabold">제품안내</h1>
      </div>

      {productCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="border-b border-brand-border px-6 py-20 last:border-b-0"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-extrabold text-brand-navy">
              {category.title}
            </h2>
            <div className="rounded-lg border border-dashed border-brand-border p-6 text-center text-brand-text-light">
              {category.title} 관련 제품 목록은 준비 중입니다.
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
