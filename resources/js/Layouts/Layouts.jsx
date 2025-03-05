import { Link } from "@inertiajs/react";
import React from "react";

const Layouts = ({ children }) => {

    return (
        <div>
            <header >
            {/* <header className="bg-[#0f1a8380]"> */}
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    {/* <Link className="nav-link" href="/">Home</Link> */}
                    <Link  className="nav-link" href="/create">Create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>

        </div>
    );

}
 export default Layouts;
