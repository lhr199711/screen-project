<template>
  <div>home</div>
</template>

<script>
import { GetSms } from "@/api/test";
export default {
  mounted() {
    GetSms({ username: "1066521901@qq.com", type: "register" }).then((res) => {
      console.log(res);
    });
  },
};
</script>

<style></style>
