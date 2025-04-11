// app/api/geo/route.js
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { WebServiceClient } from "@maxmind/geoip2-node";

const client = new WebServiceClient(
	process.env.GEOIP_ACCOUNT_ID,
	process.env.GEOIP_KEY,
	{ host: "geolite.info" }
);

export async function GET() {
	const ip = cookies().get("user-ip")?.value || "0.0.0.0";
	const country = cookies().get("user-country")?.value || "Default";
	console.log("country:", country);
	console.log("IP:", ip);
	try {
		const geo = await client.country(ip);
		return NextResponse.json({ country: geo.country.isoCode });
	} catch (error) {
		console.error("Geo lookup error:", error);
		return NextResponse.json({ error: "Geo lookup failed" }, { status: 500 });
	}
}
