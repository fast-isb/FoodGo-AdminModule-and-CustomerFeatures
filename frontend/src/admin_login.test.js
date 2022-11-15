import Admin_Log from "./admin_module/Admin_Login";
import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from 'react-router-dom';


afterEach(() => {
    cleanup(); 
})

test("log in Button", () => {
        render(<MemoryRouter>
            <Admin_Log />
        </MemoryRouter>)
    const Admin_LogBtton = screen.queryByTestId("chechLog");
    waitFor(() => expect(getByTestId(Admin_LogBtton)).toBeInTheDocument());
})


test("f3", () => {
        render(<MemoryRouter>
            <Admin_Log />
        </MemoryRouter>)
    const f3 = screen.queryByTestId("uname");
    waitFor(() => expect(getByTestId(f3)).toBeInTheDocument());
})
test("f4", () => {
        render(<MemoryRouter>
            <Admin_Log />
        </MemoryRouter>)
    const f5 = screen.queryByTestId("pass");
    waitFor(() => expect(getByTestId(f5)).toBeInTheDocument());
})