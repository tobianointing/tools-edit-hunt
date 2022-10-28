import React from "react"
import styles from "./style.module.scss"

type Props = {
    name: string
    index: number
}

export default function MissingFieldCard(props: Props) {
  return (
    <div className={styles.missingField}>
      <span>{props.index}</span> {props.name}
    </div>
  )
}
