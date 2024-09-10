/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Course {
  createdAt: string;
  description: string;
  id: string;
  modules?: Module[];
  price: number;
  title: string;
  updatedAt?: string;
}

export interface CourseUpdateBody {
  description?: string;
  id: string;
  price?: number;
  title?: string;
}

export interface Module {
  content: string;
  courseId: string;
  createdAt: string;
  durationMinutes: number;
  id: string;
  isCompleted?: boolean;
  name: string;
  order: number;
  updatedAt?: string;
}

export interface ModuleUpdateBody {
  content?: string;
  durationMinutes?: number;
  id: string;
  name?: string;
  order?: number;
}

export interface NewActivity {
  courseId: string;
  moduleId: string;
  userId: string;
}

export interface NewCourse {
  description: string;
  price: number;
  title: string;
}

export interface NewModule {
  content: string;
  courseId: string;
  durationMinutes: number;
  name: string;
  order: number;
}

export interface NewUser {
  email: string;
  name: string;
  password: string;
  phone: string;
  role: EntityRole;
}

export interface User {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  password?: string;
  phone: string;
  role?: EntityRole;
  updatedAt?: string;
}

export interface UserUpdateBody {
  email?: string;
  id: string;
  name?: string;
  password?: string;
  phone?: string;
  role?: EntityRole;
}

export enum EntityRole {
  AdminRole = "admin",
  UserRole = "user",
}

export interface HandlerLoginRequest {
  email?: string;
  password?: string;
}

export interface HandlerLoginResponse {
  error?: string;
  token?: string;
}

export interface HandlerRegisterRequest {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirmation?: string;
  phone?: string;
}

export interface HandlerRegisterResponse {
  error?: string;
  token?: string;
}
