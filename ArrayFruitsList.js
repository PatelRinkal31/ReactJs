export default function ArrayFruitsLIst(){
    const fruits = ['Apple','Orange','Banana','Grapes'];
    const fruitsList = fruits.map((fruit,index,array)=>
        <h3>{index} {fruit} {array}</h3>
    )
    return(
        <>
            <p>{fruitsList}</p>
        </>
    )
}