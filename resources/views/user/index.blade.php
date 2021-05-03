<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <title>Trello</title> 
        <link rel="stylesheet" href=" css/app.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">  <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;1,300;1,400;1,900&display=swap" rel="stylesheet"> 
    </head>
    <body>
        <div class="boards">
            <div class="board" >
                <h3>A fazer</h3>
                <div class="dropzone">
                    <div class="card" draggable="true">
                        <div class="status"> </div>
                        <div class="content"> 
                        Trello
                        </div>
                    </div>
                </div>
            </div>
            <div class="board">
                <h3>Fazendo</h3>
                <div class="dropzone">
                    <div class="card" draggable="true">
                        <div class="status"> </div>
                        <div class="content">key</div>
                    </div>
                </div>
            </div>
            <div class="board">
                <h3>concluido</h3>
                <div class="dropzone">
                    <div class="card" draggable="true">
                        <div class="status"> </div>
                        <div class="content"> </div>
                    </div>
                </div>
            </div>
        </div>
        <script src = "js/script.js"></script>
    </body>
</html>
