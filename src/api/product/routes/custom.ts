export default {
  routes: [
    {
      method: "POST",
      path: "/products/bulk-create",
      handler: "custom.bulkCreate",
      config: {
        auth: false, // Bật lên nếu API cần authentication
      },
    },
  ],
};
