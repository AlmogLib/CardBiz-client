import { FunctionComponent } from "react";
import "../css/about.css"


interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (<>
        <div className="container">
            <div className="row mt-5">
                <img src="/Workspace2.jpeg" alt="" className="col-md-6" />
                <div className="col-md-6">
                    <h3 className="display-3">Who Are We?</h3>
                    <p className="mt-3">
                        You just started a new business and need some publicity? Do you want to gain more access in the virtual world?
                        CardBiz is just what you look for.
                        Create Your Digital Business Card Today.
                    </p>
                    <h3 className="display-3 mt-5">What is a digital business card?</h3>
                    <p className="mt-3">Digital business cards are the modern way to share contact information. Also known as virtual and electronic business cards, digital business cards are more interactive, cost-effective, and sustainable than their physical counterparts. One significant benefit of digital business cards is that they can be shared with anyone, anywhere. </p>
                </div>
            </div>
        </div>
    </>);
}

export default About;