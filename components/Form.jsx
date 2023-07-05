import Link from "next/link"

Link
const Form = ({ type, post, setPost, submit, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share amazing promps with the world
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">Your prompt</span>
                </label>

                <textarea
                    value={post.prompt}
                    placeholder="Write your prompt here..."
                    onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                    required
                    className="form_textarea"
                />
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">Tag {` `}</span>
                    <span className="font-normal">(#idea, #web, #development)</span>
                </label>

                <input
                    value={post.tag}
                    placeholder="#tag"
                    onChange={(e) => setPost({ ...post, tag: e.target.value })}
                    required
                    className="form_input"
                />

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href='/' className="text-gray-500 text-sm">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submit}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                            {submit ? `${type}...` : type}
                    </button>
                </div>

            </form>
        </section>
    )
}

export default Form