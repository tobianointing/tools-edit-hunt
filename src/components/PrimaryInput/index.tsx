import React from "react"
import styles from "./style.module.scss"
import errorIcon from "public/error.svg"
import Image from "next/image"

type Props = {
  label: string
  error?: string
  message?: string
}

export default function PrimaryInput(props: Props) {
  return (
    <div className={styles.InputWrapper}>
      <label htmlFor="">{props.label}</label>
      <input type="text" />
      <small>
        <Image src={errorIcon} />
        {props.message}
      </small>
    </div>
  )
}
