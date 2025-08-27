import { createClient } from "@/lib/supabase/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("=== API ROUTE CALLED ===");

  try {
    const body = await request.json();
    const { name, email, message } = body;

    console.log("Body:", { name, email, message });

    const supabase = createClient();
    console.log("Supabase client created");

    console.log("Inserting data:", { name, email, message });

    const { data, error } = await supabase
      .from("subscribers")
      .insert([
        {
          name,
          email,
          message,
        },
      ])
      .select();
    if (error) {
      console.error("Supabase error: ", error);
      throw error;
    }

    console.log("Insert result:", data);

    return NextResponse.json({
      success: "Form submitted successfully",
      data: data[0],
    });
  } catch (error: any) {
    console.error("=== ERROR IN API ===");
    console.error("Error details:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// GET endpoint removed for security - submissions are not publicly accessible
