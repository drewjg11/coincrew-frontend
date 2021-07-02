// domain.com/groups
import * as React from "react";
import GroupItem from "@components/Groups/GroupItem";
import { Fragment } from "react";
import NavigationBar from "@components/UI/NavigationBar";

const Users = () => {
    return (
        <Fragment>
            <NavigationBar />
            <h1>Users Page</h1>
            <GroupItem />
        </Fragment>

    )
};

export default Users;
