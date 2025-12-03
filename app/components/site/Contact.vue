<script lang="ts" setup>
// import $ from 'jquery'
// import { useStoreAdvices } from 'commons_front'
// const storeAdvices = useStoreAdvices()
const config = useRuntimeConfig()

const formData = ref({
	name: '',
	last_name: '',
	company: '',
	email: '',
	phone_number: '',
	content: '',
	country: 'AR',
	application_id: config.public.appId,
});

async function store() {
	try {
		const data = await $fetch(config.public.apiBase+'/api/ticket/public', {
			method: 'POST',
			body: formData.value,
		});
		console.log('Datos obtenidos:', data);
	} catch (error) {
		console.error('Error al obtener los datos:', error);
	}
	// storeAdvices.success('Consulta enviada con éxito');
}
</script>

<template>
	<div class="bg-iceoblue" id="form-contact">
		<div class="isolate px-6 py-24 sm:py-32 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contactanos</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600"></p>
			</div>
			<form v-on:submit.prevent="store" method="POST" id="form-contact" class="mx-auto mt-16 max-w-xl sm:mt-20">
				<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label for="first-name" class="block text-sm font-semibold leading-6 text-white">Nombre</label>
						<div class="mt-2.5">
							<input type="text" name="first-name" id="first-name" autocomplete="given-name"
								class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required v-model="formData.name">
						</div>
					</div>
					<div>
						<label for="last-name" class="block text-sm font-semibold leading-6 text-white">Apellido</label>
						<div class="mt-2.5">
							<input type="text" name="last-name" id="last-name" autocomplete="family-name"
								class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="formData.last_name">
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="company" class="block text-sm font-semibold leading-6 text-white">Empresa</label>
						<div class="mt-2.5">
							<input type="text" name="company" id="company" autocomplete="organization"
								class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="formData.company">
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
						<div class="mt-2.5">
							<input type="email" name="email" id="email" autocomplete="email"
								class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required v-model="formData.email">
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Teléfono</label>
						<div class="relative mt-2.5">
							<div class="absolute inset-y-0 left-0 flex items-center">
								<label for="country" class="sr-only">País</label>
								<select id="country" name="country" v-model="formData.country"
									class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
									<option>AR</option>
								</select>
								<!-- <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
									viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"></path>
								</svg> -->
							</div>
							<input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
								class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="formData.phone_number">
						</div>
					</div>
					<div class="sm:col-span-2">
						<label for="message" class="block text-sm font-semibold leading-6 text-white">Mensaje</label>
						<div class="mt-2.5">
							<textarea name="message" id="message" rows="4"
								class="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required v-model="formData.content"></textarea>
						</div>
					</div>
					<div class="flex gap-x-4 sm:col-span-2">
						<!-- <div class="flex h-6 items-center">
							<button type="button"
								class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-white/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								role="switch" aria-checked="false" aria-labelledby="switch-1-label">
								<span class="sr-only">Agree to policies</span>
								<span aria-hidden="true"
									class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-white/5 transition duration-200 ease-in-out"></span>
							</button>
						</div> -->
						<!-- <label class=" text-sm leading-6 text-white" id="switch-1-label">
							Enviando este formulario estás aceptando nuestra
							<a href="#" class="font-semibold text-indigo-600">política de privacidad</a>.
						</label> -->
					</div>
				</div>
				
				<div class="mt-10">
					<button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style></style>