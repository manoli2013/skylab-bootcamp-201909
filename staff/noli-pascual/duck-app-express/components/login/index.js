const Feedback = require('../feedback')

module.exports = function() {
    return `<form>
    
    <h1 class="login__title">LOGIN</h1>
    
    <input class="login__field" type="email" name="email" placeholder="e-mail" />
    <input class="login__field" type="password" name="password" placeholder="password" />
    <button class ="login__back" href="">Go back</a>
    
</form> 

${Feedback()}

`
}

