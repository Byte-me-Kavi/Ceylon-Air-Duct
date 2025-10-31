// Type declarations for importing CSS and image assets in the project
// This silences TypeScript complaints about side-effect imports for CSS and images.

/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";
declare module "*.svg";

declare module 'next/font/google';
