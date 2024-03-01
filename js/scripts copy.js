let url="xml/NFe35230627208212000204550010000115221515080607.xml";
$.ajax(url)
    .done(function(xml){
        $(xml).find("nfeProc").each(function(){
            $("#tag1").append(`
                                <div class="xml">
                                <p class="tagXml"> <strong>infNFe</strong> ${$(this).find("infNFe").attr("Id")} </p>
                                <p class="tagXml"> <strong>natOp</strong> ${$(this).find("natOp").text()} </p>
                                <p class="tagXml"> <strong>mod</strong> ${$(this).find("mod").text()} </p>
                                <p class="tagXml"> <strong>serie</strong> ${$(this).find("serie").text()} </p>
                                <p class="tagXml"> <strong>nNF</strong> ${$(this).find("nNF").text()} </p>
                                <p class="tagXml"> <strong>dhEmi</strong> ${$(this).find("dhEmi").text()} </p>
                                <p class="tagXml"> <strong>dhSaiEnt</strong> ${$(this).find("dhSaiEnt").text()} </p>
                                <p class="tagXml"> <strong>tpNF</strong> ${$(this).find("tpNF").text()} </p>
                                <p class="tagXml"> <strong>idDest</strong> ${$(this).find("idDest").text()} </p>
                                <p class="tagXml"> <strong>cMunFG</strong> ${$(this).find("cMunFG").text()} </p>
                                <p class="tagXml"> <strong>tpEmis</strong> ${$(this).find("tpEmis").text()} </p>
                                <p class="tagXml"> <strong>tpAmb</strong> ${$(this).find("tpAmb").text()} </p>
                                <p class="tagXml"> <strong>finNFe</strong> ${$(this).find("finNFe").text()} </p>
                                <p class="tagXml"> <strong>indFinal</strong> ${$(this).find("indFinal").text()} </p>
                                <p class="tagXml"> <strong>indPres</strong> ${$(this).find("indPres").text()} </p>
                                `);
        })
    })
    .fail(function(){
        alert("Erro na leitura")
    });

let url2="xml/NFe35230627208212000204550010000115221515080607.xml";
$.ajax(url2)
    .done(function(xml){
        $(xml).find("nfeProc").each(function(){
            $("#tag1").append(`
                                <div class="xml">
                                <p class="tagXml"> <strong>infNFe</strong> ${$(this).find("infNFe").attr("Id")} </p>
                                <p class="tagXml"> <strong>natOp</strong> ${$(this).find("natOp").text()} </p>
                                <p class="tagXml"> <strong>mod</strong> ${$(this).find("mod").text()} </p>
                                <p class="tagXml"> <strong>serie</strong> ${$(this).find("serie").text()} </p>
                                <p class="tagXml"> <strong>nNF</strong> ${$(this).find("nNF").text()} </p>
                                <p class="tagXml"> <strong>dhEmi</strong> ${$(this).find("dhEmi").text()} </p>
                                <p class="tagXml"> <strong>dhSaiEnt</strong> ${$(this).find("dhSaiEnt").text()} </p>
                                <p class="tagXml"> <strong>tpNF</strong> ${$(this).find("tpNF").text()} </p>
                                <p class="tagXml"> <strong>idDest</strong> ${$(this).find("idDest").text()} </p>
                                <p class="tagXml"> <strong>cMunFG</strong> ${$(this).find("cMunFG").text()} </p>
                                <p class="tagXml"> <strong>tpEmis</strong> ${$(this).find("tpEmis").text()} </p>
                                <p class="tagXml"> <strong>tpAmb</strong> ${$(this).find("tpAmb").text()} </p>
                                <p class="tagXml"> <strong>finNFe</strong> ${$(this).find("finNFe").text()} </p>
                                <p class="tagXml"> <strong>indFinal</strong> ${$(this).find("indFinal").text()} </p>
                                <p class="tagXml"> <strong>indPres</strong> ${$(this).find("indPres").text()} </p>
                                `);
        })
    })
    .fail(function(){
        alert("Erro na leitura")
    })
