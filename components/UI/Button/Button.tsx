import * as React from "react";
import { Button } from "antd";

type ButtonProps = {
    text: string;
};

function ButtonComponent ({ text }: ButtonProps) {
    return <Button>text</Button>
}

export default ButtonComponent;
