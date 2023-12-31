import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export const GET = async (request, {params : { id }}) => {
    // const id = request.url.slice(request.url.lastIndexOf("/") + 1);

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
    const todo = await res.json();

    if (!todo) return NextResponse.json({ "message": "Todo not found." });

    return NextResponse.json(todo);
}