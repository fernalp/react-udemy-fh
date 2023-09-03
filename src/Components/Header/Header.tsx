import { ReactNode } from 'react';

type HeaderProps = {
    title?: string,
    children: ReactNode
}

export const Header = ({ children, title = "Mi title" }: HeaderProps) => {
    return (
        <header>
            <h2>{title}</h2>
            <p>{children}</p>
        </header>
    )
}
