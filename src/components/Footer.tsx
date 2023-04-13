import { FunctionComponent } from "react";
import "../css/footer.css"

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (<>
        <div className="clear"></div>
        <footer className="footer text-center text-white fixed-bottom">

            <div className="container pt-2">
                <div className="text-center text-dark m-3">
                    {year} ©  Copyright: Almog Liebermensch
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;