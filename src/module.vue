<template>
	<private-view title="Search for user">
		<v-input v-model="addressToSearch" />
		<v-button v-on:click="clickToSearch">Search</v-button>
		<v-list>
			<v-list-item v-for="col in results" v-bind:key="col.tx">
				{{ col.event }} in {{ col.txAt }} at {{ col.tx }}
			</v-list-item>
		</v-list>
	</private-view>
</template>

<script>
export default {
	data() {
		return {
			results: [],
			addressToSearch: '',
		};
	},
	methods: {
		clickToSearch: function () {
			this.system.api.get('/custom/user/' + this.addressToSearch).then((res) => {
				this.results = res.data.rows;
				console.log(this.results);
			});
		},
	},
	inject: ['system'],
	mounted() {
		// log the system field so you can see what attributes are available under it
		// remove this line when you're done.
		console.log(this.system);
	},
};
</script>