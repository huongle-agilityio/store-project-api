"use strict";

export default {
  async bulkCreate(ctx) {
    try {
      const { data } = ctx.request.body;

      if (!Array.isArray(data)) {
        return ctx.badRequest("Data must be an array.");
      }

      // Dùng Promise.all để insert nhiều item song song
      const createdItems = await Promise.all(
        data.map((item) =>
          strapi.entityService.create("api::product.product", { data: item })
        )
      );

      return ctx.send({ success: true, items: createdItems });
    } catch (error) {
      console.error("Bulk insert error:", error);
      return ctx.internalServerError("Failed to create items");
    }
  },
};
