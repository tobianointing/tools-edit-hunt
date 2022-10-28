import React from "react"
import PrimaryButton from "src/components/PrimaryButton/index"
import PrimaryInput from "src/components/PrimaryInput/index"
import styles from "./style.module.scss"

type Props = {
  formStep: number
  handleFormCancel: () => void
}

export default function EditToolForm(props: Props) {
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Pywikibot</h2>

      <div className={styles.header}>
        <h3>Edit Tool</h3>
        <div className={styles.btns}>
          <PrimaryButton title={"Cancel"} className={"secondary"} onClick={props.handleFormCancel} />
          <PrimaryButton title={"Publish Changes"} onClick={props.handleFormCancel}/>
        </div>
      </div>
      <form className={styles.form}>
        {props.formStep === 1 && (
          <section className={styles.formSection}>
            <PrimaryInput label={"Deprecated"} message={"fill this form now"} />
            <PrimaryInput label={"For wiki"} message={"fill this form now"} />
            <PrimaryInput label={"Api url"} message={"fill this form now"} />
            
          </section>
        )}

        {props.formStep === 2 && (
          <section className={styles.formSection}>
            <PrimaryInput label={"Replaced by"} message={"fill this form now"} />
            <PrimaryInput label={"Experimental"} message={"fill this form now"} />
            <PrimaryInput label={"User doc url"} message={"fill this form now"} />
          </section>
        )}

        {props.formStep === 3 && (
          <section className={styles.formSection}>
            <PrimaryInput label={"Available UI Languages"} message={"fill this form now"} />
            <PrimaryInput label={"Wikidata QID"} message={"fill this form now"} />
          </section>
        )}
      </form>
    </div>
  )
}
