/*
 * @Author: junjie.lean
 * @Date: 2020-03-11 15:19:52
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-16 21:11:01
 */

export default function Hooks(props) {
  useEffect(() => {
    console.log("didMount");
  }, []);

  useEffect(() => {
    console.log("231");
  }, []);

  const toOther = () => {
    window.to("http://localhost:4001", { params: "this is params" });
  };

  const send = () => {
    window.send({ data: "hehehehehe" });
  };

  return (
    <F>
      <h3>hooks</h3>
      <div>
        <Antd.Button onClick={toOther} type="primary">
          to other
        </Antd.Button>
        <br />
        <br />
        <br />
        <Antd.Button onClick={send} type="primary">
          send without open
        </Antd.Button>
      </div>
    </F>
  );
}
