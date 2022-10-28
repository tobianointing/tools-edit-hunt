import React from "react"
import styles from "./style.module.scss"
import Country from "flagit";

type Props = {
 
}

export default function LangBox(props: Props) {

  const handleClick = () => {

  }

  return (
    <ul data-testid="lang-box" className={styles.wrapper}>
      <li onClick={handleClick}><Country countryShort="US" size="md" /> English</li>
      <li onClick={handleClick}><Country countryShort="FR" size="md" /> French</li>
      <li onClick={handleClick}><Country countryShort="DE" size="md" /> German</li>
    </ul>
  )
}
