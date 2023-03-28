import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/global.css";

export default function App({Component, pageProps}) {
  const router = useRouter();
  return (
    <>
      <nav className="header-nav">
        <ul className="first-list">
          <li>
          <Link className={router.pathname== "/collection" ? "active" : ""} href="/collection" >Collections</Link></li>
          <li><Link className={router.pathname== "/popular" ? "active" : ""} href="/popular" >Most Popular</Link></li>
        </ul>

        <h1>
        <Link href="/">TheBlog.</Link></h1>

        <ul className="second-list">
        <li>My account</li>
        <li>My cart</li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </>
  );
}
