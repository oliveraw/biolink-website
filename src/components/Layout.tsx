'use client'

import Nav from "./Nav"

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: DashboardLayoutProps) {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    )
}