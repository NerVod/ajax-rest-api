import { Observable, of, map, count, filter } from 'rxjs';

const myObservable = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next('Hello ');
    }, 1000);
    setTimeout(() => {
        subscriber.next('world ');
    }, 1500);
    setTimeout(() => {
        subscriber.next('!');
    }, 2000);
    setTimeout(() => {
        subscriber.complete();
        // subscriber.unsuscribe();
    }, 3000);
});

function logSubscription() {
    let dataArray = [];
    let boutNumber = 1;
    myObservable.subscribe(data => {
        dataArray.push(data);
        console.log(`Bout de phrase n° ${boutNumber} : ${data}`);
        boutNumber++
    }).add(() => {
        console.log(`Phrase complète : `, dataArray.join(''));
    });
};

// logSubscription();



const ofObservable = of(1, 2, 2.1, 2.8, 3.5, 3.9, 4, 10, 11, 0.5, 0.36).pipe(
    map((value) => {
        return value * 2;
    }),
    filter((value) => {
        return value < 6;
    }),
    count()
    )

    // let datas = [];

    ofObservable.subscribe(data => {
        console.log('Bout de donnée reçu :', data)
    });
    
    

// const ofObservable = of('Hello ', 'World', '!');
//     let data = [];
// ofObservable.suscribe(data => {
// console.log('Bout de données reçu :', data)
// datas.push(data)
// }).add(() => {
//     console.log('Phrase complète :', datas.join(''));
// });



// ofObservable.subscribe({
//     nest(data) {
//         console.log('data? ', data);
//         datas.push(data);
//     },
//     error(err) {
//         console.log('err? ', err)
//     },
//     complete() {
//         // console.log('Tout est fini !');
//     console.log('Phrase complète : ', datas.join(''))
//     }
// });

