import React from "react";
import { FC, ReactElement } from "react";
import { DDItem } from "./DDItem";
import "./style/DDList.css"
export const DDList: FC<{children?: ReturnType<typeof DDItem> | ReturnType<typeof DDItem>[] }> = (props): ReactElement => {
    return <div className="dd-list">{props.children}</div>
}