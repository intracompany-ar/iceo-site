<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function index()
    {
        $applicationId = 6;
        return view('welcome', compact('applicationId'));
    }
}
