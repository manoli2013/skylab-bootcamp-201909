module.exports = function({path}) {
    return `<form method="post" action="${path}">
    
    <h1 class="login__title">LOGIN</h1>
    
    <input class="login__field" type="email" name="email" placeholder="e-mail" />
    <input class="login__field" type="password" name="password" placeholder="password" />
    <button type = "submit"> Send </button>
    <a ="login__back" href="">Go back</a>
    
</form> 

`
}

