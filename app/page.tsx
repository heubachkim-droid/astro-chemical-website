import Link from "next/link";

const categories = [
  { id: "paint", icon: "🎨", title: "페인트", desc: "페인트 제조용 화학원료" },
  { id: "ink", icon: "🖋️", title: "잉크", desc: "잉크 제조용 화학원료" },
  { id: "plastic", icon: "🧴", title: "플라스틱", desc: "플라스틱 가공용 화학원료" },
  { id: "rubber", icon: "⚙️", title: "고무", desc: "고무 제조용 화학원료" },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark px-6 py-30 text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-wide">ASTRO CHEMICAL</h1>
        <p className="mt-4 text-xl text-[#cdd6e6]">화학물질 전문 유통기업, 아스트로케미칼</p>
        <Link
          href="/products"
          className="mt-8 inline-block rounded bg-brand-red px-8 py-3.5 font-bold transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
        >
          제품 보기
        </Link>
      </section>

      <section id="about" className="px-6 py-20 text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-brand-navy">회사소개</h2>
        <p className="mx-auto max-w-2xl text-[17px] text-brand-text-light">
          아스트로케미칼은 페인트, 잉크, 플라스틱, 고무 산업 전반에 필요한 화학원료를
          안정적으로 공급하는 화학물질 전문 유통기업입니다. 신뢰할 수 있는 공급망과
          전문성을 바탕으로 고객사의 생산 경쟁력을 뒷받침합니다.
        </p>
      </section>

      <section className="bg-brand-gray-bg px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-brand-navy">
            취급 분야
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/products#${c.id}`}
                className="rounded-lg border border-brand-border bg-white p-9 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{c.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-brand-navy">{c.title}</h3>
                <p className="text-sm text-brand-text-light">{c.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="font-bold text-brand-red">
              전체 제품 보기 →
            </Link>
          </div>
        </div>
      </section>

      <section id="history" className="px-6 py-20 text-center">
        <h2 className="mb-10 text-3xl font-extrabold text-brand-navy">회사연혁</h2>
        <p className="mx-auto max-w-xl rounded-lg border border-dashed border-brand-border p-8 text-brand-text-light">
          회사연혁 정보는 준비 중입니다. 곧 업데이트될 예정입니다.
        </p>
      </section>
    </>
  );
}
