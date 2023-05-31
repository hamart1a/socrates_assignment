/** 
 * console.log()를 활용하여 피라미드 모양으로 *을 출력하는 함수를 작성하시오.
 * row: 총 출력할 피라미드 층 수
 * 예시:
 *  pyramid(3);
 *   *  
 *  ***
 * *****
 * 
 *  pyramid(5);
 *     *    
 *    ***   
 *   *****  
 *  ******* 
 * *********
 * 
 *    2 1         4 1
 *    1 3         3 3
 *    0 5         2 5
 *                1 7
 *                0 9
 * 
*/
function pyramid(row) {
    console.log("시작");
    output = '';
    for(let i =0; i<row; i++){
        for(let j=row-i; j>0; j--){
            output += ' ';
        }
        for(let k=0; k<2*i+1; k++){
            output += '*';
        }
        output += '\n';
    }
    console.log(output);
}

pyramid(3);
pyramid(5);
pyramid(10);