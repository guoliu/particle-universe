(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,i,n){},12:function(t,i,n){"use strict";n.r(i);var e=n(0),o=n.n(e),r=n(3),a=n.n(r),c=(n(11),n(4)),s=n(1),u=function(t){var i=t.width,n=t.height;t.getContext("2d").clearRect(0,0,i,n)},h=function(t){var i=t.particles,n=t.lines,r=t.setClientPos,a=Object(e.useRef)(null),c=Object(e.useState)(!1),h=Object(s.a)(c,2),d=h[0],l=h[1];return Object(e.useEffect)(function(){var t=a.current,i=t.width,n=t.height;t&&(t.addEventListener("mousemove",function(t){r([t.clientX/i,t.clientY/n])}),t.addEventListener("touchmove",function(t){t.stopPropagation(),t.preventDefault(),r([t.clientX/i,t.clientY/n])},!1))},[a,r,d]),Object(e.useEffect)(function(){var t=a.current,e=t.width,o=t.height,r=t.getContext("2d");d||(u(t),i.map(function(t){var i=t.radius,n=t.position;return r.beginPath(),r.arc(n[0]*e,n[1]*o,i*o,0,2*Math.PI,!1),r.lineWidth=1,r.strokeStyle="#000000",r.stroke(),!1})),n.map(function(t){var i=t.start,n=t.end,a=t.strength;return r.beginPath(),r.moveTo(i[0]*e,i[1]*o),r.lineTo(n[0]*e,n[1]*o),r.lineWidth=a/2,d&&(r.strokeStyle="rgba(".concat(255*a,", ").concat(255*a,", ").concat(255*a,", 0.3)")),r.stroke(),!1})},[i,n,d]),Object(e.useMemo)(function(){return o.a.createElement("canvas",{width:window.innerWidth,height:window.innerHeight,ref:a,onClick:function(t){t.stopPropagation(),l(function(t){return t||u(a.current),!t})}})},[window.innerWidth,window.innerHeight,d])},d=function(){var t=Object(e.useState)({angle:0,particles:Array(30).fill().map(function(){return function(t){var i=t.speed,n=void 0===i?.005:i,e=t.repulsion,o=void 0===e?5e-6:e,r=t.attraction,a=void 0===r?.0015:r,c=t.connectSize,s=void 0===c?.25:c;return{radius:.002,position:[Math.random(),Math.random()],direction:[Math.random()*n,Math.random()*n],update:function(t){var i=this,e=t.particles,r=void 0===e?[]:e,c=t.index,u=t.clientPos;this.position=[this.position[0]+this.direction[0],this.position[1]+this.direction[1]];var h=[];r.forEach(function(t,n){if(n!==c){var e=[t.position[0]-i.position[0],t.position[1]-i.position[1]],r=Math.sqrt(e[0]*e[0]+e[1]*e[1]),a=[o*-e[0]/(r*r),o*-e[1]/(r*r)];i.direction=[i.direction[0]+a[0],i.direction[1]+a[1]],n>c&&r<s&&h.push({start:i.position,end:t.position,strength:1-r/s})}});var d=[u[0]-this.position[0],u[1]-this.position[1]],l=Math.sqrt(d[0]*d[0]+d[1]*d[1]);l<s&&h.push({start:this.position,end:u,strength:1-l/s});var p=[a*d[0]*l*l,a*d[1]*l*l];this.direction=[this.direction[0]+p[0],this.direction[1]+p[1]];var f=Math.sqrt(this.direction[0]*this.direction[0]+this.direction[1]*this.direction[1])/n;return this.direction=[this.direction[0]/f,this.direction[1]/f],{particle:this,lines:h}}}}({})}),lines:[]}),i=Object(s.a)(t,2),n=i[0],r=i[1],a=Object(e.useState)([.5,.5]),u=Object(s.a)(a,2),d=u[0],l=u[1];return Object(e.useEffect)(function(){var t=requestAnimationFrame(function(){var t=[],i=[];n.particles.map(function(e,o){var r=e.update({index:o,particles:n.particles,clientPos:d}),a=r.particle,c=r.lines;return t.push(a),i=i.concat(c),!1}),r(function(n){return Object(c.a)({},n,{particles:t,lines:i})})});return function(){return cancelAnimationFrame(t)}},[n,d]),o.a.createElement(h,{lines:n.lines,particles:n.particles,setClientPos:l})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(function(){return o.a.createElement(d,null)},{style:{width:"100%",height:"100%",padding:0,margin:0}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},5:function(t,i,n){t.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.ea1fd5ab.chunk.js.map