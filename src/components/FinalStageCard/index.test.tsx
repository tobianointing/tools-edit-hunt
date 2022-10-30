import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import FinalStageCard from "./index"

test("renders <FinalStageCard/> correctly", async () => {
  const handleClick = jest.fn()

  render(<FinalStageCard onClick={handleClick} />)
  expect(screen.getByTestId("final-stage-card")).toHaveTextContent(/Hurry/i)
  expect(screen.getByText(/Edit Next Tool/i)).toBeInTheDocument()
})

test("when the props onClick is passed, it calls an onClick event", async () => {
  const handleClick = jest.fn()

  render(<FinalStageCard onClick={handleClick} />)

  fireEvent.click(screen.getByText(/Edit Next Tool/i))
  expect(handleClick).toHaveBeenCalled()
})
