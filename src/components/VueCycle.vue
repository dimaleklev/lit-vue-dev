<template>
    <div>
		<h1>{{ text }}</h1>
		<div  @mouseenter="HoverCount()" class="hover-wrapper">Vue Cycle</div>
		<!-- <button @click="clickCount()">Посчитать клики</button> -->
		<br />
		<router-link to="/">Go home</router-link>
	</div>
</template>

<script>
export default {
    name: 'VueCycle',
	data() {
		return {
			text: 'Vue Cycle',
			loadingStatus: "",
			hoverCount: 0,
			actualText: "",
			hover: 10,
			hover1: 10,
		}
	},
	methods: {
		HoverCount() {
			return (this.hoverCount += 1);
		},
		//hov() {
			//if (mouseover) {
				//this.actualText = "true";
				//console.log(this.actualText);
				//this.hover = 11;
			//}
			//else{
				//this.actualText = "false";
				//console.log(this.actualText);
				//this.hover = 10;
			//}
		//},
	},
	beforeCreate() {
		this.loadingStatus = "beforeCreate";
		console.log(this.loadingStatus);
	},
	created() {
		this.loadingStatus = "created";
		console.log(this.loadingStatus);
	},
	beforeMount() {
		this.loadingStatus = "beforeMount";
		console.log(this.loadingStatus);
	},
	mounted() {
		this.loadingStatus = "mounted";
		console.log(this.loadingStatus);
	},
	beforeUpdate() {
		this.loadingStatus = "beforeUpdate";
		console.log(this.loadingStatus);
	},
	updated() {
		this.loadingStatus = "updated";
		console.log(this.loadingStatus);
	},
	beforeDestroy() {
		this.loadingStatus = "beforeDestroy";
		console.log(this.loadingStatus);
	},
	destroyed() {
		this.loadingStatus = "destroyed";
		console.log(this.loadingStatus);
	},
}
</script>

<style scoped>
.hover-wrapper {
	width: 100px;
	margin-left: 46%;
	background-color: darkseagreen;
}

.hover-wrapper:hover {
	background-color: orchid;
	cursor: pointer;
}
</style>