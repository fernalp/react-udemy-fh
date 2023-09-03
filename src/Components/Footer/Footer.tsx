import { ReactElement } from "react";

type FooterProps = {
    business: string,
};


const Footer = ({ business }: FooterProps): ReactElement => {
    return (
        <footer>
            <p>&copy; 2019-Present. All Rights Reserved {business}.</p>
        </footer>
    )
};

export default Footer;