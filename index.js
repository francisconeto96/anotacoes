




//Função do botão Confirmar.

$(document).ready(function(){

    
    //Função do botão Ok
      
    $("#ok").click(function(e) {
        e.preventDefault();

        let opcao = $('#itens :selected').val();

        // 2 ÍTENS

        if (opcao == 2 ) {
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
                
                
                
            
        }
        
        // 3 ÍTENS

        else if (opcao == 3 ) {
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco2'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco2'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd132'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd022'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume2'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material2'><br> ")

            .prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco1'> <br> ")
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }

        // 4 ÍTENS

        else if (opcao == 4 ) {
           
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco3'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco3'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd133'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd023'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume3'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material3'><br> ")

            .prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco2'> <br> ")
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco2'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd132'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd022'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume2'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material2'><br> ")

            .prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco1'> <br> ")
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }

        // 5 ÍTENS

        else if (opcao == 5 ) {
           
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco4'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco4'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd134'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd024'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume4'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material4'><br> ")

            .prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco3'> <br> ")
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco3'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd133'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd023'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume3'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material3'><br> ")

            .prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco2'> <br> ")
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco2'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd132'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd022'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume2'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material2'><br> ")

            .prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco' id='ultpreco1'> <br> ")
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
        }
        else if (opcao == 6 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco12'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco12'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1312'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0212'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume12'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material12'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco13'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1313'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0213'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume13'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material13'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco14'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1314'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0214'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume14'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material14'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco15'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1315'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0215'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume15'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material15'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco16'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1316'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0216'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume16'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material16'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco17'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1317'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0217'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume17'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material17'><br> ")
            
            
        }
        else if (opcao == 7 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco18'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco18'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1318'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0218'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume18'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material18'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco19'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1319'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0219'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume19'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material19'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco20'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1320'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0220'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume20'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material20'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco21'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1321'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0221'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume21'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material21'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco22'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1322'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0222'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume22'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material22'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco23'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1323'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0223'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume23'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material23'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco24'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1324'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0224'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume24'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material24'><br> ")
            
        }
        else if (opcao == 8 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco25'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco25'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1325'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0225'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume25'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material25'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco26'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1326'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0226'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume26'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material26'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco27'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1327'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0227'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume27'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material27'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco28'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1328'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0228'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume28'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material28'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco29'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1329'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0229'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume29'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material29'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco30'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1330'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0230'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume30'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material30'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco31'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1331'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0231'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume31'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material31'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco32'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1332'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0232'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume32'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material32'><br> ")
            
            
        }
        else if (opcao == 9 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco33'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco33'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1333'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0233'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume33'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material33'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco34'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1334'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0234'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume34'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material34'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco35'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1335'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0235'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume35'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material35'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco36'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1336'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0236'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume36'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material36'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco37'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1337'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0237'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume37'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material37'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco38'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1338'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0238'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume38'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material38'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco39'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1339'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0239'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume39'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material39'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco40'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1340'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0240'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume40'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material40'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco41'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1341'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0241'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume41'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material41'><br> ")
            
        }
        else if (opcao == 10 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco42'> <br><br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco42'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1342'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0242'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume42'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material42'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco43'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1343'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0243'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume43'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material43'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco44'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1344'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0244'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume44'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material44'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco45'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1345'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0245'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume45'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material45'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco46'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1346'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0246'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume46'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material46'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco47'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1347'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0247'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume47'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material47'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco48'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1348'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0248'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume48'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material48'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco49'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1349'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0249'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume49'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material49'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco50'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1350'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0250'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume50'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material50'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco51'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd1351'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd0251'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume51'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material51'><br> ")
            
        }
        

        
    })





    $("#confirmar").click(function(e){
        e.preventDefault();

        
        let opcao = $('#itens :selected').val();
        
        // IMPRIMIR UM ÍTEM
       
       let CGFOR = $("#cgfor").val();
       let COTACAO = $("#cotacao").val();
       let BP = $("#bp").val();
       let SEGMENTO = $("#segmento").val();
       let MIX = $("#mix").val();
       let MATERIAL = $("#material").val();
       let VOLUME = $("#volume").val();
       let ZD02 = $("#zd02").val();
       let ZD13 = $("#zd13").val();
       let PRECO = $("#preco").val();
       let ULTPRECO = $("#ultpreco").val();
       let PAGAMENTO = $("#pagamento").val();
       let MOTIVO = $("#motivo").val();


        $("#resultado").html(`CGFOR: ${CGFOR}`)
       .append(`<br>COTAÇÃO: ${COTACAO}`)
       .append(`<br>BP: ${BP}`)
       .append(`<br>SEGMENTO: ${SEGMENTO}`)
       .append(`<br>MIX: ${MIX}`)
       .append(`<br>MATERIAL: ${MATERIAL}`)
       .append(`<br>VOLUME: ${VOLUME}`)
       .append(`<br>ZD02: ${ZD02}%`)
       .append(`<br>ZD13: ${ZD13}%`)
       .append(`<br>PREÇO: ${PRECO}`)
       .append(`<br>ÚLTIMO PREÇO: ${ULTPRECO}`)
       .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
       .append(`<br>MOTIVO: ${MOTIVO}`)

       .append('<br><button id="copiar">Copiar</button>') 
       .append('<br><a href="https://api.whatsapp.com/send?phone=5585997990070&text=" target="_blank"><button id="wpp1">Enviar via Whatsapp</button></a>')
       //<a href="https://api.whatsapp.com/send?phone=5585997990070&text=Teste" target="_blank">


     

       
       
// IMPRIMIR DOIS ÍTEM
       if (opcao == 2) {

        
       
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        
        

        $("#resultado").html(`CGFOR: ${CGFOR}`)
        .append(`<br>COTAÇÃO: ${COTACAO}`)
        .append(`<br>BP: ${BP}`)
        .append(`<br>SEGMENTO: ${SEGMENTO}`)
        .append(`<br>MIX: ${MIX}`)
        .append(`<br>MATERIAL: ${MATERIAL}`)
        .append(`<br>VOLUME: ${VOLUME}`)
        .append(`<br>ZD02: ${ZD02}%`)
        .append(`<br>ZD13: ${ZD13}%`)
        .append(`<br>PREÇO: ${PRECO}`)
        .append(`<br>ÚLTIMO PREÇO: ${ULTPRECO}`)
 
        .append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}%`)
        .append(`<br>ZD13: ${zd131}%`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)

        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
        
        .append('<br><a href="https://api.whatsapp.com/send?phone=5585997990070&text=" target="_blank"><button id="wpp2">Enviar via Whatsapp</button></a>')
        

        
    }
// IMPRIMIR TRÊS ÍTENS
      else if (opcao == 3) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        let material2 = $("#material2").val();
        let volume2 = $("#volume2").val();
        let zd022 = $("#zd022").val();
        let zd132 = $("#zd132").val();
        let preco2 = $("#preco2").val();
        let ultpreco2 = $("#ultpreco2").val();

        $("#resultado").html(`CGFOR: ${CGFOR}`)
        .append(`<br>COTAÇÃO: ${COTACAO}`)
        .append(`<br>BP: ${BP}`)
        .append(`<br>SEGMENTO: ${SEGMENTO}`)
        .append(`<br>MIX: ${MIX}`)
        .append(`<br>MATERIAL: ${MATERIAL}`)
        .append(`<br>VOLUME: ${VOLUME}`)
        .append(`<br>ZD02: ${ZD02}%`)
        .append(`<br>ZD13: ${ZD13}%`)
        .append(`<br>PREÇO: ${PRECO}`)
        .append(`<br>ÚLTIMO PREÇO: ${ULTPRECO}`)

        .append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}%`)
        .append(`<br>ZD13: ${zd131}%`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)

        .append(`<br>MATERIAL: ${material2}`)
        .append(`<br>VOLUME: ${volume2}`)
        .append(`<br>ZD02: ${zd022}%`)
        .append(`<br>ZD13: ${zd132}%`)
        .append(`<br>PREÇO: ${preco2}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco2}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
        .append('<br><a href="https://api.whatsapp.com/send?phone=5585997990070&text=" target="_blank"><button>Enviar via whatsapp</button></a>')
    }
// IMPRIMIR QUATRO ÍTENS
    else if (opcao == 4) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        let material2 = $("#material2").val();
        let volume2 = $("#volume2").val();
        let zd022 = $("#zd022").val();
        let zd132 = $("#zd132").val();
        let preco2 = $("#preco2").val();
        let ultpreco2 = $("#ultpreco2").val();

        let material3 = $("#material3").val();
        let volume3 = $("#volume3").val();
        let zd023 = $("#zd023").val();
        let zd133 = $("#zd133").val();
        let preco3 = $("#preco3").val();
        let ultpreco3 = $("#ultpreco3").val();

        $("#resultado").html(`CGFOR: ${CGFOR}`)
        .append(`<br>COTAÇÃO: ${COTACAO}`)
        .append(`<br>BP: ${BP}`)
        .append(`<br>SEGMENTO: ${SEGMENTO}`)
        .append(`<br>MIX: ${MIX}`)
        .append(`<br>MATERIAL: ${MATERIAL}`)
        .append(`<br>VOLUME: ${VOLUME}`)
        .append(`<br>ZD02: ${ZD02}%`)
        .append(`<br>ZD13: ${ZD13}%`)
        .append(`<br>PREÇO: ${PRECO}`)
        .append(`<br>ÚLTIMO PREÇO: ${ULTPRECO}`)

        .append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}%`)
        .append(`<br>ZD13: ${zd131}%`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)

        .append(`<br>MATERIAL: ${material2}`)
        .append(`<br>VOLUME: ${volume2}`)
        .append(`<br>ZD02: ${zd022}%`)
        .append(`<br>ZD13: ${zd132}%`)
        .append(`<br>PREÇO: ${preco2}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco2}`)

        .append(`<br>MATERIAL: ${material3}`)
        .append(`<br>VOLUME: ${volume3}`)
        .append(`<br>ZD02: ${zd023}%`)
        .append(`<br>ZD13: ${zd133}%`)
        .append(`<br>PREÇO: ${preco3}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco3}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)

        .append('<br><a href="https://api.whatsapp.com/send?phone=5585997990070&text=" target="_blank"><button>Enviar via whatsapp</button></a>')
    }
// IMPRIMIR CINCO ÍTENS
    else if (opcao == 5) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        let material2 = $("#material2").val();
        let volume2 = $("#volume2").val();
        let zd022 = $("#zd022").val();
        let zd132 = $("#zd132").val();
        let preco2 = $("#preco2").val();
        let ultpreco2 = $("#ultpreco2").val();

        let material3 = $("#material3").val();
        let volume3 = $("#volume3").val();
        let zd023 = $("#zd023").val();
        let zd133 = $("#zd133").val();
        let preco3 = $("#preco3").val();
        let ultpreco3 = $("#ultpreco3").val();

        let material4 = $("#material4").val();
        let volume4 = $("#volume4").val();
        let zd024 = $("#zd024").val();
        let zd134 = $("#zd134").val();
        let preco4 = $("#preco4").val();
        let ultpreco4 = $("#ultpreco4").val();

        $("#resultado").html(`CGFOR: ${CGFOR}`)
        .append(`<br>COTAÇÃO: ${COTACAO}`)
        .append(`<br>BP: ${BP}`)
        .append(`<br>SEGMENTO: ${SEGMENTO}`)
        .append(`<br>MIX: ${MIX}`)
        .append(`<br>MATERIAL: ${MATERIAL}`)
        .append(`<br>VOLUME: ${VOLUME}`)
        .append(`<br>ZD02: ${ZD02}%`)
        .append(`<br>ZD13: ${ZD13}%`)
        .append(`<br>PREÇO: ${PRECO}`)
        .append(`<br>ÚLTIMO PREÇO: ${ULTPRECO}`)

        .append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}%`)
        .append(`<br>ZD13: ${zd131}%`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)

        .append(`<br>MATERIAL: ${material2}`)
        .append(`<br>VOLUME: ${volume2}`)
        .append(`<br>ZD02: ${zd022}%`)
        .append(`<br>ZD13: ${zd132}%`)
        .append(`<br>PREÇO: ${preco2}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco2}`)

        .append(`<br>MATERIAL: ${material3}`)
        .append(`<br>VOLUME: ${volume3}`)
        .append(`<br>ZD02: ${zd023}%`)
        .append(`<br>ZD13: ${zd133}%`)
        .append(`<br>PREÇO: ${preco3}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco3}`)

        .append(`<br>MATERIAL: ${material4}`)
        .append(`<br>VOLUME: ${volume4}`)
        .append(`<br>ZD02: ${zd024}%`)
        .append(`<br>ZD13: ${zd134}%`)
        .append(`<br>PREÇO: ${preco4}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco4}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
        .append('<br><a href="https://api.whatsapp.com/send?phone=5585997990070&text=" target="_blank"><button>Enviar via whatsapp</button></a>')
    }

   
    // POR ENQUANTO SÓ 5 OPÇÕES

    /*
    else if (opcao == 6) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        $("#resultado").append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}`)
        .append(`<br>ZD13: ${zd131}`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
    }
    else if (opcao == 7) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        $("#resultado").append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}`)
        .append(`<br>ZD13: ${zd131}`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
    }
    else if (opcao == 8) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        $("#resultado").append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}`)
        .append(`<br>ZD13: ${zd131}`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
    }
    else if (opcao == 9) {
        
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        $("#resultado").append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}`)
        .append(`<br>ZD13: ${zd131}`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
    }
    else if (opcao == 10) {
       
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        $("#resultado").append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}`)
        .append(`<br>ZD13: ${zd131}`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
    }


    <input id="seuTxt" value="Olá mundo!" />
<input type="button" id="ola" value="Clique em mim" />

$("#copiar").click(function() {
            $('#resultado').select();
            try{
                var ok = document.execCommand('copy');
                if (ok) { alert('Texto copiado com sucesso!'); }
        } catch (e) {
        alert(e)
            }

            
            
            
    
});


var up = document.getElementById('GFG_UP');
        var down = document.getElementById('GFG_DOWN');
        up.innerHTML = "Click on the button to "
                + "copy a DIV into another DIV."; 
          
        function GFG_Fun() {
            var $el = $('.child').clone();
            $('#parent2').append($el);
            down.innerHTML = "Inner DIV is copied "
                    + "to another element.";


});
*/

$("#copiar").click(function() {
    $('#resultado').select();
    try{
        var ok = document.execCommand('copy');
        if (ok) { alert('Texto copiado com sucesso!'); }
} catch (e) {
alert(e)
    }

            /*
            down.innerHTML = "Inner DIV is copied "
                    + "to another element.";
                    */

            
            
            
    
});

    });

    
    
    
})










  


  
