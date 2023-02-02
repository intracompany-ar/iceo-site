<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <title>ICEO</title>

        {{-- Bootstrap desde link directo = reemplazo por tailwind --}}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


        {{-- Para usar Inter: Font que usa Tailwind.  ESTO ERA CON LARAVEL MIX, AHORA ADAPTAR A VITE --}}
        {{-- <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
        <link href="{{ asset('css/app_tailwind.css') }}" rel="stylesheet"> --}}

        <style media="screen">
            @font-face{
                font-family: 'jetbrain-bold';
                src: url( '{{ asset('storage/fonts/JetBrainsMono-1.0.2/ttf/JetBrainsMono-Bold.ttf') }}' );
                font-weight: bold;
            }
        </style>
    </head>

    <body>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="{{ asset('/storage/img/logos/iceov2_196x196.png') }}" alt="" width="30" height="30" class="d-inline-block align-text-top">
                    ICEO
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {{-- <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> --}}
                    </ul>
                    {{-- <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> --}}
                </div>
            </div>
        </nav>


        <div class="container-fluid bg-gradient text-white"
            style=" height: 100vh;
                    background-color:rgb(30,130,210); font-family: jetbrain-bold;"
                    >
            <div class="row">
                <div class="col-12 text-center">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <h1 style="font-size: calc(5rem + 1.5vw); color: rgb(61,61,61)">ICEO</h1>
                    <br>
                    <h1>ERP a tu medida</h1>
                    <h1>Gestionar tu empresa va a ser un juego de niños</h1>
                    <br>
                    <br>
                    <br>
                    (Nos estamos renovando)
                </div>
            </div>
        </div>
    </body>

</html>
{{-- @endsection --}}
