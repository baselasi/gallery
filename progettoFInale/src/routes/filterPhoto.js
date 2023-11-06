export default function filterPhoto(arr,id){
    let i = 0
    let newarr =  []
    /*newarr = arr.forEach((element,index) => {
            if(element.albumId == id){
                newarr[i] = element
                i++
            console.log(newarr)

            }
            return newarr
            
    });*/
    for ( let j=0 ; j< arr.length ; j++){
        if(arr[j].albumId == id){
            newarr[i]= arr[j]
            i++
        }
    }
  return newarr

}
  