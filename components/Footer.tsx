import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy-dark text-[#cdd6e6]">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-6 py-14">
        <div>
          <Image
            src="/logo.png"
            alt="Astro Chemical"
            width={160}
            height={48}
            className="mb-3 h-12 w-auto brightness-0 invert"
          />
          <p>화학물질 전문 유통기업</p>
        </div>
        <div>
          <h3 className="mb-3 text-base font-bold text-white">오시는 길 / 문의</h3>
          <p className="mb-1 text-sm">주소: 입력 예정</p>
          <p className="mb-1 text-sm">전화: 입력 예정</p>
          <p className="mb-1 text-sm">이메일: 입력 예정</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[13px] text-[#8b95ab]">
        <p>&copy; 2026 Astro Chemical. All rights reserved.</p>
      </div>
    </footer>
  );
}
