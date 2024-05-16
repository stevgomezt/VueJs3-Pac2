<script setup>
import { ref, onMounted } from "vue"; // Importación de la función 'ref' y el hook 'onMounted' de Vue
import { useRoute } from "vue-router"; // Importación de 'useRoute' de Vue Router

// Declaración de la variable reactiva 'empleado' utilizando 'ref()'
const empleado = ref({});
// Obtención de la ruta actual utilizando el hook 'useRoute'
const route = useRoute();

// Función para obtener la información del empleado con el ID proporcionado en la ruta
const obtenerInformacionId = () => {
    // Realizar una solicitud GET al servidor para obtener los datos del empleado
    fetch(`http://localhost/empleados/?consultar=${route.params.id}`)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            console.log(datosRespuesta); // Imprimir los datos del empleado en la consola
            empleado.value = datosRespuesta[0]; // Asignar los datos del empleado a la variable reactiva 'empleado'
        })
        .catch(console.log); // Manejo de errores
};

// Función para actualizar el registro del empleado
const actualizarRegistro = () => {
    // Crear un objeto con los datos del empleado para enviar al servidor
    const datosEnviar = {
        id: route.params.id,
        nombre: empleado.value.nombre,
        email: empleado.value.email,
    };

    // Realizar una solicitud POST al servidor para actualizar el registro del empleado
    fetch(`http://localhost/empleados/?actualizar=${route.params.id}`, {
        method: "POST",
        body: JSON.stringify(datosEnviar), // Convertir los datos a formato JSON
    })
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            console.log(datosRespuesta); // Imprimir la respuesta del servidor en la consola
            window.location.href = "../listar"; // Redireccionar a la página de listar después de actualizar el registro
        });
};

// Hook 'onMounted' para ejecutar la función 'obtenerInformacionId()' cuando el componente se monta
onMounted(() => {
    obtenerInformacionId();
});
</script>

<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Editar Empleados</div>
            <div class="card-body">
                <form @submit.prevent="actualizarRegistro">
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input
                            type="text"
                            v-model="empleado.nombre"
                            class="form-control"
                            name="nombre"
                            id="nombre"
                            aria-describedby="helpId"
                            placeholder="Escriba su Nombre"
                            required
                        />
                        <small id="helpId" class="form-text text-muted"
                            >Nombre</small
                        >
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            v-model="empleado.email"
                            class="form-control"
                            name="email"
                            id="email"
                            aria-describedby="helpId"
                            placeholder="Escriba su email"
                            required
                        />
                        <small id="helpId" class="form-text text-muted"
                            >email</small
                        >
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-primary mr-1">
                            Actualizar
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
