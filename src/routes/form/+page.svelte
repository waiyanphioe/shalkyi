<script>
	export let data;
	const articles = data.articles;
</script>

<div class="">
	<form action="?/createArticle" method="post">
		<input type="text" name="title" id="title" />
		<input type="text" name="content" id="content" />
		<button type="submit">Submit</button>
	</form>

	<div class="">
		{#each articles as article}
			<div class=""><h1>{article.title}</h1></div>
		{/each}
	</div>
</div>
