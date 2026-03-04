import { NextResponse } from "next/server";




// app/api/movies/[id]/route.ts

import FrontendApiHelper from "../../../utils/frontendApiHelper"; // adjust path if needed

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { success: false, data: [], message: "Movie ID is required" },
      { status: 400 }
    );
  }

  try {
    // Construct endpoint for external API
    const endpoint = `/details/movie/${id}`; // your external API: http://localhost:8002/frontend/details/movie/:id

    

    // Call the FrontendApiHelper
    const result = await FrontendApiHelper(endpoint, );

    if (result) {
      return NextResponse.json(
        {
          success: true,
          data: result,
          message: " details fetched successfully",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: false, data: [], message: " details not found" },
      { status: 404 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        data: [],
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}






// //Edit admin
// export async function PUT(request, { params }) {
//   const token = request.headers.get("authorization");

//   if (!token) {
//     return NextResponse.json(
//       {
//         success: false,
//         data: null,
//         message: "Authorization header is missing",
//       },
//       { status: 401 },
//     );
//   }

//   try {
//     const { id } = await params;

//     if (!id || !/^\d+$/.test(id)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid admins ID" },
//         { status: 400 },
//       );
//     }

//     const incomingFormData = await request.formData();

//     const outgoingFormData = new FormData();

//     for (const [key, value] of incomingFormData.entries()) {
//       outgoingFormData.append(key, value);
//     }

//     let headerConfig = {};

//     if (incomingFormData.has("image")) {
//       headerConfig = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       };
//     }

//     // Call backend API
//     const response = await routeApiHelper.put(
//       `admins/${id}`,
//       outgoingFormData,
//       token,
//       headerConfig,
//     );

//     if (!response.success) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Backend update failed",
//           data: response.data,
//         },
//         { status: response.status || 500 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         data: response.data,
//         message: "admins updated successfully",
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Internal server error",
//         error: error?.message,
//       },
//       { status: 500 },
//     );
//   }
// }

// //Delete admins
// export async function DELETE(request, { params }) {
//   const token = request.headers.get("authorization");

//   if (!token) {
//     return NextResponse.json(
//       {
//         success: false,
//         data: null,
//         message: "Authorization header is missing",
//       },
//       { status: 401 },
//     );
//   }

//   try {
//     const { id } = await params;

//     if (!id || !/^\d+$/.test(id)) {
//       return NextResponse.json(
//         { success: false, message: "Invalid achievements ID" },
//         { status: 400 },
//       );
//     }

//     const result = await routeApiHelper.delete(`admins/${id}`, token);

//     if (!result.success) {
//       return NextResponse.json(
//         { success: false, message: "admins not found or deletion failed" },
//         { status: 404 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         data: result,
//         message: result?.message || "admins deleted successfully",
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, message: "Server error" },
//       { status: 500 },
//     );
//   }
// }
