document.getElementById("total-tip").style.display = "none";
document.getElementById('each').style.display = "none";

var hitung = document.getElementById("calculate");
hitung.addEventListener("click", function() {
  var bill = document.getElementById('tagihan').value;
  var kualitasServis = document.getElementById('kualitas').value;
  var jumlahOrang = document.getElementById('jumlah-orang').value;

  if (!bill || kualitasServis == 0) {
    alert('Tolong masukkan nilai!');
    return false;
  }

  if (jumlahOrang == 0 || jumlahOrang <= 1 || jumlahOrang == '') {
    jumlahOrang = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  var total = (bill * kualitasServis) / jumlahOrang;
  total = Math.round(total);

  document.getElementById("total-tip").style.display = "block";
  document.getElementById("tip").innerHTML = parseInt(total);
});