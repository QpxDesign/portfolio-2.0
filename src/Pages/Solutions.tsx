import React from "react";
import Header from "../Components/Header";
import SyntaxHighlightMatchesKey from "../Assets/syntax_highlight_matches_key.json";

export default function Solutions() {
  var var_names: any = [];
  function formatCodeWithHTML(code: any) {
    code = code.split("\n");
    var ans = "";
    for (var i = 0; i < code.length; i++) {
      if (code[i].match("\t") !== null && code[i].match("\t").length !== 0) {
        ans += `<span class='line indent'>${syntaxHighlightCodeWithHTML(
          code[i]
        )}</span>`;
      } else {
        ans += `<span class='line'>${syntaxHighlightCodeWithHTML(
          code[i]
        )}</span>`;
      }
    }
    console.log(var_names);
    return ans;
  }
  function syntaxHighlightCodeWithHTML(line: string) {
    SyntaxHighlightMatchesKey.map((item: any) => {
      if (!item.useRegex) {
        line = line.replaceAll(item.match, item.replaceWith);
      } else {
        line = line.replaceAll(new RegExp(item.match, "g"), item.replaceWith);
      }
      if (item.matchesVariableName) {
        //  console.log(line);
        console.log(item.match);
        console.log(line);
        console.log(line.match(item.match));
      }
    });

    return line;
  }
  return (
    <div className="page-wrapper">
      <Header />
      <h1
        className="center"
        style={{
          marginTop: ".5em",
          fontFamily: "Source Serif Pro",
          fontSize: "2.5em",
        }}
      >
        Solutions
      </h1>
      <div className="posts-wrapper">
        <div
          className={"code-block"}
          dangerouslySetInnerHTML={{
            __html: formatCodeWithHTML(
              `function test(){\n \t for (var i = 0; i < nerd; i++){\n\t}; \n}`
            ),
          }}
        ></div>
      </div>
    </div>
  );
}
