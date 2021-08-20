/*botoes*/
let qp = document.querySelector("#qp");
let ge = document.querySelector("#ge");
let e6 = document.querySelector("#e6");
let iNove = document.querySelector("#i9");
let pNove = document.querySelector("#p9");
let pe = document.querySelector("#pE");
let piOito = document.querySelector("#pi8");
let pje = document.querySelector("#pje");
let PiNove = document.querySelector("#PI9");
let PJE = document.querySelector("#PJE");
let q = document.querySelector("#q");
let qf = document.querySelector("#qf");
let qidp = document.querySelector("#qidp");
let s1E = document.querySelector("#S1e");
let qpi = document.querySelector("#qpi");
let se = document.querySelector("#se");
let sq = document.querySelector("#sq");
let yp = document.querySelector("#yp");
let t = document.querySelector("#t");
let toEight = document.querySelector("#to8");
let ts = document.querySelector("#ts");
let tp = document.querySelector("#tp");
let uoEight = document.querySelector("#uo8");
let w = document.querySelector("#w");
let wo = document.querySelector("#wo");
let wpj = document.querySelector("#WPJ");
let ws = document.querySelector("#ws");
let yNove = document.querySelector("#y9");
let ipsolon = document.querySelector("#y");
let ipsolonI = document.querySelector("#yi");
let yiOito = document.querySelector("#yi8");
let yw = document.querySelector("#yw");
let sql = document.querySelector("#SQL");
let zqd = document.querySelector("#zqd");
let botaoWood = document.querySelector('#wood');
let body = document.querySelector('body');
let botaoChapeuZ = document.querySelector('#chapeu-z');
let botaoChapeuD = document.querySelector('#chapeu-d');
let botao0 = document.querySelector('#zero');
let botaoNove = document.querySelector('#nove');
let botaoNoventaDois = document.querySelector('#noventa-dois');
let eMinusculo = document.querySelector("#e");
let eMAIUSCULO = document.querySelector("#E");
let ed = document.querySelector("#ed");
let button = document.querySelector('button');


/*audios*/
let z = document.querySelector('.chapeu-z');
let d = document.querySelector('.chapeu-d');
let zero = document.querySelector('.zero');
let nove = document.querySelector('.nove');
let NoventaDois = document.querySelector('.noventa-dois');
let e = document.querySelector('.e');
let E = document.querySelector('.E');
let eD = document.querySelector('.ed');
let eSeis = document.querySelector('.e6');
let geE = document.querySelector('.ge');
let i9 = document.querySelector('.i9');
let p9 = document.querySelector('.p9');
let pE = document.querySelector('.pE');
let pi8 = document.querySelector('.pi8');
let pjee = document.querySelector('.pje');
let pi9 = document.querySelector('.PI9');
let PJEE = document.querySelector('.PJE');
let que = document.querySelector('.q');
let queF = document.querySelector('.qf');
let QIDP = document.querySelector('.qidp');
let QP = document.querySelector('.qp');
let S1e = document.querySelector('.S1e');
let QPI = document.querySelector('.q');
let SE = document.querySelector('.se');
let SQ = document.querySelector('.sq');
let SQL = document.querySelector('.SQL');
let T = document.querySelector('.SQL');
let to8 = document.querySelector('.to8');
let TS = document.querySelector('.ts');
let TP = document.querySelector('.tp');
let uo8 = document.querySelector('.uo8');
let W = document.querySelector('.w');
let WO = document.querySelector('.wo');
let WPJ = document.querySelector('.WPJ');
let WS = document.querySelector('.ws');
let Y = document.querySelector('.y');
let yi = document.querySelector('.yi');
let yi8 = document.querySelector('.yi8');
let yW = document.querySelector('.yw');
let yP = document.querySelector('.yp');
let ZQD = document.querySelector('.zqd');
let wood = document.querySelector('.wood');


