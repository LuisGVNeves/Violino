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
let botaoChapeuY = document.querySelector('#chapeu-y');
let botaoChapeuD = document.querySelector('#chapeu-d');
let botao0 = document.querySelector('#zero');
let botaoNove = document.querySelector('#nove');
let botaoNoventaDois = document.querySelector('#noventa-dois');
let eMinusculo = document.querySelector("#e");
let eMAIUSCULO = document.querySelector("#E");
let ed = document.querySelector("#ed");





function acionarY(){
    let y = document.querySelector('.chapeu-y');

    body.addEventListener('keyup',function(event){
        const key = event.key;

        if(key === 'y'){
            y.play();
            botaoChapeuY.style.backgroundColor = "green";
        }

    });

    botaoChapeuY.addEventListener('click',function(){
        return y.play();
    })
    
}
acionarY();




function acionarD(){
    let d = document.querySelector('.chapeu-d');

    botaoChapeuD.addEventListener('click',function(){
        d.play();
    });

    body.addEventListener('keypress',function(event){
        const key = event.key;
        if(key === 'd'){
            d.play();
            botaoChapeuY.style.backgroundColor = "white";
        }
    });
    
}
acionarD();


function acionarZero(){
    // Pegando a classe que está acoplado o audio
    let zero = document.querySelector('.zero');
    botao0.addEventListener('click',function(){
        zero.play();
    });

}
acionarZero();



function acionarNove(){
    // Pegando a classe que está acoplado o audio
    let nove = document.querySelector('.nove');

    botaoNove.addEventListener('click',function(){
        nove.play();
    });

}
acionarNove();




function acionaNoventaDois(){
    // Pegando a classe que está acoplado o audio
    let NoventaDois = document.querySelector('.noventa-dois');
    botaoNoventaDois.addEventListener('click',function(){    
        NoventaDois.play();
    });

}
acionaNoventaDois();





function acionaeMinusculo(){
    // Pegando a classe que está acoplado o audio
    let e = document.querySelector('.e');
    eMinusculo.addEventListener('click',function(){
        e.play();
    });

}
acionaeMinusculo();




function acenaEmaiusculo(){
    // Pegando a classe que está acoplado o audio
    let E = document.querySelector('.E');
    eMAIUSCULO.addEventListener('click',function(){
        E.play();
    });
}
acenaEmaiusculo();





function acionareD(){
    // Pegando a classe que está acoplado o audio
    let eD = document.querySelector('.ed');
    ed.addEventListener('click',function(){
        eD.play();
    });
}
acionareD();





function acionare6(){
    // Pegando a classe que está acoplado o audio
    let eSeis = document.querySelector('.e6');
    e6.addEventListener('click',function(){
        eSeis.play();
    });
}
acionare6();


function acionarge(){
    // Pegando a classe que está acoplado o audio
    let geE = document.querySelector('.ge');
    ge.addEventListener('click',function(){
        geE.play();
    });
}
acionarge();




function acionari9(){
    // Pegando a classe que está acoplado o audio
    let i9 = document.querySelector('.i9');
    iNove.addEventListener('click',function(){
        i9.play();
    });
};
acionari9();


function acionarp9(){
    // Pegando a classe que está acoplado o audio
    let p9 = document.querySelector('.p9');
    pNove.addEventListener('click',function(){
        p9.play();
    });
}
acionarp9();



function acionarpE(){
    // Pegando a classe que está acoplado o audio
    let pE = document.querySelector('.pE');
    pe.addEventListener('click',function(){
        pE.play();
    });

}
acionarpE();



function acionarpi8(){
    // Pegando a classe que está acoplado o audio
    let pi8 = document.querySelector('.pi8');
    piOito.addEventListener('click',function(){
        pi8.play();
    });
}
acionarpi8();

function acionarpjee(){
    // Pegando a classe que está acoplado o audio
    let pjee = document.querySelector('.pje');
    pje.addEventListener('click',function(){
        pjee.play();
    });
}
acionarpjee();



function acionarpi9(){
    // Pegando a classe que está acoplado o audio
    let pi9 = document.querySelector('.PI9');
    PiNove.addEventListener('click',function(){
        pi9.play();
    });
}
acionarpi9();



function acionarPJEE(){
    // Pegando a classe que está acoplado o audio
    let PJEE = document.querySelector('.PJE');
    PJE.addEventListener('click',function(){
        PJEE.play();
    });
}
acionarPJEE();



function acionarQ(){
    // Pegando a classe que está acoplado o audio
    let que = document.querySelector('.q');
    q.addEventListener('click',function(){
        que.play();
    });
} 
acionarQ();


function acionarQF(){
    // Pegando a classe que está acoplado o audio
    let queF = document.querySelector('.qf');
    qf.addEventListener('click',function(){
        queF.play();
    }); 
}
acionarQF();


