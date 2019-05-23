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
        $is_active = $request->is_active;
        $user     = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password), 'role'=>$role, 'token'=>md5(uniqid(mt_rand(), true)), 'is_active'  => $is_active]);
        return response()->json(['success' => true, 'user' => $user]);

    }
    public function login(Request $request) {
    
        if (auth()->attempt(['email' => $request->email, 'password' => $request->password])) {
            // Authentication passed...
            $user = auth()->user();
            $user->token = md5(uniqid(mt_rand(), true));
            $user->save();
            return response()->json(['success' => true, 'user' => $user]);
        }
        
        return response()->json([
            'error' => 'Unauthenticated user',
            'code' => 401,
        ], 401);
    }
    public function logout(Request $request) {
        $user = User::where('email', '=', $request->email)->firstOrFail();
        if ($user->token == $request->apiToken) {
            $user->token = null; // clear api token
            $user->save();
    
            return response()->json([
                'message' => 'Thank you for using our application'
            ]);
        }
        
        return response()->json([
            'error' => 'Unable to logout user',
            'code' => 401,
        ], 401);
    }
}
