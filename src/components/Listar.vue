<script setup>
import { ref, onMounted } from "vue";

// Declaración de la variable reactiva 'empleados' utilizando 'ref()'
const empleados = ref([]);

// Método para consultar los empleados al montar el componente
onMounted(() => {
    // Realizar una solicitud GET al servidor para obtener la lista de empleados
    fetch("http://localhost/empleados/")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            console.log(datosRespuesta); // Imprimir los datos de la respuesta en la consola
            empleados.value = []; // Reiniciar la lista de empleados
            // Comprobar si la respuesta no contiene un campo 'success'
            if (typeof datosRespuesta[0].success === "undefined") {
                empleados.value = datosRespuesta; // Asignar los datos de la respuesta a la variable 'empleados'
            } else {
                // Manejar el caso de respuesta de error
                console.error("Error en la respuesta del servidor");
            }
        })
        .catch(console.error); // Manejo de errores
});

// Método para borrar un empleado
const borrarEmpleado = (id) => {
    console.log(id); // Imprimir el ID del empleado en la consola
    // Realizar una solicitud GET al servidor para borrar el empleado con el ID proporcionado
    fetch(`http://localhost/empleados/?borrar=${id}`)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
            console.log(datosRespuesta); // Imprimir los datos de la respuesta en la consola
            // Redireccionar a la página de listar después de borrar el empleado
            window.location.href = "listar";
        })
        .catch(console.error); // Manejo de errores
};
</script>

<template>
    <div class="container">
        <router-link class="btn btn-success my-1" to="/crear"
            >Crear Nuevo Empleado</router-link
        >
        <div class="card">
            <div class="card-header">Listar Empleados</div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <td>{{ empleado.id }}</td>
                            <td>{{ empleado.nombre }}</td>
                            <td>{{ empleado.email }}</td>
                            <td>
                                <div
                                    class="btn-group"
                                    role="group"
                                    aria-label=""
                                >
                                    <router-link
                                        :to="{
                                            name: 'editar',
                                            params: { id: empleado.id },
                                        }"
                                        class="btn btn-success mr-1"
                                        >Editar</router-link
                                    >
                                    <button
                                        @click="borrarEmpleado(empleado.id)"
                                        type="button"
                                        class="btn btn-success mr-1"
                                    >
                                        Borrar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
