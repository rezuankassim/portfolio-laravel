<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/projects', function () {
    $files = Storage::files();
    $projects = [];

    foreach ($files as $file) {
        if (str_ends_with($file, '.json')) {
            $data = json_decode(Storage::get($file), true);
            $projects[] = $data;
        }
    }

    return Inertia::render('projects', ['projects' => $projects]);
})->name('projects');

Route::get('/projects/{project}', function ($project) {
    if (Storage::exists("{$project}.json")) {
        $data = json_decode(Storage::get("{$project}.json"), true);

        return Inertia::render('project', ['project' => $data]);
    } else {
        abort(404);
    }
})->name('project');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
