import React from "react"
import PrimaryButton from "src/components/PrimaryButton/index"
import PrimaryInput from "src/components/PrimaryInput/index"
import styles from "./style.module.scss"
import { motion } from "framer-motion"

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
          <PrimaryButton
            title={"Cancel"}
            className={"secondary"}
            onClick={props.handleFormCancel}
          />
          <PrimaryButton title={"Publish Changes"} onClick={props.handleFormCancel} />
        </div>
      </div>
      <form className={styles.form}>
        {props.formStep === 1 && (
          <FormSection>
            <PrimaryInput label={"Deprecated"} message={"please help fill this form"} />
            <PrimaryInput label={"For wiki"} message={"please help fill this form"} />
            <PrimaryInput label={"Api url"} message={"please help fill this form"} />
          </FormSection>
        )}

        {props.formStep === 2 && (
          <FormSection>
            <PrimaryInput label={"Replaced by"} message={"please help fill this form"} />
            <PrimaryInput label={"Experimental"} message={"please help fill this form"} />
            <PrimaryInput label={"User doc url"} message={"please help fill this form"} />
          </FormSection>
        )}

        {props.formStep === 3 && (
          <FormSection>
            <PrimaryInput
              label={"Available UI Languages"}
              message={"please help fill this form"}
            />
            <PrimaryInput label={"Wikidata QID"} message={"please help fill this form"} />
          </FormSection>
        )}
      </form>
    </div>
  )
}

function FormSection(props: { children: JSX.Element | JSX.Element[] }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <motion.section
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      variants={variants}
      className={styles.formSection}
    >
      {props.children}
    </motion.section>
  )
}
