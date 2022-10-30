import React from "react"
import PrimaryButton from "../PrimaryButton/index"
import styles from "./style.module.scss"

type Props = {
  handleModalClose: () => void
  handleNextTask: () => void
}

export default function SkipModal(props: Props) {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    props.handleNextTask()
  }
  return (
    <div data-testid="skip-modal" className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Hey There</h2>
        <p className={styles.desc}>We would love to know why you want to skip this tool</p>

        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <div className={styles.fieldWrapper}>
            <input type="checkbox" />
            <div className="text">Not interested</div>
          </div>
          <div className={styles.fieldWrapper}>
            <input type="checkbox" />
            <div className="text">Could not find any missing fields</div>
          </div>
          <div className={styles.fieldWrapper}>
            <input type="checkbox" />
            <div className="text">Not sure about the Information I have</div>
          </div>

          <div className={styles.btnWrapper}>
            <PrimaryButton
              title={"Cancel"}
              className={"secondary"}
              onClick={props.handleModalClose}
            />
            <PrimaryButton title={"Continue"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  )
}
