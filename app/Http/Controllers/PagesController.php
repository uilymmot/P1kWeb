<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index() {
        return view('home');
    }

    public function page1() {
        return view('pages.page1');
    }

    public function about() {
        return view('pages.about');
    }

    public function projects() {
        return view('posts.index');
    }
}
