/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-04-21 13:06:40
 */

import "./../../style/index.scss";
import Footer from "./../components/component-footer";
import Hook from "./../components/content-hook";
import SVG from "./../public/public-component-svg";

function Home(props) {

  const [stringSource] = useState("  Write nothing, deploy nowhere...");
  const [string, setStr] = useState("");

  let timer = useRef();

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

  const hookComponent = useMemo(() => {
    return <Hook />;
  }, [props]);

  return (
    <div className="lean-homeStyle">
   
      <div>
        <Antd.Button type="link" style={{ paddingRight: 2 }}>
          <a href="https://github.com/kelseyhightower/nocode" target="_blank">
            {string}
          </a>
        </Antd.Button>
        <span className="lean-homeCursor">|</span>
      </div>
      {/* {hookComponent} */}
      {/* <SVG type="add" /> */}
      <Footer {...props} />
    </div>
  );
}

export default Home;
