/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-23 17:48:43
 */

import "./../../style/index.scss";
import { connect, useSelector } from "react-redux";
import Footer from "./../components/component-footer";
function Home(props) {
  const {
    test_reducer: { data }
  } = useSelector(state => state);

  const [stringSource] = useState("Write nothing, deploy nowhere...");
  const [string, setString] = useState("");
  // let string = useRef();
  let timer = useRef();
  useEffect(() => {
    let b = 0;
    timer.current = setInterval(() => {
      // string.current = stringSource.slice(0, b);
      setString(stringSource.slice(0, b + 1));
      b++;
      if (b == stringSource.length) {
        clearInterval(timer.current);
      }
    }, 120);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="lean-homeStyle">
      <div>
        <Antd.Button type="link">
          <a href="https://github.com/kelseyhightower/nocode" target="_blank">
            {string}
          </a>
        </Antd.Button>
        <span className="lean-homeCursor">|</span>
      </div>

      <Footer {...props} />
    </div>
  );
}

export default connect(store => store)(Home);
