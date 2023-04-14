import { Button } from "ui";
import { useFormik } from "formik";

export default function Web() {
  const formik = useFormik({
    initialValues: {
      mood: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container flex items-center justify-center flex-col">
        <article className="prose mb-10">
          <h1>What are you feeling?</h1>
        </article>
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center justify-center flex-col w-full"
        >
          <input
            type="text"
            name="mood"
            placeholder="Express your current mood"
            onChange={formik.handleChange}
            value={formik.values.mood}
            className="input input-bordered input-primary w-full max-w-xs mb-10 text-center"
          />
          <Button label="Create me a playlist" type="submit" />
        </form>
      </div>
    </section>
  );
}
