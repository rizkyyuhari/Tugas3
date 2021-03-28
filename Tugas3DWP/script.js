var hour = new Date().getHours();
//kode dibawah digunakan untuk menampilkan nama dari promp dan mencetak sesuai dengan jam saat aplikasi di buka
if(person != null){
  if(hour > 0 && hour < 11 )
  {
    document.getElementById("greet").innerHTML ="Good Morning "+ person+"!";
  }

  else if(hour > 11 && hour < 14)
  {
    document.getElementById("greet").innerHTML ="Good Afternoon "+ person+"!";
  }

     else {
        document.getElementById("greet").innerHTML ="Good Evening "+ person+"!";
      }
}

//kode dibawah digunakan untuk form tabung/silinder

var formSil = document.getElementById("silform");
if (formSil){
  formSil.addEventListener("submit", function (e) {
      e.preventDefault();
      var jariSil = document.getElementById("siljari").value;
      var tinggiSil = document.getElementById("silting").value;
      var hasilLuasSilinder =  2 * Math.PI * Math.pow(jariSil, 2) + 2 * Math.PI * jariSil * tinggiSil;
      var hasilVolumeSilinder = Math.PI * Math.pow(jariSil, 2) * tinggiSil;
      var hslPrint = document.getElementById("hslsil");
    if (hslPrint)
    {
      if (jariSil == "" || tinggiSil == "")
      {
        alert("Please Fill the blank to Get Output!");
       } 
       else if (isNaN(jariSil) || isNaN(tinggiSil)) 
       {
        document.getElementById("siljari").value = "";
        document.getElementById("silting").value = "";
        alert("Wrong Input, Please Fill Number!!");
       } 
       else 
       {
        hslPrint.innerHTML = `Hasil Perhitungan Silinder<br> Luas Permukaan:  ${hasilLuasSilinder.toFixed(2)} m<sup>2</sup><br>
          Volume:  ${hasilVolumeSilinder.toFixed(2)} m<sup>3</sup>`;
       }
    }
  });
}

//kode dibawah digunakan untuk form kerucut
var formKer = document.getElementById("htgker");
if (formKer){
    formKer.addEventListener("submit", function (e) {
    e.preventDefault();
    var jariker = document.getElementById("jarikeru").value;
    var garisKer = document.getElementById("gariskeru").value;
    var tgKer = document.getElementById("tingker").value;
    var hslker = Math.PI * Math.pow(jariker, 2) + Math.PI * jariker * garisKer;
    var hslvlm = (1 / 3) * Math.PI * Math.pow(jariker, 2) * tgKer;
    var printker = document.getElementById("hslker");
    if (printker) {
      if (jariker == "" || tgKer == "" || garisKer == "")
      {
        alert("Please Fill the blank to Get Output!");
      }  

      else if (isNaN(tgKer) || isNaN(garisKer) || isNaN(jariker)) 
      {
        document.getElementById("jarikeru").value = "";
        document.getElementById("tingker").value = "";
        document.getElementById("gariskeru").value = "";
        alert("Wrong Input, Please Fill Number!!");

      } 

      else 
      {
        printker.innerHTML = ` Hasil Perhitungan <br> Luas Permukaan:  ${hslker.toFixed(2)} m<sup>2</sup><br> 
        Volume:  ${hslvlm.toFixed(2)} m<sup>3</sup>`;
      }
    }
  });
}

//kode dibawah digunakan untuk form bola
var formbl = document.getElementById("htgbol");
if (formbl) {
    formbl.addEventListener("submit", function (e) {
      e.preventDefault();
      var jaribl = document.getElementById("jaribl").value;
      var luasbl =  Math.pow(jaribl, 2)* Math.PI * 4;
      var volBl = Math.pow(jaribl, 3) * Math.PI * (4/3) ;
      var prnthslbl = document.getElementById("hslblo");
    

    if (prnthslbl)
    {
      if (jaribl == "")
      {
       alert("Please Fill the blank to Get Output!");
      }  


      else if (isNaN(jaribl))
      {
        document.getElementById("jaribl").value = "";
        alert("Wrong Input, Please Fill Number!!");
      } 


      else 
      {
        prnthslbl.innerHTML = `Hasil Perhitungan: <br> Luas Permukaan:  ${luasbl.toFixed(2)} m<sup>2</sup><br>
          Volume:  ${volBl.toFixed(2)} m<sup>3</sup>`;
      }
    }
  });
}