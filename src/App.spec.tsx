import { render } from "@testing-library/react";
import App from "./App";

test("sum", () => {

    const { getByText, getByRole } = render(<App />) 

    expect(getByText('Hello Word')).toBeTruthy()

});
