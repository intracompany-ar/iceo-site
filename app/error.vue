<script setup lang="ts">
const props = defineProps({
	error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
	<NuxtLayout>
		<div>
			{{ error }}
		</div>
	</NuxtLayout>
</template>
