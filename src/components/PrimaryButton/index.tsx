import styles from "./style.module.scss"

import React from "react"

interface Props {
  onClick?: () => void
  title: string
  icon?: JSX.Element
  clasName?: string
  type?: "button" | "submit" | "reset" | undefined
}

export default function PrimaryButton(props: Props) {
  return (
    <button
      className={`${styles.primaryButton} ${props.clasName && styles[props.clasName]}`}
      onClick={props.onClick}
      type={props.type ? props.type :"button"}
    >
      <p>{props.title}</p>
      {props.icon}
    </button>
  )
}
