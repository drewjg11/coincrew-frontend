// domain.com/groups/
import * as React from "react";
import { useRouter } from "next/router";

const GroupDetail = () => {
    const router = useRouter();
    const groupId = router.query.groupId;
    console.log(groupId)

    return <h1>Group Detail Page {groupId}</h1>;
};

export default GroupDetail;
