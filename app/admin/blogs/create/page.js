export default function CreateBlog() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Create Blog</h1>

      <form className="bg-white p-8 rounded-2xl shadow space-y-4">
        <input placeholder="Blog Title" className="input" />
        <input placeholder="URL Slug" className="input" />
        <textarea placeholder="Blog Content" rows="6" className="input" />

        <input placeholder="Meta Title" className="input" />
        <textarea placeholder="Meta Description" className="input" />

        <select className="input">
          <option>Draft</option>
          <option>Publish</option>
        </select>

        <button className="btn-primary">Save Blog</button>
      </form>
    </>
  );
}
