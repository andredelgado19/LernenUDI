Vue.component('modal',{
    template: `
         <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head has-background-primary">
                    <p class="modal-card-title has-text-white">Bienvenido de nuevo!</p>
                    <button @click="$emit('close')" class="delete" aria-label="close"></button>
                </header>

                <div class="modal-card-body">
                    <div>
                        <form>
                            <div class="control">
                                <input type="text" class="input" name="email" id="email" placeholder="Correo">
                            </div>
                            <div class="control">
                                <input type="text" class="input" name="password" id="password" placeholder="Contraseña">
                            </div>
                            <div class="control">
                                <button class="button is-primary is-submit" type="submit">Iniciar Sesión</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div class="modal-card-foot">
                    <a href="#">Registrarse</a>
                    <a href="#" class="">Has olvidado tu contraseña?</a>
                </div>
               
            </div>
        </div>

    `

})

new Vue({
    el: '#root',
    data: {
        showLoginModal: false
    }
})