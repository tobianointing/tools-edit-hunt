import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Avater from "."
import avater from "public/avater.png"

test("renders Avater correctly", async () => {
  render(<Avater image={avater} />)
  expect(screen.getByTestId("avater")).toBeInTheDocument()
})

