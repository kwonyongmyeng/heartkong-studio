# Heartkong Studio

마음을 건네는 캐릭터 브랜드 Heartkong의 굿즈 스토어·작가·강연 소개 사이트입니다.

## 구성

- `dist/index.html` — 페이지 구조
- `dist/styles.css` — 반응형 디자인과 인터랙션
- `dist/script.js` — 메인·상품 슬라이드, 장바구니, 모달
- `dist/firebase-auth.js` — Firebase Authentication 연결
- `dist/firebase-config.js` — Firebase 웹 앱 설정

## 로컬 실행

```powershell
python -m http.server 4173 --directory dist
```

실제 Firebase 인증을 사용하려면 `dist/firebase-config.js`에 Firebase 웹 앱 구성값을 입력해야 합니다.
