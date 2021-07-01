// domain.com/
import * as React from "react";
import { Fragment } from "react";
import Link from 'next/link';
import { Image, Layout, Menu, Space} from "antd";
import logo from '../../../pages/assets/dreamchaser_logo.png';

const {
    Header,
} = Layout;

const dc_logo = "../../../public/assets/dreamchaser_logo.png";

const NavigationBar = () => {
    return (
            <Header style={{ backgroundColor: '#808080' }} >
                <Space style={{ float: "left" }}>
                    {/*<Image alt='DreamChaser' src='../../../pages/assets/dreamchaser_logo.png'/>*/}
                    <Menu
                        style={{ backgroundColor: '#808080'}}
                        mode="horizontal">
                        <Menu.Item key='1'>
                            <Link href='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Link href='/groups'>Groups</Link>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Link href='/groups'>User</Link>
                        </Menu.Item>
                    </Menu>
                </Space>
                <Space style={{ float: "right" }}>
                </Space>
            </Header>
)
};

export default NavigationBar;
