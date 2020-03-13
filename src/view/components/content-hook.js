/*
 * @Author: junjie.lean
 * @Date: 2020-03-11 15:19:52
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-11 16:57:38
 */

export default function Hooks(props) {
  useEffect(() => {
    console.log("didMount");
  }, []);

  useEffect(() => {
    console.log("231");
  }, []);
  return (
    <F>
      <h3>hooks</h3>
    </F>
  );
}
