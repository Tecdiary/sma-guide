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
    role="tree"
    class="rounded-md font-[family-name:var(--vp-font-family-mono)]"
    :class="number ? '' : 'p-4'"
    aria-orientation="vertical"
  >
    <!-- 1st Level Accordion -->
    <div
      class="accordion-item active transition-height duration-300"
      role="treeitem"
      aria-expanded="true"
      v-for="(item, index) in data"
    >
      <template v-if="item.children && item.children.length">
        <div
          class="text-sm flex w-full items-center gap-x-0.5 rounded-md py-1"
          :class="[`pl-${number * 4}`]"
        >
          <div class="grow rounded-md px-1.5">
            <div
              @click="item.expanded = !item.expanded"
              class="inline-flex items-center gap-x-3"
              :class="number === index ? '' : 'cursor-pointer'"
            >
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :fill="item.expanded ? 'none' : 'currentColor'"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                ></path>
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
          <FileTree :number="index" :items="item.children" />
        </div>
      </template>
      <template v-else>
        <div
          :class="`pl-${number * 4}`"
          class="text-sm flex w-full items-center gap-x-0.5 rounded-md py-0.5"
        >
          <div class="grow rounded-md px-1.5">
            <div class="flex items-center gap-x-3">
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                ></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
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
