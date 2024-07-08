import "../assets/css/main.css";

export default function CardNews() {
  return (
    <div className="mainCard">
      <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg" />
      <div className="cardBox">
        <div>
          <mark>mizzxi blog NEWS ! 💬</mark>
        </div>
      </div>
      <img src="https://cdn.pixabay.com/photo/2013/07/13/11/56/metro-159004_1280.png" />
      <div className="cardBox">
        <div>
          mizzxi.site 도메인 구매 후 AWS EC2를 사용해서 서버 배포 완료
          <br />
          <br />
          <a href="project-subwayGame">- 프로젝트 설명 읽으러 가기 -</a>
          <br />
          <a href="https://subwaygame.mizzxi.site">- 지하철 게임하러 가기 -</a>
        </div>
      </div>
    </div>
  );
}
