const sentence = "hello there from lighthouse labs\n";

let delay = 500
writeSentence = function (){
for (let char of sentence){
    setTimeout(() => {
        process.stdout.write(char)
    },delay)
    delay += 100
}
}
writeSentence(sentence)