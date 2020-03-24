#!/usr/bin/env node

'use strict';

class User {
    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }
    //セッターメソッド
    set myName( value ) {
        this.name = value;
    }
    // ゲッターメソッド
    get myName() {
        return this.name;
    }
}

var Thi = new User("Thi", 35);
console.log(Thi.myName);

Thi.myName="Nguyen";
console.log(Thi.myName);