// Adiciona Z = ^y
function addZnoBody(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'z'){
            z.play();
        }
    
    });
    botaoChapeuZ.addEventListener('click',function(){
        z.play();
    });
    
}
addZnoBody();


// Adiciona D
function acionarD(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'd'){
            d.play();
        }
    });
    botaoChapeuD.addEventListener('click',function(){
        d.play();
    });
}
acionarD();


// Adiciona zero
function acionarZero(){
    body.addEventListener('keypress',function(e){
        const key = e.key;
        if(key === '0'){
            zero.play();
        }
    });
    botao0.addEventListener('click',function(){
        zero.play();
    });
}
acionarZero();



// Adicionar o nove [9]
function acionarNove(){
    body.addEventListener('keypress',function(e){
        const key = e.key;

        if(key === '9'){
            nove.play();
        }
    })

    botaoNove.addEventListener('click',function(){
        nove.play();
    });

}
acionarNove();



// adiciona 92 que é   =
function acionaNoventaDois(){
    body.addEventListener('keypress',function(e){
        const key = e.key;
        if(key === '='){
            NoventaDois.play();
        }
    })

    botaoNoventaDois.addEventListener('click',function(){    
        NoventaDois.play();
    });

}
acionaNoventaDois();


// Adiciona  [ e ] minusculo
function acionaeMinusculo(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'e'){
            e.play();
        }
    });
    eMinusculo.addEventListener('click',function(){
        e.play();
    });

}
acionaeMinusculo();



// Adiciona E     maiusculo
function acenaEmaiusculo(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'E'){
            E.play();
        }
    });
    eMAIUSCULO.addEventListener('click',function(){
        E.play();
    });
}
acenaEmaiusculo();




// Adiciona a = eD
function acionareD(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'a'){
            eD.play();
        }
    });

    ed.addEventListener('click',function(){
        eD.play();
    });
}
acionareD();




// adiciona b = e6
function acionare6(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'b'){
            eSeis.play();
        }
    });
    e6.addEventListener('click',function(){
        eSeis.play();
    });
}
acionare6();



// Adiciona ge = c
function acionarge(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'c'){
            geE.play();
        }
    });
    ge.addEventListener('click',function(){
        geE.play();
    });
}
acionarge();




// Adiciona i9 = f
function acionari9(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'f'){
            i9.play();
        }
    });
    iNove.addEventListener('click',function(){
        i9.play();
    });
};
acionari9();


// adiciona p9 = g
function acionarp9(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'g'){
            p9.play();
        }
    });
    pNove.addEventListener('click',function(){
        p9.play();
    });
}
acionarp9();


// adiciona pE = h
function acionarpE(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'h'){
            pE.play();
        }
    });
    pe.addEventListener('click',function(){
        pE.play();
    });

}
acionarpE();



// adiciona pi8 = i
function acionarpi8(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'i'){
            pi8.play();
        }
    });
    piOito.addEventListener('click',function(){
        pi8.play();
    });
}
acionarpi8();


// Adiciona j = pje
function acionarpjee(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'j'){
            pjee.play();
        }
    });
    pje.addEventListener('click',function(){
        pjee.play();
    });
}
acionarpjee();


// Adiciona k = pi9
function acionarpi9(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'k'){
            pi9.play();
        }
    });
    PiNove.addEventListener('click',function(){
        pi9.play();
    });
}
acionarpi9();


// Adiciona l = PJE
function acionarPJEE(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'l'){
            PJEE.play();
        }
    });
    PJE.addEventListener('click',function(){
        PJEE.play();
    });
}
acionarPJEE();


// Adiciona m  = q
function acionarQ(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'm'){
            que.play();
        }
    });
    q.addEventListener('click',function(){
        que.play();
    });
} 
acionarQ();


// Adiciona n = qf
function acionarQF(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'n'){
            queF.play();
        }
    });
    qf.addEventListener('click',function(){
        queF.play();
    }); 
}
acionarQF();


