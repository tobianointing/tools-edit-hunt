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
            <PrimaryInput label={"Deprecated"} message={"please help fill this form"} />
            <PrimaryInput label={"For wiki"} message={"please help fill this form"} />
            <PrimaryInput label={"Api url"} message={"please help fill this form"} />
            
          </section>
        )}

        {props.formStep === 2 && (
          <section className={styles.formSection}>
            <PrimaryInput label={"Replaced by"} message={"fplease help fill this form"} />
            <PrimaryInput label={"Experimental"} message={"fplease help fill this form"} />
            <PrimaryInput label={"User doc url"} message={"fplease help fill this form"} />
          </section>
        )}

        {props.formStep === 3 && (
          <section className={styles.formSection}>
            <PrimaryInput label={"Available UI Languages"} message={"fplease help fill this form"} />
            <PrimaryInput label={"Wikidata QID"} message={"fplease help fill this form"} />
          </section>
        )}
      </form>
    </div>
  )
}
