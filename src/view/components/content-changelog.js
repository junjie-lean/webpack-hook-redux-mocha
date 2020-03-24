/*
 * @Author: junjie.lean
 * @Date: 2020-03-19 14:41:22
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-03-23 09:42:50
 */

import changelogMD from "./../../../CHANGELOG.md";

export default function ChangeLog() {
  return (
    <F>
      <div
        dangerouslySetInnerHTML={{ __html: changelogMD }}
        className="lean-markdownContent"
      ></div>
    </F>
  );
}

