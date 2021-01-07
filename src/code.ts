import * as Rx from "rxjs/Observable";

let observable = Rx.Observable.create((observer: any) => {
    try{
        observer.next("Hey guys!");
        observer.next("Ho are doing");
        // observer.complete(); compliting an observable
       setInterval(() => {
         observer.next('I am good')
       },2000)
    }
    catch(err){
        observer.error(err)
    }
  })

let observer = observable.subscribe(
    (x:any) => addItem(x),
    (greeting: any) => addItem(greeting),
    () => addItem('Complited'),
    
    );
  
let observer2;    
setTimeout(() => {
      observer2 = observable.subscribe((x:any)=> {
         addItem("Observable 2: "+x);
     })
}, 1000);   

observer.add(observer2);
observer.unsubscribe()
;
function addItem(val:any){
    let node = document.createElement('li');
    let textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}