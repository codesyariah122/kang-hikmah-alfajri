export default () => {
    // const path = window.location.pathname.split('/')
  
  
    window.$crisp = [];
    window.CRISP_WEBSITE_ID='61446903-0d29-4472-9ae2-820177adab91';
    // var ask = prompt("Username anda : ")
  
    // console.log(`Halo ${ask}, apa kabarnya ? `)
  
    // $crisp.push(["set", "user:nickname", ["John Doe"]]);
    // if(path[1] !== "halo-dokter"){
    //   $crisp.push(['do', 'chat:hide']);
    // }
  
    window.$crisp.push(['do', 'chat:hide']);
    
    (function() {
      var d = document;
      var s = d.createElement("script");
  
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  };