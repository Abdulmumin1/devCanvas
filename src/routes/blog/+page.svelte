<script>
	import { scale, slide } from 'svelte/transition';
	import BlogCard from '$components/blog/blogCard.svelte';
	import InnerNav from '$components/innerNav.svelte';
	import LatestBlog from '../../components/blog/latestBlog.svelte';

	export let data;
</script>

<svelte:head>
	<!-- Meta Tags Generated via https://www.opengraph.xyz -->

	<!-- HTML Meta Tags -->
	<title>Blog - DevCanvas</title>
	<meta name="description" content="Dev Canvas - Online HTML/CSS/JS/SCSS Editor" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://www.devCanvas.art" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="devCanvas" />
	<meta property="og:description" content="Dev Canvas - Online HTML/CSS/JS/SCSS Editor" />
	<meta property="og:image" content="/devCanvas.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="yaqeen.me" />
	<meta property="twitter:url" content="https://www.yaqeen.me" />
	<meta name="twitter:title" content="devCanvas" />
	<meta name="twitter:description" content="Dev Canvas - Online HTML/CSS/JS/SCSS Editor" />
	<meta name="twitter:image" content="/devCanvas.png" />
</svelte:head>

<section class="min-h-screen">
	<InnerNav />
	<article class="h-full w-full flex items-center -center flex-col">
		<h1 class="text-3xl md:text-6xl py-12">DevCanvas Blog</h1>
		<div class=" max-w-[1200px] md:px-12 -center flex flex-col w-full h-full p-4 gap-4 -center">
			<div class="flex mb-20 gap-4 h-full md:min-h-[100dvh] flex-col w-full">
				{#if data.posts.length > 0}
					<h1 class="text-3xl">Latest Post</h1>
					<div class="  text-6xl flex flex-col gap-3 w-full">
						<LatestBlog details={data.posts[0]} />
					</div>
					<!-- <div class="h-full flex flex-col w-full  gap-2">
						{#each data.posts.splice(1, 2) as post (post.slug)}
							<BlogCard details={post} />
						{:else}
							<p>Nothing to show</p>
						{/each}
					</div> -->

					<div class="h-full flex gap-3 flex-col w-full relative">
						{#each data.posts.splice(1, data.posts.length) as post (post.slug)}
							<BlogCard details={post} />
						{/each}
					</div>
				{:else}
					<p>Nothing to show</p>
				{/if}
				<!-- <p class="text-5xl">In progress!</p> -->
			</div>
		</div>
	</article>
</section>

<style>
	.customGrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}
</style>
