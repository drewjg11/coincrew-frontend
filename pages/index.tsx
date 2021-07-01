// domain.com/
import * as React from "react";
import { Fragment } from "react";
import NavigationBar from "@components/UI/NavigationBar";
import {Layout, Menu} from "antd";

const { Content , Header } = Layout

const Home = () => {
    return <Layout className='ant-layout'>
                <Header>
                    <Header style={{ backgroundColor: '#808080' }} >
                        <Menu>
                            <Menu.Item>Home</Menu.Item>
                            <Menu.Item>Home</Menu.Item>
                        </Menu>
                    </Header>
                </Header>
                <Content>
                    <h1>Home Page</h1>
                </Content>
            </Layout>
}
export default Home;
