let url="xml/NFe35230627208212000204550010000115221515080607.xml";

let path = "xml/";

$.ajax({
    url: path,
    success: function(data){
        let xml = [
            "NFe33230613307123000626550010000004211000043353.xml",
            "NFe33230617467515003386550000011250031275320429.xml",
            "NFe33230636330977000114550010000181141000178600.xml",
            "NFe35230600153705000300550030011112581530707375.xml",
            "NFe35230600153705000300550030011129231255078462.xml",
            "NFe35230601703285000602550040001113781981780873.xml",
            "NFe35230603877063000119550010004446141120301794.xml",
            "NFe35230609091076000144550010002967321004827876.xml",
            "NFe35230610971350000159550010004290481000725130.xml",
            "NFe35230613462110000117550010003582091218552665.xml",
            "NFe35230627208212000204550010000115221515080607.xml",
            "NFe35230627208212000204550010000136531632126035.xml",
            "NFe35230627208212000204550010000136681707616932.xml",
            "NFe35230627208212000204550010000136801300725628.xml",
            "NFe35230630010454000104550010000052011943779640.xml",
            "NFe35230710971350000159550010004365571000310576.xml",
            "NFe35230828732540000189550010000300641095324270.xml",
            "NFe35230910971350000159550010004432181000373694.xml",
            "NFe41230636895856000110550010001753531466736978.xml",
            "NFe43230602945192000134550010000375891492327984.xml",
            "NFe43230629807905000150550010000005171195139551.xml" 
        ]
        xml.forEach(function(arquivoXml){
            $.ajax({
                url: path + arquivoXml,
                dataType: 'xml',
                success: function (xml) {
                    // Manipule o XML como necessário
                    $(xml).find("nfeProc").each(function () {
                        
                        let infNFe = $(this).find("infNFe").attr("Id").replace("NFe","");
                        let natOp = $(this).find("ide natOp").text();
                        let mod = $(this).find("ide mod").text();
                        let serie = $(this).find("ide serie").text();
                        let nNF = $(this).find("ide nNF").text();
                        let dhEmi = $(this).find("ide dhEmi").text();
                        let dhSaiEnt = $(this).find("ide dhSaiEnt").text();
                        let tpNF = $(this).find("ide tpNF").text();
                        let idDest = $(this).find("ide idDest").text();
                        let cMunFG = $(this).find("ide cMunFG").text();
                        let tpEmis = $(this).find("ide tpEmis").text();
                        let tpAmb = $(this).find("ide tpAmb").text();
                        let finNFe = $(this).find("ide finNFe").text();
                        let indFinal = $(this).find("ide indFinal").text();
                        let indPres = $(this).find("ide indPres").text();
                        
                        let emit_cnpj = $(this).find("emit CNPJ").text();
                        let emit_CPF = $(this).find("emit CPF").text();
                        let emit_xNome = $(this).find("emit xNome").text();
                        let emit_xFant = $(this).find("emit xFant").text();

                        let dest_cnpj = $(this).find("dest CNPJ").text();
                        let dest_CPF = $(this).find("dest CPF").text();
                        let dest_xNome = $(this).find("dest xNome").text();

                        $("#nota").append(`
                                                <div class="xml">
                                                <p class="SubTitle"> <strong>IDE   </strong></p>
                                                <p class="tagXml"> <strong>infNFe  -	chavenfe </strong> ${infNFe} </p>
                                                <p class="tagXml"> <strong>natOp   	-	naturezaoperacao</strong> ${natOp} </p>
                                                <p class="tagXml"> <strong>mod  	-	modelo</strong> ${mod} </p>
                                                <p class="tagXml"> <strong>serie  	-	serie</strong> ${serie} </p>
                                                <p class="tagXml"> <strong>nNF  	-	numeronfe</strong> ${nNF}</p>
                                                <p class="tagXml"> <strong>dhEmi   	-	datahoraemissao</strong> ${dhEmi} </p>
                                                <p class="tagXml"> <strong>dhSaiEnt  	-	datahorasaidaentrada</strong> ${dhSaiEnt} </p>
                                                <p class="tagXml"> <strong>tpNF  	-	tipooperacao</strong> ${tpNF} </p>
                                                <p class="tagXml"> <strong>idDest  	-	localdestinooperacao</strong> ${idDest} </p>
                                                <p class="tagXml"> <strong>cMunFG  	-	codigomunicipiofatogerador</strong> ${cMunFG} </p>
                                                <p class="tagXml"> <strong>tpEmis  	-	tipoemissao</strong> ${tpEmis} </p>
                                                <p class="tagXml"> <strong>tpAmb  	-	tipoambiente</strong> ${tpAmb} </p>
                                                <p class="tagXml"> <strong>finNFe   	-	finalidadeemissão</strong> ${finNFe} </p>
                                                <p class="tagXml"> <strong>indFinal   	-	indconsumidorfinal</strong> ${indFinal} </p>
                                                <p class="tagXml"> <strong>indPres    	-	indicadorpresenca</strong> ${indPres} </p>
                                                <p class="SubTitle"> <strong>Emit   </strong></p>
                                                <p class="tagXml"> <strong>CNPJ</strong> ${emit_cnpj} </p>
                                                <p class="tagXml"> <strong>CPF</strong> ${emit_CPF} </p>
                                                <p class="tagXml"> <strong>xNome</strong> ${emit_xNome} </p>
                                                <p class="tagXml"> <strong>xFant</strong> ${emit_xFant} </p>
                                                <p class="SubTitle"> <strong>Dest   </strong></p>
                                                <p class="tagXml"> <strong>CNPJ</strong> ${dest_cnpj} </p>
                                                <p class="tagXml"> <strong>CPF</strong> ${dest_CPF} </p>
                                                <p class="tagXml"> <strong>xNome</strong> ${dest_xNome} </p>
                                                
                                                <hr>
                                                `);
                                                
                                                    
                                                
                                                                  
                    });
                },
                error: function () {
                    alert("Erro na leitura do arquivo: " + file);
                }
            });
        });
    },
    error: function () {
        alert("Erro na leitura da pasta");
    }
});