// Adiciona o = qidp
function acionarQIDP(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'o'){
            QIDP.play();
        }
    });
    qidp.addEventListener('click',function(){
        QIDP.play();
    });
}
acionarQIDP();


// Adiciona p  = qp
function acionarQP(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'p'){
            QP.play();
        }
    });
    qp.addEventListener('click',function(){
        QP.play();
    });

}
acionarQP();








function acionarS1e(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'q'){
            S1e.play();
        }
    });
    s1E.addEventListener('click',function(){
        S1e.play();
    });
}
acionarS1e();



function acionarQPI(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'r'){
            QPI.play();
        }
    });
    qpi.addEventListener('click',function(){
        QPI.play();
    });
}
acionarQPI();



function acionarSE(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 's'){
            SE.play();
        }
    });
    se.addEventListener('click',function(){
        SE.play();
    });
}
acionarSE();


function acionarSQ(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 't'){
            SQ.play();
        }
    });
    sq.addEventListener('click',function(){
        SQ.play();
    });
}
acionarSQ();



function acionarSQL(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'u'){
            SQL.play();
        }
    });
    sql.addEventListener('click',function(){
        SQL.play();
    });
}
acionarSQL();




function acionarT(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'v'){
            T.play();
        }
    });
    t.addEventListener('click',function(){
        T.play();
    });
}
acionarT();



function acionarto8(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'w'){
            to8.play();
        }
    });
    toEight.addEventListener('click',function(){
        to8.play();
    });
}
acionarto8();



function acionarTS(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'B'){
            TS.play();
        }
    });
    ts.addEventListener('click',function(){
        TS.play();
    });
}
acionarTS();


function acionarTP(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'A'){
            TP.play();
        }
    });
    tp.addEventListener('click',function(){
        TP.play();
    });
}
acionarTP();


function acionaruo8(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'C'){
            uo8.play();
        }
    });
    uoEight.addEventListener('click',function(){
        uo8.play();
    });
}
acionaruo8();



function acionarW(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'D'){
            W.play();
        }
    });
    w.addEventListener('click',function(){
        W.play();
    });
}
acionarW();



function acionarWO(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'F'){
            WO.play();
        }
    });
    wo.addEventListener('click',function(){
        WO.play();
    });
}
acionarWO();



function acionarWPJ(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'H'){
            WPJ.play();
        }
    });
    wpj.addEventListener('click',function(){
        WPJ.play();
    });
}
acionarWPJ();





function acionarWS(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'I'){
            WS.play();
        }
    });
    ws.addEventListener('click',function(){
        WS.play();
    });
}
acionarWS();





function acionarY9(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'K'){
            y9.play();
        }
    });
    let y9 = document.querySelector('.y9');
    yNove.addEventListener('click',function(){
        y9.play();
    });
}
acionarY9();








function acionarY(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'J'){
            Y.play();
        }
    });
    ipsolon.addEventListener('click',function(){
        Y.play();
    });
}
acionarY();





function acionaryi(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'L'){
            yi.play();
        }
    });
    ipsolonI.addEventListener('click',function(){
        yi.play();
    });
}
acionaryi();





function acionaryi8(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'M'){
            yi8.play();
        }
    });
    yiOito.addEventListener('click',function(){
        yi8.play();
    });
}
acionaryi8();





function acionaryw(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'N'){
            yW.play();
        }
    });
    yw.addEventListener('click',function(){
        yW.play();
    });
}
acionaryw();




function acionaryp(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'O'){
            yP.play();
        }
    });
    yp.addEventListener('click',function(){
        yP.play();
    });
}
acionaryp();



function acionarZQD(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'P'){
            ZQD.play();
        }
    });
    zqd.addEventListener('click',function(){
        ZQD.play();
    });
}
acionarZQD();


function acionarWood(){
    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'G'){
            wood.play();
        }
    });
    botaoWood.addEventListener('click',function(){
        wood.play();
    });
}
acionarWood();



