import * as client_hooks from "../../../src/hooks.client.ts";

export { matchers } from "./matchers.js";

export const nodes = [
  () => import("./nodes/0"),
  () => import("./nodes/1"),
  () => import("./nodes/2"),
  () => import("./nodes/3"),
  () => import("./nodes/4"),
  () => import("./nodes/5"),
  () => import("./nodes/6"),
  () => import("./nodes/7"),
  () => import("./nodes/8"),
  () => import("./nodes/9"),
  () => import("./nodes/10"),
  () => import("./nodes/11"),
  () => import("./nodes/12"),
  () => import("./nodes/13"),
  () => import("./nodes/14"),
  () => import("./nodes/15"),
  () => import("./nodes/16"),
  () => import("./nodes/17"),
  () => import("./nodes/18"),
  () => import("./nodes/19"),
  () => import("./nodes/20"),
  () => import("./nodes/21"),
  () => import("./nodes/22"),
  () => import("./nodes/23"),
  () => import("./nodes/24"),
  () => import("./nodes/25"),
  () => import("./nodes/26"),
  () => import("./nodes/27"),
  () => import("./nodes/28"),
  () => import("./nodes/29"),
  () => import("./nodes/30"),
  () => import("./nodes/31"),
  () => import("./nodes/32"),
  () => import("./nodes/33"),
  () => import("./nodes/34"),
];

export const server_loads = [0, 2, 6];

export const dictionary = {
  "/(contents)": [19, [3]],
  "/(auth)/account": [~8, [2]],
  "/(auth)/auth": [~9, [2]],
  "/(auth)/auth/list-of-invited": [~10],
  "/(auth)/auth/set-new-password": [~11, [2]],
  "/(auth)/auth/verify": [12, [2]],
  "/(contents)/certificates": [21, [3]],
  "/(auth)/dashboard": [~13, [2]],
  "/(contents)/legal/privacy-and-terms": [22, [3]],
  "/(auth)/login": [~14, [2]],
  "/(auth)/logout": [~15, [2]],
  "/(staff)/manage": [~29, [5]],
  "/(staff)/manage/invite": [~30, [5]],
  "/(contents)/map": [23, [3]],
  "/(student-team-contact)/my-project": [~31, [6]],
  "/(student-team-contact)/my-project/edit/step-2-project-information": [
    ~32,
    [6, 7],
  ],
  "/(student-team-contact)/my-project/edit/step-3-abstract": [~33, [6, 7]],
  "/(student-team-contact)/my-project/edit/step-4-article": [~34, [6, 7]],
  "/(contents)/projects": [24, [3]],
  "/(auth)/reset-password": [~16, [2]],
  "/(contents)/schedule": [25, [3]],
  "/(contents)/shop": [26, [3, 4]],
  "/(contents)/shop/shirt": [27, [3, 4]],
  "/(contents)/submission-closed": [~28, [3]],
  "/(auth)/welcome": [~17, [2]],
  "/(auth)/welcome/done": [18, [2]],
  "/(contents)/[slug]": [~20, [3]],
};

export const hooks = {
  handleError:
    client_hooks.handleError ||
    (({ error }) => {
      console.error(error);
    }),
};

export { default as root } from "../root.svelte";
