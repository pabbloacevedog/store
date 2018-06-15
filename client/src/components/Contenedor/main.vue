<template>
	<v-content>
		<v-container fluid fill-height>
			<v-layout justify-center align-center>
				<v-flex shrink>
					<v-tooltip right>
						<v-btn
						icon
						large
						:href="source"
						target="_blank"
						slot="activator"
						>
						<v-icon large>code</v-icon>
					</v-btn>
					<span>Source</span>
				</v-tooltip>
			</v-flex>
		</v-layout>
	</v-container>
</v-content>
</template>

<style src="./main.styl" scoped></style>
<script src="./main.js">
</script>
