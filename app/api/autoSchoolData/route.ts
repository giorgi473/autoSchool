import { data, Person } from "@/constants/getdata";
import { NextResponse } from "next/server";


export const GET = async (): Promise<NextResponse<Person[]>> => {
  return NextResponse.json(data);
};
