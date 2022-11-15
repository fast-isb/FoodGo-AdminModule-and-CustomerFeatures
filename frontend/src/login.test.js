import Login from "./customer_module/Customer_Login";
import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from 'react-router-dom';


afterEach(() => {
    cleanup(); 
})

test("log in Button", () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
    const LoginBtton = screen.getByTestId("checklogin");
    waitFor(() => expect(getByTestId(LoginBtton)).toBeInTheDocument());
})

test("f3", () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
    const f3 = screen.getByTestId("uname");
    waitFor(() => expect(getByTestId(f3)).toBeInTheDocument());
})
test("f4", () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
    const f5 = screen.getByTestId("pass");
    waitFor(() => expect(getByTestId(f5)).toBeInTheDocument());
})
test("f6", () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
    const f6 = screen.getByTestId("sign");
    waitFor(() => expect(getByTestId(f6)).toBeInTheDocument());
})
test("f7", () => {
        render(<MemoryRouter>
            <Login />
        </MemoryRouter>)
    const f7 = screen.getByTestId("forget");
    waitFor(() => expect(getByTestId(f7)).toBeInTheDocument());
})
