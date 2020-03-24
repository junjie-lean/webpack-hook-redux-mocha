/*
 * @Author: junjie.lean
 * @Date: 2020-03-23 13:28:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-23 13:33:33
 */

export default function Footer(props) {
  const jump = to => {
    props.history.push(`/${to}`);
  };

  return (
    <div>
      <Antd.Button
        type="link"
        onClick={() => {
          jump("changelog");
        }}
      >
        {" "}
        changelog
      </Antd.Button>
      <Antd.Button
        type="link"
        onClick={() => {
          jump("loading");
        }}
      >
        {" "}
        loading
      </Antd.Button>
    </div>
  );
}
