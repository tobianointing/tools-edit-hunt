
import styles from "@/styles/index.module.scss"
import PrimaryButton from "src/components/PrimaryButton/index"
import MemoSkipArrow from "src/components/Icons/SkipArrow"
import Edit from "src/components/Icons/Edit"
import Navbar from "src/sections/Navbar/index"
import SkipModal from "src/components/SkipModal/index"
import { useState } from "react"
import Footer from "src/sections/Footer/index"
import ToolInfoCard from "src/components/ToolInfoCard/index"
import EditToolForm from "src/sections/EditToolForm/index"
import { TasksType } from "src/types/index"
import MainLayout from "src/components/MainLayout/index"
import { motion } from "framer-motion"

const taskQueue: TasksType[] = [
  {
    name: "pywikibot",
    missingFields: [
      "depracated",
      "replaced_by",
      "for_wiki",
      "user_doc_url",
      "experimental",
      "wikidataqid",
      "tooltype",
      "ui_languages",
    ],
  },
  {
    name: "youtube",
    missingFields: ["depracated", "replaced_by", "user_doc_url", "api_url_doc"],
  },
]

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [tasks, setTasks] = useState(taskQueue)
  const [taskCount, setTaskCount] = useState(0)

  const [formStep, setFromStep] = useState(0)

  const missingFields = ["depracated", "replaced_by", "for_wiki", "user_doc_url", "experimental"]

  const handleFormNext = () => {
    if (formStep < 3) {
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

  const handleNextTask = () => {
    if (taskCount < tasks.length - 1) {
      setTaskCount((prev) => prev + 1)
    }

    setModalIsOpen(false)
  }

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div className={styles.container}>
      <Navbar />

      <MainLayout>

        <h1 className={`${styles.header}`}>The Seamless Way To Manage Wikis Tools</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda error at debitis
          minus? Enim illo voluptatem inventore, impedit est rem
        </p>

        <div className={styles.toolWrapper}>
          {formStep === 0 && (
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
              variants={variants}
            >
              <ToolInfoCard task={tasks[taskCount]} />
              <div className={styles.btnWrapper}>
                <PrimaryButton icon={<MemoSkipArrow />} title="Skip Tool" onClick={handleSkip} />
                <PrimaryButton icon={<Edit />} title="Edit Tool" onClick={handleFormNext} />
              </div>
            </motion.div>
          )}

          {formStep > 0 && (
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
              variants={variants}
            >
              <EditToolForm formStep={formStep} handleFormCancel={handleFormCancel} />
              <div className={styles.btnWrapper}>
                <PrimaryButton title="Go Back" onClick={handleFormPrev} />
                <PrimaryButton icon={<MemoSkipArrow />} title="Continue" onClick={handleFormNext} />
              </div>
            </motion.div>
          )}
        </div>
      </MainLayout>
      {modalIsOpen && (
        <SkipModal handleModalClose={() => setModalIsOpen(false)} handleNextTask={handleNextTask} />
      )}
      <Footer />
    </div>
  )
}
