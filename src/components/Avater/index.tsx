import React from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./style.module.scss"

type Props = {
  image: string | StaticImageData
}

export default function Avater(props: Props) {
  return (
    <span data-testid="avater" className={styles.avater}>
      <Image src={props.image} height={40} width={40}/>
    </span>
  )
}
