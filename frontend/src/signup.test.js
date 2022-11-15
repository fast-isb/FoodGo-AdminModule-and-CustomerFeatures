import SignUp from "./customer_module/Customer_Signup";
import { screen, cleanup, render,waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from 'react-router-dom';


afterEach(() => {
    cleanup(); 
})

test("Sign up Button", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const signupBtton = screen.queryByTestId("checkSignBut");
    waitFor(() => expect(getByTestId(signupBtton)).toBeInTheDocument());
})

test("f1", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f1 = screen.queryByTestId("fname");
    waitFor(() => expect(getByTestId(f1)).toBeInTheDocument());
})

test("f2", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f2 = screen.queryByTestId("lname");
    waitFor(() => expect(getByTestId(f2)).toBeInTheDocument());
})
test("f3", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f3 = screen.queryByTestId("uname");
    waitFor(() => expect(getByTestId(f3)).toBeInTheDocument());
})
test("f4", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f5 = screen.queryByTestId("pass");
    waitFor(() => expect(getByTestId(f5)).toBeInTheDocument());
})
test("f6", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f6 = screen.queryByTestId("email");
    waitFor(() => expect(getByTestId(f6)).toBeInTheDocument());
})
test("f7", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f7 = screen.queryByTestId("phone");
    waitFor(() => expect(getByTestId(f7)).toBeInTheDocument());
})
test("f8", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f8 = screen.queryByTestId("addess");
    waitFor(() => expect(getByTestId(f8)).toBeInTheDocument());
})
test("f9", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f9 = screen.queryByTestId("q1");
    waitFor(() => expect(getByTestId(f9)).toBeInTheDocument());
})
test("f10", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f10 = screen.queryByTestId("q2");
    waitFor(() => expect(getByTestId(f10)).toBeInTheDocument());
})
test("f11", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f11 = screen.queryByTestId("q3");
    waitFor(() => expect(getByTestId(f11)).toBeInTheDocument());
})
test("f12", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f12 = screen.queryByTestId("logcheck");
    waitFor(() => expect(getByTestId(f12)).toBeInTheDocument());
})


