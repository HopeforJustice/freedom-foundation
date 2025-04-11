import { NextResponse } from "next/server";

export function middleware(request) {
	const ip =
		request.ip || request.headers.get("x-forwarded-for")?.split(",")[0];
	const country = request.headers.get("x-vercel-ip-country") || "Default";
	const city = request.headers.get("x-vercel-ip-city") || "Default City";
	const response = NextResponse.next();
	if (ip) {
		response.cookies.set("user-ip", ip, { path: "/" });
		response.cookies.set("user-country", country, { path: "/" });
		response.cookies.set("user-city", city, { path: "/" });
	}
	return response;
}
