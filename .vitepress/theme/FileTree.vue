<script setup>
import { ref } from "vue";
const props = defineProps({
  items: Array,
  number: { type: Number, default: 0 },
});

const data = ref(props.items);
</script>

<template>
  <div
    :class="[number ? '' : 'p-4']"
    class="rounded-md font-[family-name:var(--vp-font-family-mono)]"
  >
    <div
      :key="index"
      v-for="(item, index) in data"
      class="accordion-item active transition-height duration-300"
    >
      <template v-if="item.children && item.children.length">
        <div
          :class="[`pl-${number * 4}`]"
          class="text-sm flex w-full items-center gap-x-0.5 rounded-md py-0.5"
        >
          <div class="grow rounded-md px-1.5">
            <div
              @click="item.expanded = !item.expanded"
              class="inline-flex items-center gap-x-3 cursor-pointer"
            >
              <svg
                v-if="item.expanded"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </div>
        <div
          :class="[
            `transition-height duration-300`,
            item.expanded ? 'h-auto' : 'h-0 overflow-hidden',
          ]"
        >
          <FileTree :number="number + 1" :items="item.children" />
        </div>
      </template>
      <template v-else>
        <div
          :class="`pl-${number * 4}`"
          class="text-sm flex w-full items-center gap-x-0.5 rounded-md py-0.5"
        >
          <div class="grow rounded-md px-1.5">
            <div class="flex items-center gap-x-3">
              <template v-if="item.icon && item.icon == 'folder'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </template>
              <template v-else-if="item.icon && item.icon == 'php'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="shrink-0 size-4"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M.5 12.5v.74c0 .76.774 1.26 1.5 1.26c.938 0 1.5-.5 1.5-1.255V6c0-1.715 1.494-3.478 3.65-3.501c2.344 0 3.85 1.558 3.85 3c.166 2.99-1.422 4.137-3.504 5v4h8.002V9c.041-.635-.56-1.844-1.367-2.5c-.937-.692-2.073-.997-3.131-1m.5 9v-3M6 6.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"
                    stroke-width="1.5"
                  />
                </svg>
              </template>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="shrink-0 size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <div class="grow">
                <span class="text-base-content">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="hidden">
      <div class="pl-4"></div>
      <div class="pl-8"></div>
      <div class="pl-12"></div>
      <div class="pl-16"></div>
      <div class="pl-20"></div>
      <div class="pl-24"></div>
      <div class="pl-28"></div>
      <div class="pl-32"></div>
    </div>
  </div>
</template>
