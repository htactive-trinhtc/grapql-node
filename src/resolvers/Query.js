async function feed(parent, args, context, info) {
  console.log("Query")
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    where
  })
  return links
}
  
  module.exports = {
    feed,
  }