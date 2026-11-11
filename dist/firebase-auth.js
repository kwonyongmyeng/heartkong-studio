const config=window.HEARTKONG_FIREBASE_CONFIG;
if(config?.apiKey){
  const {initializeApp}=await import("https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js");
  const {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,onAuthStateChanged}=await import("https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js");
  const auth=getAuth(initializeApp(config));
  const message=(text)=>{const el=document.querySelector('.toast');el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)};
  document.querySelectorAll('[data-auth]').forEach(form=>form.addEventListener('submit',async event=>{event.preventDefault();const data=new FormData(form),email=String(data.get('email')),password=String(data.get('password'));try{if(form.dataset.auth==='signup'){const result=await createUserWithEmailAndPassword(auth,email,password);await updateProfile(result.user,{displayName:String(data.get('name'))});message('회원가입이 완료됐어요 ♥')}else{await signInWithEmailAndPassword(auth,email,password);message('로그인했어요 ♥')}form.closest('dialog').close();document.body.classList.remove('locked')}catch(error){message(`인증 실패: ${error.code||'설정을 확인해 주세요'}`)}}));
  onAuthStateChanged(auth,user=>{const login=document.querySelector('[data-open="login"]');if(user)login.textContent=user.displayName||'내 계정'});
}
