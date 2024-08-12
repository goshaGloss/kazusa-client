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

export interface Module {
  content: string;
  courseId: string;
  createdAt: string;
  durationMinutes: number;
  id: string;
  name: string;
  updatedAt?: string;
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
}

export interface InternalHandlerLoginRequest {
  email?: string;
  password?: string;
}

export interface InternalHandlerLoginResponse {
  error?: string;
  ok?: boolean;
}

export interface InternalHandlerRegisterRequest {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirmation?: string;
  phone?: string;
}

export interface InternalHandlerRegisterResponse {
  error?: string;
  ok?: boolean;
}
