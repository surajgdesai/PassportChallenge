<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/factory', 'FactoryController@get');

Route::post('/factory', 'FactoryController@add');

Route::put('/update', 'FactoryController@update');

Route::post('/children', 'FactoryController@add_children');

Route::delete('/delete/{id}', 'FactoryController@destroy');
