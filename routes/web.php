<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     sleep(1);
//     return Inertia::render('Home', ['name' =>'mike']);
// });
// Route::inertia('/', 'Home');
Route::get('/', [PostController::class, 'index'])->name('home');

route::resource('posts', PostController::class)->except('index');
