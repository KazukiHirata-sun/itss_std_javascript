'use strict';

// このファイルを修正して、プルリクエストしてください。
// 問題5：Xはなに
// regexはむずかしいですから。。。
function analyze(input) {
  let result = []
  //　"+"を解除
  for(let preprocess_block of input.split("+")){
    // "="を解除
    for (let element of preprocess_block.split("=")) {
      result.push(element)
    }
  } 
  return result
}

// 入力からX_paramとconst_paramに変換する
function converter(input) {
  let result = {
    X_param: 0,
    const_param: 0
  }
  let multiplier = 1;
  for(let i = input.length -1; i >= 0; i--) {
    if (input[i] == "X") result.X_param = result.X_param + multiplier
    else result.const_param = result.const_param + multiplier*parseInt(input[i])
    multiplier = multiplier * 10
  }
  return result
}

// first_class_functionの模様は「a＊X + b = 0」です。
class first_class_function {
  constructor() {
    this.X_param = 0
    this.const_param = 0
  }

  get resultIsPropiate() {
    return Math.abs(this.const_param) % Math.abs(this.X_param) == 0 && 
           -this.const_param/this.X_param >= 0 && 
           -this.const_param/this.X_param <= 9
  }

  get result(){
    return this.resultIsPropiate ? -(this.const_param/this.X_param) : "N/A"
  }
} 

// ちゃんと入力するか確認する
if (process.argv.length != 3) {
  console.log("「数字列 + 数字列 = 数字列」として入力してください。\n例えば：XX22+89=X2XX")
  return
} 

// 3部分に分ける。
let inputs = analyze(process.argv[2])
if (inputs.length != 3) {
  console.log("「数字列 + 数字列 = 数字列」として入力してください。\n例えば：XX22+89=X2XX")
  return
}

let newFunction = new first_class_function()
// 数字列をX_paramとconst_paramの組み合わせに変換する。
// X2XX -> 1011*X + 200とは1011がX_paramで200がconst_paramです。
// 最後結果は、X_param*X + const_param = 0のようになる。
// 3つだけですから、
newFunction.X_param = converter(inputs[0]).X_param 
                      + converter(inputs[1]).X_param 
                      - converter(inputs[2]).X_param
newFunction.const_param = converter(inputs[0]).const_param
                      + converter(inputs[1]).const_param
                      - converter(inputs[2]).const_param
console.log(newFunction.result)