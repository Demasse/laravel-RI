<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    sleep(1);
    return Inertia::render('Home', ['name' =>'mike']);
});
// Route::inertia('/', 'Home');
