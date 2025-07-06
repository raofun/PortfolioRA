const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	images: {
		domains: ["i.scdn.co"], // Add your image domains
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.pdf$/i,
			type: "asset/source",
		});
		return config;
	},
	async headers() {
		return [
			{
				source: "/sitemap.xml.gz",
				headers: [
					{ key: "Content-Type", value: "application/gzip" },
					{ key: "Cache-Control", value: "public, max-age=3600" },
				],
			},
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "X-XSS-Protection", value: "1; mode=block" },
				],
			},
		];
	},
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? { exclude: ["error", "warn"] }
				: false,
	},
});