import { NextResponse } from "next/server";

export async function Get() {
    return NextResponse.json(['ab', 'cd']) // we use nextresponse method to pass json we can not pass directly
}