import Link from "next/link";
import { useRouter } from "next/router";
import "../styles/global.css";
import Image from "next/image";
import notification from "../asset/notification.svg";

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
        <li>  <Link className={router.pathname== "/account" ? "active" : ""} href="/account" >My Account</Link></li>
        <li><Link className={router.pathname== "/notification" ? "active" : ""} href="/notification"><Image
        src={notification}
        width={25}
        height={25}
      /></Link></li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </>
  );
}
