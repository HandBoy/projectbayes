/**
 * Created by gamedu on 23/02/17.
 */


//var linha = document.getElementById("myTable").rows[0].cells.namedItem("inicio");


$(document).ready(function(){

    /*$('#inicio:first-child').each(function() {
     var td = $(this).children('td:eq(3)');
     console.log(td.text());
     });*/
    var filhos = $('#inicio:first-child');
    //console.log(filhos.children('td:eq(3)').text())
    var valores = filhos.children('td:eq(3)').text();
    var valor = valores.split(";");
    //console.log(valor.length);
    for (var i=0;i<valor.length;i++){
        //console.log(valor[i]);
        $("#numero"+valor[i]).text(valor[i]);
    }
    $('tr').each(function() {
        //var td = $(this).children('td:eq(3)');
        // console.log($(this).html());
    });

    var logs = $('tbody > tr:not([id])');

    var toten = -1;

    $("#backward").click(function(){
        if(toten >= 0){
            removeValueSimulator(toten);
            toten--;
        } else {
            alert("Chegou ao inicio da simulação");
        }
    });

    $("#play").click(function(){
        console.log('play')
    });

    $("#forward").click(function(){
        toten++;
        if(toten >= logs.length){
            alert("Chegou ao fim da simulação");
        } else {
            addValueSimulator(toten);
        }
    });

    function addValueSimulator(valor){
        var trs = logs[valor].children;
        if(trs[0].childNodes[0].textContent == "erro"){
            $("#numeroErrado"+trs[1].childNodes[0].textContent).text(trs[2].childNodes[0].textContent);
            $("#numeroErrado"+trs[1].childNodes[0].textContent).addClass("numberError");
        } else if(trs[0].childNodes[0].textContent == "acerto"){
            $("#numero"+trs[1].childNodes[0].textContent).text(trs[2].childNodes[0].textContent);
            $("#numero"+trs[1].childNodes[0].textContent).addClass("numberRight");
        }
    }

    function removeValueSimulator(valor){
        var trs = logs[valor].children;
        if(trs[0].childNodes[0].textContent == "erro"){
            $("#numeroErrado"+trs[1].childNodes[0].textContent).text(" ");
            $("#numeroErrado"+trs[1].childNodes[0].textContent).removeClass("numberError");
        } else if(trs[0].childNodes[0].textContent == "acerto"){
            $("#numero"+trs[1].childNodes[0].textContent).text(" ");
            $("#numero"+trs[1].childNodes[0].textContent).removeClass("numberRight");
        }
    }
});