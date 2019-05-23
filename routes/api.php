<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('user/register', 'AuthController@register');
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('user/login', 'AuthController@login');

Route::post('user/logout', 'AuthController@logout');

Route::resource('admin/users', 'UsersController');
Route::put('admin/users/changestatus/{id}', 'UsersController@changeStatus');
