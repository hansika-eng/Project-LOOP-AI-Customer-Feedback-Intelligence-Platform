import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { RegisterInput } from "@/validators/registerSchema";

export async function registerUser(data: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const slug = data.workspace
    .toLowerCase()
    .replace(/\s+/g, "-");

  const workspace = await prisma.workspace.create({
    data: {
      name: data.workspace,
      slug,
    },
  });

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      passwordHash: hashedPassword,
      role: Role.ADMIN,
      workspaceId: workspace.id,
    },
  });

  return user;
}