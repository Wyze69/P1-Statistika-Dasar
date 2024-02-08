
// Masukkan angka ke dalam prompt

const dataValue = prompt('Masukkan angka').split(',').flatMap((e) => [parseFloat(e)]);

dataValue.sort(function(a,b) {

    return a - b;

});


// Range (R)

function rangeData(V) {

    return Math.max.apply(null,V) - Math.min.apply(null,V);

};

// 

// Rata - rata (X)

function meanData(V) {

let num = 0;

    for(i = 0; i < V.length; i++) {

        num += V[i];

    }

    return num / V.length;

};

// 

// Quartil 1 (Q1)

    function quartilSatu(V) {

        if(V.length % 2 == 0) {

            if(((V.length / 2) + 1) % 2 == 0) {
 
                 return V[(((V.length / 2) + 1) / 2) - 1];
 
            };

            if(((V.length / 2) + 1) % 2 == 1) {
 
                 return (V[((V.length / 2) / 2) - 1] + V[((V.length / 2) / 2)]) / 2;
 
            };
            
        };

        if(V.length % 2 == 1) {

            if(((V.length + 1) / 2) % 2 == 0) {

                return  V[(((V.length + 1) / 2) / 2) - 1 ];

           };

            if(((V.length + 1) / 2) % 2 == 1) {

                return  (V[((((V.length + 1) / 2) + 1 ) / 2) - 2 ] + V[((((V.length + 1) / 2) + 1 ) / 2) - 1]) / 2;

            };

        };

    };

// 

// Quatil 2 (Q2)

function quatilDua(V) {

    if(V.length % 2 == 0) {

        return (V[(V.length / 2) - 1] + V[(V.length / 2)]) / 2;

    };

    if(V.length % 2 == 1) {

        return V[((V.length + 1) / 2) - 1];

    };
 
};

// 

// Quartil 3 (Q3)

function quartilTiga(V) {

    if(V.length % 2 == 0) {

        if(((V.length / 2) + 1) % 2 == 0) {

             return V[(((V.length / 2) + 1) / 2) - 1 + (V.length / 2)];

        };

        if(((V.length / 2) + 1) % 2 == 1) {

             return (V[(((V.length / 2) / 2) - 1) + (V.length / 2)] + V[((V.length / 2) / 2) + (V.length / 2)]) / 2;

        };
        
    };

    if(V.length % 2 == 1) {

        if(((V.length + 1) / 2) % 2 == 0) {

            return  V[((((V.length + 1) / 2) / 2) - 1) + ((V.length + 1) / 2) ];

       };

        if(((V.length + 1) / 2) % 2 == 1) {

            return  (V[((((V.length + 1) / 2) + 1 ) / 2) - 2 + ((V.length + 1) / 2) ] + V[((((V.length + 1) / 2) + 1 ) / 2) - 1 + ((V.length + 1) / 2) ]) / 2;

        };

    };

};

// 

// Jangkauan antar kuartil (H)

function jangkauanQ(V) {

    return quartilTiga(V) - quartilSatu(V);

};

// 

// Simpangan kuartil (Qd)

function simpanganQ(V) {

    return (quartilTiga(V) - quartilSatu(V)) / 2;

}

// 

// Rataan kuartil (Rk)

function rataanQ(V) {

    return (quartilTiga(V) + quartilSatu(V)) / 2;

};

// 

// Rataan tiga (Rt) 

function rTigaQ(V) {

    return (quartilTiga(V) + quartilSatu(V) + (quatilDua(V) * 2 ) ) / 4;

};

// 

// Langkah (L)

function langkahQ(V) {

    return (3 * jangkauanQ(V)) / 2;

};

// 

// Pagar dalam (PD)

    function pagarDalam(V) {

        return quartilSatu(V) - langkahQ(V);

    }

// 

// Pagar Luar (PL) 

    function pagarluar(V) {

        return quartilTiga(V) + langkahQ(V);

    }

// 

// Pencilan (P)

    function pencilanData(V) {

        if(V[0] < pagarDalam(V) || V[V.length - 1] > pagarluar(V)) {

            return 'Data tidak normal';

        } else {

            return 'Data normal'

        }

};

// 

// Simpangan rata - rata 

function simpanganRata(V) {

    let numb = 0;
    const mean = meanData(V);

    for(i = 0; i < V.length; i ++) {

        if(V[i] - mean < 0 ) {

            numb += ( -1 * (V[i] - mean));

        }

        if(V[i] - mean >= 0 ) {

            numb += ( 1 * (V[i] - mean));

        }

    }

    return numb / V.length

};

// 

// Variasi (S^2)

function variasiData(V) {

        let numb = 0;
        const mean = meanData(V);
    
        for(i = 0; i < V.length; i ++) {
    
            numb += ((V[i] - mean) ** 2);
    
        }
    
        return numb / V.length
    
    };

// 

// Simpangan  baku (S) 

function simpanganBaku(V) {

    return Math.sqrt(variasiData(V));

};


// Console log
console.log('Nilai : ' + dataValue);
console.log('Frekuensi total (F) : ' + dataValue.length);
console.log('Range (R) : ' + rangeData(dataValue));
console.log('Rata - rata (X) : ' + meanData(dataValue));
console.log('Quartil 1 (Q1) : ' + quartilSatu(dataValue));
console.log('Quartil 2 (ME) : ' + quatilDua(dataValue));
console.log('Quartil 3 (Q3) : ' + quartilTiga(dataValue));
console.log('Jangakauan (H) : ' + jangkauanQ(dataValue));
console.log('Simpangan quartil (QD) : ' + simpanganQ(dataValue));
console.log('Rataan quartil (RK) : ' + rataanQ(dataValue));
console.log('Rataan tiga (RT) : ' + rTigaQ(dataValue));
console.log('Langkah (L) : ' + langkahQ(dataValue));
console.log('Pagar Dalam (PD) : ' + pagarDalam(dataValue));
console.log('Pagar Luar (PL) : ' + pagarluar(dataValue));
console.log('Pencilan (P) : ' + pencilanData(dataValue));
console.log('Simpangan rata - rata (SR) : ' + simpanganRata(dataValue));
console.log('Variasi (S^2) : ' + variasiData(dataValue));
console.log('Simpangan baku (S) : ' + simpanganBaku(dataValue));
