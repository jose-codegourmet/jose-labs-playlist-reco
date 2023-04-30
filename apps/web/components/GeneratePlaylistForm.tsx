import { Button } from "ui";
import { useFormik } from "formik";
import usePlaylist from "../services/usePlaylist";
import * as Yup from "yup";
import cn from "classnames";
import usePlaylistStore from "../stores/playlist";

const FormSchema = Yup.object().shape({
  mood: Yup.string()
    .min(5, "That's not even a mood 🫠")
    .max(30, "Slow down mate ✋🏼, maybe simplify what you feel 😅")
    .required("Dont be shy 🤗"),
});

export default function GeneratePlaylistForm(props: { hasPlaylist: boolean }) {
  const { hasPlaylist } = props;
  const { createPlaylist, isLoading } = usePlaylist();

  const setMood = usePlaylistStore((state) => state.setMood);

  const formik = useFormik({
    initialValues: {
      mood: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      createPlaylist(values.mood);
      setMood(values.mood);
      formik.resetForm();
    },
  });

  return (
    <div
      className={cn("w-full", {
        "opacity-0 hidden": hasPlaylist,
      })}
    >
      {isLoading && <progress className="progress progress-primary w-56" />}
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
          className="input input-bordered input-primary w-full max-w-xs  text-center"
        />
        {formik.errors.mood && (
          <p className="text-error mt-2">{formik.errors.mood}</p>
        )}

        <Button
          label="Suggest a song for me"
          type="submit"
          btnType="primary"
          className="mt-10"
          {...(isLoading && {
            disabled: true,
          })}
        />
      </form>
    </div>
  );
}
