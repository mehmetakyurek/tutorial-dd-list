import React, { FC, ReactElement } from "react"
import "./style/DDItem.css"
export const DDItem: FC<{children: any}> = (props): ReactElement => {
    return <div className="dd-item">{props.children}</div>
}