import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import PrimaryButton from "./index"

test("renders a button correctly", async () => {
  render(<PrimaryButton type="button" title="Edit Tool" />)
  expect(screen.getByTestId("primary-button")).toHaveTextContent("Edit Tool")
})

test("when the icon is pass as props button renders icon correctly", async () => {
  render(<PrimaryButton type="button" title="Edit Tool" icon={<svg data-testid="icon"></svg>} />)
  expect(screen.getByTestId("icon")).toBeInTheDocument()
})

test("when the props className is passed, it is added to element CSS classList", async () => {
  render(<PrimaryButton type="button" title="Edit Tool" className="secondary" />)
  expect(screen.getByTestId("primary-button")).toHaveClass("secondary")
})

test("when the props onClick is passed, it calls an onClick event", async () => {
  const handleClick = jest.fn()

  render(
    <PrimaryButton
      type="button"
      title="Edit Tool"
      className="secondaryButton"
      onClick={handleClick}
    />
  )

  fireEvent.click(screen.getByTestId("primary-button"))
  expect(handleClick).toHaveBeenCalled()
})
