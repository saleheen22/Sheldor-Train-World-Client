import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Sheldor || ${title}`;
    }, [title])
};
export default useTitle;