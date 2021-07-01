// domain.com/groups
import * as React from "react";
import GroupItem from "@components/Groups/GroupItem";
import { Fragment } from "react";
import NavigationBar from "@components/UI/NavigationBar";

const Home = () => {
    return (
        <Fragment>
            <NavigationBar />
            <h1>Groups Page</h1>
            <GroupItem />
        </Fragment>

    )
};

export default Home;
