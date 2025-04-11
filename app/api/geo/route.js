// app/api/geo/route.js

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { WebServiceClient } from "@maxmind/geoip2-node";

const client = new WebServiceClient(
	process.env.GEOIP_ACCOUNT_ID,
	process.env.GEOIP_KEY,
	{ host: "geolite.info" }
);

export async function GET() {
	const headersList = await headers(); // ⬅️ await the async call now
	const forwardedFor = headersList.get("x-forwarded-for");
	const ip = forwardedFor?.split(",")[0]?.trim() || "1.1.1.1"; // fallback IP

	try {
		const geo = await client.country(ip);
		return NextResponse.json({ country: geo.country.isoCode });
	} catch (error) {
		console.error("Geo lookup error:", error);
		return NextResponse.json({ error: "Geo lookup failed" }, { status: 500 });
	}
}
