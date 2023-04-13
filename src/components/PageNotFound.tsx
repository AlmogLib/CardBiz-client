import { FunctionComponent } from "react";

interface PageNotFoundProps {

}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
    return (<>
        <h3 className="display-3">404 Page Not Found</h3>
    </>);
}

export default PageNotFound;