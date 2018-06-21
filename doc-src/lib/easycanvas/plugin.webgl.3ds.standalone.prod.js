!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){t.exports=r(48)},48:function(t,e,r){(function(e){"use strict";function r(t,e){var r=new XMLHttpRequest;r.overrideMimeType&&r.overrideMimeType("text/plain; charset=x-user-defined"),r.onreadystatechange=function(){if(4==r.readyState&&(0==r.status||200==r.status)){var t=new L(!1,!1);t.readFile(r.responseText);var n,i,o=[];for(n=0;n<t.meshes.length;n++){var s=[],a=[],f=[],h=t.meshes[n];for(i=0;i<h.points;i++){var u=h.pointL[i];s.push(u[0]),s.push(u[1]),s.push(u[2])}for(i=0;i<h.faces;i++){var c=h.faceL[i],l=c.points[0],p=c.points[1],g=c.points[2];a.push(l),a.push(p),a.push(g)}for(i=0;i<h.texels;i++){var d=h.texelL[i],y=d[0],w=d[1];f.push(w),f.push(y)}o.push({vertices:s,indices:a,textures:f,img:h.faceL[0]&&h.faceL[0].material})}e(o,t)}},r.open("GET",t,!0),r.send(null)}var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=19789,s=15786,a=49725,f=2,h=16,u=17,l=18,p=19,g=15677,d=15678,y=256,w=45055,v=40960,b=40976,_=40992,m=41008,A=16384,E=16640,B=16656,R=16657,U=16672,C=16688,S=16720,T=16704,k=16736,P=16741,I=16752,M=45056,L=function(t,e){this.element=t,this.debug=void 0!=e&&e,this.position=0,this.meshes=[],this.materials={}};!function(t){var r=this,o={ArrayBuffer:"undefined"!=typeof ArrayBuffer,DataView:"undefined"!=typeof DataView&&("getFloat64"in DataView.prototype||"getFloat64"in new DataView(new ArrayBuffer(1))),NodeBuffer:"undefined"!=typeof e&&"readInt16LE"in e.prototype},s={Int8:1,Int16:2,Int32:4,Uint8:1,Uint16:2,Uint32:4,Float32:4,Float64:8},a={Int8:"Int8",Int16:"Int16",Int32:"Int32",Uint8:"UInt8",Uint16:"UInt16",Uint32:"UInt32",Float32:"Float",Float64:"Double"};n=function(t,i,f,h){if(!(this instanceof n))throw new Error("jDataView constructor may not be called as a function");if(this.buffer=t=n.wrapBuffer(t),this._isArrayBuffer=o.ArrayBuffer&&t instanceof ArrayBuffer,this._isDataView=o.DataView&&this._isArrayBuffer,this._isNodeBuffer=o.NodeBuffer&&t instanceof e,!(this._isNodeBuffer||this._isArrayBuffer||t instanceof Array))throw new TypeError("jDataView buffer has an incompatible type");this._littleEndian=Boolean(h);var u=this._isArrayBuffer?t.byteLength:t.length;if(void 0===i&&(i=0),this.byteOffset=i,void 0===f&&(f=u-i),this.byteLength=f,!this._isDataView){if("number"!=typeof i)throw new TypeError("jDataView byteOffset is not a number");if("number"!=typeof f)throw new TypeError("jDataView byteLength is not a number");if(i<0)throw new Error("jDataView byteOffset is negative");if(f<0)throw new Error("jDataView byteLength is negative")}if(this._isDataView&&(this._view=new DataView(t,i,f)),this._start=i,i+f>u)throw new Error("jDataView (byteOffset + byteLength) value is out of bounds");if(this._offset=0,this._isDataView)for(var c in s)s.hasOwnProperty(c)&&!function(t,e){var r=s[t];e["get"+t]=function(n,i){return void 0===i&&(i=e._littleEndian),void 0===n&&(n=e._offset),e._offset=n+r,e._view["get"+t](n,i)},e["set"+t]=function(n,i,o){void 0===o&&(o=e._littleEndian),void 0===n&&(n=e._offset),e._offset=n+r,e._view["set"+t](n,i,o)}}(c,this);else if(this._isNodeBuffer)for(var c in s)s.hasOwnProperty(c)&&!function(t,e){var r=s[t];e["get"+t]=function(n,i){void 0===i&&(i=e._littleEndian),void 0===n&&(n=e._offset);var o;return o="Int8"===t||"Uint8"===t?"read"+a[t]:i?"read"+a[t]+"LE":"read"+a[t]+"BE",e._offset=n+r,e.buffer[o](e._start+n)},e["set"+t]=function(n,i,o){void 0===o&&(o=e._littleEndian),void 0===n&&(n=e._offset);var s;s="Int8"===t||"Uint8"===t?"write"+a[t]:o?"write"+a[t]+"LE":"write"+a[t]+"BE",e._offset=n+r,e.buffer[s](i,e._start+n)}}(c,this);else if(this._isArrayBuffer)for(var c in s)s.hasOwnProperty(c)&&!function(t,e){var n=s[t];e["get"+t]=function(i,o){void 0===o&&(o=e._littleEndian),void 0===i&&(i=e._offset);var s,a;return 1===n||(e._start+i)%n===0&&o?(s=e.buffer,a=e._start+i,e._offset=i+n):(s=new Uint8Array(e.getBytes(n,i,o)).buffer,a=0),new r[t+"Array"](s,a,1)[0]},e["set"+t]=function(i,o,s){void 0===s&&(s=e._littleEndian),void 0===i&&(i=e._offset);var a=r[t+"Array"];if(1===n||(e._start+i)%n===0&&s)new a(e.buffer,e._start+i,1)[0]=o,e._offset=i+n;else{var f=new Uint8Array(n);new a(f.buffer,0,1)[0]=o,e.setBytes(i,f,s)}}}(c,this);else for(var c in s)s.hasOwnProperty(c)&&!function(t,e){var r=s[t];e["get"+t]=function(n,i){if(void 0===i&&(i=e._littleEndian),void 0===n&&(n=e._offset),"number"!=typeof n)throw new TypeError("jDataView byteOffset is not a number");if(n+r>e.byteLength)throw new Error("jDataView (byteOffset + size) value is out of bounds");return e["_get"+t](n,i)},e["set"+t]=function(n,i,o){if(void 0===o&&(o=e._littleEndian),void 0===n&&(n=e._offset),e._offset=n+r,"number"!=typeof n)throw new TypeError("jDataView byteOffset is not a number");if(n+r>e.byteLength)throw new Error("jDataView (byteOffset + size) value is out of bounds");e["_set"+t.replace("Uint","Int")](n,i,o)}}(c,this);for(var c in s)s.hasOwnProperty(c)&&!function(t,e){e["write"+t]=function(e,r){this["set"+t](void 0,e,r)}}(c,this)},n.wrapBuffer=function(t){switch("undefined"==typeof t?"undefined":i(t)){case"string":t=Array.prototype.map.call(t,function(t){return 255&t.charCodeAt(0)});break;case"number":t={length:t}}if("length"in t&&!(o.NodeBuffer&&t instanceof e||o.ArrayBuffer&&t instanceof ArrayBuffer))if(o.NodeBuffer)t=new e(t);else if(o.ArrayBuffer){var r=t instanceof Uint8Array?t:new Uint8Array(t);t=r.buffer}else{t instanceof Array||(t=Array.prototype.slice.call(t));for(var n=0,s=t.length;n<s;n++)t[n]&=255}return t},n.createBuffer=function(){return n.wrapBuffer(arguments)},n.prototype={compatibility:o,_getBytes:function(t,e,r){var n;if(void 0===r&&(r=this._littleEndian),void 0===e&&(e=this._offset),void 0===t&&(t=this.byteLength-e),"number"!=typeof e)throw new TypeError("jDataView byteOffset is not a number");if(t<0||e+t>this.byteLength)throw new Error("jDataView length or (byteOffset+length) value is out of bounds");return e+=this._start,n=this._isArrayBuffer?new Uint8Array(this.buffer,e,t):this.buffer.slice(e,e+t),!r&&t>1&&(n instanceof Array||(n=Array.prototype.slice.call(n)),n.reverse()),this._offset=e-this._start+t,n},getBytes:function(t,e,r){var n=this._getBytes.apply(this,arguments);return n instanceof Array||(n=Array.prototype.slice.call(n)),n},setBytes:function(t,r,n){var i=r.length;if(void 0===n&&(n=this._littleEndian),void 0===t&&(t=this._offset),"number"!=typeof t)throw new TypeError("jDataView byteOffset is not a number");if(i<0||t+i>this.byteLength)throw new Error("jDataView length or (byteOffset+length) value is out of bounds");if(!n&&i>1&&(r=Array.prototype.slice.call(r).reverse()),t+=this._start,this._isArrayBuffer)new Uint8Array(this.buffer,t,i).set(r);else if(this._isNodeBuffer)new e(r).copy(this.buffer,t);else for(var o=0;o<i;o++)this.buffer[t+o]=r[o];this._offset=t-this._start+i},writeBytes:function(t,e){this.setBytes(void 0,t,e)},getString:function(t,e){return String.fromCharCode.apply(null,this._getBytes(t,e,!0))},setString:function(t,e){this.setBytes(t,Array.prototype.map.call(e,function(t){return 255&t.charCodeAt(0)}),!0)},writeString:function(t){this.setString(void 0,t)},getChar:function(t){return this.getString(1,t)},setChar:function(t,e){this.setString.apply(this,arguments)},writeChar:function(t){this.setChar(void 0,t)},tell:function(){return this._offset},seek:function(t){if("number"!=typeof t)throw new TypeError("jDataView byteOffset is not a number");if(t<0||t>this.byteLength)throw new Error("jDataView byteOffset value is out of bounds");return this._offset=t},slice:function(t,e,r){return r?new n(this.getBytes(e-t,t),void 0,void 0,!0):new n(this.buffer,this._start+t,e-t,this._littleEndian)},_getFloat64:function(t,e){var r=this._getBytes(8,t,e),n=1-2*(r[7]>>7),i=((r[7]<<1&255)<<3|r[6]>>4)-1023,o=(15&r[6])*Math.pow(2,48)+r[5]*Math.pow(2,40)+r[4]*Math.pow(2,32)+r[3]*Math.pow(2,24)+r[2]*Math.pow(2,16)+r[1]*Math.pow(2,8)+r[0];return 1024===i?0!==o?NaN:n*(1/0):i===-1023?n*o*Math.pow(2,-1074):n*(1+o*Math.pow(2,-52))*Math.pow(2,i)},_getFloat32:function(t,e){var r=this._getBytes(4,t,e),n=1-2*(r[3]>>7),i=(r[3]<<1&255|r[2]>>7)-127,o=(127&r[2])<<16|r[1]<<8|r[0];return 128===i?0!==o?NaN:n*(1/0):i===-127?n*o*Math.pow(2,-149):n*(1+o*Math.pow(2,-23))*Math.pow(2,i)},_getInt32:function(t,e){var r=this._getBytes(4,t,e);return r[3]<<24|r[2]<<16|r[1]<<8|r[0]},_getUint32:function(t,e){return this._getInt32(t,e)>>>0},_getInt16:function(t,e){return this._getUint16(t,e)<<16>>16},_getUint16:function(t,e){var r=this._getBytes(2,t,e);return r[1]<<8|r[0]},_getInt8:function(t){return this._getUint8(t)<<24>>24},_getUint8:function(t){return this._getBytes(1,t)[0]},_setBinaryFloat:function(t,e,r,n,i){var o,s,a=e<0?1:0,f=~(-1<<n-1),h=1-f;e<0&&(e=-e),0===e?(o=h-1,s=0):isNaN(e)?(o=f+1,s=1):e===1/0?(o=f+1,s=0):(o=Math.floor(Math.log(e)/Math.LN2),o>h&&o<=f?s=Math.floor((e*Math.pow(2,-o)-1)*Math.pow(2,r)):(s=Math.floor(e*Math.pow(2,r-h)),o=h-1)),o+=f;for(var u=[];r>=8;)u.push(s%256),s=Math.floor(s/256),r-=8;for(o=o<<r|s,n+=r;n>=8;)u.push(255&o),o>>>=8,n-=8;u.push(a<<n|o),this.setBytes(t,u,i)},_setFloat32:function(t,e,r){this._setBinaryFloat(t,e,23,8,r)},_setFloat64:function(t,e,r){this._setBinaryFloat(t,e,52,11,r)},_setInt32:function(t,e,r){this.setBytes(t,[255&e,e>>>8&255,e>>>16&255,e>>>24],r)},_setInt16:function(t,e,r){this.setBytes(t,[255&e,e>>>8],r)},_setInt8:function(t,e){this.setBytes(t,[e])}}}(),function(){var t=L.prototype;t.readFile=function(t){this.position=0,this.meshes=[],this.materials={};var e=new n(t,0,void 0,!0),r=this.readChunk(e),i=0;switch(r.id){case s:case a:case o:for(i=this.nextChunk(e,r);0!=i;){switch(i){case f:this.mesh_version=this.readDWord(e),this.log("M3D_VERSION "+this.mesh_version);break;case g:this.resetPosition(e),this.log("MDATA"),this.readMDATA(e);break;case M:default:this.log("Unknown chunk: "+i.toString(16))}i=this.nextChunk(e,r)}break;default:this.log("Unknown main chunk: "+i.toString(16))}this.log("parsed #"+this.meshes.length+" meshes!")},t.readMDATA=function(t){for(var e=this.readChunk(t),r=this.nextChunk(t,e);0!=r;){switch(r){case d:this.mesh_version=this.readInt(t),this.log("MESH_VERSION: "+this.mesh_version);break;case y:this.master_scale=this.readFloat(t),this.log("MASTER_SCALE: "+this.master_scale);break;case A:this.resetPosition(t),this.log("NAMED OBJECT"),this.readNamedObject(t);break;case w:this.resetPosition(t),this.log("MATERIAL ENTRY"),this.readMaterialEntry(t);break;default:this.log("Unknown MDATA chunk: "+r.toString(16))}r=this.nextChunk(t,e)}},t.readMaterialEntry=function(t){for(var e=this.readChunk(t),r=this.nextChunk(t,e),n=new Y;0!=r;){switch(r){case v:n.name=this.readString(t,64),this.log(" -> name: "+n.name);break;case b:n.ambientColor=this.readColor(t),this.log(" -> ambientColor: "+n.ambientColor.toString(16));break;case _:n.diffuseColor=this.readColor(t),this.log(" -> diffuseColor: "+n.diffuseColor.toString(16));break;case m:n.specularColor=this.readColor(t),this.log(" -> specularColor: "+n.specularColor.toString(16));break;default:this.log(" -> Unknown material chunk: "+r.toString(16))}r=this.nextChunk(t,e)}this.endChunk(e),this.materials[n.name]=n},t.readColor=function(t){var e=this.readChunk(t),r=0;switch(e.id){case u:case l:var n=this.readByte(t),i=this.readByte(t),o=this.readByte(t);r=n<<16|i<<8|o;break;case h:case p:var n=this.readFloat(t),i=this.readFloat(t),o=this.readFloat(t);r=Math.floor(255*n)<<16|Math.floor(255*i)<<8|Math.floor(255*o);break;default:this.log("Unknown color chunk: "+c.toString(16))}return this.endChunk(e),r},t.readMesh=function(t){for(var e,r,n=this.readChunk(t),i=this.nextChunk(t,n),o=new O;0!=i;){switch(i){case P:o.color=this.readByte(t),this.log(" -> color: "+o.color);break;case B:for(o.points=this.readWord(t),o.pointL=[],this.log(" -> #points: "+o.points+" "+this.position),e=0;e<o.points;e++){var s=[];for(r=0;r<3;r++)s.push(this.readFloat(t));o.pointL.push(s)}break;case U:this.resetPosition(t),this.readFaceArray(t,o);break;case T:for(o.texels=this.readWord(t),o.texelL=[],this.log(" -> #texels: "+o.texels),e=0;e<o.texels;e++)o.texelL.push([this.readFloat(t),this.readFloat(t)]);break;case k:case R:case I:default:this.log(" -> Unknown mesh chunk: "+i.toString(16))}i=this.nextChunk(t,n)}return this.endChunk(n),o},t.readFaceArray=function(t,e){var r,n=this.readChunk(t);for(e.faces=this.readWord(t),e.faceL=[],this.log(" -> #faces: "+e.faces),r=0;r<e.faces;++r){var i=new x;i.points=[],i.points.push(this.readWord(t)),i.points.push(this.readWord(t)),i.points.push(this.readWord(t)),i.flags=this.readWord(t),e.faceL.push(i)}for(;this.position<n.end;){var n=this.readChunk(t);switch(n.id){case C:this.log(" -> MATERIAL_GROUP"),this.resetPosition(t);var o=this.readMaterialGroup(t),s=o.faceIdxs;for(r=0;r<s.length;r++){var i=e.faceL[s[r]];i.material=o.name}break;case S:default:this.log(" -> Unknown face array chunk: "+c.toString(16))}this.endChunk(n)}this.endChunk(n)},t.readMaterialGroup=function(t){var e=(this.readChunk(t),this.readString(t,64)),r=this.readWord(t);this.log(" --> material name: "+e),this.log(" --> num faces: "+r);for(var n=[],i=0;i<r;++i)n.push(this.readWord(t));return{name:e,faceIdxs:n}},t.readNamedObject=function(t){var e=this.readChunk(t),r=this.readString(t,64);this.log(" -> "+r),e.cur=this.position;for(var n=this.nextChunk(t,e);0!=n;){switch(n){case E:this.resetPosition(t);var i=this.readMesh(t);this.meshes.push(i);break;default:this.log("Unknown named object chunk: "+n.toString(16))}n=this.nextChunk(t,e)}this.endChunk(e)},t.readChunk=function(t){var e=new D;return e.cur=this.position,e.id=this.readWord(t),e.size=this.readDWord(t),e.end=e.cur+e.size,e.cur+=6,e},t.endChunk=function(t){this.position=t.end},t.nextChunk=function(t,e){if(e.cur>=e.end)return 0;this.position=e.cur;try{var r=this.readChunk(t);return e.cur+=r.size,r.id}catch(t){return this.log("Unable to read chunk at "+this.position),0}},t.resetPosition=function(t,e){this.position-=6},t.readByte=function(t){var e=t.getUint8(this.position);return this.position+=1,e},t.readFloat=function(t){try{var e=t.getFloat32(this.position);return this.position+=4,e}catch(e){this.log(""+e+" "+this.position+" "+t.byteLength)}},t.readInt=function(t){var e=t.getInt32(this.position);return this.position+=4,e},t.readShort=function(t){var e=t.getInt16(this.position);return this.position+=2,e},t.readDWord=function(t){var e=t.getUint32(this.position);return this.position+=4,e},t.readWord=function(t){var e=t.getUint16(this.position);return this.position+=2,e},t.readString=function(t,e){for(var r="",n=0;n<e;n++){var i=this.readByte(t);if(!i)break;r+=String.fromCharCode(i)}return r},t.log=function(t){this.debug&&(console.log(t),this.element&&(this.element.innerHTML+=t+"<br/>"))}}();var D=function(){this.cur=0,this.id=0,this.size=0,this.end=0},x=function(){this.flags=0,this.points=[],this.material=""},O=function(){this.next=null,this.matrix=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.name="",this.color=0,this.points=0,this.pointL=[],this.flags=0,this.flagL=[],this.texels=0,this.texelL=[],this.faces=0,this.faceL=[]},Y=function(){this.name="",this.ambientColor=0,this.diffuseColor=0,this.spectralColor=0},N="undefined"!=typeof window;N&&window.Easycanvas?window.Easycanvas.loader3ds=r:t.exports=plugin}).call(e,r(56).Buffer)},55:function(t,e){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function n(t){return 3*t.length/4-r(t)}function i(t){var e,n,i,o,s,a=t.length;o=r(t),s=new u(3*a/4-o),n=o>0?a-4:a;var f=0;for(e=0;e<n;e+=4)i=h[t.charCodeAt(e)]<<18|h[t.charCodeAt(e+1)]<<12|h[t.charCodeAt(e+2)]<<6|h[t.charCodeAt(e+3)],s[f++]=i>>16&255,s[f++]=i>>8&255,s[f++]=255&i;return 2===o?(i=h[t.charCodeAt(e)]<<2|h[t.charCodeAt(e+1)]>>4,s[f++]=255&i):1===o&&(i=h[t.charCodeAt(e)]<<10|h[t.charCodeAt(e+1)]<<4|h[t.charCodeAt(e+2)]>>2,s[f++]=i>>8&255,s[f++]=255&i),s}function o(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function s(t,e,r){for(var n,i=[],s=e;s<r;s+=3)n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),i.push(o(n));return i.join("")}function a(t){for(var e,r=t.length,n=r%3,i="",o=[],a=16383,h=0,u=r-n;h<u;h+=a)o.push(s(t,h,h+a>u?u:h+a));return 1===n?(e=t[r-1],i+=f[e>>2],i+=f[e<<4&63],i+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],i+=f[e>>10],i+=f[e>>4&63],i+=f[e<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=n,e.toByteArray=i,e.fromByteArray=a;for(var f=[],h=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,p=c.length;l<p;++l)f[l]=c[l],h[c.charCodeAt(l)]=l;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},56:function(t,e,r){(function(t){"use strict";function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(i()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,r){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return u(this,t)}return a(this,t,e,r)}function a(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?p(t,e,r,n):"string"==typeof e?c(t,e,r):g(t,e)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e,r,n){return f(e),e<=0?o(t,e):void 0!==r?"string"==typeof n?o(t,e).fill(r,n):o(t,e).fill(r):o(t,e)}function u(t,e){if(f(e),t=o(t,e<0?0:0|d(e)),!s.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!s.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|w(e,r);t=o(t,n);var i=t.write(e,r);return i!==n&&(t=t.slice(0,i)),t}function l(t,e){var r=e.length<0?0:0|d(e.length);t=o(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=l(t,e),t}function g(t,e){if(s.isBuffer(e)){var r=0|d(e.length);return t=o(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||Z(e.length)?o(t,0):l(t,e);if("Buffer"===e.type&&$(e.data))return l(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),s.alloc(+t)}function w(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return G(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return q(t).length;default:if(n)return G(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return M(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return P(this,e,r);case"latin1":case"binary":return I(this,e,r);case"base64":return S(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function _(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=s.from(e,n)),s.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,i);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,i){function o(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,f=e.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,f/=2,r/=2}var h;if(i){var u=-1;for(h=r;h<a;h++)if(o(t,h)===o(e,u===-1?0:h-u)){if(u===-1&&(u=h),h-u+1===f)return u*s}else u!==-1&&(h-=h-u),u=-1}else for(r+f>a&&(r=a-f),h=r;h>=0;h--){for(var c=!0,l=0;l<f;l++)if(o(t,h+l)!==o(e,l)){c=!1;break}if(c)return h}return-1}function A(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=e.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function E(t,e,r,n){return J(G(e,t.length-r),t,r,n)}function B(t,e,r,n){return J(H(e),t,r,n)}function R(t,e,r,n){return B(t,e,r,n)}function U(t,e,r,n){return J(q(e),t,r,n)}function C(t,e,r,n){return J(X(e,t.length-r),t,r,n)}function S(t,e,r){return K.fromByteArray(0===e&&r===t.length?t:t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=r){var f,h,u,c;switch(a){case 1:o<128&&(s=o);break;case 2:f=t[i+1],128===(192&f)&&(c=(31&o)<<6|63&f,c>127&&(s=c));break;case 3:f=t[i+1],h=t[i+2],128===(192&f)&&128===(192&h)&&(c=(15&o)<<12|(63&f)<<6|63&h,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:f=t[i+1],h=t[i+2],u=t[i+3],128===(192&f)&&128===(192&h)&&128===(192&u)&&(c=(15&o)<<18|(63&f)<<12|(63&h)<<6|63&u,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=a}return k(n)}function k(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=tt));return r}function P(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function I(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function M(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=W(t[o]);return i}function L(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function D(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function x(t,e,r,n,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function O(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Y(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function N(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function F(t,e,r,n,i){return i||N(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,r,n,23,4),r+4}function V(t,e,r,n,i){return i||N(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,r,n,52,8),r+8}function j(t){if(t=z(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function W(t){return t<16?"0"+t.toString(16):t.toString(16)}function G(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],s=0;s<n;++s){if(r=t.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function H(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function X(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function q(t){return K.toByteArray(j(t))}function J(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function Z(t){return t!==t}var K=r(55),Q=r(58),$=r(57);e.Buffer=s,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=i(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,r){return a(null,t,e,r)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,r){return h(null,t,e,r)},s.allocUnsafe=function(t){return u(null,t)},s.allocUnsafeSlow=function(t){return u(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!$(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=s.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var o=t[r];if(!s.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},s.byteLength=w,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)b(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):v.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,r,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,a=r-e,f=Math.min(o,a),h=this.slice(n,i),u=t.slice(e,r),c=0;c<f;++c)if(h[c]!==u[c]){o=h[c],a=u[c];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(t,e,r){return this.indexOf(t,e,r)!==-1},s.prototype.indexOf=function(t,e,r){return _(this,t,e,r,!0)},s.prototype.lastIndexOf=function(t,e,r){return _(this,t,e,r,!1)},s.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":return B(this,t,e,r);case"latin1":case"binary":return R(this,t,e,r);case"base64":return U(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),e<0?(e+=r,e<0&&(e=0)):e>r&&(e=r),e<t&&(e=t);var n;if(s.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=s.prototype;else{var i=e-t;n=new s(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},s.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},s.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},s.prototype.readUInt8=function(t,e){return e||D(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||D(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||D(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},s.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return e||D(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){e||D(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r;
},s.prototype.readInt16BE=function(t,e){e||D(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(t,e){return e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||D(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||D(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||D(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||D(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;x(this,t,e,r,i,0)}var o=1,s=0;for(this[e]=255&t;++s<r&&(o*=256);)this[e+s]=t/o&255;return e+r},s.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;x(this,t,e,r,i,0)}var o=r-1,s=1;for(this[e+o]=255&t;--o>=0&&(s*=256);)this[e+o]=t/s&255;return e+r},s.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):Y(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);x(this,t,e,r,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},s.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);x(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},s.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):Y(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||x(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,r){return F(this,t,e,!0,r)},s.prototype.writeFloatBE=function(t,e,r){return F(this,t,e,!1,r)},s.prototype.writeDoubleLE=function(t,e,r){return V(this,t,e,!0,r)},s.prototype.writeDoubleBE=function(t,e,r){return V(this,t,e,!1,r)},s.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},s.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var o;if("number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var a=s.isBuffer(t)?t:G(new s(t,n).toString()),f=a.length;for(o=0;o<r-e;++o)this[o+e]=a[o%f]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},57:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},58:function(t,e){e.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,f=(1<<a)-1,h=f>>1,u=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c];for(c+=l,o=p&(1<<-u)-1,p>>=-u,u+=a;u>0;o=256*o+t[e+c],c+=l,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=n;u>0;s=256*s+t[e+c],c+=l,u-=8);if(0===o)o=1-h;else{if(o===f)return s?NaN:(p?-1:1)*(1/0);s+=Math.pow(2,n),o-=h}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,a,f,h=8*o-i-1,u=(1<<h)-1,c=u>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),e+=s+c>=1?l/f:l*Math.pow(2,1-c),e*f>=2&&(s++,f/=2),s+c>=u?(a=0,s=u):s+c>=1?(a=(e*f-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=g,a/=256,i-=8);for(s=s<<i|a,h+=i;h>0;t[r+p]=255&s,p+=g,s/=256,h-=8);t[r+p-g]|=128*d}}})});