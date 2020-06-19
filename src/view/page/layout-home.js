/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-06-18 17:49:57
 */

import "./../../style/index.scss";
import Antd from "antd";
// import SVG from "./../public/public-component-svg";
import { request as Ajax } from "./../../util/request";

function Home(props) {
    const [stringSource] = useState("  Write nothing, deploy nowhere...");
    const [string, setStr] = useState("");

    let timer = useRef();

    const ajaxtest = async () => {
        let res = await Ajax("public/heartbeat", {});
        console.log(res);
    };

    useEffect(() => {
       
        let b = 0;
        timer.current = setInterval(() => {
            setStr(stringSource.slice(0, b + 1));
            b++;
            if (b == stringSource.length) {
                clearInterval(timer.current);
            }
        }, 150);
        return () => {
            clearInterval(timer.current);
        };
    }, []);

    useEffect(() => {
        ajaxtest();
    }, []);

    return (
        <div className="lean-homeStyle">
            <div>
                <Antd.Button type="link" style={{ paddingRight: 2, fontSize: 32 }}>
                    <a href="https://github.com/kelseyhightower/nocode" target="_blank">
                        {string}
                    </a>
                </Antd.Button>
                <span className="lean-homeCursor"> | </span>
            </div>
        </div>
    );
}

export default Home;
