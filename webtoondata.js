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
 * 장르: 학원물, 일상/개그, 판타지, SF/스릴러, 자유창작, 전래동화
 */

window.WEBTOON_DATA = [
  {
    id: "toon_01",
    title: "해와 달이된 오누이",
    author: "2학년 김○아",
    genre: "전래동화",
    coverUrl: "images/toon_01/cover.png",
    cuts: "images/toon_01/01.png, images/toon_01/02.png, images/toon_01/03.png, images/toon_01/04.png,images/toon_01/05.png, images/toon_01/06.png, images/toon_01/07.png, images/toon_01/08.png, images/toon_01/09.png, images/toon_01/10.png"
  },
  {
    id: "toon_02",
    title: "마법사의 삶을 살고 있습니다",
    author: "5학년 김○온",
    genre: "판타지",
    coverUrl: "images/toon_02/cover.png",
    cuts: "images/toon_02/01.jpg, images/toon_02/02.jpg"
  },
  {
    id: "toon_03",
    title: "숲속에서 일어난 일",
    author: "5학년 변○린",
    genre: "판타지",
    coverUrl: "images/toon_03/cover.png",
    cuts: "images/toon_03/01.jpg, images/toon_03/02.jpg,  images/toon_03/03.jpg,  images/toon_03/04.jpg,  images/toon_03/05.jpg"
  },
  {
    id: "toon_05",
    title: "갑자기 방에 갇혀버렷습니다?",
    author: "5학년 정○서",
    genre: "일상/개그",
    coverUrl: "images/toon_05/cover.png",
    cuts: "images/toon_05/01.jpg, images/toon_05/02.jpg, images/toon_05/03.jpg, images/toon_05/04.jpg"
  },
  {
    id: "toon_07",
    title: "노른자 프라이",
    author: "1학년 이○호",
    genre: "판타지",
    coverUrl: "images/toon_07/cover.png",
    cuts: "images/toon_07/01.jpg, images/toon_07/02.jpg, images/toon_07/03.jpg, images/toon_07/04.jpg"
  },
  {
    id: "toon_08",
    title: "18세 수아의 위험천만 생존기",
    author: "2학년 이○연",
    genre: "판타지",
    coverUrl: "images/toon_08/cover.png",
    cuts: "images/toon_08/01.jpg, images/toon_08/02.jpg, images/toon_08/03.jpg, images/toon_08/04.jpg, images/toon_08/05.jpg"
  }
 ];
