/* @flow */

function takesAListOfStringNumberUnion(list: (string | number)[]) {}

var inferred = [123];
takesAListOfStringNumberUnion(inferred);

var explicit: number[] = [123];
takesAListOfStringNumberUnion(explicit); // errors
