import Head from "next/head"
import Image from "next/image"

import styles from "@/styles/index.module.scss"
import PrimaryButton from "src/components/PrimaryButton/index"
import MemoSkipArrow from "src/components/Icons/SkipArrow"
import Edit from "src/components/Icons/Edit"
import Navbar from "src/sections/Navbar/index"
import tiny1 from "public/tiny1.png"
import tiny2 from "public/tiny2.png"
import tiny3 from "public/tiny3.png"
import SkipModal from "src/components/SkipModal/index"
import { useState } from "react"
import Footer from "src/sections/Footer/index"
import ToolInfoCard from "src/components/ToolInfoCard/index"
import EditToolForm from "src/sections/EditToolForm/index"

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [formStep, setFromStep] = useState(0)

  const missingFields = ["depracated", "replaced_by", "for_wiki", "user_doc_url", "experimental"]

  const handleFormNext = () => {
    if (formStep < 2) {
      setFromStep((prevState) => prevState + 1)
    }
  }

  const handleFormPrev = () => {
    if (formStep > 0) {
      setFromStep((prevState) => prevState - 1)
    }
  }

  const handleFormCancel = () => {
    setFromStep(0)
  }

  const handleSkip = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tool Edit Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className={styles.tiny1}>
          {" "}
          <Image src={tiny1} />
        </div>
        <div className={styles.tiny2}>
          {" "}
          <Image src={tiny2} />
        </div>
        <div className={styles.tiny3}>
          {" "}
          <Image src={tiny3} />
        </div>

        <h1 className={`${styles.header}`}>The Seamless Way To Manage Wikis Tools</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda error at debitis
          minus? Enim illo voluptatem inventore, impedit est rem
        </p>

        <div className={styles.toolWrapper}>
          {formStep === 0 && (
            <>
              <ToolInfoCard missingFields={missingFields} />
              <div className={styles.btnWrapper}>
                <PrimaryButton icon={<Edit />} title="Edit Tool" onClick={handleFormNext} />
                <PrimaryButton icon={<MemoSkipArrow />} title="Skip Tool" onClick={handleSkip} />
              </div>
            </>
          )}

          {formStep > 0 && (
            <>
              <EditToolForm formStep={formStep} handleFormCancel={handleFormCancel} />
              <div className={styles.btnWrapper}>
                <PrimaryButton icon={<Edit />} title="Go Back" onClick={handleFormPrev} />
                <PrimaryButton icon={<MemoSkipArrow />} title="Continue" onClick={handleFormNext} />
              </div>
            </>
          )}
        </div>

        {modalIsOpen && <SkipModal handleModalClose={() => setModalIsOpen(false)} />}
      </main>
      <Footer />
    </div>
  )
}
