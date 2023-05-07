import Link from "next/link";
import { useRouter } from "next/router";

const portfolio = () => {
    const router = useRouter();
    return <div>Portfolio {router.query.id}
        <Link href="/">
        &nbsp;GO BACK
        </Link>  
    </div>;
};

export default portfolio;