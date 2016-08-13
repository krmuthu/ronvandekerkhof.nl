export default function login() {
    return html`
        <!doctype html>
        <html>
        <head>
            <title>Admin Authentication</title>
            <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"> <!-- load bootstrap css -->
            <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
            <style>
                body {
                    padding-top:80px;
                }
            </style>
        </head>
        <body>
        <div class="container">
            <div class="jumbotron text-center">
                <h1><span class="fa fa-lock"></span> Admin Authentication</h1>

                <p>Login or Register with:</p>

                <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
            </div>
        </div>
        </body>
        </html>
    `;
}
