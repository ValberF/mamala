<template>
    <div class="register-donor-personal-details">
        <h1>CADASTRO DE DOADORA</h1>
        <div class="form-container">
            <form>

                <div class="general-data-container">
                    <div class="input-group">
                        <input type="text" placeholder="Nome completo">
                    </div>

                    <div class="input-group">
                        <div>
                            <label for="">Data de Nascimento da mãe:</label>
                            <input type="date">
                        </div>
                        
                        <div>
                            <label for="">Data de Nascimento do filho:</label>
                            <input type="date">
                        </div>
                    </div>

                    <div class="input-group">
                        <input type="text" placeholder="Nome da avó materna">
                    </div>

                </div>
                
                <div class="adress-container">
                    <div id="adress-title">
                        <h2>Endereço</h2><hr>
                    </div>
                    

                    <div class="input-group">
                        <input type="text" placeholder="Rua">
                    </div>

                    <div class="input-group">
                        <div>
                            <input type="text" placeholder="Bairro">
                        </div>
                        
                        <div>
                            <input type="number" placeholder="Número da casa">
                        </div>
                    </div>

                    <div class="input-group">
                        <input type="text" placeholder="Ponto de referência">
                    </div>

                    <div class="input-group">
                        <div>
                            <input type="text" placeholder="Naturalidade">
                        </div>
                        
                        <div>
                            <input type="text" placeholder="Telefone/Celular">
                        </div>
                    </div>
                </div>

            </form>
            <div class="button-container">
                <button id="back">Voltar</button>
                <button id="next">Avançar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'registerDonorPersonalDetails'
}
</script>

<style>
.register-donor-personal-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    margin-top: 35px;
    min-height: 75vh;
}

.register-donor-personal-details h1 {
    display: flex;
    justify-self: flex-start;

    color: #575757;

    width: 85vw;
}

.register-donor-personal-details .form-container {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 30px;
    height: 68vh;
    width: 83vw;
}

.register-donor-personal-details .form-container form {
    display: flex;
    flex-direction: column;

    height: 61vh;
    width: 50%;
}

.register-donor-personal-details .adress-container, 
.register-donor-personal-details .general-data-container  {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    width: 100%;
}

.register-donor-personal-details .general-data-container {
    height: 35%;
}

.register-donor-personal-details .adress-container {
    height: 55%;
}

.register-donor-personal-details .adress-container #adress-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.register-donor-personal-details input {
    font-size: 20px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #7B7B7B;

    background-color: #f2f2f2;

    padding: 7px;
}

.register-donor-personal-details input:focus {
    border: 2px solid rgb(97, 92, 92);
}

.register-donor-personal-details .form-container form hr {
    width: 100%;

    border: 1px solid #575757;
}

.register-donor-personal-details .input-group {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.register-donor-personal-details .input-group div {
    display: flex;
    flex-direction: column;
}

.register-donor-personal-details .button-container {
    display: flex;
    justify-content: space-evenly;
    
}

.register-donor-personal-details button {
    border: 1px solid #7B7B7B;
    cursor: pointer;
    font-size: 25px;
    outline: none;
    color: #fff;

    width: 16vw;
    height: 6vh;
}

.register-donor-personal-details button:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>