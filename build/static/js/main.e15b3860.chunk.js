(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(25),i=c.n(s),r=(c(48),c(39)),o=c(13),l=c(20),j=c(10),d=(c(49),c(2)),u=Object(a.createContext)(),h=function(e){var t=e.reducer,c=e.initalState,n=e.children;return Object(d.jsx)(u.Provider,{value:Object(a.useReducer)(t,c),children:n})},m=function(){return Object(a.useContext)(u)},b=(c(51),c(40)),O=c.n(b),p=c(33),_=c(22),g=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(_.a)(Object(_.a)({},e),{},{basket:[].concat(Object(p.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(p.a)(e.basket);return c>=0?a.splice(c,1):console.warn("No id Found"),Object(_.a)(Object(_.a)({},e),{},{basket:a});case"SET_USER":return Object(_.a)(Object(_.a)({},e),{},{user:t.user});default:return e}};var x=function(){var e,t=m(),c=Object(o.a)(t,2),a=c[0];return c[1],Object(d.jsxs)("div",{className:"subtotal",children:[Object(d.jsx)(O.a,{renderText:function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["Subtotal (",a.basket.length," items): ",Object(d.jsx)("strong",{children:e})]}),Object(d.jsxs)("small",{className:"subtotal__gift",children:[Object(d.jsx)("input",{type:"checkbox"}),"This Order contains a gift."]})]})},decimalScale:2,value:(e=a.basket,null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(d.jsx)("button",{children:"Processed to checkout"})]})};c(55),c(56);var v=function(e){var t=m(),c=Object(o.a)(t,2),a=(c[0],c[1]);return Object(d.jsxs)("div",{className:"checkoutProduct",children:[Object(d.jsx)("img",{className:"checkoutProduct__image",src:e.image,alt:""}),Object(d.jsxs)("div",{className:"checkoutProduct__info",children:[Object(d.jsx)("p",{className:"checkoutProduct__title",children:e.title}),Object(d.jsxs)("p",{className:"checkoutProduct__price",children:[Object(d.jsx)("small",{children:"$"}),Object(d.jsx)("strong",{children:e.price})]}),Object(d.jsx)("div",{className:"checkoutProduct__rating",children:Array(e.rating).fill().map((function(e,t){return Object(d.jsx)("p",{children:"\u2b50\ufe0f"})}))}),Object(d.jsx)("button",{onClick:function(){a({type:"REMOVE_FROM_BASKET",id:e.id})},children:"Remove from Basket"})]})]})};var f=function(){var e,t=m(),c=Object(o.a)(t,2),a=c[0];return c[1],Object(d.jsxs)("div",{className:"checkout",children:[Object(d.jsxs)("div",{className:"checkout__left",children:[Object(d.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("h3",{children:["Hello,",null===(e=a.user)||void 0===e?void 0:e.email]}),Object(d.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),a.basket.map((function(e){return Object(d.jsx)(v,{id:e.id,image:e.image,price:e.price,rating:e.rating,title:e.title})}))]})]}),Object(d.jsx)("div",{className:"checkout__right",children:Object(d.jsx)(x,{})})]})},N=(c(57),c(41)),k=c.n(N),S=c(42),A=c.n(S),C=c(32),E=(C.a.initializeApp({apiKey:"AIzaSyDzo4ygb_iUq8YywpWdoXsELSkidM2JiXw",authDomain:"challenge-2b45d.firebaseapp.com",projectId:"challenge-2b45d",storageBucket:"challenge-2b45d.appspot.com",messagingSenderId:"77645371857",appId:"1:77645371857:web:7a917831f25a28400228f0",measurementId:"G-6X5FWY5TXQ"}).firestore(),C.a.auth());var y=function(){var e=m(),t=Object(o.a)(e,2),c=t[0];return t[1],Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(d.jsxs)("div",{className:"header__search",children:[Object(d.jsx)("input",{className:"header__searchInput",type:"text"}),Object(d.jsx)(k.a,{className:"header__searchIcon"})]}),Object(d.jsxs)("div",{className:"header__nav",children:[Object(d.jsx)(l.b,{to:"/login",children:Object(d.jsxs)("div",{onClick:function(){c.user&&E.signOut()},className:"header__option",children:[Object(d.jsx)("span",{className:"header__optionLineOne",children:"Hello Guest"}),Object(d.jsx)("span",{className:"header__optionLineTwo",children:c.user?"Sign Out":"Sign In"})]})}),Object(d.jsxs)("div",{className:"header__option",children:[Object(d.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(d.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(d.jsxs)("div",{className:"header__option",children:[Object(d.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(d.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(d.jsx)(l.b,{to:"/checkout",children:Object(d.jsxs)("div",{className:"header__optionBasket",children:[Object(d.jsx)(A.a,{}),Object(d.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:c.basket.length})]})})]})]})};c(66),c(67);var B=function(e){var t=m(),c=Object(o.a)(t,2),a=(c[0],c[1]);return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{children:e.title}),Object(d.jsxs)("p",{className:"product__price",children:[Object(d.jsx)("small",{children:"$"}),Object(d.jsx)("strong",{children:e.price})]}),Object(d.jsx)("div",{className:"product__rating",children:Array(e.rating).fill().map((function(e,t){return Object(d.jsx)("p",{children:"\u2b50\ufe0f"})}))})]}),Object(d.jsx)("img",{src:e.image,alt:""}),Object(d.jsx)("button",{onClick:function(){a({type:"ADD_TO_BASKET",item:{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating}})},children:"Add to Basket"})]})};var I=function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"home__container",children:[Object(d.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(d.jsxs)("div",{className:"home__row",children:[Object(d.jsx)(B,{id:644543218,title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(d.jsx)(B,{id:678534518,title:"Cracking the Coding Interview (Indian Edition)",price:499,image:"https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg",rating:4})]}),Object(d.jsxs)("div",{className:"home__row",children:[Object(d.jsx)(B,{id:678543218,title:"Samsung 109 cm (43 inches) 4K Ultra HD Smart LED TV",price:46990,image:"https://m.media-amazon.com/images/I/91oKbXQbBtL._AC_UY218_.jpg",rating:4}),Object(d.jsx)(B,{id:678233218,title:"Echo Dot (3rd Gen) \u2013 Smart speaker with Alexa (Black)",price:3499.99,image:"https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg",rating:5}),Object(d.jsx)(B,{id:678543338,title:"New Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Green (Latest Model, 4th Generation)",price:900,image:"https://m.media-amazon.com/images/I/71SAHzzQqkL._AC_UY218_.jpg",rating:5})]}),Object(d.jsx)("div",{className:"home__row",children:Object(d.jsx)(B,{id:678837218,title:"MSI Optix MAG241C 23.6 inch Full HD Curved Gaming Monitor, 144hz Refresh Rate, 1ms Response time, Anti Glare Panel and Adjustable Stand",price:18098,image:"https://m.media-amazon.com/images/I/51sp9mu5FzL._AC_UY218_.jpg",rating:4})})]})})};c(68);var w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),r=i[0],u=i[1],h=Object(j.f)();return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(d.jsxs)("div",{className:"login__container",children:[Object(d.jsx)("h1",{children:"Sign-in"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("h5",{children:"E-mail"}),Object(d.jsx)("input",{type:"text",value:c,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("h5",{children:"Password"}),Object(d.jsx)("input",{type:"password",value:r,onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),E.signInWithEmailAndPassword(c,r).then((function(e){e&&h.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(d.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of use & Sale. Please see our Privacy Notice. our Cookies Notice and our interest-Based Ads Notice."}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),E.createUserWithEmailAndPassword(c,r).then((function(e){e&&h.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var z=function(){var e=m(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){E.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(d.jsx)(l.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/login",children:Object(d.jsx)(w,{})}),Object(d.jsxs)(j.a,{path:"/checkout",children:[Object(d.jsx)(y,{}),Object(d.jsx)(f,{})]}),Object(d.jsxs)(j.a,{path:"/",children:[Object(d.jsx)(y,{}),Object(d.jsx)(I,{})]})]})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{initalState:{basket:[],user:null},reducer:g,children:Object(d.jsx)(z,{})})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.e15b3860.chunk.js.map