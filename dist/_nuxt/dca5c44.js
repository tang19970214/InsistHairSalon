(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{268:function(t,e,r){"use strict";var n=r(6),l=r(269);n({target:"String",proto:!0,forced:r(270)("link")},{link:function(t){return l(this,"a","href",t)}})},269:function(t,e,r){var n=r(3),l=r(21),o=r(11),d=/"/g,c=n("".replace);t.exports=function(t,e,r,n){var m=o(l(t)),f="<"+e;return""!==r&&(f+=" "+r+'="'+c(o(n),d,"&quot;")+'"'),f+">"+m+"</"+e+">"}},270:function(t,e,r){var n=r(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},285:function(t,e,r){"use strict";r.r(e);r(41),r(268);var n=r(72),l=r.n(n),o={name:"",sex:"男",phone:"",birthday:"",subYear:"",workYear:"",status:"",lastLocation:"",mainPurpose:"",skill:"",hopeLocation:"",link:""},d={data:function(){return{temp:JSON.parse(JSON.stringify(o)),queList:[{id:1,que:"請問您的姓名？",type:"input",field:"name",grid:"6"},{id:2,que:"請問您的性別？",type:"radio",options:[{label:"男",value:"男"},{label:"女",value:"女"}],field:"sex",grid:"6"},{id:3,que:"請問您的聯絡手機號碼？",type:"input",field:"phone",grid:"6"},{id:4,que:"請問您的出生年次？",type:"input",field:"birthday",grid:"6"},{id:5,que:"請問您的助理年資？",type:"input",field:"subYear",grid:"6"},{id:6,que:"請問您的設計師資歷(截至本月)？",type:"input",field:"workYear",grid:"6"},{id:7,que:"請問您目前還在原本的沙龍服務還是已經離職？",type:"input",field:"status",grid:"12"},{id:8,que:"請問目前(上一家)服務的髮廊位於哪一地區(Ex.中山區)？",type:"input",field:"lastLocation",grid:"12"},{id:9,que:"請問想要來應徵的主要原因？",type:"input",field:"mainPurpose",grid:"12"},{id:10,que:"請問您最喜歡的技術項目？",type:"input",field:"skill",grid:"12"},{id:11,que:"如之後面試有錄取，希望在哪一區上班(希望與實際分配不一定相同，會依錄取時的狀況而訂)？",type:"input",field:"hopeLocation",grid:"12"},{id:12,que:"設計師請留下作品集連結，IG/FB都可(不接受沒有作品的應徵，請勿留下私人未公開的帳號)？",type:"input",field:"link",grid:"12"}]}},methods:{submit:function(){var t=this,e=new FormData;e.set("entry.540998229",this.temp.name),e.set("entry.1528075270",this.temp.sex),e.set("entry.1616659545",this.temp.phone),e.set("entry.62728312",this.temp.birthday),e.set("entry.1145595845",this.temp.subYear),e.set("entry.1688664022",this.temp.workYear),e.set("entry.1273287378",this.temp.status),e.set("entry.732482763",this.temp.lastLocation),e.set("entry.1495094840",this.temp.mainPurpose),e.set("entry.592583669",this.temp.skill),e.set("entry.1716657032",this.temp.hopeLocation),e.set("entry.1144177421",this.temp.link),e.set("fvv",1),l.a.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSchzw86Rs7DMaZ8e0u4hEEUrJ8ONdPiZvtR-6vUHhQCQAL4vA/formResponse",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(){t.temp=JSON.parse(JSON.stringify(o)),t.$swal.fire({icon:"success",iconColor:"#e8a19e",title:"我們已經收到您的應徵資訊囉～近日請隨時注意您的手機，感謝您！",showConfirmButton:!0,confirmButtonText:"確認",confirmButtonColor:"#e8a19e"})})).catch((function(){t.temp=JSON.parse(JSON.stringify(o)),t.$swal.fire({icon:"success",iconColor:"#e8a19e",title:"我們已經收到您的應徵資訊囉～近日請隨時注意您的手機，感謝您！",showConfirmButton:!0,confirmButtonText:"確認",confirmButtonColor:"#e8a19e"})}))}}},c=r(22),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full min-h-screen"},[r("div",{staticClass:"w-4/5 mx-auto text-black text-opacity-70"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("form",{staticClass:"text-[#606266] flex flex-col gap-7 my-8",on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t.queList.length>0?r("div",{staticClass:"w-full grid grid-cols-12 gap-3"},t._l(t.queList,(function(e){return r("div",{key:e.id,staticClass:"w-full flex flex-col",class:"col-span-"+e.grid},[r("label",{staticClass:"md:whitespace-nowrap mb-1 md:text-lg"},[t._v(t._s(e.que))]),t._v(" "),"input"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.temp[e.field],expression:"temp[item.field]"}],staticClass:"w-full h-10 box-border py-2 px-3 bg-white border border-[#888888] rounded",attrs:{type:"text",required:"required"},domProps:{value:t.temp[e.field]},on:{input:function(r){r.target.composing||t.$set(t.temp,e.field,r.target.value)}}}):t._e(),t._v(" "),"radio"===e.type?r("div",{staticClass:"w-full h-10 flex items-center flex-wrap gap-3"},t._l(e.options,(function(n,l){return r("div",{key:l,staticClass:"flex items-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.temp[e.field],expression:"temp[item.field]"}],staticClass:"mr-1",attrs:{id:e.id+"-"+l,name:e.no,type:"radio",required:""},domProps:{value:n.value,checked:t._q(t.temp[e.field],n.value)},on:{change:function(r){return t.$set(t.temp,e.field,n.value)}}}),t._v(" "),r("label",{staticClass:"font-medium tracking-wider",attrs:{for:e.id+"-"+l}},[t._v(t._s(n.label))])])})),0):t._e()])})),0):t._e(),t._v(" "),r("input",{staticClass:"w-full bg-primary text-white text-lg font-bold p-2 rounded cursor-pointer duration-500 hover:opacity-80",attrs:{type:"submit",value:"確定送出"}})])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full p-5 box-border bg-primary bg-opacity-60"},[r("div",{staticClass:"w-full flex flex-col items-center justify-center bg-white p-5 rounded-lg"},[r("strong",{staticClass:"border-b-4 border-primary text-[60px]"},[t._v("人才招募")]),t._v(" "),r("div",{staticClass:"relative"},[r("p",{staticClass:"relative mt-4 text-gray-500 text-3xl z-10 tracking-wider"},[t._v("誠徵設計師、助理")]),t._v(" "),r("span",{staticClass:"absolute bottom-2 right-0 w-48 h-2 bg-[#F1d25b] bg-opacity-80"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full border-b border-primary p-2 mt-8"},[r("label",{staticClass:"text-lg md:text-xl lg:text-2xl text-primary"},[t._v("招募表單")])])}],!1,null,null,null);e.default=component.exports}}]);