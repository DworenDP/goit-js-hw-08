!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,l=setTimeout(O,t),s?y(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(S(e))return h(e);l=setTimeout(O,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function h(e){return l=void 0,m&&i?y(e):(i=r=void 0,u)}function w(){var e=p(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(O,t),y(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=F(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(F(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=r=l=void 0},w.flush=function(){return void 0===l?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function F(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var j="feedback-form-state",S={emailField:document.querySelector("input"),messageField:document.querySelector("textarea"),forms:document.querySelector(".feedback-form")};S.forms.addEventListener("input",e(t)((function(){localStorage.setItem(j,JSON.stringify({email:S.emailField.value,message:S.messageField.value}))}),500)),S.forms.addEventListener("submit",(function(e){e.preventDefault(),S.emailField.value&&S.messageField.value&&(localStorage.removeItem(j),console.log({email:S.emailField.value,message:S.messageField.value}),S.emailField.value="",S.messageField.value="")}));var O=localStorage.getItem(j);if(O){var h=JSON.parse(O);S.emailField.value=h.email,S.messageField.value=h.message}}();
//# sourceMappingURL=03-feedback.dee32a56.js.map