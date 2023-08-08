import { NextResponse } from "next/server"
import { auth, currentUser } from "@clerk/nextjs"

import prismadb from "@/lib/prismadb"
import { stripe } from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"

absoluteUrl("/settings")
