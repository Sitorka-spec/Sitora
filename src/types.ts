/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Module {
  id: number;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  level: string;
  description: string;
  modules: Module[];
  price: string;
  features: string[];
}
