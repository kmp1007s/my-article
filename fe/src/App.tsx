import React from "react";

import Button from "./atom/Button";
import Input from "./atom/Input";

function App() {
  return (
    <div className="App">
      <div>
        <h1>NewsPedia</h1>
        <p>
          뉴스피디아는 기사와 사전을 동시에 검색하고 관심가는 기사를 따로 저장할
          수 있는 복합검색, 저장사이트입니다.
        </p>
      </div>
      <div>
        <div>
          <label htmlFor="radioNews">뉴스</label>
          <input type="radio" id="radioNews" name="radioSearch" />
          <label htmlFor="radioPedia">사전</label>
          <input type="radio" id="radioPedia" name="radioSearch" />
        </div>
        <Input type="text" placeholder="검색" />
        <Button>검색</Button>
      </div>
    </div>
  );
}

export default App;
