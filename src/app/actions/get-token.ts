"use server"

import { cookies } from "next/headers"


async function getToken() {
    const token = cookies().get('token')?.value

    if (!token) return;

    return {
          "Set-Cookie": token
      }
}

export const token = async () => await getToken()