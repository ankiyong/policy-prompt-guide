# 정책보고서, 한 단계씩

수강생에게 단계별 AI 프롬프트를 제공하는 GitHub Pages용 정적 웹페이지입니다. HTML5 UP의 Multiverse 사진 격자와 하단 메뉴를 참고하고, 사진 확대 기능을 단계별 프롬프트 창으로 교체했습니다.

- 실습 페이지: https://ankiyong.github.io/policy-prompt-guide/
- 공개 저장소: https://github.com/ankiyong/policy-prompt-guide

## 구성

- 공통 지침 + 보고서 작성 1~9단계: 총 10개 카드
- 제공된 프롬프트 13개 + 단계별 결정 기록 1개
- 카드 선택 → 단계 설명·예시 확인 → 항목별 입력 → 프롬프트 생성 → 완성된 본문 복사
- 넓은 화면에서는 입력창과 템플릿·완성 본문을 좌우로 배치하고 각각 스크롤합니다. 생성·복사 버튼은 각 영역에서 계속 보입니다.
- 공통 지침 바로 복사, 이전·다음 단계 이동, 전체 기본 프롬프트 TXT 다운로드
- 자료 수집 및 분석: 3개 하위 프롬프트 탭
- 최종 검토 및 수정: 2개 하위 프롬프트 탭
- 모바일 화면 및 키보드 탐색 지원, Esc로 창 닫기
- `#step-2` 등 단계 주소 공유 가능

## 먼저 열어보기

압축을 푼 뒤 `index.html`을 브라우저에서 엽니다. 별도 설치나 빌드가 필요하지 않습니다. 이미지·스타일·스크립트가 모두 포함되어 있으므로 폴더 구조를 유지하세요.

복사 기능이 제한된 브라우저에서는 안내에 따라 선택된 내용을 Ctrl+C 또는 ⌘C로 복사합니다. 모바일에서는 내용을 길게 눌러 복사할 수 있습니다.

## 프롬프트 만들기

1. **공통 지침**은 입력 없이 복사하여 AI 대화 시작 시 사용합니다.
2. 필요한 단계와 하위 프롬프트 탭을 선택하고, 항목별 입력창을 모두 채웁니다. 아직 모르는 정보는 `확인 필요`, 적용되지 않는 항목은 `해당 없음`으로 입력합니다.
3. **프롬프트 생성**을 누르면 기존 템플릿의 입력 자리에 작성한 내용이 들어갑니다. 완성된 본문을 확인하고 복사해 AI 대화에 붙여 넣습니다.
4. 생성 후 입력을 수정했다면 다시 생성해야 복사할 수 있습니다.

`[첨부]` 항목에는 양식의 텍스트나 파일명을 적습니다. 실제 파일은 사용하는 AI 대화에 별도로 첨부하세요.

입력과 생성 결과는 탭·단계를 이동하거나 창을 닫았다 다시 열어도 현재 페이지 안에서 유지됩니다. 새로고침하거나 페이지를 닫으면 초기화됩니다. 로컬 저장소 저장, 서버 전송, AI 직접 호출은 하지 않습니다. **전체 프롬프트 TXT 다운로드**는 입력 내용이 반영되지 않은 기본 템플릿을 제공합니다.

## GitHub Pages 배포 및 업데이트

공개 저장소 `ankiyong/policy-prompt-guide`의 `master` 브랜치 루트를 배포 소스로 사용합니다.

1. 수정한 배포용 파일을 저장소의 `master` 브랜치에 업로드하고 커밋합니다. 저장소 최상위에 `index.html`, `assets`, `images/steps`, `prompts.txt`, `README.md`, `LICENSE.txt`, `TEMPLATE_README.txt`가 위치하도록 폴더 구조를 유지하세요.
2. 저장소의 **Settings → Pages → Build and deployment**에서 **Source → Deploy from a branch**, **Branch → master**, **폴더 → /(root)**로 설정합니다.
3. 배포가 완료되면 https://ankiyong.github.io/policy-prompt-guide/ 에서 반영된 내용을 확인합니다. 해당 주소를 수강생에게 공유하면 됩니다.

기존 데모 JPG, 이미지 시안·원본을 담은 `output` 폴더, ZIP 파일은 배포에 포함하지 않습니다. `tests` 폴더의 Node.js 테스트는 로컬 검증용이며 현재 공개 저장소의 배포 파일에는 포함하지 않았습니다.

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 내용 수정

| 파일 | 수정할 내용 |
| --- | --- |
| `assets/js/prompts.js` | 카드 제목·설명·예시·전체 프롬프트 |
| `assets/css/guide.css` | 색상·글꼴·카드·팝업·반응형 배치 |
| `assets/js/guide.js` | 카드·입력창·팝업 표시, 생성·복사, 탭·단계 이동과 페이지 내 입력 상태 관리 |
| `assets/js/prompt-builder.js` | 템플릿의 입력 항목 추출과 입력값 치환 |
| `index.html` | 상단 제목·안내·하단 메뉴 |
| `images/steps/common.webp`, `step-1.webp`~`step-9.webp` | 공통 지침~9단계의 생성 일러스트. 카드와 상세창에 함께 표시 |
| `prompts.txt` | 수강생이 내려받는 전체 문안 |

`prompts.js`를 수정한 경우 다운로드용 `prompts.txt`도 같은 내용으로 수정하세요. 원문 프롬프트의 `[ ]`와 `[첨부]`는 항목별 입력창으로 표시되며, 생성 시 입력값으로 바뀝니다. 입력 자리 이외의 기본 문구는 유지됩니다.

## 원본 및 변경 사항

- 원본 템플릿: Multiverse by HTML5 UP — https://html5up.net/multiverse
- 템플릿 작성자: HTML5 UP / @ajlkn
- 원본 라이선스: Creative Commons Attribution 3.0 Unported. `LICENSE.txt`와 `TEMPLATE_README.txt` 포함.
- 현재 이미지: 각 단계의 의미를 표현하도록 AI로 생성한 일러스트 10개. 원본 PNG와 픽셀이 동일한 무손실 WebP로 저장했습니다. `prompts.js`의 단계 `id`와 이미지 파일명이 대응합니다.
- 기존 `images/01.jpg`~`10.jpg`는 HTML5 UP Multiverse 공개 데모 이미지로 로컬 작업 폴더에만 보관하며, 공개 저장소와 배포 파일에서 제외했습니다. 현재 화면에서는 사용하지 않습니다. 원본 템플릿 안내의 Unsplash 크레딧은 유지했습니다.
- 변경 사항: 한국어 학습용 문안, 카드 구성, 접근성 있는 프롬프트 대화상자, 항목별 입력과 프롬프트 생성, 복사·탭·이전/다음 이동, 모바일 배치. 원본 jQuery 사진 확대 플러그인은 새 기능에 맞는 순수 JavaScript로 교체했습니다.
- 원본의 별도 이미지·글꼴·스크립트 요청 없이 이 파일 묶음만으로 동작합니다. 사용 안내의 원본 사이트 링크는 클릭 시 외부 페이지로 이동합니다.
