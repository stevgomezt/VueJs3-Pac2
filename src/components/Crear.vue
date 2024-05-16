<script setup>
import { ref } from "vue";

// Declaración de la variable reactiva 'empleado'
const empleado = ref({
    nombre: "",
    email: "",
});

// Función para agregar un nuevo registro de empleado
const agregarRegistro = () => {
    // Imprimir los datos del empleado en la consola
    console.log(empleado.value);

    // Crear un objeto con los datos del empleado para enviar al servidor
    const datosEnviar = {
        nombre: empleado.value.nombre,
        email: empleado.value.email,
    };

    // Realizar una solicitud POST al servidor para insertar un nuevo registro de empleado
    fetch("http://localhost/empleados/?insertar=1", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
    })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            // Imprimir la respuesta del servidor en la consola
            console.log(datosRespuesta);
            // Redireccionar a la página de listar después de agregar el registro
            window.location.href = "listar";
        });
};
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Crear Empleados</div>
            <div class="card-body">
                <form @submit.prevent="agregarRegistro">
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input
                            type="text"
                            v-model="empleado.nombre"
                            class="form-control"
                            name="nombre"
                            id="nombre"
                            placeholder="Escriba su Nombre"
                            required
                        />
                        <small class="form-text text-muted">Nombre</small>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            v-model="empleado.email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Escriba su email"
                            required
                        />
                        <small class="form-text text-muted">email</small>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-primary mr-1">
                            Agregar
                        </button>
                        <router-link to="/listar" class="btn btn-primary mr-1"
                            >Cancelar</router-link
                        >
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
