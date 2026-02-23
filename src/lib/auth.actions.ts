"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// In a real application without a DB, you'd store these in an environment variable e.g. CLIENT_CREDENTIALS
// Format could be: email:password,email:password
const VALID_ACCOUNTS = [
    { email: "consult.morleyai@gmail.com", password: "securepassword123" },
    { email: "admin@morley.ai", password: "adminpassword" }
];

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Check if credentials match any of our allowed accounts
    // In production, you would check against process.env.AUTHORIZED_CLIENTS
    const isValid = VALID_ACCOUNTS.some(
        (acc) => acc.email === email && acc.password === password
    );

    if (!isValid) {
        return { error: "Invalid email or password" };
    }

    // Set a secure HTTP-only cookie indicating the user is authenticated
    // In a real app, this should be a signed JWT. For simplicity, we just set a session flag.
    const cookieStore = await cookies();
    cookieStore.set("morley_client_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    redirect("/dashboard");
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("morley_client_session");
    redirect("/login");
}
