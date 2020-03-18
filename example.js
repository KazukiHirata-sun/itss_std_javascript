#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
main(argc, argv )  
{
   let N = argc;

   if( N < 2 )
   {
      console.log("Ban nen cung cap mot tham so.");
      return;
   }
   for(i = N -1; i>=1; i--) 

      console.log("番目"+ i +argv[i]);
   
}
