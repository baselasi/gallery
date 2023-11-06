export default function findPosts(arr,id){
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
        if(arr[j].userId == id){
            newarr[i]= arr[j]
            i++
        }
    }
  return newarr

}
  