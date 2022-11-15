import Forget from "./customer_module/Forget_Password";
import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from 'react-router-dom';


afterEach(() => {
    cleanup(); 
})

test("log in Button", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const ForgetBtton = screen.queryByTestId("log");
    waitFor(() => expect(getByTestId(ForgetBtton)).toBeInTheDocument());
})

test("sign in Button", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const ForgetBtton = screen.queryByTestId("sign");
    waitFor(() => expect(getByTestId(ForgetBtton)).toBeInTheDocument());
})

test("continue in Button", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const ForgetBtton = screen.queryByTestId("contBut");
    waitFor(() => expect(getByTestId(ForgetBtton)).toBeInTheDocument());
})

test("f3", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const f3 = screen.queryByTestId("uname");
    waitFor(() => expect(getByTestId(f3)).toBeInTheDocument());
})
test("f4", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const f5 = screen.queryByTestId("q1");
    waitFor(() => expect(getByTestId(f5)).toBeInTheDocument());
})
test("f6", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const f6 = screen.queryByTestId("q2");
    waitFor(() => expect(getByTestId(f6)).toBeInTheDocument());
})
test("f7", () => {
        render(<MemoryRouter>
            <Forget />
        </MemoryRouter>)
    const f7 = screen.queryByTestId("q3");
    waitFor(() => expect(getByTestId(f7)).toBeInTheDocument());
})
