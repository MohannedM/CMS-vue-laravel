<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'email'    => 'unique:users|required|string|max:255',
            'password' => 'required',
        ];

        $input     = $request->only('name', 'email','password');
        $validator = Validator::make($input, $rules);

        if (count($validator->messages()) > 0) {
            return response()->json(['success' => false, 'error' => $validator->messages()]);
        }
        $name = $request->name;
        $email    = $request->email;
        $password = $request->password;
        $role = $request->role;
        $user     = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password), 'role'=>$role, 'token'=>md5(uniqid(mt_rand(), true))]);
        return response()->json(['success' => true, 'user' => $user]);

    }
}
