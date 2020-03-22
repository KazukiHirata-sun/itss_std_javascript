#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。

const suitableMeetingRoom = occupiedRooms =>
  Math.floor((Math.min(...occupiedRooms) + Math.max(...occupiedRooms)) / 2);

console.log(
  suitableMeetingRoom(process.argv.slice(2).map(arg => parseInt(arg)))
);
