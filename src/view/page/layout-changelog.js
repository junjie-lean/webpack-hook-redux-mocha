/*
 * @Author: junjie.lean
 * @Date: 2020-03-23 13:27:57
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-23 13:34:35
 */

import ChangelogCom from "./../components/content-changelog";
import Footer from "./../components/component-footer";
export default function Changelog(props) {
  return (
    <>
      <ChangelogCom {...props} />
      <Footer {...props} />
    </>
  );
}
