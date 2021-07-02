import { useRouter } from "next/router";

const GroupDetail = () => {
    const router = useRouter();
    const groupId = router.query.groupId

    return <h1>Group Detail Page {groupId}</h1>
}

export default GroupDetail;