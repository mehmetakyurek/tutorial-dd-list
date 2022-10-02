import React, { FC, ReactElement } from "react";
import { DDList } from "./DDList"
import "./style/Container.css"
export const DDContainer: FC<{ children?: ReturnType<typeof DDList> | Array<ReturnType<typeof DDList>> }> = (props): ReactElement => {
    return <div className="dd-container">
        {props.children}
    </div>
}