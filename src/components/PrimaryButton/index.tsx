import styles from "./style.module.scss"

import React from "react"

interface Props {
  onClick?: () => void
  title: string
  icon?: JSX.Element
  className?: string
  type?: "button" | "submit" | "reset" | undefined
}

export default function PrimaryButton(props: Props) {
  return (
    <button
      data-testid="primary-button"
      className={`${styles.primaryButton} ${props.className && styles[props.className]}`}
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
    >
      <p>{props.title}</p>
      {props.icon}
    </button>
  )
}
