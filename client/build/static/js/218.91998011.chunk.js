"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[218],{9726:(n,e,t)=>{t.d(e,{PR:()=>c,o1:()=>s,x4:()=>a});var r=t(5280);const o="".concat(r.yK,"/credentials"),a=async(n,e)=>{try{const t=await fetch("".concat(o,"/loginuser"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:e})});if(!t.ok)throw new Error("Login failed");const r=await t.json();return"success"===r.status?(localStorage.setItem("authtoken",r.data.token),{status:"success",message:"Login successful",name:r.data.name}):{status:"error",message:r.error||"Invalid credentials"}}catch(t){return console.error("Error during login:",t),{status:"error",message:"Something went wrong!"}}},s=async(n,e,t)=>{try{const r=await fetch("".concat(o,"/createuser"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:e,password:t})});if(!r.ok)throw new Error("Account creation failed");const a=await r.json();return"success"===a.status?(localStorage.setItem("authtoken",a.data.authtoken),{status:"success",message:"Account created successfully",name:n}):{status:"error",message:a.error||"Error creating account"}}catch(r){return console.error("Error during account creation:",r),{status:"error",message:"Something went wrong!"}}},c=async()=>{try{const n=await fetch("".concat(o,"/getuser"),{method:"GET",headers:{"Content-Type":"application/json",authtoken:localStorage.getItem("authtoken")}});if(!n.ok)throw new Error("Failed to fetch user");const e=await n.json();return"success"===e.status?{status:"success",message:"User data fetched successfully",name:e.data.name}:{status:"error",message:e.error||"Error fetching user data"}}catch(n){return console.error("Error during user data fetch:",n),{status:"error",message:"Something went wrong!"}}}},5280:(n,e,t)=>{t.d(e,{Ii:()=>c,ON:()=>d,o2:()=>i,yK:()=>r});const r="".concat("","/api"),o=(n,e,t)=>{for(let r=0;r<n.length;r++){if(n[r][e]===t)return!0}return!1},a=(n,e)=>{const t=[];return[...n,...e].forEach((n=>{o(t,"product_id",n.product_id)||t.push(n)})),t},s=(n,e)=>{const t=[];return e.forEach((e=>{o(n,"product_id",e.product_id)||t.push(e)})),t},c=(n,e)=>({union:a(n,e),difference:s(n,e)}),i=(n,e,t)=>{for(let r=0;r<n.length;r++){if(n[r][e]===t)return r}return-1},d=n=>{let e=0;for(let t=0;t<n.length;t++){const r=n[t];e+=r.quantity*r.price}return e}},1218:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var r,o=t(168),a=t(6747),s=t(2791),c=t(7689),i=t(1087),d=t(8470),l=t(9726),u=t(184);const h=d.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n\n  img {\n    width: 100px;\n    object-fit: contain;\n    margin-bottom: 20px;\n  }\n\n  .container {\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    max-width: 400px;\n    width: 100%;\n    text-align: center;\n  }\n\n  h1 {\n    font-size: 1.8rem;\n    margin-bottom: 20px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  h5 {\n    text-align: left;\n    margin: 10px 0;\n  }\n\n  input {\n    width: 95%;\n    padding: 10px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    transition: border-color 0.3s ease;\n  }\n\n  input:focus {\n    outline: none;\n    border-color: #007185;\n  }\n\n  .border_red {\n    border-color: #ff0000 !important;\n  }\n\n  button {\n    width: 100%;\n    height: 40px; /* Adjust height as needed */\n    background-color: #f0c14b;\n    border: 1px solid;\n    border-color: #a88734 #9c7e31 #846a29;\n    color: #111;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n  }\n\n  button:hover {\n    background-color: #ddb347;\n  }\n\n  .policies {\n    margin-top: 20px;\n    font-size: 0.8rem;\n    color: #555;\n  }\n\n  .signInPage {\n    margin-top: 20px;\n  }\n\n  .login {\n    color: #007185;\n    text-decoration: none;\n    font-weight: bold;\n    transition: color 0.3s ease;\n  }\n\n  .login:hover {\n    color: #004554;\n  }\n\n  @media (max-width: 600px) {\n    .container {\n      max-width: 90%;\n    }\n  }\n"]))),g=()=>{const n=(0,c.s0)(),[e,t]=(0,s.useState)(""),[r,o]=(0,s.useState)(""),[d,g]=(0,s.useState)(""),[p,m]=(0,s.useState)(""),x=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n);return(0,u.jsxs)(h,{children:[(0,u.jsx)(i.rU,{to:"/",children:(0,u.jsx)("img",{src:a,alt:""})}),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h1",{children:"Create account"}),(0,u.jsxs)("form",{children:[(0,u.jsx)("h5",{children:"Your name"}),(0,u.jsx)("input",{type:"text",value:e,onChange:n=>{t(n.target.value)},placeholder:"First and last name",required:!0}),(0,u.jsx)("h5",{children:"Email"}),(0,u.jsx)("input",{type:"text",value:r,onChange:n=>{o(n.target.value)},placeholder:"Enter Email",required:!0}),(0,u.jsx)("h5",{children:"Password"}),(0,u.jsx)("input",{type:"password",value:d,className:"".concat(d!==p?"border_red":""),onChange:n=>{g(n.target.value)},placeholder:"At least 8 characters",required:!0}),(0,u.jsx)("h5",{children:"Confirm Password"}),(0,u.jsx)("input",{type:"password",value:p,className:"".concat(d!==p?"border_red":""),onChange:n=>{m(n.target.value)},placeholder:"Re-enter Password",required:!0}),(0,u.jsx)("button",{type:"submit",onClick:async t=>{if(t.preventDefault(),d!==p||!x(r))return;"success"===(await(0,l.o1)(e,r,d)).status?n("/"):alert("Something went Wrong ! Please re-try")},disabled:d!==p||!x(r),children:"Continue"})]}),(0,u.jsx)("p",{className:"policies",children:"By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice."}),(0,u.jsx)("div",{className:"signInPage",children:(0,u.jsxs)("p",{children:["Already have an account? ",(0,u.jsx)(i.rU,{to:"/login",className:"login",children:"Sign in"})]})})]})]})}},6747:(n,e,t)=>{n.exports=t.p+"static/media/bw-amazon-logo.c14905338d156db029d6.png"}}]);
//# sourceMappingURL=218.91998011.chunk.js.map