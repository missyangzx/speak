<template>
	<div id="wrap">
    	<my-nav/>
    	<slider/>
    	<router-view/>
	 </div>
</template>

<script>
	import slider from "@/components/silde/slide"
	import MyNav from "@/components/nav/nav"
	export default {
	  	name: "headers",
	  	components: {
	  		slider,
	  		MyNav
	  	}
	}
</script>

<style>
</style>