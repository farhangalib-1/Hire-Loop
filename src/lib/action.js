export async function uploadImage(file) {
  if (!file) return null;

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!data.success) {
      throw new Error("Image upload failed.");
    }

    return data.data.url;
  } catch (error) {
    console.error(error);
    return null;
  }
}