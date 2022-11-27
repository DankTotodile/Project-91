 function send()
 {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    ans = parseInt(n1)*parseInt(n2);
    qn = "<h4>"+n1+"x"+n2+"</h4>";
    ib = "<br> Answer: <input type='text' id='input_check_box>";
    cb = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qn+ib+cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
 }