import React, {Component} from "react";

import "./styles.css";
import logo from "./abc.png";
import first from "./1.jpg";
import second from "./2.jpg";
import third from "./3.jpg";

export class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer"></div>

                <div className="copyright">Copyright © 2004–2021 FITNESS Inc., FITNESS logo and related marks are
                    registered trademarks of FITNESS.
                </div>
            </>
        );
    }
}