function acionarQIDP(){

    // Pegando a classe que está acoplado o audio
    let QIDP = document.querySelector('.qidp');
    qidp.addEventListener('click',function(){
        QIDP.play();
    });
}
acionarQIDP();



function acionarQP(){
    // Pegando a classe que está acoplado o audio
    let QP = document.querySelector('.qp');
    qp.addEventListener('click',function(){
        QP.play();
    });

}
acionarQP();



function acionarS1e(){
    // Pegando a classe que está acoplado o audio
    let S1e = document.querySelector('.S1e');
    s1E.addEventListener('click',function(){
        S1e.play();
    });
}
acionarS1e();



function acionarQPI(){
    // Pegando a classe que está acoplado o audio
    let QPI = document.querySelector('.q');
    qpi.addEventListener('click',function(){
        QPI.play();
    });
}
acionarQPI();





function acionarSE(){
    // Pegando a classe que está acoplado o audio
    let SE = document.querySelector('.se');
    se.addEventListener('click',function(){
        SE.play();
    });
}
acionarSE();




function acionarSQ(){
    // Pegando a classe que está acoplado o audio
    let SQ = document.querySelector('.sq');
    sq.addEventListener('click',function(){
        SQ.play();
    });
}
acionarSQ();



function acionarSQL(){
    // Pegando a classe que está acoplado o audio
    let SQL = document.querySelector('.SQL');
    sql.addEventListener('click',function(){
        SQL.play();
    });
}
acionarSQL();




function acionarT(){
    // Pegando a classe que está acoplado o audio
    let T = document.querySelector('.SQL');
    t.addEventListener('click',function(){
        T.play();
    });
}
acionarT();



function acionarto8(){
    // Pegando a classe que está acoplado o audio
    let to8 = document.querySelector('.to8');
    toEight.addEventListener('click',function(){
        to8.play();
    });
}
acionarto8();




function acionarTS(){
    // Pegando a classe que está acoplado o audio
    let TS = document.querySelector('.ts');
    ts.addEventListener('click',function(){
        TS.play();
    });
}
acionarTS();




function acionarTP(){
    // Pegando a classe que está acoplado o audio
    let TP = document.querySelector('.tp');
    tp.addEventListener('click',function(){
        TP.play();
    });
}
acionarTP();




function acionaruo8(){
    // Pegando a classe que está acoplado o audio
    let uo8 = document.querySelector('.uo8');
    uoEight.addEventListener('click',function(){
        uo8.play();
    });
}
acionaruo8();



function acionarW(){
    // Pegando a classe que está acoplado o audio
    let W = document.querySelector('.w');
    w.addEventListener('click',function(){
        W.play();
    });
}
acionarW();



function acionarWO(){
    // Pegando a classe que está acoplado o audio
    let WO = document.querySelector('.wo');
    wo.addEventListener('click',function(){
        WO.play();
    });
}
acionarWO();



function acionarWPJ(){
    // Pegando a classe que está acoplado o audio
    let WPJ = document.querySelector('.WPJ');
    wpj.addEventListener('click',function(){
        WPJ.play();
    });
}
acionarWPJ();





function acionarWS(){
    // Pegando a classe que está acoplado o audio
    let WS = document.querySelector('.ws');
    ws.addEventListener('click',function(){
        WS.play();
    });
}
acionarWS();





function acionarY9(){
    // Pegando a classe que está acoplado o audio
    let y9 = document.querySelector('.y9');
    yNove.addEventListener('click',function(){
        y9.play();
    });
}
acionarY9();





function acionarY(){
    // Pegando a classe que está acoplado o audio
    let Y = document.querySelector('.y');
    ipsolon.addEventListener('click',function(){
        Y.play();
    });
}
acionarY();





function acionaryi(){
    // Pegando a classe que está acoplado o audio
    let yi = document.querySelector('.yi');
    ipsolonI.addEventListener('click',function(){
        yi.play();
    });
}
acionaryi();





function acionaryi8(){
    // Pegando a classe que está acoplado o audio
    let yi8 = document.querySelector('.yi8');
    yiOito.addEventListener('click',function(){
        yi8.play();
    });
}
acionaryi8();





function acionaryw(){
    // Pegando a classe que está acoplado o audio
    let yW = document.querySelector('.yw');
    yw.addEventListener('click',function(){
        yW.play();
    });
}
acionaryw();




function acionaryp(){
    // Pegando a classe que está acoplado o audio
    let yP = document.querySelector('.yp');
    yp.addEventListener('click',function(){
        yP.play();
    });
}
acionaryp();



function ZQD(){
    // Pegando a classe que está acoplado o audio
    let ZQD = document.querySelector('.zqd');
    zqd.addEventListener('click',function(){
        ZQD.play();
    });
}
ZQD();


function acionarWood(){
    botaoWood.addEventListener('click',function(){
        let wood = document.querySelector('.wood');
        wood.play();
    });
}
acionarWood();