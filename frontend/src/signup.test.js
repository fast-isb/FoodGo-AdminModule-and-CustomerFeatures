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
    const signupBtton = screen.getByTestId("checkSignBut");
    waitFor(() => expect(getByTestId(signupBtton)).toBeInTheDocument());
})

test("f1", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f1 = screen.getByTestId("fname");
    waitFor(() => expect(getByTestId(f1)).toBeInTheDocument());
})

test("f2", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f2 = screen.getByTestId("lname");
    waitFor(() => expect(getByTestId(f2)).toBeInTheDocument());
})
test("f3", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f3 = screen.getByTestId("uname");
    waitFor(() => expect(getByTestId(f3)).toBeInTheDocument());
})
test("f4", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f5 = screen.getByTestId("pass");
    waitFor(() => expect(getByTestId(f5)).toBeInTheDocument());
})
test("f6", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f6 = screen.getByTestId("email");
    waitFor(() => expect(getByTestId(f6)).toBeInTheDocument());
})
test("f7", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f7 = screen.getByTestId("phone");
    waitFor(() => expect(getByTestId(f7)).toBeInTheDocument());
})
test("f8", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f8 = screen.getByTestId("address");
    waitFor(() => expect(getByTestId(f8)).toBeInTheDocument());
})
test("f9", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f9 = screen.getByTestId("q1");
    waitFor(() => expect(getByTestId(f9)).toBeInTheDocument());
})
test("f10", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f10 = screen.getByTestId("q2");
    waitFor(() => expect(getByTestId(f10)).toBeInTheDocument());
})
test("f11", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f11 = screen.getByTestId("q3");
    waitFor(() => expect(getByTestId(f11)).toBeInTheDocument());
})
test("f12", () => {
        render(<MemoryRouter>
            <SignUp />
        </MemoryRouter>)
    const f12 = screen.getByTestId("logcheck");
    waitFor(() => expect(getByTestId(f12)).toBeInTheDocument());
})


