import React from "react"
import PrimaryButton from "../PrimaryButton/index"
import styles from "./style.module.scss"

type Props = {
    onClick: () => void
}

export default function FinalStageCard(props: Props) {
  return (
    <div className={styles.finalStage}>
      <h2 className={styles.header}>Hurry 🥳</h2>
      <p className={styles.desc}>Congratulations 🎉 you just made one tool better.</p>
      <PrimaryButton title="Edit Next Tool" onClick={props.onClick} />
    </div>
  )
}
