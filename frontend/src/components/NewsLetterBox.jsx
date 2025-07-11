import { useState } from "react";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe now to stay updated and enjoy an exclusive 20% discount on
        your first purchase. Don’t miss out on this limited-time offer!
      </p>
      <form
        action="https://app.us2.list-manage.com/subscribe/post?u=29f2bf7df8ccaa4d054839728&id=3a4ce84596&f_id=00c1a4e0f0"
        method="POST"
        target="_blank"
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 max-w-md"
      >
        <input
          type="email"
          name="EMAIL"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
export default NewsLetterBox;
