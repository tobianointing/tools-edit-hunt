import { fireEvent, render } from "@testing-library/react"
import React from "react"
import PrimaryInput from "."

describe("PrimaryInput", () => {
  it("renders the PrimaryInput", () => {
    const { queryByTestId } = render(
      <PrimaryInput label={"Deprecated"} />
    )

    expect(queryByTestId("test-input")).toBeInTheDocument()
    expect(queryByTestId("test-input")).toHaveTextContent("Deprecated")
  })
})
