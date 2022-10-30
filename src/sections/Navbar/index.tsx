import React, { useState } from "react"
import Avater from "src/components/Avater/index"
import HamburgerMenu from "src/components/Icons/HamburgerMenu"
import styles from "./style.module.scss"
import avater from "public/avater.png"
import DropDown from "src/components/Icons/DropDown"
import Link from "next/link"
import LangBox from "src/components/LangBox"

type Props = {}

export default function Navbar(props: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLang, setIsOpenLang] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.hamburgerMenu} onClick={() => setIsOpen(!isOpen)}>
        <HamburgerMenu />
      </div>

      <Link href={"/"} scroll={false}>
        <div className={styles.logo}>ToolEditHunt</div>
      </Link>

      <ul className={`${styles.navItemWrapper} ${isOpen && styles.open}`}>
        <li>
          <Link scroll={false} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/dashboard">
            Dashbaord
          </Link>
        </li>
        <li>
          <Link scroll={false} href="leaderboard">
            Leaderboard
          </Link>
        </li>
      </ul>

      <div className={styles.navRight}>
        <div onClick={() => setIsOpenLang(!isOpenLang)} className={styles.lang}>
          <div>
            en
            {isOpenLang && <LangBox />}
          </div>
          <DropDown />
        </div>
        <div className={styles.avater}>
          <Avater image={avater} />
        </div>
      </div>
    </nav>
  )
}
