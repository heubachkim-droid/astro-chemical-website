import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/#about", label: "회사소개" },
  { href: "/#history", label: "회사연혁" },
  { href: "/products", label: "제품안내" },
  { href: "/#contact", label: "오시는 길" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white">
      <div className="mx-auto flex h-22 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Astro Chemical 로고"
            width={220}
            height={60}
            className="h-15 w-auto"
            priority
          />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] font-semibold text-brand-navy transition-colors hover:text-brand-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
