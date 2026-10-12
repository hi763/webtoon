/**
 * [선생님 전용 웹툰 데이터 관리 파일]
 * 
 * GitHub 저장소 권장 폴더 구조:
 * ├── index.html
 * ├── webtoondata.js
 * └── images/
 *     ├── toon_01/
 *     │   ├── cover.jpg
 *     │   ├── 01.jpg
 *     │   ├── 02.jpg
 *     │   └── 03.jpg
 *     └── toon_02/
 *         ├── cover.jpg
 *         ├── 01.jpg
 *         └── 02.jpg
 * 
 * ※ cuts 항목에는 각 작품 폴더 안의 파일명들을 쉼표(,)로 연결해서 적어주시면 됩니다.
 * ※ coverUrl을 비워둘 경우 cuts의 첫 번째 이미지가 표지로 자동 지정됩니다.
 */

window.WEBTOON_DATA = [
  {
    id: "toon_01",
    title: "해와 달이된 오누이",
    author: "2학년 김○아",
    genre: "전래동화",
    coverUrl: "images/toon_01/cover.png",
    cuts: "images/toon_01/01.png, images/toon_01/02.png, images/toon_01/03.png, images/toon_01/04.png,images/toon_01/05.png, images/toon_01/06.png, images/toon_01/07.png, images/toon_01/08.png, images/toon_01/09.png, images/toon_01/10.png"
  }
 ];