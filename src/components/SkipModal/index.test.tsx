import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import SkipModal from "./index"

test("renders a <SkipModal /> correctly", async () => {
  const handleModalClose = jest.fn()
  const handleNextTask = jest.fn()

  render(<SkipModal handleModalClose={handleModalClose} handleNextTask={handleNextTask} />)
  expect(screen.getByTestId("skip-modal")).toHaveTextContent(/Hey There/i)
})

test("check if handleModalClose has been calld in <SkipModal />", async () => {
  const handleModalClose = jest.fn()
  const handleNextTask = jest.fn()

  render(<SkipModal handleModalClose={handleModalClose} handleNextTask={handleNextTask} />)

  fireEvent.click(screen.getByText(/Cancel/i))
  expect(handleModalClose).toHaveBeenCalled()

})

test("check if handleNextTask has been calld in <SkipModal />", async () => {
  const handleModalClose = jest.fn()
  const handleNextTask = jest.fn()
  render(<SkipModal handleModalClose={handleModalClose} handleNextTask={handleNextTask} />)
  fireEvent.click(screen.getByText(/Continue/i))
  expect(handleNextTask).toHaveBeenCalled()
})
